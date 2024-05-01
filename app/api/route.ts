import { NextRequest } from 'next/server'

export async function GET(
    req: NextRequest
) {
    return Response.json({
        message: 'Example GET request',
    }, { status: 200 })
}

export async function POST(
    req: NextRequest
) {
    const body = await req.json();
    const { data } = body;

    return Response.json({
        message: `Example POST request with data: ${JSON.stringify(data)}`,
    }, { status: 201 })
}