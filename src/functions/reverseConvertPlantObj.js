export default function reverseConvertPlantObj(plant) {
    const phases = ['seedling', 'blooming', 'thriving', 'wilting', 'dead'];
    const newPhases = {
      stem: {
        color: [],
        stemWidth: [],
        path: []
      },
      bloom: {
        color: [],
        height: [],
        petalCount: [],
        noiseScale: [],
        noiseImpactX: [],
        noiseImpactY: [],
        noiseImpactZ: [],
        radialSegments: [],
        radiusBottom: [],
        radiusTop: [],
        recRadius: [],
        rotation: []
      }
    };
  
    phases.forEach(phase => {
      const phaseData = plant.phases[phase];
      console.log(phaseData)
  
      newPhases.stem.color.push(phaseData.color);
      newPhases.stem.stemWidth.push(phaseData.stemWidth);
      newPhases.stem.path.push(phaseData.path);
  
      newPhases.bloom.color.push(phaseData.color);
      newPhases.bloom.height.push(phaseData.height);
      newPhases.bloom.petalCount.push(1); // Assuming petalCount is always 1
      newPhases.bloom.noiseScale.push(phaseData.noiseScale);
      newPhases.bloom.noiseImpactX.push(phaseData.noiseImpactX);
      newPhases.bloom.noiseImpactY.push(phaseData.noiseImpactY);
      newPhases.bloom.noiseImpactZ.push(phaseData.noiseImpactZ);
      newPhases.bloom.radialSegments.push(phaseData.radialSegments);
      newPhases.bloom.radiusBottom.push(phaseData.radiusBottom);
      newPhases.bloom.radiusTop.push(phaseData.radiusTop);
      newPhases.bloom.recRadius.push(phaseData.recRadius);
      newPhases.bloom.rotation.push(phaseData.rotation);

    });
  
    return {
      name: plant.name,
      id: plant.id,
      description: plant.description,
      phases: newPhases,
      lifespan: plant.lifespan,
      planted: plant.planted,
      position: plant.position,
      plant_type: plant.plant_type
    };
  }