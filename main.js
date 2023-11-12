console.log('Hello World!');
    function showContent(sectionId) {
      // Oculta todos os elementos de seção
      document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
      });

      // Mostra o elemento de seção correspondente ao ID fornecido
      document.getElementById(sectionId).style.display = 'block';
    }
    document.querySelectorAll("details").forEach(el => el.onclick = closeAll);
	
function closeAll()
{
  const open = document.querySelector("details[open]")
  if(open && open !== this) open.removeAttribute("open")
}
