const works = require.context('./', true, /_work\.md$/);
const worksData = works.keys().map(work => works(work));

const portfolio = {
	getWorkData(index = -1) {
		return (index === -1 ? worksData : worksData[index]);
	},
	getPreviewImage(index = 0) {
		console.log(portfolio.getWorkData(index));
		var str = portfolio.getWorkData(index).split('\n')[0];
		var regex = /<img.*?src='(.*?)'/;
		const src = regex.exec(str);
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
			//console.log(workObject);
			worksOutput.push(workObject);
		});
		return worksOutput;
	}
}

export default portfolio;
