namespace surya_1 {
    export let style: object = {
        fontFamily: 'Arial',
        fontSize: 40,
        fontStyle: '',
        fontWeight: 'bold',
        fill: ['#ffffff'], // gradient
        align: 'center',
        horizontalAlign: 'center',
        wordWrap: true,
        wordWrapWidth: 400,
    }
    ,styleScore: object = {
        fontFamily: 'Arial',
        fontSize: 25,
        fontStyle: '',
        fontWeight: 'bold',
        fill: ['#ffffff'], // gradient
        align: 'center',
        horizontalAlign: 'center',
        wordWrap: true,
        wordWrapWidth: 400,
    }
    ,styleValue: object = {
        fontFamily: 'Arial',
        fontSize: 25,
        fontStyle: '',
        fontWeight: 'bold',
        fill: ['#ffff00'], // gradient
        align: 'center',
        horizontalAlign: 'center',
        wordWrap: true,
        wordWrapWidth: 400,
    },
    styleScoreFinal: object = {
        fontFamily: 'Arial',
        fontSize: 50,
        fontStyle: '',
        fontWeight: 'bold',
        fill: ['#ffffff'], // gradient
        align: 'center',
        horizontalAlign: 'center',
        wordWrap: true,
        wordWrapWidth: 400,
    }
    ,styleValueFinal: object = {
        fontFamily: 'Arial',
        fontSize: 50,
        fontStyle: '',
        fontWeight: 'bold',
        fill: ['#ffff00'], // gradient
        align: 'center',
        horizontalAlign: 'center',
        wordWrap: true,
        wordWrapWidth: 400,
    },
        assetList: string[] = ["hand"],
        assetListJPEG: string[] = ["backgroundStars","backgroundShader"],
        borderList: any = [["borderleft", -50, 0, 50, 600,5,600], ["borderright", 400, 0, 50, 600,5,600], ["bordertop", 0, 0, 400, 50,400,5], ["borderbottom", 0, 600, 400, 50,400,5]],
        playerList: string[][] = [["ball", "ball0"]],
        ticker = tickerShared,
        MovementSpeed: number = 20,
        BallMovementSpeed: number = 4,
        Viscocity: number = 0.002,
        Acceleration: number = 2,
        ForceMultiplier: number = 3,
        circleRad: number = 7,
        EngineObj: any,
        ParticleJsonDestroy: object = {
            acceleration: { x: 0, y: 0 },
            addAtBack: true,
            alpha: { start: 1, end: 0 },
            blendMode: "normal",
            color: { start: "#e4f9ff", end: "#3fcbff" },
            emitterLifetime: 0.1,
            frequency: 0.01,
            lifetime: { min: 0.1, max: 0.1 },
            maxParticles: 300,
            maxSpeed: 0,
            noRotation: false,
            pos: { x: 0, y: 0 },
            rotationSpeed: { min: 0, max: 0 },
            scale: { start: 0.2, end: 0.15, minimumScaleMultiplier: 1 },
            spawnType: "point",
            speed: { start: 1500, end: 750, minimumSpeedMultiplier: 1 },
            startRotation: { min: 0, max: 360 }
        },
        ParticleJson: object = {
            acceleration: { x: 0, y: 0 },
            addAtBack: false,
            alpha: { start: 1, end: 1 },
            blendMode: "normal",
            color: { start: "#e4f9ff", end: "#3fcbff" },
            emitterLifetime: -1,
            frequency: 0.2,
            lifetime: { min: 2, max: 2 },
            maxParticles: 500,
            maxSpeed: 0,
            noRotation: false,
            pos: { x: 0, y: 0 },
            rotationSpeed: { min: 0, max: 0 },
            scale: { start: 0.2, end: 0.2, minimumScaleMultiplier: 1 },
            spawnType: "point",
            speed: { start: 200, end: 50, minimumSpeedMultiplier: 1 },
            startRotation: { min: 0, max: 0 }
        };
}