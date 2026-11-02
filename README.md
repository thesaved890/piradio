# 📻 Pi Radio • Inform Me

**Application de radio mondiale & d'information conçue pour les Pionniers de Pi Network.**

---

## 🌟 Fonctionnalités

1. **Couverture Mondiale Complète :**
   - **Afrique :** Nigeria (Cool FM, Wazobia FM), Côte d'Ivoire (RTI), Sénégal (RFM), Cameroun (CRTV), RDC (Radio Okapi), Afrique du Sud (SAfm), Ghana (Joy FM)...
   - **Europe :** France (Franceinfo, France Inter, RFI), Royaume-Uni (BBC World Service), Espagne (Cadena SER, RNE), Allemagne (Deutschlandfunk), Italie (Rai 1)...
   - **Asie :** Chine (China Radio International), Inde (All India Radio), Japon (NHK World), Vietnam (Voice of Vietnam VOV1), Corée (KBS)...
   - **Amériques :** États-Unis (NPR, WNYC New York), Canada (CBC Radio One, ICI Radio-Canada), Brésil (CBN), Colombie (Caracol), Mexique (W Radio)...
   - **Moyen-Orient :** Qatar (Al Jazeera Arabic), Maroc (Medi 1 Maghreb), Émirats Arabes Unis (Dubai Eye), Égypte (Radio Masr)...
   - **Océanie :** Australie (ABC NewsRadio), Nouvelle-Zélande (RNZ)...

2. **Multilingue Intégral (8 Langues) :**
   - 🇫🇷 Français
   - 🇬🇧 English
   - 🇪🇸 Español
   - 🇨🇳 中文 (Mandarin)
   - 🇮🇳 हिन्दी (Hindi)
   - 🇻🇳 Tiếng Việt (Vietnamien)
   - 🇸🇦 العربية (Arabe avec support RTL droite-à-gauche automatique)
   - 🇳🇬 Yorùbá (avec accents tonals complets)

3. **Intégration Pi Network SDK :**
   - Connexion Pioneer (`Pi.authenticate`)
   - Système de pourboire en Pi (`Pi.createPayment`)
   - Compatible 100% avec le Pi Browser sur iOS et Android

4. **Recherche Mondiale en direct (Radio Browser API) :**
   - Plus de 40 000 stations accessibles instantanément avec le bouton *Charger plus de radios*.

---

## 🚀 Comment tester l'application sur votre PC

### Méthode 1 : Directement dans le navigateur
Double-cliquez simplement sur le fichier `index.html` situé dans `C:\Projects\piradio\index.html`.

### Méthode 2 : Avec le serveur local (Recommandé)
Ouvrez PowerShell dans le dossier `C:\Projects\piradio` et lancez :
```powershell
python -m http.server 3000
```
Puis ouvrez votre navigateur sur [http://localhost:3000](http://localhost:3000).

---

## 🌐 Comment déployer chez LWS

1. Connectez-vous à votre espace client **LWS**.
2. Allez dans le gestionnaire de fichiers (**LWS File Manager**) ou utilisez **FileZilla** avec vos identifiants FTP fournis par LWS.
3. Téléversez l'ensemble des fichiers de `C:\Projects\piradio` dans le dossier `public_html` (ou `htdocs`) de votre hébergement :
   - `index.html`
   - `style.css`
   - `app.js`
   - `stations.js`
   - `translations.js`
   - `manifest.json`
4. Votre site sera instantanément en ligne sur votre nom de domaine (ex: `piradio.fr`) !

---

## 📱 Tester dans le Pi Browser

1. Ouvrez l'application **Pi Browser** sur votre smartphone.
2. Dans la barre d'adresse du Pi Browser, tapez l'URL de votre site (ou votre adresse IP locale en test).
3. Connectez-vous avec votre compte Pioneer !

