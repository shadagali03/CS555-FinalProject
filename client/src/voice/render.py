from jinja2 import Environment, FileSystemLoader
import os

TEMPLATES_PATH = os.path.join(os.path.dirname(__file__), "templates")
env = Environment(loader=FileSystemLoader(TEMPLATES_PATH))

def render_prompt(template_name, context):
    """
    Render a Jinja2 template with the given context.

    :param template_name: Name of the Jinja2 template file.
    :param context: Dictionary containing context data for the template.
    :return: Rendered string.
    """
    template = env.get_template(template_name)
    return template.render(context)
