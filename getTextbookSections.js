// This snippet is meant to be pasted in the Inspect Element console of Portal's Textbook Viewer

document.querySelectorAll('#contentListing [id]').forEach((element) => {if (element.id.startsWith("label-")) {console.log(element.id.substring(6))}})
