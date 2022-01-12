const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["blogs/firstimpressions/blueprint.png","blogs/firstimpressions/Bob & Framer at Piedmont.jpg","blogs/firstimpressions/DSC07350.png","blogs/firstimpressions/First Impression is the Last Impression.pdf","blogs/georgiagrace/GeorgiaGrace.mp3","blogs/georgiagrace/GeorgiaGrace.pdf","blogs/georgiagrace/PatriciaSims.jpg","blogs/georgiagrace/PatriciaSims.png","blogs/georgiagrace/Piedmont.jpg","blogs/georgiagrace/Piedmont2.jpg","blogs/gettingstartedchecklist/Blog2Audio.mp3","blogs/gettingstartedchecklist/Finance Institution.png","blogs/gettingstartedchecklist/Foundation.JPG","blogs/gettingstartedchecklist/GettingStartedChecklist.pdf","blogs/gettingstartedchecklist/HomeComplete.jpg","blogs/gettingstartedchecklist/HomeUnderConstruction.jpg","blogs/gettingstartedchecklist/Patricia.jpg","blogs/gettingstartedchecklist/PatriciaAndBob.jpg","blogs/insight/LakeForest1.jpg","blogs/insight/LakeForest2.jpg","blogs/insight/LakeForest3.jpg","blogs/insight/LakeForest4.jpg","blogs/insight/Paloma Contreras Q&A.pdf","blogs/insight/Paloma-Portrait.jpg","blogs/insight/Pathricia-Paloma.JPG","blogs/lessonslearned/A Homeowner's Lessons Learned.pdf","blogs/lessonslearned/bob & me.jpg","blogs/lessonslearned/Headshot-Circle.png","blogs/lessonslearned/Truss Photo (Large) (1).png","blogs/lessonslearned/Truss Photo (Large) (2).png","blogs/lessonslearned/Truss Photo (Large).png","blogs/lessonslearned/Truss Photo.png","blogs/lessonslearned/Truss.JPG","documents/Services & Pricing Guide for Builders.pdf","documents/Services & Pricing Guide for Homeowners.pdf","favicon.png","favicon.svg","icons/plus.svg","images/bio.jpg","images/gg-square.png","images/GG-Square.svg","images/GG-Stacked.png","images/GG-Stacked.svg","images/hero-house.jpg","images/home/architecture.jpeg","images/home/awning-construction.jpeg","images/home/beams.jpg","images/home/closet.jpeg","images/home/dining.jpeg","images/home/dream-house.jpg","images/home/elevation-construction.jpeg","images/home/entry.jpeg","images/home/exterior-2.jpeg","images/home/exterior-construction-1.jpg","images/home/exterior-construction-2.jpg","images/home/exterior.jpg","images/home/formal-living.jpeg","images/home/hall.jpeg","images/home/kitchen-1.jpeg","images/home/kitchen-2.jpeg","images/home/kitchen-4.jpg","images/home/sink.jpg","images/home/stairs.jpeg","images/no-image.jpg"]),
	_: {
		mime: {".png":"image/png",".jpg":"image/jpeg",".pdf":"application/pdf",".mp3":"audio/mpeg",".JPG":"image/jpeg",".svg":"image/svg+xml",".jpeg":"image/jpeg"},
		entry: {"file":"start-eb9e1971.js","js":["start-eb9e1971.js","chunks/vendor-244337ad.js","chunks/singletons-a42a5e91.js"],"css":["assets/start-61d1577b.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js')),
			() => Promise.resolve().then(() => require('../server/nodes/11.js')),
			() => Promise.resolve().then(() => require('../server/nodes/12.js')),
			() => Promise.resolve().then(() => require('../server/nodes/13.js')),
			() => Promise.resolve().then(() => require('../server/nodes/14.js')),
			() => Promise.resolve().then(() => require('../server/nodes/15.js')),
			() => Promise.resolve().then(() => require('../server/nodes/16.js')),
			() => Promise.resolve().then(() => require('../server/nodes/17.js')),
			() => Promise.resolve().then(() => require('../server/nodes/18.js')),
			() => Promise.resolve().then(() => require('../server/nodes/19.js')),
			() => Promise.resolve().then(() => require('../server/nodes/20.js')),
			() => Promise.resolve().then(() => require('../server/nodes/21.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/capabilities\/?$/,
				params: null,
				path: "/capabilities",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/file-testing\/?$/,
				params: null,
				path: "/file-testing",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/experience\/?$/,
				params: null,
				path: "/experience",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authTest\/?$/,
				params: null,
				path: "/authTest",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/connect\/?$/,
				params: null,
				path: "/connect",
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/journal\/?$/,
				params: null,
				path: "/journal",
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/journal\/posts\/gettingstartedchecklist\/?$/,
				params: null,
				path: "/journal/posts/gettingstartedchecklist",
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/journal\/posts\/firstimpressions\/?$/,
				params: null,
				path: "/journal/posts/firstimpressions",
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/journal\/posts\/lessonslearned\/?$/,
				params: null,
				path: "/journal/posts/lessonslearned",
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/journal\/posts\/georgiagrace\/?$/,
				params: null,
				path: "/journal/posts/georgiagrace",
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/journal\/posts\/insight\/?$/,
				params: null,
				path: "/journal/posts/insight",
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/admin\/?$/,
				params: null,
				path: "/admin",
				a: [0,15,16],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/admin\/portal\/?$/,
				params: null,
				path: "/admin/portal",
				a: [17,18],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/admin\/portal\/journal\/?$/,
				params: null,
				path: "/admin/portal/journal",
				a: [17,19],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/admin\/portal\/journal\/edit\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [17,20],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/admin\/login\/?$/,
				params: null,
				path: "/admin/login",
				a: [0,15,21],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/auth\/removeCookie\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/removeCookie.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/auth\/getCookie\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/getCookie.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/auth\/login\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/login.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/responses\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/responses.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/journals\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/journals/index.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/journals\/publish\/([^/]+?)\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1], state: m[2]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/journals/publish/_id_/_state_.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/journals\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/journals/_id_.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/contact\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/contact.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/photos\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/photos/index.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/files\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/files/index.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/files\/create\/folder\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/files/create/folder.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/files\/create\/file\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/files/create/file.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/files\/delete\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/files/delete/_id_.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/files\/rename\/([^/]+?)\/([^/]+?)\/?$/,
				params: (m) => ({ targetId: m[1], name: m[2]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/files/rename/_targetId_/_name_.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/files\/upload\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/files/upload.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/micro\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/micro.ts.js'))
			}
		]
	}
});
