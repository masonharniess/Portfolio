import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Access API key server-side
  const apiKey = process.env.LASTFM_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing Last.fm API key" }, { status: 500 });
  }

  // Parse any query parameters needed (e.g. limit, user)
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user") || "custardflan";
  const limit = searchParams.get("limit") || "3";

  // Build Last.fm API URL
  const lastFmUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${user}&api_key=${apiKey}&limit=${limit}&format=json`;

  try {
    const response = await fetch(lastFmUrl);
    if (!response.ok) {
      throw new Error(`Error fetching Last.fm: ${response.statusText}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Last.fm fetch error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    // Fallback for non-Error objects
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
