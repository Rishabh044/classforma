import WebViewer from "@pdftron/webviewer";
import { useRef, useEffect, useState } from "react"
import RenderAuth from "./RenderAuth"
import data from './data';
import "./App.css"

function Renderer({ url }) {
  const viewer = useRef(null)
  const start = useRef(null)
  const authBtn = useRef(null)
  const titBtn = useRef(null)
  let titles = null
  let author = null
  
  // const [test, setTest] = useState(false)
  
  viewer.current = document.getElementById("webviewer")
  useEffect(() => {
    WebViewer(
      {
        path: '../node_modules/@pdftron/webviewer/public/',
        initialDoc: url,
      },
      viewer.current,
    ).then((instance) => {
      const { documentViewer, annotationManager, Annotations } = instance.Core;
      const { WidgetFlags } = Annotations

      documentViewer.addEventListener('documentLoaded', () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          // values are in page coordinates with (0, 0) in the top left
          X: 100,
          Y: 150,
          Width: 100,
          Height: 450,
          Author: annotationManager.getCurrentUser()
        });

        start.current = document.getElementById('start')
        start.current.addEventListener('click', () => {
          //set flags for list box
          const flags = new WidgetFlags();
          console.log(flags)
          flags.set(WidgetFlags.COMBO, false);

          // optional to allow multiple selections
          flags.set(WidgetFlags.MULTI_SELECT, true);

          // create list options
          const options = [
            {
              value: '1',
              displayValue: 'one'
            },
            {
              value: '2',
              displayValue: 'two'
            }
          ];

          // create a form field
          const field = new Annotations.Forms.Field("some list box field name", {
            type: 'Ch',
            value: options[0].value,
            flags,
            options
          });

          // create a widget annotation
          const widgetAnnot = new Annotations.ListWidgetAnnotation(field);

          // set position and size
          widgetAnnot.PageNumber = 1;
          widgetAnnot.X = 100;
          widgetAnnot.Y = 100;
          widgetAnnot.Width = 50;
          widgetAnnot.Height = 20;

          //add the form field and widget annotation
          annotationManager.getFieldManager().addField(field);
          annotationManager.addAnnotation(widgetAnnot);
          annotationManager.drawAnnotationsFromList([widgetAnnot]);

          const annots = annotationManager.getAnnotationsList().filter(annot => annot.PageNumber === 1);
          console.log(annots)
          data.titles = annots.filter(annot => annot.Color.R === 255)
          data.author = annots.filter(annot => annot.Color.G === 255)
          console.log(data.titles, data.author)
        });
        annotationManager.addAnnotation(rectangleAnnot);
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotationManager.redrawAnnotation(rectangleAnnot);
      });
    });
  });
  
  

  return (
    <div className = "flex fd-col">
      <button id="start" ref={start}>start</button>
      <div className="webview max-height max-width" ref={viewer}></div>
    </div>
  );
}

export default Renderer;