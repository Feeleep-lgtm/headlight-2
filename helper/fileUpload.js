const files = document.getElementById('files');
const upload = document.getElementById('upload');
const status = document.getElementById('status');

upload.addEventListener('click', () => {

	// set loading status
	status.innerHTML = 'uploading...';
	let fileUploaded = 0;

	for(let fileIndex = 0; fileIndex < files.files.length; fileIndex++) {
		const file = files.files[fileIndex];

		const fileReader = new FileReader();

		fileReader.readAsArrayBuffer(file);

		fileReader.onload = async (event) => {
			const content = event.target.result;
			const CHUNK_SIZE = 1000;
			const totalChunks = event.target.result.byteLength / CHUNK_SIZE;

			const fileName = Math.random().toString(36).slice(-6) + file.name;

			for (let chunk = 0; chunk < totalChunks + 1; chunk++) {
				let CHUNK = content.slice(chunk * CHUNK_SIZE, (chunk + 1) * CHUNK_SIZE)

				await fetch('/upload?fileName=' + fileName, {
					'method' : 'POST',
					'headers' : {
						'content-type' : "application/octet-stream",
						'content-length' : CHUNK.length
					},
					'body' : CHUNK
				})
			}           
			fileUploaded += 1;        

			status.innerHTML = `file ${fileUploaded} of ${files.files.length} uploaded!!!`;
		}
	}

})