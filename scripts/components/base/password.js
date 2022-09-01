import waitToLoad from '../../lib/waitToLoad';

export default window.component(async (node, ctx) => {
  await waitToLoad('Plyr');
  const player = new Plyr('#player');
});
