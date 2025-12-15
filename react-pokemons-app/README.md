# Exercices

## Rappels

Créer un nouveau composant `src/app/components/pokemon-card-details.jsx` dont le JSX reprend les lignes 25 à 83
de `src/app/pages/pokemon-detail.jsx`

Ce nouveau composant reçoit l'objet pokemon en props

Remplacer ensuite les lignes 25 à 83 de `src/app/pages/pokemon-detail.jsx` par ce nouveau composant

Créer une nouvelle page `src/app/pages/pokemon-compare.jsx` contenant le JSX suivant :

```
<div className="row">
  <div className="col s6">
  	<PokemonCardDetails pokemon={pokemon1} />
  </div>
  <div className="col s6">
  	<PokemonCardDetails pokemon={pokemon2} />
  </div>
</div>
```

Les variables `pokemon1` et `pokemon2` doivent contenir les pokemon dont les ids sont `3` et `4`, utiliser le
service `getPokemon` pour les récupérer.

Créer la route dans `app.tsx`, l'URL peut etre par exemple `/pokemons/compare`

Créer un bouton en bas de la page `src/app/pages/pokemon-list.jsx`, sur son click appeler la méthode navigate (voir par
exemple `src/app/components/pokemon-card.jsx`)

Dans le composant `src/app/components/pokemon-card.jsx` déplacer le `onClick` sur un bouton "Details" dans la carte (on
se servira du click de la carte pour séléctionner les éléments à comparer), sur le click il faudra appeler
la `event.stopPropagation()` (pour ne pas déclencher le click des ancetres).

## Context

Créer un context `CompareContext` en s'inspirant de l'exemple :
[https://github.com/formation-tech/react-communication/tree/master/src/example-context-with-hooks](https://github.com/formation-tech/react-communication/tree/master/src/example-context-with-hooks)

L'idée est de stocker les id des pokemons à comparer dans le context (en utilisant par exemple un tableau), il faudra limiter à 2 pokemons (vous pouvez augmenter la limite si vous le souhaitez mais il faudra jouer sur le nombre de colonnes dans la page `PokemonCompare`).

Dans `src/app/components/pokemon-card.tsx` écouter le click de la checkbox pour sélectionner ou déselectionner le Pokemon à comparer. Le lien vers la page `/pokemons/compare` ne devrait être actif que s'il y a 2 pokemons à comparer.

Enfin sur la page PokemonCompare utiliser les ids présent dans le context au lieu de 3 et 4.
