# Carpooling-App-Frontend

1. Install node.js
2. Install android studio
3. Install GitHub desktop
4. Clone the repository 
5. Open the repository in VSCode 
6. In VSCode:
    1. Right click on the frontend folder and select "open in integrated terminal”
    2. Execute:
        ```bash
        npm install
        npm run build
        npm run dev
        ```
        the latter is to start the frontend locally ([http://localhost:3000](http://localhost:3000/) probably), then execute:
        ```bash
        npx cap sync
        npx cap open android
        ```
        the latter is to open android studio.
    3. Watch the following video to know how to run the app on an Android device: https://www.youtube.com/watch?v=lhTbyjzujAE
