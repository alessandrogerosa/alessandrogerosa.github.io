---
page_id: teaching
layout: page
title: didattica
permalink: /teaching/
description:
nav: true
nav_order: 3
display_categories: [teaching]
horizontal: false
---

Attualmente, insegno `Comunicazione e Cultura Digitale` (in Italiano) e `Datafied Society` (in Inglese) per il corso di laurea in `Comunicazione Pubblica e d'Impresa`, presso l'Università degli Studi di Milano.

Ho conseguito il Postgraduate Certificate in Higher Education (PGCHE) presso l'University of Birmingham (UK).

In passato ho insegnato 'Contemporary Issues in Marketing' e 'Branding in the Digital Age' presso la Birmingham Business School (UK) e il corso in 'Sociologia dei Consumi' presso l'Università Cattolica di Milano.

Potete trovare maggiori informazioni sui corsi che insegno ai link sottostanti.

Le foto sono in licenza CC, rispettivamente di [Jon Tyson](https://unsplash.com/it/@jontyson) e [Joshua Koblin](https://unsplash.com/it/@joshkoblin)

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
