using DeveloperJayLibrary.DataAccess;
using DeveloperJayLibrary.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DeveloperJayAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TagsController : ControllerBase
{
    private readonly ILogger<TagsController> _logger;
    private readonly BlogContext _blog;

    public TagsController(ILogger<TagsController> logger, BlogContext blog)
    {
        _logger = logger;
        _blog = blog;
    }

    // GET: api/tags
    [HttpGet]
    public async Task<ActionResult<List<Tag>>> GetTags()
    {
        var tags = await _blog.Tags.Where(t => t.Active == true).ToListAsync();
        return Ok(tags);
    }

    // GET api/tags/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Tag>> GetTagById(int id)
    {
        var tag = await _blog.Tags.FindAsync(id);

        if (tag == null)
        {
            return NotFound($"Tag with Id: {id} not found!");
        }

        return Ok(tag);
    }

    // POST api/tags
    [HttpPost]
    public async Task<ActionResult<Tag>> CreateTag([FromBody] Tag newTag)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }    

        _blog.Tags.Add(newTag);
        await _blog.SaveChangesAsync();
        
        return NoContent();
    }

    // PUT api/tags/5
    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateTag(int id, [FromBody] Tag updateTag)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }

        var tag = await _blog.Tags.FindAsync(id);
        if (tag == null)
        {
            return NotFound();
        }

        tag.Title = updateTag.Title;
        tag.Description = updateTag.Description;
        tag.Slug = updateTag.Slug;
        tag.UpdatedDate = DateTime.Now;

        _blog.Tags.Update(tag);
        await _blog.SaveChangesAsync();

        return NoContent();
    }

    // DELETE api/tags/5
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteTag(int id, bool hardDelete = false)
    {
        var tag = await _blog.Tags.FindAsync(id);

        if (tag == null)
        {
            return NotFound();
        }

        if (hardDelete)
        {
            _blog.Tags.Remove(tag);
        }
        else
        {
            tag.Active = false;
        }

        await _blog.SaveChangesAsync();

        return NoContent();
    }
}
