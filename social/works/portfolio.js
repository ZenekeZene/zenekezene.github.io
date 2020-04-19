const works = require.context('./', true, /\.md$/);
const worksData = works.keys().map(work => works(work));

const portfolio = {
	getWorkData(index = -1) {
		return (index === -1 ? worksData : worksData[index]);
	},
	getPreviewImage(index = 0) {
		let str = portfolio.getWorkData(index).split('\n')[0];
		str = str.replace(/"/gi, "");
		const regex = /src=(.*?)>/; 
		const src = str.match(regex);
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
		return worksOutput.sort((a, b) => {
			return parseInt(a.key) - parseInt(b.key)
		});
	}
}

export default portfolio;
