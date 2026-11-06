// Pi Radio • Service Worker v5.29
// Cache App Shell & Mode Hors-Ligne pour PWA avec Logos Officiels

const CACHE_NAME = 'piradio-v5.29';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './translations.js',
  './stations.js',
  './manifest.json',
  './privacy.html',
  './terms.html',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable.png',
  './apple-touch-icon.png',
  './favicon.png',
  // Badges d'États officiels des États-Unis 🇺🇸 (v5.25)
  './assets/logos/pennsylvania-radio-badge.svg',
  './assets/logos/tennessee-radio-badge.svg',
  './assets/logos/louisiana-radio-badge.svg',
  './assets/logos/georgia-radio-badge.svg',
  './assets/logos/massachusetts-radio-badge.svg',
  './assets/logos/colorado-radio-badge.svg',
  './assets/logos/ohio-radio-badge.svg',
  './assets/logos/minnesota-radio-badge.svg',
  './assets/logos/nevada-radio-badge.svg',
  './assets/logos/dc-radio-badge.svg',
  // Logos officiels Nouveaux États des États-Unis 🇺🇸 (v5.23)
  './assets/logos/wrlt-lightning-100-nashville.svg',
  './assets/logos/wmot-roots-radio-nashville.svg',
  './assets/logos/wsmc-classical-chattanooga.svg',
  './assets/logos/wwoz-90-7-neworleans.svg',
  './assets/logos/wtul-91-5-neworleans.svg',
  './assets/logos/wclk-91-9-atlanta.svg',
  './assets/logos/gpb-88-5-atlanta.svg',
  './assets/logos/wxpn-88-5-philadelphia.svg',
  './assets/logos/wrti-90-1-jazz-philly.svg',
  './assets/logos/wbur-90-9-boston.svg',
  './assets/logos/wgbh-89-7-boston.svg',
  './assets/logos/kuvo-89-3-denver.svg',
  './assets/logos/kgnu-88-5-boulder-denver.svg',
  './assets/logos/the-current-kcmp-minneapolis.svg',
  './assets/logos/kunv-91-5-lasvegas.svg',
  './assets/logos/wamu-88-5-dc.svg',
  './assets/logos/wclv-90-3-cleveland.svg',
  './assets/logos/wjcu-88-7-cleveland.svg',
  // Badges Nationaux d'Europe 🇪🇺 (v5.26)
  './assets/logos/portugal-radio-badge.svg',
  './assets/logos/pays-bas-radio-badge.svg',
  './assets/logos/suisse-radio-badge.svg',
  './assets/logos/irlande-radio-badge.svg',
  './assets/logos/pologne-radio-badge.svg',
  './assets/logos/autriche-radio-badge.svg',
  './assets/logos/uk-radio-badge.svg',
  './assets/logos/italie-radio-badge.svg',
  './assets/logos/espagne-radio-badge.svg',
  './assets/logos/allemagne-radio-badge.svg',
  // Logos Officiels Stations d'Europe 🇪🇺 (v5.26)
  './assets/logos/antena1-portugal.svg',
  './assets/logos/antena3-portugal.svg',
  './assets/logos/npo-radio1-nl.svg',
  './assets/logos/npo-3fm-nl.svg',
  './assets/logos/rts-la-premiere-suisse.svg',
  './assets/logos/srf3-suisse.svg',
  './assets/logos/rte-radio1-ireland.svg',
  './assets/logos/newstalk-ireland.svg',
  './assets/logos/rmf-fm-pologne.svg',
  './assets/logos/radio-zet-pologne.svg',
  './assets/logos/hitradio-oe3-austria.svg',
  './assets/logos/fm4-austria.svg',
  './assets/logos/lbc-london.svg',
  './assets/logos/classic-fm-uk.svg',
  './assets/logos/radio-105-italie.svg',
  // Logos Officiels Vietnam 🇻🇳 (v5.27)
  './assets/logos/vietnam-radio-badge.svg',
  './assets/logos/vov1-vietnam.svg',
  './assets/logos/vov2-vietnam.svg',
  './assets/logos/vov3-vietnam.svg',
  './assets/logos/vov5-vietnam.svg',
  './assets/logos/vov-giao-thong-hanoi.svg',
  './assets/logos/vov-giao-thong-hcm.svg',
  './assets/logos/rfi-tieng-viet.svg',
  './assets/logos/hanoi-community-radio.svg',
  // Logos Officiels Chine 🇨🇳 (v5.28)
  './assets/logos/china-radio-badge.svg',
  './assets/logos/cnr1-voice-of-china.svg',
  './assets/logos/cnr2-economy-radio.svg',
  './assets/logos/cnr3-music-radio.svg',
  './assets/logos/cnr4-classic-music.svg',
  './assets/logos/cnr5-cross-strait.svg',
  './assets/logos/cnr9-literature-radio.svg',
  './assets/logos/cnr15-traffic-radio.svg',
  './assets/logos/cri-global-news.svg',
  // Logos Officiels Inde 🇮🇳 (v5.29)
  './assets/logos/india-radio-badge.svg',
  './assets/logos/air-vividh-bharati.svg',
  './assets/logos/air-news-247.svg',
  './assets/logos/air-fm-gold.svg',
  './assets/logos/air-fm-rainbow.svg',
  './assets/logos/air-fm-rainbow-mumbai.svg',
  './assets/logos/radio-mirchi-top20.svg',
  './assets/logos/radio-mirchi-love.svg',
  './assets/logos/air-raagam-classical.svg',
  // Logos officiels Afrique du Sud 🇿🇦 (v5.8)
  './assets/logos/south-africa-radio-badge.svg',
  './assets/logos/jacaranda-fm-sa.svg',
  './assets/logos/metro-fm-sa.svg',
  './assets/logos/ukhozi-fm-sa.svg',
  './assets/logos/5fm-radio-sa.svg',
  './assets/logos/kaya-fm-sa.svg',
  './assets/logos/east-coast-radio-sa.svg',
  './assets/logos/kfm-cape-town-sa.svg',
  './assets/logos/jozi-fm-sa.svg',
  './assets/logos/hot-1027-fm-sa.svg',
  './assets/logos/joy-gospel-radio-sa.svg',
  './assets/logos/amapiano-fm-sa.svg',
  './assets/logos/radio-702-sa.svg',
  './assets/logos/power-fm-sa.svg',
  './assets/logos/capetalk-sa.svg',
  './assets/logos/helderberg-fm-sa.svg',
  './assets/logos/bok-radio-sa.svg',
  './assets/logos/mix-fm-sa.svg',
  './assets/logos/good-hope-fm-sa.svg',

  // Logos officiels Malawi 🇲🇼, Mauritanie 🇲🇷, Sierra Leone 🇸🇱 (v5.9)
  './assets/logos/malawi-radio-badge.svg',
  './assets/logos/times-radio-malawi.svg',
  './assets/logos/zbs-zodiak-malawi.svg',
  './assets/logos/radio-islam-malawi.svg',
  './assets/logos/groove100-malawi.svg',
  './assets/logos/kuwala-fm-malawi.svg',
  './assets/logos/mzati-radio-malawi.svg',
  './assets/logos/twr-malawi.svg',
  './assets/logos/amaryllis-radio-malawi.svg',
  './assets/logos/kasupe-radio-malawi.svg',
  './assets/logos/chanco-radio-malawi.svg',
  './assets/logos/mauritanie-radio-badge.svg',
  './assets/logos/radio-mauritanie.svg',
  './assets/logos/radio-coran-mauritanie.svg',
  './assets/logos/radio-nouadhibou-mr.svg',
  './assets/logos/radio-zouerate-mr.svg',
  './assets/logos/sierra-leone-radio-badge.svg',
  './assets/logos/capital-radio-sierra-leone.svg',
  './assets/logos/star-radio-sierra-leone.svg',
  './assets/logos/fop-radio-sierra-leone.svg',
  './assets/logos/radio-binkongoh-sl.svg',
  './assets/logos/fusionsound-radio-sl.svg',
  // Logos officiels Algérie 🇩🇿 (v5.7)
  './assets/logos/algerie-radio-badge.svg',
  './assets/logos/algerie-chaine-3.svg',
  './assets/logos/algerie-chaine-1.svg',
  './assets/logos/algerie-chaine-2.svg',
  './assets/logos/algerie-internationale.svg',
  './assets/logos/algerie-coran.svg',
  './assets/logos/algerie-culture.svg',
  './assets/logos/jil-fm-algerie.svg',
  './assets/logos/el-bahdja-alger.svg',
  './assets/logos/zaman-fm-algerie.svg',
  './assets/logos/france-maghreb-2.svg',
  './assets/logos/beur-fm-algerie.svg',
  './assets/logos/hits1-algerie.svg',
  './assets/logos/antinea-radio.svg',
  './assets/logos/radio-oran-algerie.svg',
  './assets/logos/radio-constantine.svg',
  './assets/logos/radio-tizi-ouzou.svg',
  './assets/logos/radio-annaba.svg',
  './assets/logos/radio-setif.svg',
  // Logos officiels Tunisie 🇹🇳 (v5.6)
  './assets/logos/tunisie-radio-badge.svg',
  './assets/logos/mosaique-fm-tunisie.svg',
  './assets/logos/jawhara-fm-tunisie.svg',
  './assets/logos/diwan-fm-tunisie.svg',
  './assets/logos/express-fm-tunisie.svg',
  './assets/logos/radio-nationale-tunisie.svg',
  './assets/logos/radio-jeunes-tunisie.svg',
  './assets/logos/rtci-radio-tunisie.svg',
  './assets/logos/sabra-fm-tunisie.svg',
  './assets/logos/zitouna-fm-tunisie.svg',
  './assets/logos/knooz-fm-tunisie.svg',
  './assets/logos/oxygene-fm-tunisie.svg',
  './assets/logos/radio-misk-tunisie.svg',
  './assets/logos/radio-sfax-tunisie.svg',
  './assets/logos/radio-monastir-tunisie.svg',
  './assets/logos/alhayet-fm-tunisie.svg',
  './assets/logos/babnet-tunisie.svg',
  // Logos officiels Maroc 🇲🇦 (v5.5)
  './assets/logos/maroc-radio-badge.svg',
  './assets/logos/medi1-radio-maroc.svg',
  './assets/logos/hit-radio-maroc.svg',
  './assets/logos/radio-2m-maroc.svg',
  './assets/logos/radio-mars-maroc.svg',
  './assets/logos/radio-aswat-maroc.svg',
  './assets/logos/radio-mfm-maroc.svg',
  './assets/logos/atlantic-radio-maroc.svg',
  './assets/logos/chada-fm-maroc.svg',
  './assets/logos/medina-fm-maroc.svg',
  './assets/logos/cap-radio-maroc.svg',
  './assets/logos/radio-plus-maroc.svg',
  './assets/logos/bldi-radio-maroc.svg',
  './assets/logos/only-rai-radio.svg',
  './assets/logos/radio-fayrouz-maroc.svg',
  './assets/logos/radio-manarat-maroc.svg',
  './assets/logos/radio-sawt-alamal.svg',
  './assets/logos/radio-adwaa-maroc.svg',
  './assets/logos/radio-achkid-fm.svg',
  './assets/logos/radio-yan-plus.svg',
  './assets/logos/hip-hop-soul-maroc.svg',
  // Logos officiels Guinée (Conakry) 🇬🇳 (v5.4)
  './assets/logos/guinee-radio-badge.svg',
  './assets/logos/espace-fm-guinee.svg',
  './assets/logos/bonheur-fm-guinee.svg',
  './assets/logos/littoral-fm-guinee.svg',
  './assets/logos/lgf-fun-guinee.svg',
  './assets/logos/lgf-talk-guinee.svg',
  './assets/logos/afrionde-conakry.svg',
  './assets/logos/rtg-radio-guinee.svg',
  // Logos officiels Guinée-Bissau 🇬🇼 (v5.4)
  './assets/logos/guinee-bissau-radio-badge.svg',
  './assets/logos/radio-voz-da-guine.svg',
  './assets/logos/radio-esperanca-bissau.svg',
  // Logos officiels Guinée équatoriale 🇬🇶 (v5.4)
  './assets/logos/guinee-equatoriale-badge.svg',
  './assets/logos/rnge-radio-malabo.svg',
  // Logos officiels Burkina Faso 🇧🇫 (v5.3)
  './assets/logos/burkina-faso-radio-badge.svg',
  './assets/logos/horizon-fm-ouaga.svg',
  './assets/logos/horizon-fm-koudougou.svg',
  './assets/logos/radio-balafon-bobo.svg',
  './assets/logos/radio-bizi-inter.svg',
  './assets/logos/radio-omega-burkina.svg',
  './assets/logos/radio-pulsar-ouaga.svg',
  './assets/logos/savane-fm-burkina.svg',
  './assets/logos/rtb-radio-burkina.svg',
  './assets/logos/ouaga-fm-burkina.svg',
  './assets/logos/radio-maria-burkina.svg',
  './assets/logos/radio-legende-ouaga.svg',
  // Logos officiels Niger 🇳🇪 (v5.2)
  './assets/logos/niger-radio-badge.svg',
  './assets/logos/wadata-radio-niger.svg',
  './assets/logos/radio-gaskia-niger.svg',
  './assets/logos/radio-garkuwa-niger.svg',
  './assets/logos/radio-dallol-niger.svg',
  './assets/logos/mudubar-radio-niger.svg',
  './assets/logos/voix-du-sahel-niger.svg',
  './assets/logos/radio-anfani-niger.svg',
  './assets/logos/radio-saraounia-niger.svg',
  './assets/logos/studio-kalangou-niger.svg',
  './assets/logos/radio-bonferey-niger.svg',
  // Logos officiels Mali 🇲🇱 (v5.1)
  './assets/logos/mali-radio-badge.svg',
  './assets/logos/radio-kledu.svg',
  './assets/logos/noura-fm-bamako.svg',
  './assets/logos/radio-bougouni-kunkan.svg',
  './assets/logos/radio-kassara-kayes.svg',
  './assets/logos/radio-malijet.svg',
  './assets/logos/radio-neneba-fm.svg',
  './assets/logos/radio-tissa-mamelon.svg',
  './assets/logos/kalux-fm-bamako.svg',
  './assets/logos/radio-woyowayanko.svg',
  './assets/logos/radio-yele-sagabali.svg',
  './assets/logos/radio-madjoura-touba.svg',
  './assets/logos/joliba-fm-mali.svg',
  './assets/logos/radio-bamakan.svg',
  './assets/logos/radio-dambe-mali.svg',
  './assets/logos/ortm-chaine2-mali.svg',
  // Logos officiels Ghana 🇬🇭
  './assets/logos/ghana-radio-badge.svg',
  './assets/logos/joy-fm-ghana.svg',
  './assets/logos/citi-fm-ghana.svg',
  './assets/logos/peace-fm-ghana.svg',
  './assets/logos/adom-fm-ghana.svg',
  './assets/logos/yfm-ghana.svg',
  './assets/logos/asempa-fm-ghana.svg',
  './assets/logos/oman-fm-ghana.svg',
  './assets/logos/angel-fm-ghana.svg',
  './assets/logos/happy-fm-ghana.svg',
  './assets/logos/sunny-fm-ghana.svg',
  './assets/logos/okay-fm-ghana.svg',
  './assets/logos/asaase-radio-ghana.svg',
  './assets/logos/starr-fm-ghana.svg',
  './assets/logos/class-fm-ghana.svg',
  './assets/logos/ghana-waves-radio.svg',
  './assets/logos/agoo-fm-ghana.svg',
  './assets/logos/ahotor-fm-ghana.svg',
  './assets/logos/atinka-fm-ghana.svg',
  // Logos officiels Côte d'Ivoire 🇨🇮
  './assets/logos/cote-divoire-radio-badge.svg',
  './assets/logos/radio-cote-divoire.svg',
  './assets/logos/rti-frequence-2.svg',
  './assets/logos/radio-jam-abidjan.svg',
  './assets/logos/alpha-blondy-fm.svg',
  './assets/logos/africa-radio-abidjan.svg',
  './assets/logos/hit-radio-ci.svg',
  './assets/logos/life-radio-ci.svg',
  './assets/logos/radio-al-bayane-ci.svg',
  './assets/logos/nostalgie-ci.svg',
  './assets/logos/trace-fm-ci.svg',
  './assets/logos/skyrock-abidjan.svg',
  './assets/logos/radio-de-la-paix.svg',
  './assets/logos/radio-de-la-paix-ci.svg',
  './assets/logos/radio-espoir-ci.svg',
  './assets/logos/radio-nationale-catholique.svg',
  './assets/logos/rnc-radio-ci.svg',
  './assets/logos/rfi-afrique-abidjan.svg',
  './assets/logos/rvm-radio-ci.svg',
  './assets/logos/radio-daloa-fm.svg',
  './assets/logos/gbeke-fm-bouake.svg',
  './assets/logos/guemon-fm.svg',
  './assets/logos/attecoube-fm.svg',
  './assets/logos/fer-fm-ci.svg',
  // Logos officiels Bénin 🇧🇯 (v5.11)
  './assets/logos/benin-radio-badge.svg',
  './assets/logos/radio-cotonou-94-3.svg',
  './assets/logos/ortb-radio-benin.svg',
  './assets/logos/ortb-radio-parakou.svg',
  './assets/logos/radio-tokpa.svg',
  './assets/logos/capp-fm.svg',
  './assets/logos/radio-immaculee-conception.svg',
  './assets/logos/soleil-fm-benin.svg',
  './assets/logos/deeman-fm-parakou.svg',
  './assets/logos/frisson-radio-benin.svg',
  './assets/logos/bip-radio-cotonou.svg',
  './assets/logos/alleluia-fm-porto-novo.svg',
  // Logos officiels Sénégal 🇸🇳
  './assets/logos/senegal-radio-badge.svg',
  './assets/logos/rts-radio-senegal.svg',
  './assets/logos/sud-fm-senegal.svg',
  './assets/logos/radio-al-fayda-kaolack.svg',
  './assets/logos/radio-thiossane-dakar.svg',
  './assets/logos/h24-senegal.svg',
  './assets/logos/rfm-senegal.svg',
  './assets/logos/zik-fm-senegal.svg',
  './assets/logos/lamp-fall-fm.svg',
  './assets/logos/walf-fm-senegal.svg',
  './assets/logos/zig-fm-ziguinchor.svg',
  './assets/logos/rewmi-fm-dakar.svg',
  './assets/logos/radio-fulbe-dakar.svg',
  './assets/logos/timtimol-fm-ourossogui.svg',
  './assets/logos/bamtaare-fm-dodel.svg',
  './assets/logos/manoore-fm-dakar.svg',
  './assets/logos/dakar-musique.svg',
  './assets/logos/vibe-radio-dakar.svg',
  './assets/logos/iradio-senegal.svg',
  // Logos officiels Cameroun 🇨🇲
  './assets/logos/cameroon-radio-badge.svg',
  './assets/logos/crtv-poste-national.svg',
  './assets/logos/jambo-fm-douala.svg',
  './assets/logos/237onair-yaounde.svg',
  './assets/logos/camerhits-radio.svg',
  './assets/logos/radio-bonne-nouvelle.svg',
  './assets/logos/rush-fm-bamenda.svg',
  './assets/logos/mmuock-community-radio.svg',
  './assets/logos/eternity-gospel-radio.svg',
  './assets/logos/radio-voice-of-the-cross.svg',
  './assets/logos/glory-fm-cameroon.svg',
  './assets/logos/protestant-voice-radio.svg',
  './assets/logos/gl-radio-cameroon.svg',
  './assets/logos/go-music-media.svg',
  './assets/logos/for-you-radio-douala.svg',
  './assets/logos/radio-jesus-vient.svg',
  './assets/logos/ictu-radio-yaounde.svg',
  './assets/logos/radio-maria-cameroun.png',
  // Logos officiels Afrique & Nigéria 🇳🇬
  './assets/logos/nigeria-radio-badge.svg',
  './assets/logos/rfi-haoussa.svg',
  './assets/logos/urban-radio-enugu.svg',
  './assets/logos/radio-east-nigeria.svg',
  './assets/logos/inform-me-radio.svg',
  './assets/logos/lagosjump-radio.svg',
  './assets/logos/crest-fm-ibadan.svg',
  './assets/logos/yes-fm-ibadan.svg',
  './assets/logos/gospotainment-radio.svg',
  './assets/logos/nagari-radio.svg',
  './assets/logos/radiotiwa-nigeria.svg',
  './assets/logos/hod-radio-nigeria.svg',
  './assets/logos/splash-fm-nigeria.svg',
  './assets/logos/max-fm-lagos.svg',
  './assets/logos/beat-fm-lagos.svg',
  './assets/logos/classic-fm-lagos.svg',
  './assets/logos/fresh-fm-ibadan.svg',
  './assets/logos/soundcity-fm-lagos.svg',
  './assets/logos/raypower-fm-nigeria.svg',
  './assets/logos/metro-fm-lagos.svg',
  './assets/logos/bond-fm-lagos.svg',
  './assets/logos/diamond-fm-ibadan.svg',
  './assets/logos/1radio-ikwerre-rivers.svg',
  './assets/logos/bourdex-fm-abia.svg',
  './assets/logos/kcity-radio-abuja.svg',
  './assets/logos/ortb-radio-benin.png',
  './assets/logos/ortb-radio-parakou.jpg',
  './assets/logos/algerie-chaine-3.png',
  './assets/logos/tunisie-mosaique-fm.png',
  './assets/logos/radio-mars-maroc.png',
  './assets/logos/guinee-espace-fm.png',
  './assets/logos/angola-radio-nacional.png',
  './assets/logos/radio-maria-cameroun.png',
  './assets/logos/eagle-7-fm-abeokuta.png',
  './assets/logos/ogbc-fm-abeokuta.png',
  './assets/logos/tatafo-radio-ogun.jpg',
  './assets/logos/agidigbo-fm-ibadan.png',
  './assets/logos/diamond-fm-ibadan.png',
  './assets/logos/cool-fm-lagos.png',
  './assets/logos/wazobia-fm-lagos.png',
  './assets/logos/nigeria-info-lagos.png',
  './assets/logos/metro-fm-lagos.png',
  './assets/logos/bond-fm-lagos.png',
  './assets/logos/rhythm-fm-lagos.png',
  './assets/logos/brila-fm-lagos.png',
  './assets/logos/vybz-fm-lagos.png',
  './assets/logos/1radio-ikwerre-rivers.png',
  './assets/logos/bourdex-fm-abia.png',
  './assets/logos/kcity-radio-abuja.png',
  './assets/logos/sud-fm-senegal.png',
  './assets/logos/rts-radio-senegal.png',
  './assets/logos/capital-fm-kenya.png',
  './assets/logos/classic-105-nairobi.png',
  './assets/logos/peace-fm-ghana.png',
  './assets/logos/jacaranda-fm-sa.png',
  './assets/logos/nana-fm-togo.png',
  './assets/logos/light-radio-togo.png',
  // Logos officiels Gambie 🇬🇲 (v5.14)
  './assets/logos/gambia-radio-badge.svg',
  './assets/logos/west-coast-radio-1.svg',
  './assets/logos/west-coast-radio-2.svg',
  './assets/logos/star-fm-gambia.svg',
  './assets/logos/star-fm-gambia.png',
  './assets/logos/gam-express-gambia.png',
  './assets/logos/africa-no1-gabon.png',
  './assets/logos/africa-mandingue.png',
  './assets/logos/almunir-radio-libya.png',
  './assets/logos/almunir-radio-benghazi.png',
  './assets/logos/radio-rwanda.png',
  './assets/logos/kiss-fm-rwanda.png',
  './assets/logos/nrg-radio-uganda.png',
  './assets/logos/capital-fm-uganda.png',
  // Logos officiels Paris & France 🇫🇷 (v5.17)
  './assets/logos/france-musique.svg',
  './assets/logos/mouv-radio.svg',
  './assets/logos/france-culture.svg',
  './assets/logos/fip-radio.svg',
  './assets/logos/ici-paris.svg',
  './assets/logos/nrj-radio.svg',
  './assets/logos/nostalgie-france.svg',
  './assets/logos/cherie-fm.svg',
  './assets/logos/rtl-france.svg',
  './assets/logos/rtl2-france.svg',
  './assets/logos/radio-nova.svg',
  './assets/logos/radio-fg.svg',
  './assets/logos/sud-radio.svg',
  './assets/logos/m-radio-france.svg',
  './assets/logos/chante-france.svg',
  './assets/logos/beur-fm.svg',
  './assets/logos/radio-orient.svg',
  './assets/logos/radio-1077.svg',
  './assets/logos/aligre-fm.svg',
  './assets/logos/radio-campus-paris.svg',
  './assets/logos/radio-j.svg',
  './assets/logos/radio-courtoisie.svg',
  './assets/logos/france-maghreb-2.svg',
  './assets/logos/radio-notre-dame.svg',
  './assets/logos/frequence-paris-plurielle.svg',
  './assets/logos/canal-b-rennes.svg',
  './assets/logos/radio-laser-guichen.svg',
  './assets/logos/radio-parole-de-vie.svg',
  './assets/logos/paris-radio-badge.svg',
  // Logos officiels Bretagne 🇫🇷 (v5.16)
  './assets/logos/bretagne-radio-badge.svg',
  './assets/logos/ici-breizh-izel.svg',
  './assets/logos/ici-armorique.svg',
  './assets/logos/hit-west.svg',
  './assets/logos/oceane-fm.svg',
  './assets/logos/frequence-mutine.svg',
  './assets/logos/radio-u-brest.svg',
  './assets/logos/radio-neptune.svg',
  './assets/logos/radio-rennes.svg',
  './assets/logos/rcf-alpha-rennes.svg',
  './assets/logos/radio-bro-gwened.svg',
  './assets/logos/arvorig-fm.svg',
  './assets/logos/rcf-sud-bretagne.svg',
  // Logos officiels Zambie 🇿🇲 (v5.15)
  './assets/logos/zambia-radio-badge.svg',
  './assets/logos/radio-phoenix-zambia.svg',
  './assets/logos/hot-fm-zambia.svg',
  './assets/logos/radio-christian-voice-zm.svg',
  './assets/logos/metro-fm-zambia.svg',
  './assets/logos/5fm-radio-zambia.svg',
  './assets/logos/rock-fm-zambia.svg',
  './assets/logos/parliament-radio-zambia.svg',
  './assets/logos/radio-maria-zambia.svg',
  // Logos officiels Europe
  './assets/logos/france-info.png',
  './assets/logos/europe-1.png',
  './assets/logos/france-inter.png',
  './assets/logos/bbc-world-service.png',
  './assets/logos/cadena-ser-espana.png',
  './assets/logos/deutschlandfunk-allemagne.png',
  './assets/logos/talksport-premier-league.png',
  './assets/logos/rmc-sport-direct.png',
  './assets/logos/rire-et-chansons-france.png',
  './assets/logos/radio-swiss-jazz.png',
  './assets/logos/capital-chill-uk.png',
  './assets/logos/swr3-allemagne.png',
  './assets/logos/antenne-bayern-allemagne.png',
  './assets/logos/radio-marca-espana.png',
  './assets/logos/los40-espana.png',
  './assets/logos/rai-radio1-italie.png',
  './assets/logos/rtl-1025-italie.png',
  './assets/logos/rtbf-la-premiere-belgique.png',
  './assets/logos/rtbf-classic21-belgique.png',
  './assets/logos/hit-fm-ukraine.png',
  './assets/logos/radioroks-ukraine.png',
  './assets/logos/radio-vanya-russie.png',
  './assets/logos/dfm-russian-dance.png',
  // Logos officiels Amériques & USA (Villes américaines)
  './assets/logos/npr-news-usa.png',
  './assets/logos/wnyc-fm-newyork.png',
  './assets/logos/hot-97-newyork.png',
  './assets/logos/kcrw-89-9-los-angeles.png',
  './assets/logos/kqed-88-5-san-francisco.png',
  './assets/logos/wbez-91-5-chicago.png',
  './assets/logos/wlrn-91-3-miami.png',
  './assets/logos/houston-public-media-88-7.png',
  './assets/logos/kut-90-5-austin.png',
  './assets/logos/jazz24-seattle.png',
  './assets/logos/radio-tiempo-89-5.png',
  './assets/logos/fox-sports-640-am.png',
  './assets/logos/cbn-sao-paulo.png',
  // Logos officiels Michigan 🇺🇸
  './assets/logos/wuom-michigan-radio.png',
  './assets/logos/wkar-east-lansing.png',
  './assets/logos/wemu-89-1-michigan.svg',
  './assets/logos/muskegon-channel-radio.svg',
  './assets/logos/drumbase-radio.svg',
  './assets/logos/michigan-radio-badge.svg',
  // Logos officiels Texas 🇺🇸
  './assets/logos/kera-90-1-dallas.png',
  './assets/logos/kora-98-3-texas.png',
  './assets/logos/radio-free-texas.png',
  './assets/logos/texas-rebel-radio.svg',
  './assets/logos/koke-fm-austin.svg',
  './assets/logos/texas-radio-badge.svg',
  // Logos officiels Hawaï 🌺
  './assets/logos/hawaii-public-radio.svg',
  './assets/logos/94-7-kumu-honolulu.svg',
  './assets/logos/mana-o-radio-maui.svg',
  './assets/logos/ukulele-island-radio.svg',
  './assets/logos/ktuh-honolulu.svg',
  './assets/logos/hawaii-radio-badge.svg',
  // Logos officiels Floride ☀️
  './assets/logos/wjct-jacksonville.png',
  './assets/logos/radio-motown-miami.svg',
  './assets/logos/the-disco-planet.svg',
  './assets/logos/radio-italo-disco.svg',
  './assets/logos/miami-beach-radio.svg',
  './assets/logos/florida-radio-badge.svg',
  // Logos officiels Chicago 🏙️
  './assets/logos/wfmt-98-7-chicago.png',
  './assets/logos/wls-94-7-chicago.svg',
  './assets/logos/chicago-house-radio.svg',
  './assets/logos/smooth-jazz-wnua-chicago.svg',
  './assets/logos/chicago-radio-badge.svg',
  // Logos officiels Canada 🇨🇦
  './assets/logos/cbc-radio-one.png',
  './assets/logos/radio-canada-premiere.png',
  './assets/logos/680-news-toronto.png',
  './assets/logos/ancient-fm.png',
  './assets/logos/reggae-chill-cafe.svg',
  './assets/logos/100-greatest-80s.svg',
  './assets/logos/calm-radio.png',
  './assets/logos/chronix-radio.png',
  './assets/logos/newstalk-1010.png',
  './assets/logos/labgate-radio.svg',
  './assets/logos/nature-radio-rain.svg',
  './assets/logos/ctv-news-audio.svg',
  './assets/logos/radio-bluesflac.svg',
  './assets/logos/vibrazioni-rock.svg',
  './assets/logos/canada-radio-badge.svg',
  // Logos officiels Asie
  './assets/logos/nhk-world-japan.png',
  './assets/logos/j-pop-powerplay.png',
  './assets/logos/radio-mirchi-top20.png',
  './assets/logos/bollywood-gaane-purane.png',
  './assets/logos/big-b-radio-kpop.png',
  './assets/logos/cnr-1-voice-of-china.png',
  './assets/logos/easy-rock-manila.png',
  './assets/logos/capital-958-singapore.png',
  './assets/logos/sonora-fm-jakarta.png',
  // Logos officiels Moyen-Orient
  './assets/logos/makkah-alsudais.png',
  './assets/logos/makkah-alshuraim.png',
  './assets/logos/quran-mishary-alafasy.png',
  './assets/logos/quran-abdulbasit.png',
  './assets/logos/monte-carlo-doualiya.png',
  './assets/logos/quran-radio-sharjah.png',
  './assets/logos/alaraby-radio-qatar.png',
  './assets/logos/radio-9090-egypt.png',
  './assets/logos/radio-fairuz-liban.png',
  './assets/logos/hayat-fm-jordan.png',
  // Logos officiels Océanie
  './assets/logos/abc-newsradio-australia.png',
  './assets/logos/sky-news-australia.png',
  './assets/logos/rnz-national-nz.png',
  './assets/logos/the-breeze-auckland.png',
  './assets/logos/bula-fm-fiji.png',
  './assets/logos/polynesie-la-1ere-tahiti.png'
];

