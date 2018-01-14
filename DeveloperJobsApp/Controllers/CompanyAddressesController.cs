using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DeveloperJobsApp.DB;
using DeveloperJobsApp.Models;

namespace DeveloperJobsApp.Controllers
{
    [Produces("application/json")]
    [Route("api/CompanyAddresses")]
    public class CompanyAddressesController : Controller
    {
        private readonly DeveloperJobsContext _context;

        public CompanyAddressesController(DeveloperJobsContext context)
        {
            _context = context;
        }

        // GET: api/CompanyAddresses
        [HttpGet]
        public IEnumerable<CompanyAddress> GetCompanyAddress()
        {
            return _context.CompanyAddress;
        }

        // GET: api/CompanyAddresses/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompanyAddress([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var companyAddress = await _context.CompanyAddress.SingleOrDefaultAsync(m => m.Id == id);

            if (companyAddress == null)
            {
                return NotFound();
            }

            return Ok(companyAddress);
        }

        // PUT: api/CompanyAddresses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompanyAddress([FromRoute] int id, [FromBody] CompanyAddress companyAddress)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != companyAddress.Id)
            {
                return BadRequest();
            }

            _context.Entry(companyAddress).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyAddressExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CompanyAddresses
        [HttpPost]
        public async Task<IActionResult> PostCompanyAddress([FromBody] CompanyAddress companyAddress)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CompanyAddress.Add(companyAddress);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompanyAddress", new { id = companyAddress.Id }, companyAddress);
        }

        // DELETE: api/CompanyAddresses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompanyAddress([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var companyAddress = await _context.CompanyAddress.SingleOrDefaultAsync(m => m.Id == id);
            if (companyAddress == null)
            {
                return NotFound();
            }

            _context.CompanyAddress.Remove(companyAddress);
            await _context.SaveChangesAsync();

            return Ok(companyAddress);
        }

        private bool CompanyAddressExists(int id)
        {
            return _context.CompanyAddress.Any(e => e.Id == id);
        }
    }
}