import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const HACKMD_API_URL = process.env.HACKMD_API_URL;
const HACKMD_API_TOKEN = process.env.HACKMD_API_TOKEN;

// Define the return data type
interface HackMDResponse {
  success: boolean;
  content?: string;
  error?: string;
}

export async function GET(
  req: NextRequest
): Promise<NextResponse<HackMDResponse>> {
  const { searchParams } = new URL(req.url);
  const docId = searchParams.get("docId");

  // Validate if docId exists
  if (!docId) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing 'docId' parameter",
      },
      { status: 400 }
    );
  }

  try {
    // Fetch document content from HackMD API
    const response = await axios.get(
      `${HACKMD_API_URL}/teams/funblocks/notes/${docId}`,
      {
        headers: {
          Authorization: `Bearer ${HACKMD_API_TOKEN}`,
        },
      }
    );

    // Return content
    return NextResponse.json({
      success: true,
      content: response.data.content,
    });
  } catch (error: unknown) {
    console.error(
      "Unable to fetch HackMD document:",
      error instanceof Error ? error.message : String(error)
    );

    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json(
        {
          success: false,
          error: error.response.data || "Error fetching document",
        },
        { status: error.response.status }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
