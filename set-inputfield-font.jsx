main();

function main() {

  if ( ! app.documents.length ) return null;

  var doc = app.activeDocument;
  var d_family = doc.textDefaults.appliedFont.fontFamily;
  var d_style = doc.textDefaults.fontStyle;
  var d_size = doc.textDefaults.pointSize;

  if ( app.selection.length ) {
    for ( var n = 0; n < app.selection.length ; n++ ) {
      if ( app.selection[n].constructor.name == "TextBox" ) {
        app.selection[n].appliedFont = d_family;
        app.selection[n].fontStyle = d_style;
        app.selection[n].fontSize = d_size;
      }
    }
  } else {
    doc.textBoxes.everyItem().appliedFont = d_family;
    doc.textBoxes.everyItem().fontStyle = d_style;
    doc.textBoxes.everyItem().fontSize = d_size;
  }
}