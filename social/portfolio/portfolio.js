const works = require.context('./', true, /_work\.md$/);
const worksData = works.keys().map(work => works(work));

const portfolio = {
	getWorkData(index = -1) {
		return (index === -1 ? worksData : worksData[index]);
	},
	getPreviewImage(index = 0) {
		let str = portfolio.getWorkData(index).split('\n')[0];
		console.log(str);
		const regex = /src="(.*?)"/;
		const src = str.match(regex);
		console.log(src);
		return src ? src[1] : '';
	},
	mountedWorks() {
		const worksOutput = [];
		works.keys().forEach((work, index) => {
			const key = work.split('./')[1].split('.md')[0];
			const workObject = {
				key,
				previewImage: portfolio.getPreviewImage(index),
				content: portfolio.getWorkData(index),
			};
			worksOutput.push(workObject);
		});
		return worksOutput;
	}
}

export default portfolio;
