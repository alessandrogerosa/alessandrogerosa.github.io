---
page_id: teaching
layout: page
title: teaching
permalink: /teaching/
description:
nav: true
nav_order: 3
display_categories: [teaching]
horizontal: false
---

I currently teach `Comunicazione e Cultura Digitale` (in Italian) and `Datafied Society` (in English) for the course in `Comunicazione Pubblica e d'Impresa`, at the University of Milan.

I've been awarded the Postgraduate Certificate in Higher Education (PGCHE), with distinction, at the University of Birmingham. 

Previously I taught 'Contemporary Issues in Marketing' and 'Branding in the Digital Age' at the Birmingham Business School (UK) and 'Sociologia dei Consumi' at the Catholic University of Milan.

You can find further information at the links below.

Photos are under CC license, respectively by [Jon Tyson](https://unsplash.com/it/@jontyson) and [Joshua Koblin](https://unsplash.com/it/@joshkoblin)

<!-- pages/projects.md -->
<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      <a id="{{ site.data[site.active_lang].strings.categories[category] }}" href=".#{{ site.data[site.active_lang].strings.categories[category] }}">
        <h2 class="category">{{ site.data[site.active_lang].strings.categories[category] }}</h2>
      </a>
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      <!-- Generate cards for each project -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
            {% for project in sorted_projects %}
              {% include projects_horizontal.liquid %}
            {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="row row-cols-1 row-cols-md-3">
          {% for project in sorted_projects %}
            {% include projects.liquid %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}
  {% else %}
    <!-- Display projects without categories -->
    {% assign sorted_projects = site.projects | sort: "importance" %}
    <!-- Generate cards for each project -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for project in sorted_projects %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
</div>
