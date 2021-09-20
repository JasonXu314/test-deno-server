import { listenAndServe } from 'https://deno.land/std@0.107.0/http/server.ts';

listenAndServe(':3000', (req: Request) => {
	if (req.method === 'GET') {
		return new Response(
			`
			<html>
				<head>
					<title>Test</title>
				</head>
				<body>
					<h1>Test</h1>
				</body>
			</html>
		`,
			{ status: 200, headers: { 'Content-Type': 'text/html' } }
		);
	} else {
		return new Response('Not Allowed', { status: 405, headers: { 'Allowed-Methods': 'GET' } });
	}
});
