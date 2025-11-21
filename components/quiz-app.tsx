"use client"

import { useState } from "react"
import { Shuffle } from "lucide-react"

const QuizApp = () => {
  const allQuestions = {
    PYQ: [
      {
        q: "The Geographical discipline of Climatology is most closely related to:",
        opts: { a: "Geology", b: "Meteorology", c: "Hydrology", d: "Pedology" },
        ans: "b",
      },
      {
        q: "In the word root for conservation, con stands for",
        opts: { a: "together", b: "to keep", c: "house", d: "manage" },
        ans: "a",
      },
      {
        q: "In the word root for conservation, servare stands for",
        opts: { a: "together", b: "to keep", c: "house", d: "manage" },
        ans: "b",
      },
      {
        q: '"allowing some places and some creatures to exist without significant human interference" is the definition of:',
        opts: { a: "conservation", b: "preservation", c: "environmentalism", d: "ecology" },
        ans: "b",
      },
      {
        q: "The movement of lions across the Gir landscape is an example of",
        opts: { a: "diffusion", b: "secular dispersal", c: "jump dispersal", d: "drifting" },
        ans: "a",
      },
      {
        q: '"The conditions determined by physical, social, economic and environmental factors or processes which increase the susceptibility of an individual, a community, assets or systems to the impacts of hazards." is a definition for',
        opts: { a: "hazard", b: "exposure", c: "vulnerability", d: "disaster" },
        ans: "c",
      },
      {
        q: "The value derived from the knowledge of use of resources by others in the current generation is called",
        opts: { a: "altruistic value", b: "bequest value", c: "existence value", d: "option value" },
        ans: "a",
      },
      {
        q: "Oxford can best be categorised as",
        opts: { a: "mining town", b: "garrison town", c: "educational town", d: "religious town" },
        ans: "c",
      },
      {
        q: "Singrauli can best be categorised as",
        opts: { a: "mining town", b: "garrison town", c: "educational town", d: "religious town" },
        ans: "a",
      },
      {
        q: "Which of these is the largest source of sulphur oxides in the atmosphere?",
        opts: { a: "electricity generation", b: "mobile sources", c: "industrial processes", d: "residential fuel" },
        ans: "a",
      },
      {
        q: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
        opts: { a: "umbrella species", b: "keystone species", c: "flagship species", d: "all of the above" },
        ans: "d",
      },
      {
        q: "Religious benefits are an example of",
        opts: { a: "provisioning service", b: "regulating service", c: "supporting service", d: "cultural service" },
        ans: "d",
      },
      {
        q: "Which of these is a deterministic factor?",
        opts: { a: "environmental variation", b: "forest fire", c: "death rate", d: "diseases" },
        ans: "c",
      },
      {
        q: "According to Leopold, which of these is not a tool of habitat management?",
        opts: { a: "fire", b: "gun", c: "cattle", d: "sickle" },
        ans: "d",
      },
      {
        q: "Vertical arrangement of soil horizons is called",
        opts: { a: "soil texture", b: "soil structure", c: "soil profile", d: "soil science" },
        ans: "c",
      },
      {
        q: "Khadar is a type of",
        opts: { a: "black cotton soil", b: "alluvial soil", c: "saline soil", d: "red and yellow soil" },
        ans: "b",
      },
      {
        q: "The term laterite soil is derived from Latin later which means",
        opts: { a: "red", b: "brick", c: "fertile", d: "infertile" },
        ans: "b",
      },
      {
        q: "Which of these has the highest organic matter content?",
        opts: { a: "peaty soil", b: "alluvial soil", c: "saline soil", d: "red and yellow soil" },
        ans: "a",
      },
      {
        q: "Which of these depicts correctly the lithosere primary succession?",
        opts: {
          a: "Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
          b: "Rock → Foliose lichen → Crustose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
          c: "Moss → Crustose lichen → Foliose lichen → Rock → Herbaceous stage → Shrub → Woodland → Climax",
          d: "Rock → Crustose lichen → Foliose lichen → Shrub → Herbaceous stage → Moss → Woodland → Climax",
        },
        ans: "a",
      },
      {
        q: "Which of these are broad groups of peninsular plateau of India?",
        opts: {
          a: "the Deccan plateau",
          b: "the Central Highlands",
          c: "The North-Eastern plateau",
          d: "all of these",
        },
        ans: "d",
      },
      {
        q: "In Koeppen classification, which is steppe precipitation?",
        opts: { a: "W", b: "S", c: "f", d: "s" },
        ans: "b",
      },
      {
        q: "In Koeppen classification, which is warm summer temperature?",
        opts: { a: "h", b: "b", c: "a", d: "k" },
        ans: "b",
      },
      {
        q: "In Koeppen classification, which is polar tundra temperature?",
        opts: { a: "c", b: "d", c: "F", d: "T" },
        ans: "d",
      },
      { q: "In Koeppen classification, which is polar climate?", opts: { a: "A", b: "E", c: "C", d: "B" }, ans: "b" },
      {
        q: '"Low islands consisting of coral reefs surrounding a central depression" is a description of',
        opts: { a: "oceanic deep / trench", b: "mid-oceanic ridge", c: "seamount", d: "atoll" },
        ans: "d",
      },
      {
        q: "Which of these is the densest layer?",
        opts: { a: "Troposphere", b: "Stratosphere", c: "Mesosphere", d: "Thermosphere" },
        ans: "a",
      },
      {
        q: "Equal salinity curves are called",
        opts: { a: "isopycnal curves", b: "isohaline curves", c: "isotherm curves", d: "isobuoyant curves" },
        ans: "b",
      },
      {
        q: "Which of these is a major feature of the ocean floor?",
        opts: { a: "oceanic deep / trench", b: "mid-oceanic ridge", c: "seamount", d: "atoll" },
        ans: "a",
      },
      {
        q: "Equal temperature curves are called",
        opts: { a: "isopycnal curves", b: "isohaline curves", c: "isotherm curves", d: "isobuoyant curves" },
        ans: "c",
      },
      {
        q: "Which of these is not a climatic forcing for Earth?",
        opts: {
          a: "changes in plate tectonics",
          b: "changes in Earth's orbit",
          c: "changes in Sun's orbit",
          d: "changes in Sun's strength",
        },
        ans: "c",
      },
      {
        q: "Which of these contains the most water vapour and aerosols?",
        opts: { a: "Troposphere", b: "Stratosphere", c: "Mesosphere", d: "Thermosphere" },
        ans: "a",
      },
      {
        q: "Which of these is true about Coriolis force on the Earth?",
        opts: {
          a: "It is maximum at poles and zero at Equator.",
          b: "It is zero at poles and maximum at Equator.",
          c: "In the Northern hemisphere, it deflects winds towards left.",
          d: "In the Southern hemisphere, it deflects winds towards right.",
        },
        ans: "a",
      },
      {
        q: "From the surface of the Earth to upwards, which of these is the correct sequence of atmospheric layers?",
        opts: {
          a: "troposphere, stratosphere, mesosphere, thermosphere, exosphere",
          b: "troposphere, mesosphere, stratosphere, thermosphere, exosphere",
          c: "troposphere, thermosphere, mesosphere, stratosphere, exosphere",
          d: "troposphere, exosphere, thermosphere, mesosphere, stratosphere",
        },
        ans: "a",
      },
      {
        q: '"The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences" is a definition for',
        opts: { a: "adaptive response", b: "adaptive capacity", c: "mitigative response", d: "mitigative capacity" },
        ans: "b",
      },
      {
        q: "Flights of jet planes typically occur in",
        opts: { a: "Troposphere", b: "Stratosphere", c: "Mesosphere", d: "Thermosphere" },
        ans: "b",
      },
      {
        q: "Ionosphere is part of which layer?",
        opts: { a: "Troposphere", b: "Stratosphere", c: "Mesosphere", d: "Thermosphere" },
        ans: "d",
      },
      {
        q: "Which of these is true about P waves?",
        opts: {
          a: "They are longitudinal in nature",
          b: "They are transverse in nature",
          c: "They cannot move through gases",
          d: "They cannot move through liquids",
        },
        ans: "a",
      },
      {
        q: "Inclusions are older than the host rock. This is known as",
        opts: {
          a: "Principle of superposition",
          b: "Principle of original horizontality",
          c: "Principle of lateral continuity",
          d: "Principle of inclusions",
        },
        ans: "d",
      },
      {
        q: "Mount Fuji is an example of",
        opts: { a: "Shield volcano", b: "Stratovolcano", c: "Caldera", d: "Flood basalt province" },
        ans: "b",
      },
      {
        q: "Layers of rocks deposited from above (e.g. sediments and lava flows) are originally laid down horizontally. This is known as",
        opts: {
          a: "Principle of superposition",
          b: "Principle of original horizontality",
          c: "Principle of lateral continuity",
          d: "Principle of inclusions",
        },
        ans: "b",
      },
      { q: "'waxy' is an example of", opts: { a: "cleavage", b: "fracture", c: "lustre", d: "streak" }, ans: "c" },
      {
        q: '"ease of passage of light through the mineral" is known as',
        opts: { a: "fracture", b: "transparency", c: "texture", d: "streak" },
        ans: "b",
      },
      {
        q: '"unsorted course and fine debris left by melting glaciers, often with angular to sub-angular rock fragments" is the definition of',
        opts: { a: "glacial till", b: "alluvial deposit", c: "esker", d: "drumlin" },
        ans: "a",
      },
      {
        q: '"green or black-coloured inosilicates forming 10% of the Earth\'s crust" is a description of',
        opts: { a: "amphiboles", b: "olivine", c: "feldspar", d: "Pyroxene" },
        ans: "d",
      },
      {
        q: '"the ridge crest where three or more cirques meet" is the definition of',
        opts: { a: "glacier", b: "arete", c: "horn", d: "hanging valley" },
        ans: "b",
      },
      {
        q: "Mechanical action of ocean waves is an example of",
        opts: {
          a: "chemical weathering",
          b: "physical weathering",
          c: "biological weathering",
          d: "none of the above",
        },
        ans: "b",
      },
      {
        q: "Sudden cooling of magma results in",
        opts: {
          a: "smooth grained sedimentary rocks",
          b: "coarse grained sedimentary rocks",
          c: "smooth grained igneous rocks",
          d: "coarse grained igneous rocks",
        },
        ans: "c",
      },
      {
        q: "Gypsum is an example of",
        opts: { a: "silicious rock", b: "carbonate rock", c: "evaporite rock", d: "phosphatic rock" },
        ans: "c",
      },
      {
        q: "Thermal stresses lead to",
        opts: {
          a: "chemical weathering",
          b: "physical weathering",
          c: "biological weathering",
          d: "none of the above",
        },
        ans: "b",
      },
      {
        q: "Which of these are correctly arranged as per Moh's scale from softest to hardest?",
        opts: {
          a: "talc, apatite, fluorite, diamond",
          b: "talc, calcite, feldspar, diamond",
          c: "talc, fluorite, apatite, diamond",
          d: "diamond, feldspar, calcite, talc",
        },
        ans: "b",
      },
      {
        q: "Which of these is not a primary force initiating and governing movement of ocean currents?",
        opts: { a: "phase separation", b: "gravity", c: "Coriolis force", d: "arrangement of coasts" },
        ans: "d",
      },
      {
        q: "Mhow can best be categorised as",
        opts: { a: "mining town", b: "garrison town", c: "educational town", d: "religious town" },
        ans: "b",
      },
      {
        q: '"the diversity that exists within an ecosystem" is',
        opts: {
          a: "alpha (α) biodiversity",
          b: "beta (β) biodiversity",
          c: "gamma (γ) biodiversity",
          d: "delta (δ) biodiversity",
        },
        ans: "a",
      },
      {
        q: "Nutrient cycling is an example of",
        opts: { a: "provisioning service", b: "regulating service", c: "supporting service", d: "cultural service" },
        ans: "c",
      },
      {
        q: "Bangar is a type of",
        opts: { a: "black cotton soil", b: "alluvial soil", c: "saline soil", d: "red and yellow soil" },
        ans: "b",
      },
      {
        q: "Cryofracturing is an example of",
        opts: {
          a: "chemical weathering",
          b: "physical weathering",
          c: "biological weathering",
          d: "none of the above",
        },
        ans: "b",
      },
      {
        q: "For more biodiversity, the level of disturbance should be",
        opts: { a: "less", b: "intermediate", c: "more", d: "none of these" },
        ans: "b",
      },
      {
        q: "'stratified and assorted deposits comprised of fine matter with rounded edges' is the definition of",
        opts: { a: "glacial till", b: "outwash deposit", c: "esker", d: "drumlin" },
        ans: "b",
      },
      {
        q: "'a naturally occurring inorganic solid, with a definite chemical composition, and an ordered atomic arrangement' is the definition of",
        opts: { a: "rock", b: "mineral", c: "element", d: "compound" },
        ans: "b",
      },
      {
        q: "Continental shelf has a gradient of",
        opts: { a: "0-1 degree", b: "1-2 degree", c: "2-5 degree", d: "5-10 degree" },
        ans: "a",
      },
      {
        q: "In Koeppen classification, which is extremely continental temperature?",
        opts: { a: "c", b: "d", c: "F", d: "T" },
        ans: "b",
      },
      {
        q: "In Koeppen classification, which is fully humid precipitation?",
        opts: { a: "W", b: "S", c: "f", d: "s" },
        ans: "c",
      },
      {
        q: "In Koeppen classification, which is hot arid temperature?",
        opts: { a: "h", b: "k", c: "a", d: "b" },
        ans: "a",
      },
      {
        q: "In Koeppen classification, which is warm temperate climate?",
        opts: { a: "A", b: "B", c: "C", d: "D" },
        ans: "c",
      },
      { q: "In Koeppen classification, which is snow climate?", opts: { a: "A", b: "B", c: "C", d: "D" }, ans: "d" },
      {
        q: "Which of these create the best suited conditions for atmosphere on a planet?",
        opts: {
          a: "high gravity, high temperature",
          b: "low gravity, high temperature",
          c: "low gravity, low temperature",
          d: "high gravity, low temperature",
        },
        ans: "d",
      },
      {
        q: "Which of these air masses is generally warm and moist?",
        opts: { a: "cP", b: "cT", c: "mP", d: "mT" },
        ans: "d",
      },
      {
        q: "Which of these is correct?",
        opts: {
          a: "Intrusive rocks: formed outside crust, often coarse grained",
          b: "Intrusive rocks: formed inside crust, often fine grained",
          c: "Extrusive rocks: formed outside crust, often fine grained",
          d: "Extrusive rocks: formed inside crust, often coarse grained",
        },
        ans: "c",
      },
      {
        q: "'sinuous ridge formed by coarse materials deposited by streams flowing below the glaciers' is the definition of",
        opts: { a: "glacial till", b: "outwash deposit", c: "esker", d: "drumlin" },
        ans: "c",
      },
      {
        q: "Which of these is correct?",
        opts: {
          a: "Intrusive rocks: formed outside crust, often fine grained",
          b: "Intrusive rocks: formed inside crust, often coarse grained",
          c: "Extrusive rocks: formed outside crust, often coarse grained",
          d: "Extrusive rocks: formed inside crust, often fine grained",
        },
        ans: "b",
      },
      {
        q: "Deformation events (e.g. folds, faults, igneous intrusions) that cut across rocks are younger than the rocks themselves. This is known as",
        opts: {
          a: "Principle of fossil succession",
          b: "Principle of original horizontality",
          c: "Principle of superposition",
          d: "Principle of cross-cutting relationships",
        },
        ans: "d",
      },
      {
        q: "Moho discontinuity occurs between",
        opts: {
          a: "Crust and mantle",
          b: "Mantle and outer core",
          c: "Outer core and inner core",
          d: "Oceanic crust and continental crust",
        },
        ans: "a",
      },
      {
        q: "The regional approach to Geography was developed by:",
        opts: { a: "Alexander von Humboldt", b: "Karl Ritter", c: "Rene Descartes", d: "Eratosthenes" },
        ans: "b",
      },
      {
        q: "The systematic approach to Geography was developed by:",
        opts: { a: "Alexander von Humboldt", b: "Karl Ritter", c: "Rene Descartes", d: "Eratosthenes" },
        ans: "a",
      },
    ],
    1: [
      {
        q: '"Science of relationships between organisms and their environments" is the definition of:',
        opts: { a: "conservation", b: "preservation", c: "environmentalism", d: "ecology" },
        ans: "d",
      },
      {
        q: "The Trinity explosion of 1945 is taken as the beginning of the",
        opts: { a: "Holocene", b: "Cenocene", c: "Anthropocene", d: "Eocene" },
        ans: "c",
      },
      {
        q: "Sustainable harvest of resources falls under the category of:",
        opts: { a: "conservation", b: "preservation", c: "environmentalism", d: "none of the above" },
        ans: "a",
      },
      {
        q: "The quantum of human impacts can be written as",
        opts: { a: "I = P + A + T", b: "I = P X A + T", c: "I = P X A X T", d: "I = P + A X T" },
        ans: "c",
      },
      {
        q: "The discipline of Demography is most closely related to:",
        opts: { a: "Phytogeography", b: "Zoogeography", c: "Population Geography", d: "Economic Geography" },
        ans: "c",
      },
      {
        q: '"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor." This is the statement for',
        opts: {
          a: "Liebig's law of the minimum",
          b: "Liebig's law of the maximum",
          c: "Shelford's law of tolerance",
          d: "Shelford's law of intolerance",
        },
        ans: "a",
      },
      {
        q: '"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance." This is the statement for',
        opts: {
          a: "Liebig's law of the minimum",
          b: "Liebig's law of the maximum",
          c: "Shelford's law of tolerance",
          d: "Shelford's law of intolerance",
        },
        ans: "c",
      },
      {
        q: "The regional approach to Geography was developed by:",
        opts: { a: "Alexander von Humboldt", b: "Karl Ritter", c: "Rene Descartes", d: "Eratosthenes" },
        ans: "b",
      },
      {
        q: "Good climate is a",
        opts: { a: "chemical factor", b: "demographic factor", c: "push factor", d: "pull factor" },
        ans: "d",
      },
      {
        q: "Scarcity of food is a",
        opts: { a: "chemical factor", b: "demographic factor", c: "push factor", d: "pull factor" },
        ans: "c",
      },
    ],
    2: [
      {
        q: "In an undisturbed sedimentary strata, bottom layers are older than layers above them. This is known as",
        opts: {
          a: "Principle of superposition",
          b: "Principle of original horizontality",
          c: "Principle of lateral continuity",
          d: "Principle of inclusions",
        },
        ans: "a",
      },
      {
        q: "Mount Vesuvius is an example of",
        opts: { a: "Shield volcano", b: "Composite volcano", c: "Caldera", d: "Flood basalt province" },
        ans: "b",
      },
      {
        q: "Krakatoa eruption resulted in the formation of",
        opts: { a: "Shield volcano", b: "Stratovolcano", c: "Caldera", d: "Flood basalt province" },
        ans: "c",
      },
      {
        q: "Which of these is not a method of absolute dating?",
        opts: {
          a: "radioisotope dating",
          b: "thermoluminescence dating",
          c: "inclusion study",
          d: "fission track dating",
        },
        ans: "c",
      },
      {
        q: "Which of these is true about S waves?",
        opts: {
          a: "They are longitudinal in nature",
          b: "They are transverse in nature",
          c: "They cannot move through solids, liquids and gases",
          d: "They are the first to reach the surface of the Earth",
        },
        ans: "b",
      },
      {
        q: "Hawaiian volcanoes are an example of",
        opts: { a: "Shield volcano", b: "Stratovolcano", c: "Caldera", d: "Flood basalt province" },
        ans: "a",
      },
      {
        q: "Within a depositional basin, strata are laterally continuous in all directions till the edge of the basin. This is known as",
        opts: {
          a: "Principle of superposition",
          b: "Principle of original horizontality",
          c: "Principle of lateral continuity",
          d: "Principle of inclusions",
        },
        ans: "c",
      },
      { q: "Which of these is a gas giant?", opts: { a: "Mercury", b: "Venus", c: "Mars", d: "Saturn" }, ans: "d" },
      {
        q: "Assemblage of fossils are unique to the time that they lived in, and so can be used to age rocks across a wide geographic distribution. This is known as",
        opts: {
          a: "Principle of fossil succession",
          b: "Principle of original horizontality",
          c: "Principle of superposition",
          d: "Principle of cross-cutting relationships",
        },
        ans: "a",
      },
      {
        q: "Which of these is an example of direct source of information about the Earth?",
        opts: { a: "earthquake", b: "volcanic eruption", c: "magnetic survey", d: "gravity anomaly" },
        ans: "b",
      },
    ],
    3: [
      {
        q: '"the points where three or more cirques meet" is the definition of',
        opts: { a: "cirque", b: "arete", c: "horn", d: "hanging valley" },
        ans: "c",
      },
      {
        q: "Which of these is an example of endogenic process?",
        opts: { a: "weathering", b: "mass movement", c: "erosion", d: "folding" },
        ans: "d",
      },
      {
        q: "Sandstone is an example of",
        opts: { a: "siliciclastic rock", b: "carbonate rock", c: "evaporite rock", d: "phosphatic rock" },
        ans: "a",
      },
      {
        q: '"smooth oval-shaped ridge-like features comprised of glacial till, gravel and sand arranged parallel to the direction of ice movement" is the definition of',
        opts: { a: "glacial till", b: "outwash deposit", c: "esker", d: "drumlin" },
        ans: "d",
      },
      {
        q: "Which of these is an example of exogenic process?",
        opts: { a: "volcanism", b: "earthquake", c: "plate tectonics", d: "deposition" },
        ans: "d",
      },
      {
        q: '"white or colourless hard mineral virtually insoluble in water" is a description of',
        opts: { a: "amphiboles", b: "quartz", c: "feldspar", d: "pyroxene" },
        ans: "b",
      },
      {
        q: "Dolomite is an example of",
        opts: { a: "siliciclastic rock", b: "carbonate rock", c: "evaporite rock", d: "phosphatic rock" },
        ans: "b",
      },
      {
        q: '"green or black coloured inosilicate minerals forming prism or needle-like crystals" is a description of',
        opts: { a: "amphiboles", b: "feldspar", c: "mica", d: "pyroxene" },
        ans: "a",
      },
      {
        q: '"deep, long and wide troughs or basins with very steep concave to vertically dropping high walls as its head and sides" is the definition of',
        opts: { a: "cirque", b: "arete", c: "horn", d: "hanging valley" },
        ans: "a",
      },
      {
        q: '"magnesium iron silicate; a primary component of the Earth\'s upper mantle" is a description of',
        opts: { a: "amphiboles", b: "feldspar", c: "quartz", d: "olivine" },
        ans: "d",
      },
    ],
    4: [
      {
        q: "Which of these air masses is generally cool and moist?",
        opts: { a: "cP", b: "cT", c: "mP", d: "mT" },
        ans: "c",
      },
      {
        q: "Which of these air masses is generally cold and dry?",
        opts: { a: "cP", b: "cT", c: "mP", d: "mT" },
        ans: "a",
      },
      {
        q: "The ISS orbits in which layer?",
        opts: { a: "Troposphere", b: "Stratosphere", c: "Mesosphere", d: "Thermosphere" },
        ans: "d",
      },
      {
        q: "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called",
        opts: { a: "adaptation", b: "mitigation", c: "deceleration", d: "maladaptation" },
        ans: "b",
      },
      {
        q: "Surplus seed and sperm banking is an adaptation option to facilitate",
        opts: {
          a: "resistance to climate changes",
          b: "resilience to climate changes",
          c: "response to climate changes",
          d: "none of these",
        },
        ans: "b",
      },
      {
        q: "The classical period for taking averages for climate is",
        opts: { a: "10 years", b: "20 years", c: "30 years", d: "40 years" },
        ans: "c",
      },
      {
        q: "Noctilucent clouds are present in which layer?",
        opts: { a: "Troposphere", b: "Stratosphere", c: "Mesosphere", d: "Thermosphere" },
        ans: "c",
      },
      {
        q: "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called",
        opts: { a: "adaptation", b: "mitigation", c: "deceleration", d: "maladaptation" },
        ans: "a",
      },
      {
        q: "Which of these is home to the ozone layer?",
        opts: { a: "Troposphere", b: "Stratosphere", c: "Mesosphere", d: "Thermosphere" },
        ans: "b",
      },
      {
        q: "Most of the weather phenomena occur in",
        opts: { a: "Troposphere", b: "Stratosphere", c: "Mesosphere", d: "Thermosphere" },
        ans: "a",
      },
    ],
    5: [
      {
        q: "Equal density curves are called",
        opts: { a: "isopycnal curves", b: "isohaline curves", c: "isotherm curves", d: "isobuoyant curves" },
        ans: "a",
      },
      {
        q: "Which of these is a minor feature of the ocean floor?",
        opts: { a: "continental shelf", b: "continental slope", c: "guyot", d: "abyssal plain" },
        ans: "c",
      },
      {
        q: '"mountains with pointed summits rising from the sea floor, but not reaching the surface of the ocean" is a description of',
        opts: { a: "oceanic deep / trench", b: "mid-oceanic ridge", c: "seamount", d: "atoll" },
        ans: "c",
      },
      {
        q: "Which of these is the largest habitat on the Earth?",
        opts: { a: "continental shelf", b: "continental slope", c: "guyot", d: "abyssal plain" },
        ans: "d",
      },
      {
        q: "Which of these are the largest mountain ranges on Earth?",
        opts: { a: "oceanic deep / trench", b: "mid-oceanic ridge", c: "seamount", d: "atoll" },
        ans: "b",
      },
      {
        q: '"deep valleys, often cutting across continental shelves and slopes" is a description of',
        opts: { a: "oceanic deep / trench", b: "mid-oceanic ridge", c: "guyot", d: "submarine canyon" },
        ans: "d",
      },
      {
        q: "Continental slope has a gradient of",
        opts: { a: "0-1 degree", b: "1-2 degree", c: "2-5 degree", d: "5-10 degree" },
        ans: "c",
      },
      {
        q: "Which of these is not a prominent tidal pattern?",
        opts: { a: "diurnal", b: "mixed diurnal", c: "semidiurnal", d: "mixed semidiurnal" },
        ans: "b",
      },
      {
        q: '"relatively steep-sided, narrow, deep basins" is a description of',
        opts: { a: "oceanic deep / trench", b: "mid-oceanic ridge", c: "seamount", d: "atoll" },
        ans: "a",
      },
      {
        q: "In the sea, a layer where the temperature decreases rapidly from the mixed upper layer to the cold deeper layer is called",
        opts: { a: "isopycnal", b: "thermophil", c: "thermohaline", d: "thermocline" },
        ans: "d",
      },
    ],
    6: [
      {
        q: "In Koeppen classification, which is hot summer temperature?",
        opts: { a: "h", b: "k", c: "a", d: "b" },
        ans: "c",
      },
      {
        q: "In Koeppen classification, which is desert precipitation?",
        opts: { a: "W", b: "S", c: "f", d: "s" },
        ans: "a",
      },
      {
        q: "India's location is",
        opts: {
          a: "Equatorial in South, Tropical in North",
          b: "Tropical in South, Equatorial in North",
          c: "Tropical in South, Sub-tropical in North",
          d: "Sub-tropical in South, Tropical in North",
        },
        ans: "c",
      },
      {
        q: "In Koeppen classification, which is cold arid temperature?",
        opts: { a: "h", b: "k", c: "a", d: "b" },
        ans: "b",
      },
      {
        q: "In Koeppen classification, which is winter dry precipitation?",
        opts: { a: "w", b: "S", c: "f", d: "s" },
        ans: "a",
      },
      {
        q: "In Koeppen classification, which is cool summer temperature?",
        opts: { a: "c", b: "d", c: "F", d: "T" },
        ans: "a",
      },
      {
        q: "Which of these is the correct sequence of seasons in India?",
        opts: {
          a: "Hot weather season → Retreating monsoon season → South-West monsoon season → Cold weather season",
          b: "Hot weather season → South-West monsoon season → Retreating monsoon season → Cold weather season",
          c: "Hot weather season → Cold weather season → South-West monsoon season → Retreating monsoon season",
          d: "Hot weather season → South-West monsoon season → Cold weather season → Retreating monsoon season",
        },
        ans: "b",
      },
      {
        q: "In Koeppen classification, which is monsoonal precipitation?",
        opts: { a: "W", b: "S", c: "m", d: "s" },
        ans: "c",
      },
      {
        q: "Physiography is the outcome of",
        opts: { a: "structure", b: "process", c: "stage of development", d: "all of these" },
        ans: "d",
      },
      {
        q: "In Koeppen classification, which is equatorial climate?",
        opts: { a: "A", b: "B", c: "C", d: "D" },
        ans: "a",
      },
    ],
    7: [
      {
        q: "Soil formation is dependent upon",
        opts: { a: "vegetation", b: "time", c: "climate", d: "all of the above" },
        ans: "d",
      },
      {
        q: "Which of these is not a characteristic of pioneer species",
        opts: {
          a: "ability to grow on bare rocks",
          b: "ability to tolerate extreme temperatures",
          c: "large size",
          d: "short life span",
        },
        ans: "c",
      },
      {
        q: '"groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such groups" is a definition of',
        opts: { a: "cells", b: "species", c: "ecosystems", d: "biomes" },
        ans: "b",
      },
      {
        q: "Mechanical action of ocean waves is an example of",
        opts: {
          a: "chemical weathering",
          b: "physical weathering",
          c: "biological weathering",
          d: "none of the above",
        },
        ans: "b",
      },
      {
        q: "The climax near Tindni village is being controlled by disturbance by cattle. This is an example of",
        opts: { a: "climatic climax", b: "edaphic climax", c: "disclimax", d: "catastrophic climax" },
        ans: "c",
      },
      {
        q: "Carbonation is an example of",
        opts: {
          a: "chemical weathering",
          b: "physical weathering",
          c: "biological weathering",
          d: "none of the above",
        },
        ans: "a",
      },
      {
        q: "In soil profile, C refers to",
        opts: { a: "organic surface layer", b: "topsoil layer", c: "subsoil layer", d: "substratum layer" },
        ans: "d",
      },
      {
        q: "A climax caused by wildfires is an example of",
        opts: { a: "climatic climax", b: "edaphic climax", c: "disclimax", d: "catastrophic climax" },
        ans: "d",
      },
      {
        q: "Regur is a term for",
        opts: { a: "black cotton soil", b: "alluvial soil", c: "saline soil", d: "red and yellow soil" },
        ans: "a",
      },
      {
        q: '"the diversity that exists among different geographies" is',
        opts: {
          a: "alpha (α) biodiversity",
          b: "beta (β) biodiversity",
          c: "gamma (γ) biodiversity",
          d: "delta (δ) biodiversity",
        },
        ans: "c",
      },
    ],
    8: [
      {
        q: "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
        opts: { a: "least concern species", b: "keystone species", c: "flagship species", d: "extinct species" },
        ans: "b",
      },
      {
        q: 'The "subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce" is the definition of',
        opts: { a: "habitat", b: "ecosystem", c: "biome", d: "biosphere" },
        ans: "a",
      },
      {
        q: "Which of these correctly represents the process of habitat fragmentation and loss?",
        opts: {
          a: "Original forest → Dissection → Perforation → Fragmentation → Attrition",
          b: "Original forest → Dissection → Attrition → Fragmentation → Perforation",
          c: "Original forest → Dissection → Perforation → Attrition → Fragmentation",
          d: "Original forest → Dissection → Fragmentation → Perforation → Attrition",
        },
        ans: "a",
      },
      {
        q: "Soil formation is an example of",
        opts: { a: "provisioning service", b: "regulating service", c: "supporting service", d: "cultural service" },
        ans: "c",
      },
      {
        q: "Biological control of pest populations is an example of",
        opts: { a: "provisioning service", b: "regulating service", c: "supporting service", d: "cultural service" },
        ans: "b",
      },
      {
        q: "The acronym HIPPO does not include",
        opts: { a: "habitat loss", b: "invasive species", c: "pollination", d: "pollution" },
        ans: "c",
      },
      {
        q: "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
        opts: { a: "umbrella species", b: "keystone species", c: "flagship species", d: "all of the above" },
        ans: "d",
      },
      {
        q: "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
        opts: { a: "umbrella species", b: "keystone species", c: "flagship species", d: "extinct species" },
        ans: "c",
      },
      {
        q: "Captive breeding is an example of",
        opts: {
          a: "in-situ conservation",
          b: "ex-situ conservation",
          c: "in-situ preservation",
          d: "ex-situ preservation",
        },
        ans: "b",
      },
      {
        q: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
        opts: { a: "very high", b: "medium", c: "very low", d: "non-existent" },
        ans: "b",
      },
    ],
    9: [
      {
        q: "According to Malthusian model,",
        opts: {
          a: "Population grows in geometric progression, food supply increases in arithmetic progression",
          b: "Population grows in geometric progression, food supply increases in geometric progression",
          c: "Population grows in arithmetic progression, food supply increases in arithmetic progression",
          d: "Population grows in arithmetic progression, food supply increases in geometric progression",
        },
        ans: "a",
      },
      {
        q: "Which of these is commonly observed during humanising of nature?",
        opts: { a: "environmental determinism", b: "possibilism", c: "neodeterminism", d: "stop and go determinism" },
        ans: "b",
      },
      {
        q: "Which of these is a pillar of sustainability",
        opts: {
          a: "social sustainability",
          b: "industrial sustainability",
          c: "agricultural sustainability",
          d: "trans-boundary sustainability",
        },
        ans: "a",
      },
      {
        q: "Which of these is commonly observed in primitive societies?",
        opts: { a: "environmental determinism", b: "possibilism", c: "neodeterminism", d: "stop and go determinism" },
        ans: "a",
      },
      {
        q: "The demographic transition sees a society move from",
        opts: {
          a: "high birth rate, low death rate to low birth rate, high death rate",
          b: "low birth rate, high death rate to low birth rate, low death rate",
          c: "high birth rate, high death rate to low birth rate, low death rate",
          d: "high birth rate, high death rate to low birth rate, high death rate",
        },
        ans: "c",
      },
      {
        q: "The logistic growth equation curve is",
        opts: { a: "I-shaped", b: "J-shaped", c: "S-shaped", d: "U-shaped" },
        ans: "c",
      },
      {
        q: "Which of these is a preventive check according to Malthus?",
        opts: { a: "foresight", b: "vice", c: "misery", d: "flood" },
        ans: "a",
      },
      {
        q: "Which of these is not a pillar of sustainability?",
        opts: {
          a: "environmental sustainability",
          b: "economic sustainability",
          c: "trans-boundary sustainability",
          d: "social sustainability",
        },
        ans: "c",
      },
      {
        q: 'The book "An Essay on the Principle of Population" was written by',
        opts: { a: "Darwin", b: "Malthus", c: "Spencer", d: "Owens" },
        ans: "b",
      },
      {
        q: "Which of these is a positive check according to Malthus?",
        opts: { a: "late marriage", b: "war", c: "celibacy", d: "moral restraint" },
        ans: "b",
      },
    ],
    10: [
      {
        q: "Hydrogen for nuclear fusion comes under the category of",
        opts: { a: "potential resources", b: "actual resources", c: "reserve resources", d: "stock resources" },
        ans: "d",
      },
      {
        q: "Which of these is the largest source of ammonia (NH3) in the atmosphere?",
        opts: { a: "animal manure", b: "mineral fertiliser", c: "crops and their decomposition", d: "human waste" },
        ans: "a",
      },
      {
        q: '"the part of actual resources that can be developed profitably in the future" is a definition of',
        opts: { a: "potential resources", b: "actual resources", c: "reserve resources", d: "stock resources" },
        ans: "c",
      },
      {
        q: "Timber from forests that is being harvested can be categorised under",
        opts: { a: "potential resources", b: "actual resources", c: "reserve resources", d: "stock resources" },
        ans: "b",
      },
      {
        q: "Rain gardens are primarily meant to",
        opts: {
          a: "reduce water usage",
          b: "increase recharge to groundwater",
          c: "protect existing water sources",
          d: "increase water flow to streams",
        },
        ans: "b",
      },
      {
        q: "Oil that has not been drilled can be categorised under",
        opts: { a: "potential resources", b: "actual resources", c: "reserve resources", d: "stock resources" },
        ans: "a",
      },
      {
        q: "Which of these is the largest source of nitrogen oxides in the atmosphere?",
        opts: { a: "electricity generation", b: "mobile sources", c: "industrial processes", d: "waste disposal" },
        ans: "b",
      },
      {
        q: '"those resources that are currently being used after surveying, quantification and qualification" is a definition of',
        opts: { a: "potential resources", b: "actual resources", c: "reserve resources", d: "stock resources" },
        ans: "b",
      },
      {
        q: '"those resources that may be used in the future" is a definition of',
        opts: { a: "potential resources", b: "actual resources", c: "reserve resources", d: "stock resources" },
        ans: "a",
      },
      {
        q: "Low concentration ores come in the category of",
        opts: { a: "potential resources", b: "actual resources", c: "reserve resources", d: "stock resources" },
        ans: "c",
      },
    ],
    11: [
      {
        q: "New Delhi can best be categorised as",
        opts: { a: "administrative town", b: "industrial town", c: "transport town", d: "commercial town" },
        ans: "a",
      },
      {
        q: "Which of these is a factor governing barrier effect of roads?",
        opts: { a: "traffic intensity", b: "speed of vehicles", c: "driver sensitivity", d: "all of these" },
        ans: "d",
      },
      {
        q: "Which of these is a factor governing barrier effect of roads?",
        opts: {
          a: "presence and location of animal crossings",
          b: "movement pattern of species",
          c: "species specific preference of road use",
          d: "all of these",
        },
        ans: "d",
      },
      {
        q: "Varanasi can best be categorised as",
        opts: { a: "mining town", b: "garrison town", c: "educational town", d: "religious town" },
        ans: "d",
      },
      {
        q: '"the ability to produce a good using fewer inputs than another producer" is',
        opts: {
          a: "comparative advantage",
          b: "absolute advantage",
          c: "production advantage",
          d: "resource advantage",
        },
        ans: "b",
      },
      {
        q: '"the price of a good that prevails in the world market for that good" is the definition of',
        opts: { a: "export price", b: "import price", c: "world price", d: "domestic price" },
        ans: "c",
      },
      {
        q: "Visakhapatnam can best be categorised as",
        opts: { a: "administrative town", b: "industrial town", c: "transport town", d: "commercial town" },
        ans: "c",
      },
      {
        q: "Which of these is / are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?",
        opts: { a: "land bridges", b: "canopy bridges", c: "glider poles", d: "all of these" },
        ans: "d",
      },
      {
        q: "Bhilai can best be categorised as",
        opts: { a: "administrative town", b: "industrial town", c: "transport town", d: "commercial town" },
        ans: "b",
      },
      {
        q: '"the ability to produce a good at a lower opportunity cost than another producer" is a definition of',
        opts: { a: "real advantage", b: "monetary advantage", c: "comparative advantage", d: "opportunity advantage" },
        ans: "c",
      },
    ],
    12: [
      {
        q: "The time of flight for LiDAR is 0.00001 sec. Find the distance of the object from the instrument.",
        opts: { a: "500 m", b: "1000 m", c: "1500 m", d: "2000 m" },
        ans: "c",
      },
      {
        q: "Which of these uses imputed willingness to pay?",
        opts: {
          a: "market price method",
          b: "replacement cost method",
          c: "travel cost method",
          d: "contingent valuation method",
        },
        ans: "b",
      },
      {
        q: '"The situation of people, infrastructure, housing, production capacities and other tangible human assets located in hazard-prone areas." is a definition for',
        opts: { a: "hazard", b: "exposure", c: "vulnerability", d: "disaster" },
        ans: "b",
      },
      {
        q: '"A process, phenomenon or human activity that may cause loss of life, injury or other health impacts, property damage, social and economic disruption or environmental degradation." is a definition for',
        opts: { a: "hazard", b: "exposure", c: "vulnerability", d: "disaster" },
        ans: "a",
      },
      {
        q: '"A serious disruption of the functioning of a community or a society at any scale due to hazardous events interacting with conditions of exposure, vulnerability and capacity, leading to one or more of the following: human, material, economic and environmental losses and impacts." is a definition for',
        opts: { a: "hazard", b: "exposure", c: "vulnerability", d: "disaster" },
        ans: "d",
      },
      {
        q: '"The combination of all the strengths, attributes and resources available within an organisation, community or society to manage and reduce disaster risks and strengthen resilience." is a definition for',
        opts: { a: "contingency", b: "disaster management", c: "vulnerability", d: "capacity" },
        ans: "d",
      },
      {
        q: "Bathymetric LiDAR uses",
        opts: { a: "far infrared light", b: "near infrared light", c: "orange light", d: "green light" },
        ans: "d",
      },
      {
        q: "IMU stands for",
        opts: {
          a: "Imperial metering unit",
          b: "Inertial metering unit",
          c: "Imperial measurement unit",
          d: "Inertial measurement unit",
        },
        ans: "d",
      },
      {
        q: "Which of these is not a consumptive value?",
        opts: { a: "timber", b: "firewood", c: "non-timber forest products", d: "education" },
        ans: "d",
      },
      {
        q: "The frequency of flyovers is an indicator of",
        opts: {
          a: "spatial resolution",
          b: "temporal resolution",
          c: "spectral resolution",
          d: "radiometric resolution",
        },
        ans: "b",
      },
    ],
  }

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [quizComplete, setQuizComplete] = useState(false)

  const currentQuestions = selectedCategory ? allQuestions[selectedCategory as keyof typeof allQuestions] : []
  const currentQ = currentQuestions[currentQuestion]

  const handleAnswerSelect = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }))
  }

  const submitQuiz = () => {
    let correctCount = 0
    Object.keys(answers).forEach((qIndex) => {
      if (answers[Number.parseInt(qIndex)] === currentQuestions[Number.parseInt(qIndex)].ans) {
        correctCount++
      }
    })
    setScore(correctCount)
    setQuizComplete(true)
  }

  const shuffleQuestions = () => {
    if (!selectedCategory) return

    const shuffled = [...allQuestions[selectedCategory as keyof typeof allQuestions]].sort(() => Math.random() - 0.5)
    // @ts-ignore
    allQuestions[selectedCategory as keyof typeof allQuestions] = shuffled
    setCurrentQuestion(0)
    setAnswers({})
    setScore(0)
    setQuizComplete(false)
  }

  // ... rest of code here ...

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-3">
            Geography Quiz
          </h1>
          <p className="text-muted-foreground text-lg">Master the fundamentals of geography</p>
        </div>

        {/* Quiz Category Selection */}
        {!selectedCategory ? (
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-card-foreground mb-6">Select a Quiz Category</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.keys(allQuestions).map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setCurrentQuestion(0)
                      setScore(0)
                      setAnswers({})
                    }}
                    className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg hover:from-primary/20 hover:to-accent/20 hover:border-primary/50 transition-all duration-300 text-left group"
                  >
                    <div className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {category === "PYQ" ? "Previous Year Questions" : `Chapter ${category}`}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {allQuestions[category as keyof typeof allQuestions].length} questions
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : quizComplete ? (
          /* Enhanced results screen with better styling */
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-card-foreground">Quiz Complete!</h2>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
                <div className="text-5xl font-bold text-primary mb-2">
                  {score}/{currentQuestions.length}
                </div>
                <div className="text-lg text-muted-foreground">
                  {Math.round((score / currentQuestions.length) * 100)}% Correct
                </div>
              </div>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              <h3 className="font-semibold text-card-foreground">Review Answers:</h3>
              {currentQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border transition-colors ${
                    answers[idx] === q.ans
                      ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-700"
                      : "bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-700"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-medium text-sm text-card-foreground">Question {idx + 1}</span>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded ${
                        answers[idx] === q.ans
                          ? "bg-emerald-200 dark:bg-emerald-700 text-emerald-900 dark:text-emerald-100"
                          : "bg-red-200 dark:bg-red-700 text-red-900 dark:text-red-100"
                      }`}
                    >
                      {answers[idx] === q.ans ? "Correct" : "Incorrect"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{q.q}</p>
                  <div className="flex gap-2 text-xs">
                    <span className="text-muted-foreground">
                      Your answer:{" "}
                      <span className="font-semibold text-card-foreground">
                        {q.opts[answers[idx] as keyof typeof q.opts]}
                      </span>
                    </span>
                    {answers[idx] !== q.ans && (
                      <span className="text-muted-foreground">
                        Correct:{" "}
                        <span className="font-semibold text-card-foreground">
                          {q.opts[q.ans as keyof typeof q.opts]}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setSelectedCategory(null)
                setQuizComplete(false)
                setAnswers({})
                setScore(0)
              }}
              className="w-full py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Back to Categories
            </button>
          </div>
        ) : (
          /* Updated question card styling */
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Question {currentQuestion + 1} of {currentQuestions.length}
                </span>
                <button
                  onClick={() => shuffleQuestions()}
                  className="flex items-center gap-2 px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm"
                >
                  <Shuffle className="w-4 h-4" />
                  Shuffle
                </button>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-card-foreground mb-6 leading-relaxed">
                  {currentQuestion + 1}. {currentQ?.q}
                </h2>
              </div>

              <div className="space-y-3">
                {Object.entries(currentQ?.opts || {}).map(([key, opt]) => (
                  <button
                    key={key}
                    onClick={() => handleAnswerSelect(key)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-medium ${
                      answers[currentQuestion] === key
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-card text-card-foreground border-border hover:border-primary/50 hover:bg-muted"
                    }`}
                  >
                    <span className="text-lg">({key.toUpperCase()})</span> {opt}
                  </button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  disabled={currentQuestion === 0}
                  className="flex-1 py-3 bg-muted text-muted-foreground rounded-lg hover:bg-muted hover:text-card-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  Previous
                </button>
                {currentQuestion === currentQuestions.length - 1 ? (
                  <button
                    onClick={submitQuiz}
                    className="flex-1 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg transition-all font-medium"
                  >
                    Submit Quiz
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                    className="flex-1 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg transition-all font-medium"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuizApp
