import { ServerStyleSheet } from "styled-components";
import ReactDOMServer from "react-dom/server";

export const useDownloadComponent = (
  Component: React.JSX.Element,
  filename = "component.html"
) => {
  const handleDownloadComponent = () => {
    const sheet = new ServerStyleSheet();

    try {
      // Renderizar el componente con los estilos
      const html = ReactDOMServer.renderToStaticMarkup(
        sheet.collectStyles(Component)
      );
      const styleTags = sheet.getStyleTags();

      const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>${filename}</title>
          ${styleTags} <!-- Aquí van los estilos de Styled Components -->
        </head>
        <body>
        <style>
        div, p{color: black;}
        </style>
          ${html}

          <script>
          const input = document.querySelectorAll(".input");
          console.log(input[0].value)
          const decrypt = atob(input[0].value);
          input[0].value = decrypt;
          linkButton.setAttribute("href", "https://" + decrypt);
          eye.style.display="none";
          const handleClick = (el) => {
          const text = el.value;
    navigator.clipboard.writeText(text);
    el.select();
          }
          
input.forEach((el) => { 
el.addEventListener("click", ()=> handleClick(el));
el.addEventListener("keydown", (e)=> e.preventDefault());

    })
          </script>
        </body>
      </html>`;

      const blob = new Blob([fullHtml], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al generar el HTML:", error);
    } finally {
      sheet.seal();
    }
  };

  return { handleDownloadComponent };
};
