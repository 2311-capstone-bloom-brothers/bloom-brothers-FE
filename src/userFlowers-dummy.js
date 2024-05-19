const userFlowers = [
    {
        type: 'flower1',
        name: 'rose',
        id: 'd0287f25-6ae8-49bc-8a10-754da85ce7d5',
        description: 'A classic red rose with a vibrant bloom.',
        phases: {
            stem: {
                stemColor: [[0, 128, 0], [0, 128, 0], [0, 128, 0], [0, 128, 0], [0, 128, 0]],
                stemWidth: [0.3, 0.3, 0.3, 0.3, 0.3],
                path: [
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.6], [0.1, 0.5, 0], [0.1, 0.5, 0], [0.1, 0.5, 0], [0.1, 0.5, 0], [0.1, 0.5, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.6], [0.1, 1.5, 0], [0.1, 1.5, 0], [0.1, 1.5, 0], [0.1, 1.5, 0], [0.1, 1.5, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.6], [0.1, 6, 0], [0.1, 6, 0], [0.1, 6, 0], [0.1, 6, 0], [0.1, 6, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.5], [0.1, 4, 0.8], [0.1, 6.5, 1.3], [0.1, 7.5, 1], [0.1, 7.5, 0], [0.1, 6, -0.2]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.5], [0.1, 2, 0.8], [0.1, 5, 1.3], [0.1, 6, 1], [0.1, 6, 0], [0.1, 4.5, -0.2]]
                ],
            },
            bloom: {
                bloomColor: [[255, 0, 0], [255, 0, 0], [255, 0, 0], [255, 0, 0], [255, 0, 0]],
                petalCount: [1, 1, 1, 1, 1],
                recRadius: [0.2, 0.21, 0.24, 0.24, 0.15],
                radiusTop: [0.35, 0.6, 1.2, 1.2, 0.25],
                radiusBottom: [0.35, 0.6, 1.2, 1.2, 0.25],
                noiseScale: [0.5, 2.1, 1.1, 1.4, 0.02],
                noiseImpactX: [0.5, 0.6, 0.6, 0.6, 0.4],
                noiseImpactY: [0.4, 0.6, 1, 2.8, 2.8],
                noiseImpactZ: [0, 0, 1.1, 1, 1],
                height: [0.18, 0.05, 0.05, 0.05, 0.02],
                radialSegments: [110, 110, 110, 13, 13],
                rotation: [
                    [0, 0, 0],
                    [0.04, 0, 0],
                    [-0.4, 0.08, -0.45],
                    [-0.4, 0.08, 0.08],
                    [-0.75, 0.08, -0.45]
                ]
            },
        }
    },
    {
        type: 'flower1',
        name: 'daisy',
        id: '2da2167b-eba4-4af9-93d7-92f4c4cd3849',
        description: 'A cheerful white daisy with a bright yellow center.',
        phases: {
            stem: {
                stemColor: [[0, 255, 0], [0, 255, 0], [0, 255, 0], [0, 255, 0], [0, 255, 0]],
                stemWidth: [0.25, 0.25, 0.25, 0.25, 0.25],
                path: [
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.7], [0.1, 0.6, 0], [0.1, 0.6, 0], [0.1, 0.6, 0], [0.1, 0.6, 0], [0.1, 0.6, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.7], [0.1, 1.6, 0], [0.1, 1.6, 0], [0.1, 1.6, 0], [0.1, 1.6, 0], [0.1, 1.6, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.7], [0.1, 6.5, 0], [0.1, 6.5, 0], [0.1, 6.5, 0], [0.1, 6.5, 0], [0.1, 6.5, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.6], [0.1, 4.2, 0.9], [0.1, 6.7, 1.4], [0.1, 7.7, 1.1], [0.1, 7.7, 0], [0.1, 6.2, -0.3]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.6], [0.1, 2.2, 0.9], [0.1, 5.2, 1.4], [0.1, 6.2, 1.1], [0.1, 6.2, 0], [0.1, 4.7, -0.3]]
                ],
            },
            bloom: {
                bloomColor: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]],
                petalCount: [1, 1, 1, 1, 1],
                recRadius: [0.18, 0.19, 0.22, 0.22, 0.13],
                radiusTop: [0.4, 0.62, 1.15, 1.15, 0.27],
                radiusBottom: [0.4, 0.62, 1.15, 1.15, 0.27],
                noiseScale: [0.48, 2.0, 1.08, 1.36, 0.03],
                noiseImpactX: [0.48, 0.55, 0.55, 0.55, 0.42],
                noiseImpactY: [0.36, 0.55, 0.98, 2.7, 2.7],
                noiseImpactZ: [0, 0, 1.05, 0.98, 0.98],
                height: [0.17, 0.045, 0.045, 0.045, 0.015],
                radialSegments: [105, 105, 105, 12.5, 12.5],
                rotation: [
                    [0, 0, 0],
                    [0.035, 0, 0],
                    [-0.39, 0.075, -0.44],
                    [-0.39, 0.075, 0.075],
                    [-0.72, 0.075, -0.44]
                ]
            },
        }
    },
    {
        type: 'flower1',
        name: 'sunflower',
        id: '12430263-abdd-4e2b-9706-a27b2a93a8eb',
        description: 'A tall sunflower with a large, bright yellow bloom.',
        phases: {
            stem: {
                stemColor: [[34, 139, 34], [34, 139, 34], [34, 139, 34], [34, 139, 34], [34, 139, 34]],
                stemWidth: [0.5, 0.5, 0.5, 0.5, 0.5],
                path: [
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.9], [0.1, 0.8, 0], [0.1, 0.8, 0], [0.1, 0.8, 0], [0.1, 0.8, 0], [0.1, 0.8, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.9], [0.1, 2, 0], [0.1, 2, 0], [0.1, 2, 0], [0.1, 2, 0], [0.1, 2, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.9], [0.1, 8, 0], [0.1, 8, 0], [0.1, 8, 0], [0.1, 8, 0], [0.1, 8, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.65], [0.1, 5, 1], [0.1, 9, 1.5], [0.1, 10, 1.2], [0.1, 10, 0], [0.1, 8, -0.3]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.65], [0.1, 3, 1], [0.1, 7, 1.5], [0.1, 8, 1.2], [0.1, 8, 0], [0.1, 6, -0.3]]
                ],
            },
            bloom: {
                bloomColor: [[255, 255, 0], [255, 255, 0], [255, 255, 0], [255, 255, 0], [255, 255, 0]],
                petalCount: [1, 1, 1, 1, 1],
                recRadius: [0.25, 0.26, 0.3, 0.3, 0.18],
                radiusTop: [0.45, 0.7, 1.3, 1.3, 0.3],
                radiusBottom: [0.45, 0.7, 1.3, 1.3, 0.3],
                noiseScale: [0.55, 2.2, 1.15, 1.45, 0.04],
                noiseImpactX: [0.55, 0.65, 0.65, 0.65, 0.45],
                noiseImpactY: [0.45, 0.65, 1.1, 2.9, 2.9],
                noiseImpactZ: [0, 0, 1.2, 1.05, 1.05],
                height: [0.2, 0.055, 0.055, 0.055, 0.025],
                radialSegments: [120, 120, 120, 13.5, 13.5],
                rotation: [
                    [0, 0, 0],
                    [0.04, 0, 0],
                    [-0.41, 0.08, -0.46],
                    [-0.41, 0.08, 0.08],
                    [-0.74, 0.08, -0.46]
                ]
            },
        }
    },
    {
        type: 'flower1',
        name: 'tulip',
        id: '0afd3d10-a2fc-4c6f-b080-c40a33e1965b',
        description: 'A delicate tulip with a soft pink bloom.',
        phases: {
            stem: {
                stemColor: [[0, 100, 0], [0, 100, 0], [0, 100, 0], [0, 100, 0], [0, 100, 0]],
                stemWidth: [0.35, 0.35, 0.35, 0.35, 0.35],
                path: [
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.75], [0.1, 0.65, 0], [0.1, 0.65, 0], [0.1, 0.65, 0], [0.1, 0.65, 0], [0.1, 0.65, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.75], [0.1, 1.65, 0], [0.1, 1.65, 0], [0.1, 1.65, 0], [0.1, 1.65, 0], [0.1, 1.65, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.75], [0.1, 6.75, 0], [0.1, 6.75, 0], [0.1, 6.75, 0], [0.1, 6.75, 0], [0.1, 6.75, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.6], [0.1, 4.3, 0.9], [0.1, 7.3, 1.4], [0.1, 8.3, 1.1], [0.1, 8.3, 0], [0.1, 6.3, -0.3]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.6], [0.1, 2.3, 0.9], [0.1, 5.3, 1.4], [0.1, 6.3, 1.1], [0.1, 6.3, 0], [0.1, 4.3, -0.3]]
                ],
            },
            bloom: {
                bloomColor: [[255, 182, 193], [255, 182, 193], [255, 182, 193], [255, 182, 193], [255, 182, 193]],
                petalCount: [1, 1, 1, 1, 1],
                recRadius: [0.22, 0.23, 0.28, 0.28, 0.16],
                radiusTop: [0.4, 0.68, 1.25, 1.25, 0.28],
                radiusBottom: [0.4, 0.68, 1.25, 1.25, 0.28],
                noiseScale: [0.52, 2.1, 1.12, 1.42, 0.04],
                noiseImpactX: [0.52, 0.6, 0.6, 0.6, 0.43],
                noiseImpactY: [0.4, 0.6, 1, 2.75, 2.75],
                noiseImpactZ: [0, 0, 1.1, 1, 1],
                height: [0.19, 0.05, 0.05, 0.05, 0.02],
                radialSegments: [115, 115, 115, 13, 13],
                rotation: [
                    [0, 0, 0],
                    [0.038, 0, 0],
                    [-0.4, 0.078, -0.45],
                    [-0.4, 0.078, 0.078],
                    [-0.73, 0.078, -0.45]
                ]
            },
        }
    },
    {
        type: 'flower1',
        name: 'orchid',
        id: '15b9ac6d-e311-47fa-bd91-281127ea70a7',
        description: 'A delicate orchid with intricate patterns and vibrant colors.',
        phases: {
            stem: {
                stemColor: [[85, 107, 47], [85, 107, 47], [85, 107, 47], [85, 107, 47], [85, 107, 47]],
                stemWidth: [0.45, 0.45, 0.45, 0.45, 0.45],
                path: [
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.85], [0.1, 0.75, 0], [0.1, 0.75, 0], [0.1, 0.75, 0], [0.1, 0.75, 0], [0.1, 0.75, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.85], [0.1, 1.85, 0], [0.1, 1.85, 0], [0.1, 1.85, 0], [0.1, 1.85, 0], [0.1, 1.85, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.85], [0.1, 7.85, 0], [0.1, 7.85, 0], [0.1, 7.85, 0], [0.1, 7.85, 0], [0.1, 7.85, 0]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.65], [0.1, 5.5, 0.95], [0.1, 9.5, 1.45], [0.1, 10.5, 1.15], [0.1, 10.5, 0], [0.1, 8.5, -0.25]],
                    [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.65], [0.1, 3.5, 0.95], [0.1, 7.5, 1.45], [0.1, 8.5, 1.15], [0.1, 8.5, 0], [0.1, 6.5, -0.25]]
                ],
            },
            bloom: {
                bloomColor: [[219, 112, 147], [219, 112, 147], [219, 112, 147], [219, 112, 147], [219, 112, 147]],
                petalCount: [1, 1, 1, 1, 1],
                recRadius: [0.24, 0.25, 0.28, 0.28, 0.17],
                radiusTop: [0.5, 0.75, 1.35, 1.35, 0.32],
                radiusBottom: [0.5, 0.75, 1.35, 1.35, 0.32],
                noiseScale: [0.58, 2.3, 1.22, 1.52, 0.05],
                noiseImpactX: [0.58, 0.7, 0.7, 0.7, 0.5],
                noiseImpactY: [0.48, 0.7, 1.2, 3.0, 3.0],
                noiseImpactZ: [0, 0, 1.3, 1.15, 1.15],
                height: [0.21, 0.06, 0.06, 0.06, 0.03],
                radialSegments: [125, 125, 125, 14, 14],
                rotation: [
                    [0, 0, 0],
                    [0.045, 0, 0],
                    [-0.42, 0.09, -0.47],
                    [-0.42, 0.09, 0.09],
                    [-0.76, 0.09, -0.47]
                ]
            },
        }
    },
];

export default userFlowers