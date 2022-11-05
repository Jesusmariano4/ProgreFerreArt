using Microsoft.AspNetCore.Mvc;
using MiPrimerAppWebProgresiva.Clases;
using MiPrimerAppWebProgresiva.Models;

namespace MiPrimerAppWebProgresiva.Controllers
{
    public class PersonaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public List<PersonaCLS> ListaPersonas()
        {
            List<PersonaCLS> Lista = new List<PersonaCLS>();
            using(db_a8e245_bdbibliotecaContext bd = new db_a8e245_bdbibliotecaContext())
            {
                Lista = (from persona in bd.Personas
                         where persona.Bhabilitado == 1
                         select new PersonaCLS
                         {
                             iidpersona = persona.Iidpersona,
                             nombre = persona.Nombre,
                             correo = persona.Correo
                             //nombrecompleto = persona.Nombre + "" +
                             //                 persona.Appaterno + "" + 
                             //                 persona.Apmaterno,

                         }).ToList();
                return Lista;
                
            }
        }
    }
}
