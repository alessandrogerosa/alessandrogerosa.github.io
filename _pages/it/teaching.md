---
page_id: teaching
layout: page
title: I miei insegnamenti
permalink: /teaching/
description:
nav: true
nav_order: 3
display_categories: [teaching]
horizontal: false
---

Attualmente, insegno i corsi in 'Comunicazione e Cultura Digitale' (in Italiano) e 'Datafied Society' (in lingua Inglese) per il corso di laurea in Comunicazione Pubblica e d'Impresa, presso l'Università degli Studi di Milano.

In passato ho insegnato i corsi in 'Contemporary Issues in Marketing' e 'Branding in the Digital Age' per il corso di laurea in Business with Marketing presso la Birmingham Business School (UK) e il corso in 'Sociologia dei Consumi' presso l'Università Cattolica del Sacro Cuore di Milano.

Per maggiori informazioni sui corsi di cui sono titolare, cliccate sui singoli corsi.

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