// Installation : Mise en cache des composants de base (App Shell + Logos)
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Pi Radio SW] Pré-mise en cache des fichiers statiques et logos');
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
});

// Activation : Nettoyage des anciens caches obsolètes
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Pi Radio SW] Suppression ancien cache :', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interception des requêtes :
// 1. NE JAMAIS intercepter ni mettre en cache les flux audio en direct
// 2. Stratégie Stale-While-Revalidate pour les fichiers de l'application
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Ignorer les requêtes non GET ou non HTTP/HTTPS
  if (req.method !== 'GET' || !req.url.startsWith('http')) {
    return;
  }

  // Ignorer impérativement tous les flux audio (MP3, AAC, HLS m3u8, streams)
  if (
    req.destination === 'audio' ||
    url.pathname.endsWith('.mp3') ||
    url.pathname.endsWith('.m3u8') ||
    url.pathname.endsWith('.aac') ||
    url.pathname.includes('/stream') ||
    url.pathname.includes('/live') ||
    url.searchParams.has('stream')
  ) {
    return;
  }

  // Requêtes vers assets/logos : Network-First avec fallback Cache (garantit les logos toujours à jour)
  if (url.pathname.includes('/assets/logos/')) {
    event.respondWith(
      fetch(req).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return networkResponse;
      }).catch(() => caches.match(req))
    );
    return;
  }

  // Pour les requêtes d'API externes (Radio Browser, etc.) : Réseau en priorité
  if (url.hostname.includes('radio-browser.info') || url.hostname.includes('google.com') || url.hostname.includes('gstatic.com')) {
    event.respondWith(
      fetch(req).catch(() => caches.match(req))
    );
    return;
  }

  // Pour les fichiers statiques de l'application : Network-First avec fallback Cache
  event.respondWith(
    fetch(req)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(req).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (req.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
