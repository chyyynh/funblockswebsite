import fs from "fs/promises";
import path from "path";

async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return files.flat();
}

async function checkPackages() {
  const files = await getFiles(".");
  const jsxFiles = files.filter((file) => /\.(js|jsx|ts|tsx)$/.test(file));

  const usedPackages = new Set();

  for (const file of jsxFiles) {
    const content = await fs.readFile(file, "utf8");
    const imports = content.match(/from\s+['"](@radix-ui\/[^'"]+)['"]/g);
    if (imports) {
      imports.forEach((imp) => {
        const match = imp.match(/['"](@radix-ui\/[^'"]+)['"]/);
        if (match) {
          usedPackages.add(match[1]);
        }
      });
    }
  }

  const installedPackages = new Set();
  const missingPackages = new Set();

  for (const pkg of usedPackages) {
    try {
      await fs.access(path.join(process.cwd(), "node_modules", pkg));
      installedPackages.add(pkg);
    } catch {
      missingPackages.add(pkg);
    }
  }

  console.log("Used and installed Radix UI packages:");
  console.log([...installedPackages].join("\n") || "None");

  console.log("\nUsed but not installed Radix UI packages:");
  console.log([...missingPackages].join("\n") || "None");

  // 檢查 package.json
  try {
    const packageJson = JSON.parse(
      await fs.readFile(path.join(process.cwd(), "package.json"), "utf8")
    );
    const dependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };

    console.log("\nRadix UI packages in package.json but not used in code:");
    const unusedPackages = Object.keys(dependencies).filter(
      (dep) => dep.startsWith("@radix-ui/") && !usedPackages.has(dep)
    );
    console.log(unusedPackages.join("\n") || "None");
  } catch (error) {
    console.error("Error reading package.json:", error.message);
  }
}

checkPackages();
