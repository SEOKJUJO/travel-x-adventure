import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const requestedNext = requestUrl.searchParams.get("next") ?? "/profile";
  const next = requestedNext.startsWith("/") ? requestedNext : "/profile";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      const forwardedHost = request.headers.get("x-forwarded-host");
      const origin = requestUrl.origin;
      const redirectOrigin = process.env.NODE_ENV === "development" || !forwardedHost
        ? origin
        : `https://${forwardedHost}`;

      return NextResponse.redirect(`${redirectOrigin}${next}`);
    }
  }

  return NextResponse.redirect(new URL("/auth/error", requestUrl.origin));
}
