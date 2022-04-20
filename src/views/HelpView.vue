<template>
  <div class="content">
    <h1>Jak korzystać z aplikacji</h1>
    <div class="about-box">
      <h2>Jaki jest zamysł aplikacji?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis libero
        possimus mollitia. Quas aliquid, ut sunt perferendis, fugit molestias
        ipsa obcaecati dolores modi repellendus ex maxime nostrum iusto adipisci
        illo. Molestias sapiente eius nostrum temporibus necessitatibus quas
        cupiditate itaque quasi. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Labore ipsam voluptate culpa sunt earum itaque facilis
        quos libero esse eaque?
      </p>
      <h2>Instrukcja korzystania z aplikacji</h2>
      <ol>
        <li>
          Aby móc w pełni korzystać z funkcjonalności aplikacji, należy się do
          niej zalogować wybierając przycisk “Zaloguj” z nawigacji.
        </li>
        <li>
          Strona główna (Home) wyświetla nam dodane do listy pozycje, które są
          sortowane po kategoriach. Z poziomu tej strony, możemy zarządzać tymi
          pozycjami, edytować, dodawać do ulubionych, wyświetlać tylko ulubione,
          czy usuwać.
        </li>
        <li>
          Wybierając z nawigacji “Dodaj do listy” przechodzimy do formularza,
          wpisując rzeczy do odpowiednich pól i wybierając odpowiednią
          kategorię, po zatwierdzeniu przyciskiem dodajemy nową rzecz do listy.
        </li>
      </ol>
    </div>
  </div>
</template>

<style lang="css" scoped>
.about-box {
  text-align: left;
  width: 60%;
  margin-top: 3rem;
  outline: 2px solid var(--accents);
  background-color: var(--list-background);
  border-radius: 10px;
  padding: 1.5rem 2rem;
  font-size: 1.1rem;
}

h1 {
  margin-top: 10rem;
}

h2 {
  margin: 1rem 0;
}

ol {
  margin-left: 1rem;
}

li {
  margin: .5rem;
}

</style>
