const inputFilter = document.querySelector<HTMLElement>('.filter');
const cards = document.querySelectorAll<HTMLElement>('.faq');



function getFilteredCards(e: Event) {
  const target = e.target as HTMLInputElement;

  if (target.value) {
    cards.forEach(card => {
      const title = card.querySelector('h2')?.textContent?.toLowerCase();
      const searchedText = target.value;

      if (!title?.includes(searchedText)) {
        card.style.display = 'none';

      } else {
        card.style.display = 'block';
      }

    }
    )
  } else {
    cards.forEach(card => card.style.display = 'block')
  }
}

inputFilter?.addEventListener('input', getFilteredCards)