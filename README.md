# The World in One Day — Saturday 21 November 2026

[![make.fun](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/danzzkeceh4-bit/makefun-news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/danzzkeceh4-bit/makefun-news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

A make.fun entry for [news-image-20261121](https://make.fun/bounty/news-image-20261121):
one image summing up the world's news of Saturday 21 November 2026.

The front page leads with Russia's overnight barrage on Ukraine — more
than 400 drones and 110 missiles, at least eight killed in Kyiv — and
two missiles landing in Poland, which Prime Minister Tusk calls a
deliberate provocation. Then the AI sell-off that drags the S&amp;P 500
down 3.7% into correction, COP31 deadlocked over fossil fuels in
Antalya, the reported hack of the FBI's criminal database, a
6.9-magnitude quake in the Peruvian Andes, a pancreatic-cancer pill
that clears tumours from scans in one in twelve patients, the UK–EU
post-Brexit deals, Gen Z protests across 25 European countries, and
Trump weighing new strikes on Iran. The lead art is a drawn Kyiv
skyline at night under missile streaks and explosions; the foot of the
page carries the day in numbers — 400+ drones, 110 missiles, the 3.7%
S&amp;P fall, the 6.9 quake, 1 in 12 patients clear.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` — a
1024&times;1024 front page drawn programmatically with Python/PIL — to
`/output/entry.png`, byte for byte, so two runs always write the same bytes:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
