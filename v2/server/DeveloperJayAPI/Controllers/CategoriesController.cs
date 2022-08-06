using DeveloperJayLibrary.DataAccess;
using DeveloperJayLibrary.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DeveloperJayAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoriesController : ControllerBase
{
    private readonly ILogger<CategoriesController> _logger;
    private readonly BlogContext _blog;

    public CategoriesController(ILogger<CategoriesController> logger, BlogContext blog)
    {
        _logger = logger;
        _blog = blog;
    }

    // GET: api/categories
    [HttpGet]
    public async Task<ActionResult<List<Tag>>> GetCategories([FromQuery] bool active = true)
    {
        var categories = await _blog.Categories.Where(t => t.Active == active).ToListAsync();
        return Ok(categories);
    }

    // GET api/categories/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Tag>> GetCategoryById(int id)
    {
        var category = await _blog.Categories.FindAsync(id);

        if (category == null)
        {
            return NotFound($"Category with Id: {id} not found!");
        }

        return Ok(category);
    }

    // POST api/categories
    [HttpPost]
    public async Task<ActionResult<Tag>> CreateCategory([FromBody] Category newCategory)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }    

        newCategory.CreatedDate = DateTime.Now;

        if (newCategory.Active)
        {
            newCategory.ActiveDate = DateTime.Now;
        }
        
        _blog.Categories.Add(newCategory);
        await _blog.SaveChangesAsync();
        
        return NoContent();
    }

    // PUT api/categories/5
    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateCategory(int id, [FromBody] Category updateCategory)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }

        var category = await _blog.Categories.FindAsync(id);
        if (category == null)
        {
            return NotFound();
        }

        category.Title = updateCategory.Title;
        category.Description = updateCategory.Description;
        category.Slug = updateCategory.Slug;
        category.UpdatedDate = DateTime.Now;

        _blog.Categories.Update(category);
        await _blog.SaveChangesAsync();

        return NoContent();
    }

    // DELETE api/categories/5
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteCategory(int id, bool hardDelete = false)
    {
        var category = await _blog.Categories.FindAsync(id);

        if (category == null)
        {
            return NotFound();
        }

        if (hardDelete)
        {
            _blog.Categories.Remove(category);
        }
        else
        {
            category.Active = false;
        }

        await _blog.SaveChangesAsync();

        return NoContent();
    }
}
