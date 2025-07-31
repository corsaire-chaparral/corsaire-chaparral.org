# Site web du club d'athlétisme Corsaire-Chaparral

Ce répertoire recense le code source du site web du [club d'athlétisme Corsaire-Chaparral](https://corsaire-chaparral.org).
Il est généré avec [Hugo](https://gohugo.io/), un générateur de site statique écrit en Go.

## Installation

### Prérequis

Les instructions documentent un usage en ligne de commande.
Assurez-vous de disposer d'un **terminal** (interface en ligne de commande).

Pour construire ce site, assurez-vous d'avoir installé les logiciels suivants :

- [Hugo](https://gohugo.io/) (v0.63+)
- [Make](https://www.gnu.org/software/make/) (variante GNU de préférence)

Pour le développement et la production des feuilles de style CSS (non gérées avec la fonctionnalité [Hugo Resources](https://gohugo.io/functions/resources/tocss/)), assurez-vous d’avoir également les outils suivants :

- [Node.js](https://nodejs.org/) (v18+) environnement de programmation en JavaScript, pour l’outillage de développement.
- [`pnpm`](https://pnpm.io/) (v10+) utilitaire plus efficient en consommation de ressources disque que `npm`, le gestionnaire traditionnel de Node.js. C’est avec celui-ci que seront appelées les bibliothèques de développement CSS (`sass`, `postcss` et `autoprefixer`)

### Instructions détaillées

Téléchargez ce dépôt ou, mieux, clonez-le avec Git :

```bash
git clone https://github.com/corsaire-chaparral/corsaire-chaparral.org.git
cd corsaire-chaparral.org
```

Pour développer les styles CSS, installez les dépendances avec `pnpm` (sautez si vous ne développez pas de styles) :

```bash
pnpm install
```

`pnpm` installe les outils de développement Node.js pour générer les feuilles de style du site ([`sass`](https://sass-lang.com/), [postcss](https://github.com/postcss/postcss-cli/), [autoprefixer](https://github.com/postcss/autoprefixer/)).

Vous pouvez à présent construire le site :

```bash
make build  # génère le site dans le dossier public/
```

Vous pouvez prévisualiser le site en local, avec les changements en temps réel :

```bash
make serve  # démarre un serveur local à l'adresse locale http://localhost:1313
```

Pour produire les feuilles de styles dans `static/styles/` (dont les sources sont dans `_assets/styles/`) :

```bash
make styles  # production des feuilles dans le dossier static/styles/
```

### Configuration

La [configuration pour le site Hugo](https://gohugo.io/configuration/) sont dans le fichier `config.yml`.

## Partage de photos

~~Les photos sont partagées à l'adresse `http://corsaire-chaparral.org/photos-partage/`.~~ Solution à étudier.

## Soutien

Ouvrez une [issue](https://github.com/corsaire-chaparral/corsaire-chaparral.org/issues/new/choose) ou
envoyez un courriel à [Louis-Olivier Brassard](mailto:louis@corsaire-chaparral.org).

## Licence

MIT
