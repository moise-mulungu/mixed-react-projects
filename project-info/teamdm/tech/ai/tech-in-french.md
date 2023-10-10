MM: DM: Sider AI is perfect, it doesn't require any vpn or registration. I like it for both translation and code regeneration.

## AI Prompt 1: "Ecrire une fonction en javascript qui retourne les nombres pairs dans un array"

    AI response: Voici une fonction en JavaScript qui retourne les nombres pairs dans un array :

    ```js
    function getEvenNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
    }
    ```
***"Cette fonction utilise la méthode filter() qui permet de créer un nouveau tableau avec tous les éléments qui satisfont une condition donnée. Dans ce cas, la condition est que le nombre doit être divisible par 2 (c'est-à-dire être pair), ce qui est vérifié à l'aide de l'opérateur modulo (%)."***

La fonction prend en argument un tableau(array) de nombres (numbers) et retourne un nouveau tableau(array) contenant seulement les nombres pairs.

    Exemple d'utilisation :

    ```js
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var evenNumbers = getEvenNumbers(numbers);
    console.log(evenNumbers); // [2, 4, 6, 8, 10]
    ```
## AI Prompt 2: "convertir les fonctions lodash en fonctions normales qui permettent de convertir le cas pascal an camel vice-versa"

    AI response: Voici les fonctions converties en fonctions normales pour convertir le cas pascal en camel et vice-versa :

    ```js
    // Pascal to camel case
    function convertPascalToCamelCase(inputString) {
    const firstCharacterToLowerCase = inputString.charAt(0).toLowerCase() + inputString.slice(1)
    return firstCharacterToLowerCase.replace(/([A-Z])/g, (match, p1) => `_${p1.toLowerCase()}`)
    }

    // Camel to pascal case
    function convertCamelToPascalCase(inputString) {
    const firstCharacterToUpperCase = inputString.charAt(0).toUpperCase() + inputString.slice(1)
    return firstCharacterToUpperCase.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase())
    }
    ```
Ces fonctions prennent une chaîne de caractères en entrée et renvoient la chaîne de caractères convertie dans le cas approprié. La fonction convertPascalToCamelCase convertit une chaîne de cas pascal en cas camel, tandis que la fonction convertCamelToPascalCase convertit une chaîne de cas camel en cas pascal.

## AI prompt 3: "quelle pourrait etre l'erreur dans ce code"
(I put the code in the src/features/weather-forecast/axios/weather.js file)

AI response: 
    Il y a plusieurs erreurs dans ce code :

1. La première erreur est que la fonction de rendu de composant (return) contient une boucle map() imbriquée dans une autre boucle map(), qui n'est pas correctement fermée. La boucle map() externe ne retourne rien, ce qui peut entraîner un comportement inattendu.

2. La deuxième erreur est que la variable mainObject utilisée dans la première ligne du paragraphe de rendu n'est pas définie. Il semble qu'il s'agisse d'une tentative de récupérer la température à partir de l'objet weather, mais cela n'a pas été correctement implémenté.

3. La troisième erreur est que la boucle map() imbriquée ne retourne rien, elle doit retourner un élément JSX pour être affiché dans le navigateur.

4. La quatrième erreur est que la boucle map() imbriquée utilise Object.entries() pour parcourir les éléments de l'objet weather, mais cela n'est pas nécessaire. Vous pouvez simplement utiliser les clés de l'objet pour accéder aux propriétés de l'objet

MM: DM: words that i picked here are :
* `fonction de rendu = returned function`
* `boucle map() imbriquée dans une autre boucle map() = a map() function nested inside another map() function`
* `rendu = returned`
* `clés de l'objet = object keys`

