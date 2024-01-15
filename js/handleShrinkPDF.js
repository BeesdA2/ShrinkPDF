const changePdf = require('change-pdf');
 
async function handleShrinkPDF(file, quality) {

file = '/Volvo/temp/' + file.trim();

 try{
	 changePdf.compressPdf(file, file, quality)
 } catch (e) {
        console.error(e);
    } finally {
        console.log('ResizePDF cleanup');
		return ({ message: 'ResizePDF succesvol uitgevoerd'});
    }
}

module.exports = {
  handleShrinkPDF: handleShrinkPDF
  };     