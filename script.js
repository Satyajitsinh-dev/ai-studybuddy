/* =====================================================

   AI Study Buddy – Multi-Class Edition
   script.js – All app logic, question banks, AI tutor
   ===================================================== */


// Embedded starter CSV (2368 Class 7 questions) — loaded at runtime
window._starterCsv = `question_id,class,subject,chapter,topic,difficulty,question_type,question,option_a,option_b,option_c,option_d,correct_answer,explanation,learning_objective,ncert_reference
Q001,7,Math,Integers,Addition of Integers,Easy,MCQ,What is (-5) + (-3)?,-8,8,-2,2,A,Negative + Negative = More Negative. (-5)+(-3) = -8,Students understand addition of integers,NCERT Class 7 Math - Integers
Q002,7,Math,Integers,Multiplication of Integers,Easy,MCQ,What is (-7) × (-3)?,21,-21,10,-10,A,Negative × Negative = Positive! (-7)×(-3) = 21,Students understand multiplication of integers,NCERT Class 7 Math - Integers
Q003,7,Math,Integers,Division of Integers,Easy,MCQ,What is (-12) ÷ 4?,-3,3,-8,8,A,Negative ÷ Positive = Negative. (-12)÷4 = -3,Students understand division of integers,NCERT Class 7 Math - Integers
Q004,7,Math,Integers,Comparing Integers,Easy,MCQ,Which integer is greater: -5 or -2?,-2,-5,Both equal,Cannot say,A,On the number line -2 is to the right of -5 so -2 is greater,Students understand comparing integers,NCERT Class 7 Math - Integers
Q005,7,Math,Integers,Properties of Integers,Medium,MCQ,What is the additive inverse of 8?,-8,8,0,1,A,Additive inverse of a number n is -n. So additive inverse of 8 is -8,Students understand properties of integers,NCERT Class 7 Math - Integers
Q006,7,Math,Fractions and Decimals,Addition of Fractions,Easy,MCQ,What is 2/5 + 1/5?,3/5,3/10,1/5,2/5,A,Same denominator? Just add numerators! 2/5 + 1/5 = 3/5,Students understand addition of fractions,NCERT Class 7 Math - Fractions and Decimals
Q007,7,Math,Fractions and Decimals,Multiplication of Decimals,Easy,MCQ,0.1 x 0.1 = ?,0.01,0.1,1,0.001,A,0.1 x 0.1 = 0.01 (count decimal places: 1+1=2 places),Students understand multiplication of decimals,NCERT Class 7 Math - Fractions and Decimals
Q008,7,Math,Fractions and Decimals,Comparing Fractions,Medium,MCQ,Which fraction is bigger: 3/4 or 2/3?,3/4,2/3,Both equal,Cannot say,A,Convert to same denominator: 9/12 vs 8/12. So 3/4 is bigger!,Students understand comparing fractions,NCERT Class 7 Math - Fractions and Decimals
Q009,7,Math,Fractions and Decimals,Division of Decimals,Medium,MCQ,2.5 / 0.5 = ?,5,25,0.5,50,A,2.5 / 0.5 = 25/5 = 5. Multiply both by 10 to remove decimal!,Students understand division of decimals,NCERT Class 7 Math - Fractions and Decimals
Q010,7,Math,Fractions and Decimals,Fraction of a Quantity,Medium,MCQ,What is 3/4 of 20?,15,12,10,8,A,3/4 of 20 = (3x20)/4 = 60/4 = 15,Students understand fraction of a quantity,NCERT Class 7 Math - Fractions and Decimals
Q011,7,Math,Simple Equations,Solving Equations,Medium,MCQ,"If 2x + 3 = 11, what is x?",4,3,7,8,A,2x = 11-3 = 8 so x = 8/2 = 4. Always do the same to both sides!,Students understand solving equations,NCERT Class 7 Math - Simple Equations
Q012,7,Math,Simple Equations,Solving Equations,Easy,MCQ,"If x/3 = 5, what is x?",15,5/3,8,2,A,Multiply both sides by 3: x = 5x3 = 15,Students understand solving equations,NCERT Class 7 Math - Simple Equations
Q013,7,Math,Simple Equations,Identifying Linear Equations,Easy,MCQ,Which is a linear equation?,2x+3=7,x^2=4,x^3=8,sqrtx=2,A,Linear equation has variable with power 1 only. 2x+3=7 is linear!,Students understand identifying linear equations,NCERT Class 7 Math - Simple Equations
Q014,7,Math,Simple Equations,Solving Equations,Medium,MCQ,If 5y - 2 = 13 then y =,3,5,2,11,A,5y = 13+2 = 15 so y = 15/5 = 3. Transpose -2 to the other side!,Students understand solving equations,NCERT Class 7 Math - Simple Equations
Q015,7,Math,Simple Equations,Solving Equations,Easy,MCQ,The solution of 3x = 0 is:,0,3,1,-3,A,3x = 0 so x = 0/3 = 0. Zero is the only solution!,Students understand solving equations,NCERT Class 7 Math - Simple Equations
Q016,7,Math,Data Handling,Mean,Easy,MCQ,"Mean of 2, 4, 6, 8, 10 is:",6,5,7,8,A,Mean = Sum/Count = 30/5 = 6,Students understand mean,NCERT Class 7 Math - Data Handling
Q017,7,Math,Data Handling,Mode,Easy,MCQ,"Mode of 3,3,5,7,7,7,9 is:",7,3,9,5,A,Mode = most frequently appearing number. 7 appears 3 times!,Students understand mode,NCERT Class 7 Math - Data Handling
Q018,7,Math,Data Handling,Median,Easy,MCQ,The middle value of arranged data is called:,Median,Mean,Mode,Range,A,When data is arranged in order the middle value is called Median!,Students understand median,NCERT Class 7 Math - Data Handling
Q019,7,Math,Data Handling,Median,Medium,MCQ,"Median of 3, 5, 7, 9, 11 is:",7,5,9,6,A,The data is already ordered. Middle value (3rd of 5) = 7. That is the median!,Students understand median,NCERT Class 7 Math - Data Handling
Q020,7,Math,Data Handling,Bar Graphs,Easy,MCQ,A bar graph is used to:,Compare data using bars,Show parts of a whole,Plot points on a grid,Draw pie slices,A,Bar graphs use rectangular bars of different heights to compare data!,Students understand bar graphs,NCERT Class 7 Math - Data Handling
Q021,7,Math,Data Handling,Range,Easy,MCQ,"Range of 4, 7, 2, 9, 1 is:",8,9,5,7,A,Range = Highest - Lowest = 9 - 1 = 8,Students understand range,NCERT Class 7 Math - Data Handling
Q022,7,Math,Data Handling,Mean,Medium,MCQ,If mean of 5 numbers is 8 their sum is:,40,8,13,45,A,Sum = Mean x Count = 8 x 5 = 40,Students understand mean,NCERT Class 7 Math - Data Handling
Q023,7,Math,Data Handling,Central Tendency,Hard,MCQ,Which of these is NOT a measure of central tendency?,Range,Mean,Median,Mode,A,Range measures spread of data not central tendency. Mean Median Mode are central tendency measures!,Students understand central tendency,NCERT Class 7 Math - Data Handling
Q024,7,Math,The Triangle,Angle Sum Property,Easy,MCQ,Sum of angles in a triangle is:,180 degrees,360 degrees,90 degrees,270 degrees,A,The angles in any triangle always add up to 180 degrees!,Students understand angle sum property,NCERT Class 7 Math - The Triangle
Q025,7,Math,The Triangle,Types of Triangles,Easy,MCQ,An equilateral triangle has:,All 3 sides equal,2 sides equal,No sides equal,1 right angle,A,Equilateral = all three sides AND all three angles are equal (60 degrees each)!,Students understand types of triangles,NCERT Class 7 Math - The Triangle
Q026,7,Math,The Triangle,Types of Triangles,Easy,MCQ,In a right triangle one angle is:,90 degrees,60 degrees,45 degrees,180 degrees,A,A right triangle has exactly one angle of 90 degrees!,Students understand types of triangles,NCERT Class 7 Math - The Triangle
Q027,7,Math,The Triangle,Types of Triangles,Easy,MCQ,An isosceles triangle has:,2 equal sides,3 equal sides,No equal sides,1 equal side,A,Isosceles triangle has exactly 2 equal sides and 2 equal base angles!,Students understand types of triangles,NCERT Class 7 Math - The Triangle
Q028,7,Math,The Triangle,Angle Sum Property,Medium,MCQ,If two angles of a triangle are 60 and 80 the third angle is:,40 degrees,20 degrees,50 degrees,60 degrees,A,Sum of angles = 180 degrees. Third angle = 180 - 60 - 80 = 40 degrees!,Students understand angle sum property,NCERT Class 7 Math - The Triangle
Q029,7,Math,Lines and Angles,Types of Angles,Easy,MCQ,Complementary angles add up to:,90 degrees,180 degrees,360 degrees,270 degrees,A,Complementary angles sum to 90 degrees. Like 30 and 60 degrees - they complement each other!,Students understand types of angles,NCERT Class 7 Math - Lines and Angles
Q030,7,Math,Lines and Angles,Types of Angles,Easy,MCQ,Supplementary angles add up to:,180 degrees,90 degrees,360 degrees,270 degrees,A,Supplementary angles sum to 180 degrees. Like 110 and 70 degrees on a straight line!,Students understand types of angles,NCERT Class 7 Math - Lines and Angles
Q031,7,Math,Lines and Angles,Intersecting Lines,Easy,MCQ,Vertically opposite angles are:,Equal,Supplementary,Complementary,Adjacent,A,When two lines intersect the vertically opposite angles are always equal!,Students understand intersecting lines,NCERT Class 7 Math - Lines and Angles
Q032,7,Math,Lines and Angles,Types of Angles,Easy,MCQ,A straight angle measures:,180 degrees,90 degrees,360 degrees,270 degrees,A,A straight angle is exactly 180 degrees - like a flat line!,Students understand types of angles,NCERT Class 7 Math - Lines and Angles
Q033,7,Math,Lines and Angles,Parallel Lines,Easy,MCQ,Parallel lines are lines that:,Never meet,Meet at one point,Meet at two points,Are perpendicular,A,Parallel lines remain equidistant and never intersect no matter how far extended!,Students understand parallel lines,NCERT Class 7 Math - Lines and Angles
Q034,7,Math,Lines and Angles,Parallel Lines,Medium,MCQ,A transversal is a line that:,Cuts two or more lines,Is parallel to another,Is perpendicular to x-axis,Bisects an angle,A,A transversal is a line that crosses two or more other lines at distinct points!,Students understand parallel lines,NCERT Class 7 Math - Lines and Angles
Q035,7,Math,Comparing Quantities,Percentage,Easy,MCQ,What percent of 200 is 50?,25%,10%,50%,20%,A,Percent = (50/200) x 100 = 25%,Students understand percentage,NCERT Class 7 Math - Comparing Quantities
Q036,7,Math,Comparing Quantities,Simple Interest,Medium,MCQ,Simple interest on Rs 1000 at 10% for 2 years is:,Rs 200,Rs 100,Rs 300,Rs 150,A,SI = P x R x T / 100 = 1000 x 10 x 2 / 100 = Rs 200,Students understand simple interest,NCERT Class 7 Math - Comparing Quantities
Q037,7,Math,Comparing Quantities,Discount,Medium,MCQ,A 20% discount on Rs 500 gives a sale price of:,Rs 400,Rs 100,Rs 450,Rs 300,A,Discount = 20% of 500 = Rs 100. Sale price = 500 - 100 = Rs 400,Students understand discount,NCERT Class 7 Math - Comparing Quantities
Q038,7,Math,Comparing Quantities,Ratio,Easy,MCQ,Ratio of 15 to 25 in simplest form is:,3:5,15:25,1:5,5:3,A,HCF of 15 and 25 is 5. So 15:25 = 3:5 in simplest form!,Students understand ratio,NCERT Class 7 Math - Comparing Quantities
Q039,7,Math,Comparing Quantities,Profit and Loss,Medium,MCQ,If cost price is 80 and selling price is 100 profit percent is:,25%,20%,10%,15%,A,Profit = 100-80 = 20. Profit% = (20/80) x 100 = 25%,Students understand profit and loss,NCERT Class 7 Math - Comparing Quantities
Q040,7,Science,Nutrition in Plants,Photosynthesis,Easy,MCQ,The process by which plants make their own food is called:,Photosynthesis,Respiration,Digestion,Transpiration,A,Plants use sunlight water and CO2 to make food through Photosynthesis,Students understand photosynthesis,NCERT Class 7 Science - Nutrition in Plants
Q041,7,Science,Nutrition in Plants,Photosynthesis,Easy,MCQ,The green pigment in leaves is called:,Chlorophyll,Glucose,Starch,Cellulose,A,Chlorophyll is the green pigment that traps sunlight for photosynthesis!,Students understand photosynthesis,NCERT Class 7 Science - Nutrition in Plants
Q042,7,Science,Nutrition in Plants,Photosynthesis,Easy,MCQ,Plants release which gas during photosynthesis?,Oxygen,Carbon dioxide,Nitrogen,Hydrogen,A,Plants release Oxygen during photosynthesis. That is why trees are so important!,Students understand photosynthesis,NCERT Class 7 Science - Nutrition in Plants
Q043,7,Science,Nutrition in Plants,Photosynthesis,Medium,MCQ,The raw materials for photosynthesis are:,CO2 and water,O2 and water,CO2 and glucose,O2 and glucose,A,Plants take in Carbon dioxide from air and water from soil for photosynthesis!,Students understand photosynthesis,NCERT Class 7 Science - Nutrition in Plants
Q044,7,Science,Nutrition in Plants,Modes of Nutrition,Hard,MCQ,Plants that grow on other plants for food are called:,Parasites,Saprophytes,Autotrophs,Heterotrophs,A,Parasitic plants like Cuscuta grow on host plants and take food from them!,Students understand modes of nutrition,NCERT Class 7 Science - Nutrition in Plants
Q045,7,Science,Nutrition in Animals,Digestion,Medium,MCQ,Saliva contains which enzyme?,Amylase,Pepsin,Lipase,Trypsin,A,Saliva contains salivary amylase which begins the digestion of starch in the mouth!,Students understand digestion,NCERT Class 7 Science - Nutrition in Animals
Q046,7,Science,Nutrition in Animals,Human Body,Easy,MCQ,The largest organ in the human body is:,Skin,Liver,Brain,Heart,A,Skin is the largest organ! It covers the entire body and has many functions.,Students understand human body,NCERT Class 7 Science - Nutrition in Animals
Q047,7,Science,Nutrition in Animals,Digestion,Medium,MCQ,Digestion of proteins begins in the:,Stomach,Mouth,Small intestine,Large intestine,A,Stomach produces pepsin enzyme and HCl to begin protein digestion!,Students understand digestion,NCERT Class 7 Science - Nutrition in Animals
Q048,7,Science,Nutrition in Animals,Absorption,Easy,MCQ,Absorption of digested food takes place in the:,Small intestine,Large intestine,Stomach,Mouth,A,The small intestine has villi that absorb nutrients into the blood!,Students understand absorption,NCERT Class 7 Science - Nutrition in Animals
Q049,7,Science,Nutrition in Animals,Nutrition in Simple Organisms,Hard,MCQ,Amoeba gets its food by a process called:,Phagocytosis,Photosynthesis,Digestion,Absorption,A,Amoeba engulfs food particles using pseudopodia - this is called phagocytosis!,Students understand nutrition in simple organisms,NCERT Class 7 Science - Nutrition in Animals
Q050,7,Science,Nutrition in Animals,Absorption,Medium,MCQ,The finger-like projections in the small intestine are called:,Villi,Cilia,Microvilli,Papillae,A,Villi greatly increase the surface area of the small intestine for better absorption!,Students understand absorption,NCERT Class 7 Science - Nutrition in Animals
Q051,7,Science,Nutrition in Animals,Digestion,Hard,MCQ,Bile is produced by the:,Liver,Pancreas,Stomach,Small intestine,A,The liver produces bile which is stored in the gall bladder and helps digest fats!,Students understand digestion,NCERT Class 7 Science - Nutrition in Animals
Q052,7,Science,Heat,Transfer of Heat,Easy,MCQ,Heat flows from a:,Hot body to cold body,Cold body to hot body,Both directions,Only in solids,A,Heat always flows from regions of higher temperature to lower temperature!,Students understand transfer of heat,NCERT Class 7 Science - Heat
Q053,7,Science,Heat,Conductors and Insulators,Easy,MCQ,Which of these is a good conductor of heat?,Iron,Wood,Plastic,Rubber,A,Metals like iron are good conductors of heat. Wood and plastic are insulators!,Students understand conductors and insulators,NCERT Class 7 Science - Heat
Q054,7,Science,Heat,Transfer of Heat,Medium,MCQ,The transfer of heat through liquids and gases is called:,Convection,Conduction,Radiation,Insulation,A,Convection occurs in fluids (liquids and gases) where heated fluid rises and cool fluid sinks!,Students understand transfer of heat,NCERT Class 7 Science - Heat
Q055,7,Science,Heat,Temperature,Easy,MCQ,The normal body temperature of a human is:,37 degrees C,100 degrees C,0 degrees C,50 degrees C,A,Normal human body temperature is 37 degrees C or 98.6 degrees F!,Students understand temperature,NCERT Class 7 Science - Heat
Q056,7,Science,Heat,Thermometer,Easy,MCQ,A clinical thermometer uses which liquid?,Mercury,Water,Alcohol,Oil,A,Clinical thermometers use mercury which expands with temperature to give accurate readings!,Students understand thermometer,NCERT Class 7 Science - Heat
Q057,7,Science,Heat,Convection,Medium,MCQ,Sea breeze blows from:,Sea to land,Land to sea,North to south,South to north,A,During day sea is cooler than land. Cool air from sea moves to land - this is sea breeze!,Students understand convection,NCERT Class 7 Science - Heat
Q058,7,Science,Heat,Convection,Medium,MCQ,Land breeze blows at:,Night,Day,Morning,Noon,A,At night land cools faster than sea. Air flows from land to sea - this is land breeze!,Students understand convection,NCERT Class 7 Science - Heat
Q059,7,Science,Heat,Conductors and Insulators,Medium,MCQ,Woollen clothes keep us warm because wool is a:,Poor conductor of heat,Good conductor of heat,Source of heat,Radiator of heat,A,Wool is a poor conductor (insulator) - it traps body heat and keeps us warm!,Students understand conductors and insulators,NCERT Class 7 Science - Heat
Q060,7,Science,Heat,Temperature,Hard,MCQ,The unit of temperature in SI system is:,Kelvin,Celsius,Fahrenheit,Calorie,A,The SI unit of temperature is Kelvin (K). 0 K is called Absolute Zero!,Students understand temperature,NCERT Class 7 Science - Heat
Q061,7,Science,Acids Bases and Salts,Indicators,Easy,MCQ,Acids turn blue litmus:,Red,Green,Yellow,Violet,A,Acids turn blue litmus red. Remember: Acid = Red!,Students understand indicators,NCERT Class 7 Science - Acids Bases and Salts
Q062,7,Science,Acids Bases and Salts,Indicators,Easy,MCQ,Bases turn red litmus:,Blue,Green,Yellow,Violet,A,Bases turn red litmus blue. Remember: Base = Blue!,Students understand indicators,NCERT Class 7 Science - Acids Bases and Salts
Q063,7,Science,Acids Bases and Salts,Bases,Easy,MCQ,Baking soda is:,A base,An acid,A salt,Neutral,A,Baking soda (sodium bicarbonate) is a base. It turns red litmus blue!,Students understand bases,NCERT Class 7 Science - Acids Bases and Salts
Q064,7,Science,Acids Bases and Salts,Acids,Easy,MCQ,Vinegar is an example of:,Acid,Base,Salt,Neutral substance,A,Vinegar contains acetic acid. It tastes sour and turns blue litmus red!,Students understand acids,NCERT Class 7 Science - Acids Bases and Salts
Q065,7,Science,Acids Bases and Salts,Neutralization,Medium,MCQ,When an acid reacts with a base the reaction is called:,Neutralization,Oxidation,Reduction,Combustion,A,Acid + Base = Salt + Water. This reaction is called Neutralization!,Students understand neutralization,NCERT Class 7 Science - Acids Bases and Salts
Q066,7,Science,Acids Bases and Salts,Salts,Easy,MCQ,Common salt is chemically known as:,NaCl,HCl,NaOH,Na2CO3,A,Common salt (table salt) is Sodium Chloride - NaCl!,Students understand salts,NCERT Class 7 Science - Acids Bases and Salts
Q067,7,Science,Acids Bases and Salts,Indicators,Medium,MCQ,Turmeric is used as a natural:,Indicator,Acid,Base,Salt,A,Turmeric is a natural indicator - it turns red in base (like soap) and stays yellow in acid!,Students understand indicators,NCERT Class 7 Science - Acids Bases and Salts
Q068,7,Science,Acids Bases and Salts,Acids,Easy,MCQ,Lemon juice is:,Acidic,Basic,Neutral,A salt,A,Lemon juice contains citric acid so it is acidic and tastes sour!,Students understand acids,NCERT Class 7 Science - Acids Bases and Salts
Q069,7,Science,Physical and Chemical Changes,Chemical Changes,Easy,MCQ,Rusting of iron is a:,Chemical change,Physical change,Reversible change,Natural change,A,Rusting forms a new substance (iron oxide) so it is a chemical change - irreversible!,Students understand chemical changes,NCERT Class 7 Science - Physical and Chemical Changes
Q070,7,Science,Physical and Chemical Changes,Physical Changes,Easy,MCQ,Melting of ice is a:,Physical change,Chemical change,Irreversible change,Permanent change,A,Melting ice is physical - no new substance formed and it is reversible (freeze again)!,Students understand physical changes,NCERT Class 7 Science - Physical and Chemical Changes
Q071,7,Science,Physical and Chemical Changes,Chemical Changes,Easy,MCQ,Burning of paper is a:,Chemical change,Physical change,Reversible change,Temporary change,A,Burning paper creates ash and gases - new substances are formed. It is chemical and irreversible!,Students understand chemical changes,NCERT Class 7 Science - Physical and Chemical Changes
Q072,7,Science,Physical and Chemical Changes,Physical Changes,Medium,MCQ,Which of these is a reversible change?,Melting of wax,Burning of wood,Rusting of iron,Cooking of food,A,Melted wax can be solidified again by cooling - so it is a reversible physical change!,Students understand physical changes,NCERT Class 7 Science - Physical and Chemical Changes
Q073,7,Science,Physical and Chemical Changes,Physical Changes,Medium,MCQ,Crystallization is an example of:,Physical change,Chemical change,Biological change,Nuclear change,A,Crystallization involves changing the physical state - no new substance is formed!,Students understand physical changes,NCERT Class 7 Science - Physical and Chemical Changes
Q074,7,Science,Physical and Chemical Changes,Prevention of Rusting,Hard,MCQ,Galvanization is the process of coating iron with:,Zinc,Tin,Copper,Aluminium,A,Galvanization coats iron with zinc to prevent rusting. Zinc protects iron from corrosion!,Students understand prevention of rusting,NCERT Class 7 Science - Physical and Chemical Changes
Q075,7,Science,Physical and Chemical Changes,Chemical Changes,Medium,MCQ,A sign that a chemical change has occurred is:,Change in colour or new gas produced,Change in shape only,Change in size only,Change in state only,A,Chemical changes show signs like colour change gas production heat light or smell!,Students understand chemical changes,NCERT Class 7 Science - Physical and Chemical Changes
Q076,7,Science,Respiration in Organisms,Respiration,Easy,MCQ,The process by which organisms release energy from food is:,Respiration,Photosynthesis,Digestion,Transpiration,A,Respiration breaks down glucose to release energy for all life activities!,Students understand respiration,NCERT Class 7 Science - Respiration in Organisms
Q077,7,Science,Respiration in Organisms,Types of Respiration,Easy,MCQ,Aerobic respiration requires:,Oxygen,Carbon dioxide,Nitrogen,Hydrogen,A,Aerobic respiration uses oxygen to break down glucose completely into CO2 water and energy!,Students understand types of respiration,NCERT Class 7 Science - Respiration in Organisms
Q078,7,Science,Respiration in Organisms,Types of Respiration,Medium,MCQ,Yeast respires:,Anaerobically,Aerobically,Both ways,Only with sunlight,A,Yeast performs anaerobic respiration producing alcohol and CO2 - used in bread making!,Students understand types of respiration,NCERT Class 7 Science - Respiration in Organisms
Q079,7,Science,Respiration in Organisms,Breathing Organs,Easy,MCQ,The breathing organ of fish is:,Gills,Lungs,Skin,Spiracles,A,Fish use gills to absorb dissolved oxygen from water for respiration!,Students understand breathing organs,NCERT Class 7 Science - Respiration in Organisms
Q080,7,Science,Respiration in Organisms,Breathing Organs,Medium,MCQ,Insects breathe through:,Spiracles,Gills,Lungs,Skin,A,Insects have small openings called spiracles on their body through which they breathe!,Students understand breathing organs,NCERT Class 7 Science - Respiration in Organisms
Q081,7,Science,Respiration in Organisms,Breathing,Easy,MCQ,During exercise we breathe:,Faster,Slower,At same rate,Stop breathing,A,During exercise muscles need more oxygen so breathing rate increases to supply more O2!,Students understand breathing,NCERT Class 7 Science - Respiration in Organisms
Q082,7,Science,Transportation in Animals and Plants,Transport in Plants,Easy,MCQ,The fluid that transports materials in plants is:,Sap,Blood,Lymph,Plasma,A,Plants transport water and nutrients through sap in xylem and phloem vessels!,Students understand transport in plants,NCERT Class 7 Science - Transportation in Animals and Plants
Q083,7,Science,Transportation in Animals and Plants,Transport in Plants,Medium,MCQ,The tissue that transports water in plants is:,Xylem,Phloem,Epidermis,Cortex,A,Xylem transports water and minerals from roots to leaves!,Students understand transport in plants,NCERT Class 7 Science - Transportation in Animals and Plants
Q084,7,Science,Transportation in Animals and Plants,Transport in Plants,Medium,MCQ,The tissue that transports food in plants is:,Phloem,Xylem,Epidermis,Cambium,A,Phloem transports prepared food (glucose) from leaves to all parts of the plant!,Students understand transport in plants,NCERT Class 7 Science - Transportation in Animals and Plants
Q085,7,Science,Transportation in Animals and Plants,Circulatory System,Easy,MCQ,The human heart has how many chambers?,4,2,3,6,A,The human heart has 4 chambers: 2 atria (upper) and 2 ventricles (lower)!,Students understand circulatory system,NCERT Class 7 Science - Transportation in Animals and Plants
Q086,7,Science,Transportation in Animals and Plants,Excretion,Easy,MCQ,Blood is filtered by the:,Kidneys,Liver,Lungs,Heart,A,Kidneys filter waste products from blood and remove them as urine!,Students understand excretion,NCERT Class 7 Science - Transportation in Animals and Plants
Q087,7,Science,Transportation in Animals and Plants,Transport in Plants,Medium,MCQ,The opening in leaves through which transpiration occurs is:,Stomata,Lenticels,Root hair,Cuticle,A,Stomata are tiny pores in leaves through which water vapour exits during transpiration!,Students understand transport in plants,NCERT Class 7 Science - Transportation in Animals and Plants
Q088,7,English,Grammar - Nouns,Proper Nouns,Easy,MCQ,Which of these is a proper noun?,Delhi,city,river,mountain,A,Proper nouns name specific places people or things. Delhi is a specific city so it is a proper noun!,Students understand proper nouns,NCERT Class 7 English - Grammar - Nouns
Q089,7,English,Grammar - Nouns,Collective Nouns,Medium,MCQ,A collective noun for a group of lions is:,Pride,Pack,Herd,Flock,A,A group of lions is called a Pride! Pack is for wolves herd for cattle flock for birds.,Students understand collective nouns,NCERT Class 7 English - Grammar - Nouns
Q090,7,English,Grammar - Nouns,Abstract Nouns,Medium,MCQ,Which of these is an abstract noun?,Happiness,Dog,Table,River,A,Abstract nouns name feelings ideas or qualities that cannot be touched. Happiness is abstract!,Students understand abstract nouns,NCERT Class 7 English - Grammar - Nouns
Q091,7,English,Grammar - Nouns,Plural Nouns,Easy,MCQ,The plural of child is:,Children,Childs,Childes,Child,A,Child has an irregular plural: children. Not just adding -s!,Students understand plural nouns,NCERT Class 7 English - Grammar - Nouns
Q092,7,English,Grammar - Nouns,Countable and Uncountable Nouns,Easy,MCQ,A noun that can be counted is called a:,Countable noun,Proper noun,Abstract noun,Collective noun,A,Countable nouns (book books cat cats) can be counted. Uncountable nouns (water air) cannot!,Students understand countable and uncountable nouns,NCERT Class 7 English - Grammar - Nouns
Q093,7,English,Grammar - Verbs and Tenses,Simple Past Tense,Easy,MCQ,Which sentence is in Simple Past Tense?,She played cricket,She plays cricket,She will play cricket,She is playing cricket,A,Simple Past uses V2 (played). Present uses V1 (plays). Future uses will+V1!,Students understand simple past tense,NCERT Class 7 English - Grammar - Verbs and Tenses
Q094,7,English,Grammar - Verbs and Tenses,Present Continuous Tense,Medium,MCQ,The Present Continuous tense uses:,is/am/are + V-ing,was/were + V-ing,has/have + V3,will + V1,A,Present Continuous = is/am/are + verb-ing. Example: She is reading!,Students understand present continuous tense,NCERT Class 7 English - Grammar - Verbs and Tenses
Q095,7,English,Grammar - Verbs and Tenses,Past Perfect Tense,Hard,MCQ,Which is the correct Past Perfect sentence?,She had finished her work,She has finished her work,She finished her work,She was finishing her work,A,Past Perfect = had + V3. Shows action completed before another past action!,Students understand past perfect tense,NCERT Class 7 English - Grammar - Verbs and Tenses
Q096,7,English,Grammar - Verbs and Tenses,Types of Verbs,Easy,MCQ,An action verb shows:,Action done by subject,State of being,Quality of noun,Time of action,A,Action verbs show what the subject does: run jump sing write eat etc.!,Students understand types of verbs,NCERT Class 7 English - Grammar - Verbs and Tenses
Q097,7,English,Grammar - Verbs and Tenses,Future Tense,Easy,MCQ,The future tense of go is:,Will go,Went,Gone,Going,A,Future tense = will + base verb. Will go is future tense of go!,Students understand future tense,NCERT Class 7 English - Grammar - Verbs and Tenses
Q098,7,English,Grammar - Adjectives,Identifying Adjectives,Easy,MCQ,Which word is an adjective in: The tall boy ran fast?,tall,boy,ran,fast,A,Tall describes the noun boy so it is an adjective! Fast describes the verb ran so it is an adverb.,Students understand identifying adjectives,NCERT Class 7 English - Grammar - Adjectives
Q099,7,English,Grammar - Adjectives,Degrees of Comparison,Medium,MCQ,The comparative degree of good is:,Better,Best,Gooder,More good,A,Good - Better - Best. These are irregular adjective forms!,Students understand degrees of comparison,NCERT Class 7 English - Grammar - Adjectives
Q100,7,English,Grammar - Adjectives,Degrees of Comparison,Medium,MCQ,The superlative degree of beautiful is:,Most beautiful,More beautiful,Beautifulest,Beautifuller,A,Long adjectives use most for superlative: beautiful - more beautiful - most beautiful!,Students understand degrees of comparison,NCERT Class 7 English - Grammar - Adjectives
Q101,7,English,Grammar - Adjectives,Types of Adjectives,Medium,MCQ,An adjective of quantity answers which question?,How much/many?,What kind?,Which one?,Whose?,A,Adjectives of quantity tell how much or how many: some all few much several!,Students understand types of adjectives,NCERT Class 7 English - Grammar - Adjectives
Q102,7,English,Grammar - Adjectives,Articles,Easy,MCQ,Choose the correct adjective: She is __ honest girl.,an,a,the,no article,A,Use an before words starting with a vowel sound. Honest starts with vowel sound H (silent) so use an!,Students understand articles,NCERT Class 7 English - Grammar - Adjectives
Q103,7,English,Grammar - Pronouns,Personal Pronouns,Easy,MCQ,Which of these is a personal pronoun?,He,This,Who,Each,A,Personal pronouns refer to specific persons: I you he she it we they them!,Students understand personal pronouns,NCERT Class 7 English - Grammar - Pronouns
Q104,7,English,Grammar - Pronouns,Reflexive Pronouns,Easy,MCQ,The reflexive pronoun for I is:,Myself,Himself,Herself,Itself,A,Reflexive pronouns end in -self or -selves. For I the reflexive pronoun is myself!,Students understand reflexive pronouns,NCERT Class 7 English - Grammar - Pronouns
Q105,7,English,Grammar - Pronouns,Relative Pronouns,Medium,MCQ,Which sentence uses a relative pronoun?,The book that I read was good,I read a book yesterday,She reads books daily,Books are useful,A,That is a relative pronoun connecting the clause to the noun book!,Students understand relative pronouns,NCERT Class 7 English - Grammar - Pronouns
Q106,7,English,Grammar - Pronouns,Pronoun Agreement,Hard,MCQ,Choose the correct pronoun: Neither Ram nor Shyam did __ homework.,his,their,its,our,A,When two singulars are joined by neither-nor the pronoun is singular (his)!,Students understand pronoun agreement,NCERT Class 7 English - Grammar - Pronouns
Q107,7,English,Grammar - Pronouns,Relative Pronouns,Easy,MCQ,Who is used for:,Persons,Animals only,Things only,All of these,A,Who is used for persons. Which is for animals/things. That can be used for all!,Students understand relative pronouns,NCERT Class 7 English - Grammar - Pronouns
Q108,7,English,Grammar - Pronouns,Personal Pronouns,Medium,MCQ,The object form of they is:,Them,Their,Theirs,Themselves,A,They (subject) - Them (object) - Their (possessive adjective) - Theirs (possessive pronoun)!,Students understand personal pronouns,NCERT Class 7 English - Grammar - Pronouns
Q109,7,SST,The Mughal Empire,Mughal Rulers,Easy,MCQ,The Mughal Empire was founded by:,Babur,Akbar,Humayun,Aurangzeb,A,Babur founded the Mughal Empire in 1526 after winning the First Battle of Panipat!,Students understand mughal rulers,NCERT Class 7 SST - The Mughal Empire
Q110,7,SST,The Mughal Empire,Akbars Policies,Medium,MCQ,Akbars policy of religious tolerance was called:,Sulh-i-kul,Jihad,Dharma,Sarvajanik,A,Sulh-i-kul means universal peace. Akbar believed all religions should be respected!,Students understand akbars policies,NCERT Class 7 SST - The Mughal Empire
Q111,7,SST,The Mughal Empire,Mughal Architecture,Easy,MCQ,The Taj Mahal was built by:,Shah Jahan,Akbar,Babur,Aurangzeb,A,Shah Jahan built the Taj Mahal in memory of his beloved wife Mumtaz Mahal!,Students understand mughal architecture,NCERT Class 7 SST - The Mughal Empire
Q112,7,SST,The Mughal Empire,Akbars Policies,Medium,MCQ,Mansabdari system was introduced by:,Akbar,Babur,Humayun,Jahangir,A,Akbar introduced the Mansabdari system to organize the army and administration!,Students understand akbars policies,NCERT Class 7 SST - The Mughal Empire
Q113,7,SST,The Mughal Empire,Mughal History,Medium,MCQ,The First Battle of Panipat was fought in:,1526,1556,1605,1761,A,1526: Babur defeated Ibrahim Lodi in the First Battle of Panipat to establish Mughal rule!,Students understand mughal history,NCERT Class 7 SST - The Mughal Empire
Q114,7,SST,The Mughal Empire,Mughal Rulers,Hard,MCQ,The Mughal emperor known for his love of painting is:,Jahangir,Akbar,Shah Jahan,Babur,A,Jahangir was a great patron of painting. His court had many brilliant artists!,Students understand mughal rulers,NCERT Class 7 SST - The Mughal Empire
Q115,7,SST,The Mughal Empire,Mughal Architecture,Hard,MCQ,Fatehpur Sikri was built by:,Akbar,Shah Jahan,Humayun,Aurangzeb,A,Akbar built Fatehpur Sikri as his new capital near Agra to honour Saint Salim Chishti!,Students understand mughal architecture,NCERT Class 7 SST - The Mughal Empire
Q116,7,SST,The Mughal Empire,Mughal Rulers,Hard,MCQ,Which Mughal emperor ended the policy of Sulh-i-kul?,Aurangzeb,Shah Jahan,Jahangir,Akbar,A,Aurangzeb was strict in following Islam and reversed Akbars tolerant policies!,Students understand mughal rulers,NCERT Class 7 SST - The Mughal Empire
Q117,7,SST,Democracy - Equality and Justice,Democracy,Easy,MCQ,Universal Adult Franchise means:,All adults can vote,Only rich can vote,Only men can vote,Only educated can vote,A,Universal Adult Franchise means every citizen above 18 has the right to vote regardless of caste religion or gender!,Students understand democracy,NCERT Class 7 SST - Democracy - Equality and Justice
Q118,7,SST,Democracy - Equality and Justice,Equality,Medium,MCQ,The Indian Constitution guarantees equality through:,Fundamental Rights,Directive Principles,Fundamental Duties,Preamble only,A,Fundamental Rights (Part III of Constitution) guarantee equality to all citizens!,Students understand equality,NCERT Class 7 SST - Democracy - Equality and Justice
Q119,7,SST,Democracy - Equality and Justice,Equality,Hard,MCQ,Untouchability was abolished by:,Article 17,Article 14,Article 21,Article 32,A,Article 17 of the Indian Constitution abolished untouchability and forbids its practice!,Students understand equality,NCERT Class 7 SST - Democracy - Equality and Justice
Q120,7,SST,Democracy - Equality and Justice,Global Equality Movements,Medium,MCQ,Civil rights movement in USA was led by:,Martin Luther King Jr,Abraham Lincoln,George Washington,John F Kennedy,A,Martin Luther King Jr led the civil rights movement fighting for equal rights for African Americans!,Students understand global equality movements,NCERT Class 7 SST - Democracy - Equality and Justice
Q121,7,SST,Democracy - Equality and Justice,Democracy,Easy,MCQ,The right to vote in India is given from age:,18,21,25,16,A,In India the voting age is 18 years. This was reduced from 21 to 18 by the 61st Amendment in 1988!,Students understand democracy,NCERT Class 7 SST - Democracy - Equality and Justice
Q122,7,SST,Democracy - Equality and Justice,Global Equality Movements,Medium,MCQ,Rosa Parks became famous for:,Refusing to give up her bus seat,Leading an army,Becoming president,Writing a constitution,A,Rosa Parks refused to give up her seat for a white person on a bus in 1955 sparking the US civil rights movement!,Students understand global equality movements,NCERT Class 7 SST - Democracy - Equality and Justice
Q123,7,SST,Democracy - Equality and Justice,Equality,Hard,MCQ,The Indian Constitution prohibits discrimination on the basis of:,Religion caste sex or place of birth,Only religion,Only caste,Only gender,A,Article 15 prohibits discrimination on grounds of religion race caste sex or place of birth!,Students understand equality,NCERT Class 7 SST - Democracy - Equality and Justice
Q124,7,SST,State Government,State Executive,Easy,MCQ,The head of a state government is the:,Chief Minister,Governor,Prime Minister,President,A,The Chief Minister is the head of the elected state government - like a PM at the state level!,Students understand state executive,NCERT Class 7 SST - State Government
Q125,7,SST,State Government,State Executive,Medium,MCQ,The constitutional head of a state is the:,Governor,Chief Minister,Speaker,High Court Judge,A,The Governor is the constitutional head of state appointed by the President of India!,Students understand state executive,NCERT Class 7 SST - State Government
Q126,7,SST,State Government,State Legislature,Easy,MCQ,State laws are made by the:,State Legislature,Parliament,High Court,Supreme Court,A,State Legislature (Vidhan Sabha/Vidhan Parishad) makes laws for the state!,Students understand state legislature,NCERT Class 7 SST - State Government
Q127,7,SST,State Government,State Legislature,Medium,MCQ,The lower house of state legislature is called:,Vidhan Sabha,Vidhan Parishad,Lok Sabha,Rajya Sabha,A,Vidhan Sabha is the lower house of state legislature where MLAs (elected members) sit!,Students understand state legislature,NCERT Class 7 SST - State Government
Q128,7,SST,State Government,State Legislature,Easy,MCQ,MLAs are elected by:,Citizens of the constituency,Governor,Chief Minister,Parliament,A,MLAs (Members of Legislative Assembly) are directly elected by voters of each constituency!,Students understand state legislature,NCERT Class 7 SST - State Government
Q129,7,SST,State Government,State Legislature,Hard,MCQ,The state of Goa has how many Lok Sabha seats?,2,5,1,4,A,Goa is a small state with 2 Lok Sabha constituencies: North Goa and South Goa!,Students understand state legislature,NCERT Class 7 SST - State Government
Q130,7,SST,Inside Our Earth,Layers of the Earth,Easy,MCQ,The outermost layer of the Earth is called the:,Crust,Mantle,Core,Hydrosphere,A,The Crust is the outermost solid layer of the Earth. We live on it!,Students understand layers of the earth,NCERT Class 7 SST - Inside Our Earth
Q131,7,SST,Inside Our Earth,Layers of the Earth,Easy,MCQ,The innermost layer of the Earth is:,Core,Mantle,Crust,Hydrosphere,A,The Core is at the centre of the Earth. The inner core is solid outer core is liquid!,Students understand layers of the earth,NCERT Class 7 SST - Inside Our Earth
Q132,7,SST,Inside Our Earth,Types of Rocks,Easy,MCQ,Rocks formed from cooled lava are called:,Igneous rocks,Sedimentary rocks,Metamorphic rocks,Limestone only,A,Igneous means fire. Lava cools and solidifies to form igneous rocks like basalt and granite!,Students understand types of rocks,NCERT Class 7 SST - Inside Our Earth
Q133,7,SST,Inside Our Earth,Types of Rocks,Medium,MCQ,Fossils are found in which type of rock?,Sedimentary,Igneous,Metamorphic,All types,A,Fossils form when organisms are buried in sediment layers that turn to sedimentary rock!,Students understand types of rocks,NCERT Class 7 SST - Inside Our Earth
Q134,7,SST,Inside Our Earth,Layers of the Earth,Easy,MCQ,The middle layer of the Earth is called:,Mantle,Crust,Core,Magma layer,A,The Mantle lies between the Crust and the Core. It contains semi-molten rock called magma!,Students understand layers of the earth,NCERT Class 7 SST - Inside Our Earth
Q135,7,SST,Inside Our Earth,Layers of the Earth,Hard,MCQ,The deepest mine in the world can reach up to:,About 4 km,About 40 km,About 400 km,About 4000 km,A,Even our deepest mines only reach about 4 km - the Earths crust alone is 35 km thick!,Students understand layers of the earth,NCERT Class 7 SST - Inside Our Earth
Q136,7,SST,Our Changing Earth,Earthquakes,Easy,MCQ,Earthquakes occur because of movement of:,Tectonic plates,Clouds,Oceans,Volcanoes,A,The Earths crust is made of tectonic plates. When they move and collide earthquakes occur!,Students understand earthquakes,NCERT Class 7 SST - Our Changing Earth
Q137,7,SST,Our Changing Earth,Volcanoes,Easy,MCQ,A volcano is formed when:,Magma erupts through the Earths surface,Plates freeze,Ice melts quickly,Rivers flood plains,A,Magma (molten rock) from inside the Earth erupts through weak spots to form volcanoes!,Students understand volcanoes,NCERT Class 7 SST - Our Changing Earth
Q138,7,SST,Our Changing Earth,Earthquakes,Medium,MCQ,The instrument used to measure earthquakes is:,Seismograph,Thermometer,Barometer,Anemometer,A,A Seismograph measures the intensity and location of earthquakes!,Students understand earthquakes,NCERT Class 7 SST - Our Changing Earth
Q139,7,SST,Our Changing Earth,River Features,Medium,MCQ,Meanders are formed by:,Rivers,Glaciers,Wind,Volcanoes,A,Rivers form curved loops called meanders on flat land as they wind across the surface!,Students understand river features,NCERT Class 7 SST - Our Changing Earth
Q140,7,SST,Our Changing Earth,River Features,Medium,MCQ,Which of these is a depositional feature of rivers?,Delta,Valley,Gorge,Waterfall,A,A delta is formed when a river deposits silt at its mouth before meeting the sea!,Students understand river features,NCERT Class 7 SST - Our Changing Earth
Q141,7,SST,Our Changing Earth,Earthquakes,Hard,MCQ,The Richter scale is used to measure:,Magnitude of earthquakes,Height of volcanoes,Speed of wind,Depth of ocean,A,The Richter scale measures the magnitude (strength) of earthquakes from 1 to 10!,Students understand earthquakes,NCERT Class 7 SST - Our Changing Earth
Q142,7,SST,Tracing Changes Through Thousand Years,Historical Sources,Medium,MCQ,Manuscripts in medieval India were usually written on:,Palm leaves or bark,Paper only,Cloth only,Stone always,A,Before paper became common manuscripts were written on palm leaves or the bark of the birch tree!,Students understand historical sources,NCERT Class 7 SST - Tracing Changes Through Thousand Years
Q143,7,SST,Tracing Changes Through Thousand Years,Medieval Technology,Medium,MCQ,The Persian wheel was used for:,Irrigation,Grinding grain,Measuring time,Warfare,A,The Persian wheel (rhat) is a water-lifting device driven by animals used for irrigation!,Students understand medieval technology,NCERT Class 7 SST - Tracing Changes Through Thousand Years
Q144,7,SST,Tracing Changes Through Thousand Years,Historical Geography,Hard,MCQ,The word Hindustan originally referred to:,The region around the Indus river,All of India,South India,The Deccan plateau,A,Hindustan originally referred to the region around the Indus used by early Islamic writers!,Students understand historical geography,NCERT Class 7 SST - Tracing Changes Through Thousand Years
Q145,7,SST,Tracing Changes Through Thousand Years,Historical Sources,Medium,MCQ,Historical records written by court historians are called:,Chronicles,Inscriptions,Coins,Maps,A,Chronicles are historical accounts written by court historians recording events of their time!,Students understand historical sources,NCERT Class 7 SST - Tracing Changes Through Thousand Years
Q146,7,SST,Tracing Changes Through Thousand Years,Historical Sources,Easy,MCQ,Coins are an important source of history because they show:,Rulers dates and symbols,Weather patterns,Agricultural practices,Population size,A,Coins tell us about rulers who issued them the time period and the symbols of their kingdoms!,Students understand historical sources,NCERT Class 7 SST - Tracing Changes Through Thousand Years
Q147,7,SST,Tracing Changes Through Thousand Years,Historical Sources,Hard,MCQ,The study of inscriptions is called:,Epigraphy,Numismatics,Archaeology,Palaeography,A,Epigraphy = study of inscriptions carved on stone metal or other materials!,Students understand historical sources,NCERT Class 7 SST - Tracing Changes Through Thousand Years
Q148,7,SST,New Kings and Kingdoms,Regional Kingdoms,Easy,MCQ,The Chola Empire was located in:,South India,North India,East India,Central India,A,The Chola dynasty was one of the longest-ruling dynasties in South India!,Students understand regional kingdoms,NCERT Class 7 SST - New Kings and Kingdoms
Q149,7,SST,New Kings and Kingdoms,Historical Sources,Medium,MCQ,Prashastis were:,Inscriptions praising kings,Tax records,Religious texts,Land grants,A,Prashastis were inscriptions composed to praise kings recording their victories and qualities!,Students understand historical sources,NCERT Class 7 SST - New Kings and Kingdoms
Q150,7,SST,New Kings and Kingdoms,Land Grants,Hard,MCQ,Land grants given to Brahmanas were called:,Agrahara,Prashasti,Mandala,Samanta,A,Agrahara were land grants given to Brahmanas and temples free from taxes!,Students understand land grants,NCERT Class 7 SST - New Kings and Kingdoms
Q151,7,SST,New Kings and Kingdoms,Regional Kingdoms,Medium,MCQ,The Rashtrakutas were rulers of:,Deccan,Bengal,Punjab,Rajasthan,A,The Rashtrakutas were a powerful dynasty who ruled over the Deccan region of India!,Students understand regional kingdoms,NCERT Class 7 SST - New Kings and Kingdoms
Q152,7,SST,New Kings and Kingdoms,Political Structure,Hard,MCQ,Samantas were:,Subordinate rulers who paid tribute,Priests,Merchants,Tax collectors,A,Samantas were subordinate kings who paid tribute and provided military service to more powerful kings!,Students understand political structure,NCERT Class 7 SST - New Kings and Kingdoms
Q153,7,SST,New Kings and Kingdoms,Regional Kingdoms,Hard,MCQ,Tripartite struggle was fought over control of:,Kannauj,Panipat,Delhi,Agra,A,Three kingdoms - Gurjara-Pratiharas Rashtrakutas and Palas - fought for control of Kannauj!,Students understand regional kingdoms,NCERT Class 7 SST - New Kings and Kingdoms
ENG_C7_758,7,English,Three Questions,Theme,Medium,MCQ,Hermit says important person is:,King,Family,The person you are with,Hermit,C,Value of present interaction,,Honeycomb Unit 1
ENG_C7_740,7,English,Three Questions,Ethics,Medium,MCQ,hermit says most important time is:,Tomorrow,Now,Yesterday,Noon,B,Only the present allows for action,,Honeycomb Unit 1
ENG_C7_763,7,English,Three Questions,Theme,Medium,MCQ,hermits says important person is:,Ruler,Wise man,Person you are with,Warrior,C,Ethics of present relationship,,Honeycomb Unit 1
MATH_C7_529,7,Math,A Peek Beyond the Point,Measurement,Easy,MCQ,1 meter has how many mm?,100,10,1000,1,C,Standard metric conversion,,Ganita Prakash Ch 3
MATH_C7_530,7,Math,Large Numbers Around Us,Place Value,Easy,MCQ,100 lakhs equal to:,1 crore,1 million,10 crores,1000,A,Standard Indian numbering system,,Ganita Prakash Ch 1
MATH_C7_539,7,Math,Working with Fractions,Simplification,Medium,MCQ,24/56 simplified is:,12/28,3/7,6/14,4/8,B,Divide by HCF 8,,Ganita Prakash Ch 8
MATH_C7_739,7,Math,Working with Fractions,Simplification,Medium,MCQ,24/56 simplified to lowest form is:,12/28,3/7,6/14,4/8,B,Divide by highest common factor 8,,Ganita Prakash Ch 8
MATH_C7_402,7,Math,Geometric Twins,Pythagoras Property,Hard,MCQ,A 15 m long ladder reaches a window 12 m high from the ground. How far is the foot of the ladder from the wall?,3 m,9 m,27 m,81 m,B,Using $a^2 + b^2 = c^2$: $b^2 = 15^2 - 12^2 = 225 - 144 = 81$. $\\sqrt{81} = 9 m$.,,NCERT Ch 6
MATH_C7_555,7,Math,Connecting the Dots,Probability,Hard,MCQ,A bag has 5 red and 5 blue balls; what is the probability of picking a red ball?,1,0.5,0.2,0.1,B,Probability is favorable outcomes (5) divided by total outcomes (10) which equals 1/2 or 0.5,,NCERT Ch 3
SST_C7_553,7,SST,Understanding the Weather,Instruments,Easy,MCQ,A Barometer is specifically used to measure:,Wind speed,Air pressure,Humidity,Temperature,B,Atmospheric pressure is measured by a barometer to help predict weather changes,,Exploring Society Ch 2
SCI_C7_754,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,A car at 15 m/s travels how far in 1 min?,15 m,90 m,900 m,150 m,C,Product of speed and 60 seconds,,Curiosity Ch 8
SCI_C7_704,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,A car covers 100 km in 2 hours. What is its speed in m/s?,50 m/s,13.88 m/s,25 m/s,10 m/s,B,Speed is $50 km/h$; and converting to $m/s$ ($50 \\times 5/18$) equals 13.88,,Curiosity Ch 8
SCI_CH8_001,7,Science,Measurement of Time and Motion,Speed Calculation,Hard,MCQ,A car travels 100 km in 2 hours. What is its speed in $m/s$?,$50 m/s$,$25 m/s$,$13.88 m/s$,$10 m/s$,C,Speed = Distance/Time = $100/2 = 50 km/h$. To convert to $m/s$ multiply by $5/18$: $50 \\times 5/18 \\approx 13.88 m/s$.,,Ch 8: Curiosity
SCI_C7_516,7,Science,Heat Transfer in Nature,Thermometry,Easy,MCQ,A clinical thermometer is used to measure temperature of:,Water,Air,Human body,Metals,C,Clinical thermometers have a specific range for human health,,Curiosity Ch 7
SCI_C7_210,7,Science,Electricity: Circuits and Components,Switching,Easy,MCQ,A component used to break or complete an electric circuit is a:,Cell,Wire,Switch,Bulb,C,A switch acts as a control mechanism to allow or block the flow of electric current.,,Curiosity Ch 3
SCI_C7_262,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,A cyclist covers 12 km in 30 minutes. What is the speed in $km/h$?,6 $km/h$,12 $km/h$,24 $km/h$,30 $km/h$,C,30 mins is 0.5 hours. Speed = Distance / Time = $12 / 0.5 = 24 km/h$.,,
SCI_C7_738,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,A cyclist goes 12km in 30min. Speed in km/h is:,6,12,24,30,C,Distance / Time = $12 / 0.5 = 24$,,Curiosity Ch 8
SCI_C7_209,7,Science,Measurement of Time and Motion,Time,Easy,MCQ,A device that uses the periodic motion of a swinging weight to measure time is a:,Stop watch,Simple pendulum,Digital clock,Sun dial,B,The periodic motion of a simple pendulum was the basis for historical timekeeping devices.,,Curiosity Ch 8
SCI_C7_678,7,Science,Electricity,Circuit Components,Easy,MCQ,A device used to 'open' or 'close' an electric circuit is a:,Switch,Bulb,Cell,Wire,A,A switch acts as a control to allow or block the flow of electric current,,Curiosity Ch 3
MATH_C7_586,7,Math,Connecting the Dots,Data display,Medium,MCQ,A display where each data value is shown as a dot above a number line is a:,Bar graph,Pie chart,Dot plot,Frequency table,C,Dot plots visualize distribution and variability for small datasets,,Ganita Prakash Ch 13
MATH_C7_484,7,Math,Connecting the Dots,Data Visualization,Medium,MCQ,A graph used to show changes in data over time is a:,Pie chart,Bar graph,Line graph,Dot plot,C,Line graphs are ideal for showing trends and changes over continuous intervals,,Ganita Prakash Ch 13
SCI_C7_559,7,Science,Electricity,Components,Easy,MCQ,A group of two or more cells connected together is called a:,Fuse,Switch,Battery,Generator,C,A battery is a collection of electrochemical cells linked in series or parallel,,Curiosity Ch 3
SST_C7_671,7,SST,New Beginnings: Cities and States,History,Medium,MCQ,A guild known as 'Manigramam' was prominent in which part of ancient India?,North India,South India,West India,East India,B,Manigramam was a powerful guild of traders in the southern region of the subcontinent,,Exploring Society Ch 4
SCI_C7_701,7,Science,Earth Moon and the Sun,Eclipses,Medium,MCQ,A lunar eclipse occurs when:,Moon is between Sun and Earth,Earth is between Sun and Moon,Sun is between Earth and Moon,Moon blocks sunlight,B,Earth's shadow falls on the Full Moon obstructing the Sun's light,,Curiosity Ch 12
SST_C7_708,7,SST,Understanding Markets,Economics,Easy,MCQ,A market held on a specific day of the week is a:,Shopping mall,Neighborhood shop,Weekly market,Wholesale hub,C,Weekly markets serve local needs without permanent shops,,Exploring Society Ch 12
SST_C7_560,7,SST,Understanding Markets,Economics,Easy,MCQ,A market that is held on a specific day of the week is called a:,Shopping mall,Neighborhood shop,Weekly market,Wholesale hub,C,Weekly markets serve local needs and do not have permanent structures,,Exploring Society Ch 12
SST_C7_477,7,SST,Understanding Markets,Economics,Medium,MCQ,A market where goods are sold in bulk to retailers is a:,Weekly market,Shopping mall,Wholesale market,Neighborhood shop,C,Wholesalers act as intermediaries between producers and small shopkeepers,,Exploring Society Ch 12
SST_C7_498,7,SST,Understanding Markets,Economics,Easy,MCQ,A market where goods are sold in large quantities to retailers is a:,Weekly market,Shopping mall,Wholesale market,Neighborhood shop,C,Wholesale markets act as the link between producers and local retailers,,Exploring Society Ch 12
MATH_C7_520,7,Math,Number Play,Logic,Hard,MCQ,A number is divisible by 9 if its digit sum is a multiple of:,3,9,2,5,B,This is the standard divisibility rule for 9,,Ganita Prakash Ch 6
MATH_C7_679,7,Math,Number Play,Divisibility,Hard,MCQ,A number is divisible by 9 if the sum of its digits is a multiple of:,3,9,2,5,B,The divisibility rule for 9 states that the digit sum must be divisible by 9,,Ganita Prakash Ch 6
SST_C7_568,7,SST,Understanding Markets,Economics,Easy,MCQ,A person who buys goods from a wholesale market to sell them to consumers is a:,Producer,Retailer,Manufacturer,Farmer,B,Retailers act as the final link in the market chain,,Exploring Society Ch 12
SST_C7_691,7,SST,Exploring Society,History,Easy,MCQ,A person who is skilled in making maps is known as a:,Calligrapher,Cartographer,Chronicler,Scribe,B,Cartography is the specialized science and art of map construction,,Exploring Society Ch 4
SST_C7_269,7,SST,Tracing Changes,Cartography,Easy,MCQ,A person who makes maps is called a:,Calligrapher,Cartographer,Chronicler,Scribe,B,Cartography is the specialized study and practice of map-making. [7],,
SST_C7_353,7,SST,Tracing Changes,Cartography,Easy,MCQ,A person who makes maps is known as a:,Calligrapher,Cartographer,Chronicler,Scribe,B,"Cartography is the specialized science and art of map construction.[4,5]",,Our Pasts II Ch 1
SCI_C7_484,7,Science,Light: Shadows and Reflections,Physics,Easy,MCQ,A pinhole camera forms an image that is:,Upright and real,Inverted and real,Upright and virtual,Inverted and virtual,B,Light rays from the top and bottom cross through the pinhole; inverting the image,,Curiosity Ch 11
SST_C7_645,7,SST,Tracing Changes,History,Easy,MCQ,A place where historical records and manuscripts are preserved is a/an:,Laboratory,Archive,Temple,Factory,B,Archives are essential for historians to study written documents from the past,,Our Pasts II Ch 1
MATH_C7_552,7,Math,Connecting the Dots,Quadrants,Medium,MCQ,A point where both x and y coordinates are negative lies in which quadrant?,Quadrant I,Quadrant II,Quadrant III,Quadrant IV,C,Quadrant III is the region where both the horizontal and vertical values are negative,,Ganita Prakash Ch 13
MATH_C7_482,7,Math,Connecting the Dots,Cartesian Plane,Medium,MCQ,A point with coordinates $(-3 5)$ lies in which quadrant?,Quadrant I,Quadrant II,Quadrant III,Quadrant IV,B,Quadrant II contains points where $x$ is negative and $y$ is positive,,Ganita Prakash Ch 13
MATH_C7_407,7,Math,Expressions using Letter-Numbers,Variables,Easy,MCQ,A quantity that can take various numerical values is called a:,Constant,Variable,Expression,Term,B,A variable is represented by a letter and does not have a fixed value.,,Ganita Prakash I Ch 4
SST_C7_143,7,SST,Understanding Weather,Instruments,Easy,MCQ,A Rain Gauge is used to measure:,Wind speed,Rainfall,Humidity,Air pressure,B,A rain gauge is a meteorological instrument for determining the amount of precipitation in a set time.,,
MATH_C7_678,7,Math,Geometric Twins,Polygons,Easy,MCQ,A regular pentagon has a side length $s$. What is its perimeter?,$4s$,$5s$,$6s$,$s^2$,B,Perimeter of a regular polygon is number of sides multiplied by side length; $5 \\times s$,,Ganita Prakash Ch 4
MATH_C7_096,7,Math,Data Handling,Visualisation,Medium,MCQ,A sector of a pie chart representing basketball covers $90^{\\circ}$. What percentage is this?,$90\\%$,$25\\%$,$50\\%$,$10\\%$,B,A full circle is $360^{\\circ}$. So $90/360 = 1/4 = 25\\%$.,,
SST_C7_485,7,SST,Understanding Markets,Civics,Medium,MCQ,A sequence of markets that connected between producer and consumer is:,Market chain,Market ring,Trade circle,Shopping line,A,The market chain involves multiple steps from factories to wholesalers to retailers,,Exploring Society Ch 12
SST_C7_698,7,SST,Understanding Markets,Civics,Medium,MCQ,A sequence of markets that connects between producer and consumer is:,Market chain,Market ring,Trade circle,Shopping line,A,The market chain involves factories; wholesalers; and local retailers,,Exploring Society Ch 12
SST_C7_733,7,SST,Understanding Markets,Economics,Easy,MCQ,A shopping mall is found in which area?,Weekly fair,Rural village,Urban area,Farming land,C,Large enclosed multi-shop complex,,Exploring Society Ch 12
MATH_C7_587,7,Math,Connecting the Dots,Data Literacy,Easy,MCQ,A single number that summarizes a group of values is called a:,Constant,Representative value,Variable,Outlier,B,Representative values like mean or median describe the central tendency of data,,Ganita Prakash Ch 13
SCI_C7_563,7,Science,Light: Shadows and Reflections,Physics,Medium,MCQ,A smooth polished surface which can reflect light is a:,Lens,Prism,Mirror,Screen,C,Mirrors are designed to reflect light to form images,,Curiosity Ch 11
SCI_C7_501,7,Science,Earth Moon and the Sun,Eclipses,Medium,MCQ,A solar eclipse occurs when:,Earth is between Sun and Moon,Moon is between Sun and Earth,Sun is between Earth and Moon,Earth blocks sunlight,B,The Moon passes between the Sun and Earth; casting a shadow on Earth's surface,,Curiosity Ch 12
SCI_C7_506,7,Science,Exploring Substances,pH,Medium,MCQ,A solution that does not change the color of either red or blue litmus is called:,Acidic,Basic,Neutral,Salty,C,Neutral solutions lack both acidic and basic properties and have a pH near 7,,Curiosity Ch 2
SCI_C7_686,7,Science,Exploring Substances,Indicators,Medium,MCQ,A solution that does not change the color of red or blue litmus is:,Acidic,Basic,Neutral,Salty,C,Neutral substances like pure water have no effect on litmus indicators,,Curiosity Ch 2
SCI_C7_716,7,Science,Exploring Substances,pH,Medium,MCQ,A substance that tastes bitter and feels soapy to touch is a:,Acid,Base,Neutral,Metal,B,Bases are characterized by their bitter taste and soapy texture,,Curiosity Ch 2
SCI_C7_703,7,Science,Exploring Substances,pH,Medium,MCQ,A substance that tastes sour and turns blue litmus red is a:,Base,Acid,Neutral,Salt,B,Acids are defined by their low pH and reaction with blue litmus,,Curiosity Ch 2
SST_C7_637,7,SST,Understanding Markets,Economics,Medium,MCQ,A trader who buys goods in bulk from a manufacturer and sells to retailers is a:,Consumer,Wholesaler,Farmer,Clerk,B,Wholesalers are the middlemen in the market chain before the final shop,,Exploring Society Ch 12
SST_C7_683,7,SST,Understanding Markets,Economics,Medium,MCQ,A trader who buys goods in bulk to sell to retailers is a:,Consumer,Producer,Wholesaler,Agent,C,Wholesalers act as intermediaries in the market chain,,Exploring Society Ch 12
MATH_C7_567,7,Math,Geometric Twins,Triangles,Easy,MCQ,A triangle having two sides of equal length is called:,Scalene,Isosceles,Equilateral,Right,B,Isosceles triangles are defined by having at least two equal sides,,Ganita Prakash II Ch 1
MATH_C7_719,7,Math,Geometric Twins,Polygons,Easy,MCQ,A triangle with all angles measuring 60 degrees is:,Scalene,Isosceles,Equilateral,Right,C,In an equilateral triangle all sides and all angles are equal,,Ganita Prakash II Ch 1
MATH_C7_683,7,Math,Geometric Twins,Polygons,Easy,MCQ,A triangle with all three sides of equal length is called:,Isosceles,Equilateral,Scalene,Right,B,By definition an equilateral triangle is a regular polygon with three equal sides,,Ganita Prakash II Ch 1
MATH_C7_735,7,Math,Geometric Twins,Polygons,Easy,MCQ,A triangle with three equal sides is:,Isosceles,Equilateral,Scalene,Right,B,Regular polygon classification,,Ganita Prakash II Ch 1
SCI_C7_017,7,Science,Exploring Substances,Indicators,Medium,MCQ,A turmeric stain on a white shirt turns reddish-brown when washed with soap because:,Soap is acidic,Soap is basic,Turmeric is a base,Turmeric is a soap,B,Turmeric is a natural indicator that reacts with basic substances like soap to change color.,,Curiosity Ch 2
MATH_C7_380,7,Math,A Peek Beyond the Point,Measurement,Medium,MCQ,A USB cable length is 4 and 8/10 units. How is this written as a decimal?,4.08,4.8,0.48,48,B,The expression '4 and 8/10' translates to $4 + 0.8 = 4.8$.,,Ganita Prakash Ch 3
ENG_C7_526,7,English,Rani Abbakka,History,Medium,MCQ,Abbakka fought against which power?,British,Portuguese,French,Dutch,B,Resisted naval control of coastal trade,,Poorvi Unit 5
ENG_C7_741,7,English,Rani Abbakka,History,Medium,MCQ,Abbakka ruled coastal kingdom of:,Goa,Ullal,Mangalore,Kochi,B,Warrior queen from Karnataka,,Poorvi Unit 5
ENG_C7_509,7,English,Three Questions,Ethics,Medium,MCQ,According to the hermit the most important affair to do in life is:,Gain wealth,Do good to people,Win wars,Live alone,B,The hermit teaches that our purpose on Earth is to do good to the person we are with,,Honeycomb Unit 1
ENG_C7_261,7,English,Three Questions,Ethics,Medium,MCQ,According to the hermit the most important time for action is:,Tomorrow,Yesterday,Now,A week later,C,The hermit teaches that the present moment is the only time we have power to act.,,
ENG_C7_495,7,English,Three Questions,Ethics,Medium,MCQ,According to the hermit the most important time for any action is:,Tomorrow,In the future,Now,Yesterday,C,The hermit teaches that the present is the only time we have the power to act,,Honeycomb Unit 1
ENG_C7_085,7,English,Three Questions,Ethics,Medium,MCQ,According to the hermit the most important time is:,Tomorrow,Yesterday,Now,A week later,C,The hermit teaches that the present moment is the only time we have control over. [5],,
ENG_C7_011,7,English,Three Questions,Theme,Medium,MCQ,According to the hermit what is the most important time for any action?,Tomorrow,Yesterday,Now,A week later,C,The hermit explains that 'Now' is the only time when we have the power to act.[8],,Honeycomb Unit 1
ENG_C7_682,7,English,Three Questions,Ethics,Medium,MCQ,According to the hermit when is the most important time for any action?,Tomorrow,Yesterday,Now,Never,C,The hermit teaches that 'Now' is the only time we have the power to act,,Honeycomb Unit 1
ENG_C7_677,7,English,Try Again,Moral,Easy,MCQ,According to the poem 'Try Again'; what should you do if you fail the first time?,Give up,Cry,Try again,Do nothing,C,The poem emphasizes the value of perseverance in reaching a goal,,Poorvi Unit 1
MATH_C7_534,7,Math,Operations with Integers,Inverses,Easy,MCQ,Additive inverse of 6 is:,-6,0,1,1/6,A,Number that yields zero sum,,NCERT Ch 1
SST_C7_523,7,SST,The Rise of Empires,History,Medium,MCQ,Advisor of Chandragupta Maurya was:,Ashoka,Kautilya,Megasthenes,Seleucus,B,Chanakya or Kautilya wrote the Arthashastra,,Exploring Society Ch 5
SST_C7_763,7,SST,The Rise of Empires,History,Medium,MCQ,Advisor of Chandragupta Maurya:,Ashoka,Kautilya,Akbar,Shivaji,B,Political blueprinter for Mauryas,,Exploring Society Ch 5
SCI_C7_739,7,Science,Heat Transfer in Nature,Physics,Hard,MCQ,Air movement from sea to land day is:,Sea breeze,Land breeze,Storm,Cyclone,A,Caused by differential heating of land and water,,Curiosity Ch 7
MATH_C7_087,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,Among 0.9 1.1 1.01 and 1.11 which is closest to 1?,0.9,1.1,1.01,1.11,C,The distance from 1 to 1.01 is only 0.01 while 0.9 is 0.1 away.,,
MATH_C7_558,7,Math,Geometric Twins,Angles,Easy,MCQ,An angle measuring exactly $90^{\\circ}$ is called a:,Acute angle,Obtuse angle,Right angle,Reflex angle,C,A right angle is the standard corner angle of a square or rectangle,,Ganita Prakash II Ch 1
MATH_C7_714,7,Math,Geometric Twins,Angles,Easy,MCQ,An angle measuring exactly 90 degrees is a:,Acute angle,Right angle,Obtuse angle,Reflex angle,B,A right angle is the standard corner angle of a square,,Ganita Prakash II Ch 1
SCI_C7_729,7,Science,Electricity,Circuit,Easy,MCQ,An electric switch is used to:,Open or Close circuit,Produce electricity,Measure current,Heat wires,A,Basic functional component for circuit control,,Curiosity Ch 3
SST_C7_393,7,SST,Geographical Diversity of India,Landforms,Easy,MCQ,An elevated landform with a flat surface and steep sides is a:,Mountain,Plateau,Valley,Delta,B,A plateau is a highland area with a flat top much like a tableland.,,Exploring Society Ch 1
SST_C7_644,7,SST,Tracing Changes,History,Medium,MCQ,An empire that stretches across several different regions is called:,Regional empire,Pan-regional empire,Local kingdom,Nomad camp,B,Empires like the Mauryas and Guptas are examples of pan-regional rule,,Our Pasts II Ch 1
MATH_C7_023,7,Math,Geometric Twins,Triangles,Easy,MCQ,An equilateral triangle has _____ equal sides.,1,2,3,0,C,"An equilateral triangle is defined by having all three sides equal in length.""",,Ganita Prakash Ch 9
MATH_C7_205,7,Math,Geometric Twins,Triangles,Easy,MCQ,An equilateral triangle is a triangle with:,Two equal sides,One side equal,Three equal sides,No equal sides,C,By definition an equilateral triangle is a regular polygon with three sides of equal length.,,Ganita Prakash II Ch 1
SCI_C7_146,7,Science,Light: Shadows and Reflections,Materials,Medium,MCQ,An object that allows only some light to pass through is called:,Opaque,Transparent,Translucent,Luminous,C,Translucent materials scatter light so objects cannot be seen clearly through them.,,
SCI_C7_500,7,Science,Light: Shadows and Reflections,Physics,Easy,MCQ,An object that does not allow any light to pass through is:,Transparent,Translucent,Opaque,Luminous,C,Opaque materials block all light and form dark shadows,,Curiosity Ch 11
SCI_C7_570,7,Science,Wastewater Story,Sanitation,Medium,MCQ,Anaerobic bacteria break down sludge to produce:,Biogas,Oxygen,Chlorine,Silt,A,Biogas is a useful fuel byproduct of sewage treatment,,Curiosity Ch 13
SCI_C7_750,7,Science,Life Processes in Animals,Respiration,Medium,MCQ,Anaerobic muscle respiration produces:,Alcohol,Lactic acid,Carbonic acid,Citric acid,B,Occurs during heavy exercise when oxygen is low,,Curiosity Ch 9
SCI_C7_558,7,Science,Life Processes in Animals,Respiration,Medium,MCQ,Anaerobic respiration in muscle cells produces:,Alcohol,Lactic acid,Carbonic acid,Citric acid,B,During heavy exercise muscles break down glucose without oxygen; producing lactic acid,,Curiosity Ch 9
MATH_C7_764,7,Math,Geometric Twins,Polygons,Easy,MCQ,Angles sum of triangle is:,90,180,360,270,B,Standard geometric theorem,,Ganita Prakash II Ch 1
ENG_C7_529,7,English,Three Questions,Theme,Medium,MCQ,Answers to three questions ensure:,Wealth,No failure,Many friends,Long life,B,Belief of the king in the story,,Honeycomb Unit 1
ENG_C7_724,7,English,The Tiny Teacher,Life Cycle,Easy,MCQ,Ant young ones are called:,Grubs,Larva,Puppies,Kittens,A,Specific term for ant larvae in the textbook,,An Alien Hand Unit 1
SCI_C7_148,7,Science,Exploring Substances,Neutralization,Easy,MCQ,Antacids like Milk of Magnesia are used to treat:,Headache,Fever,Acidity,Body pain,C,Milk of Magnesia is basic and neutralizes excess hydrochloric acid in the stomach. [2],,
SCI_C7_517,7,Science,Exploring Substances,Neutralization,Medium,MCQ,Antacids like Milk of Magnesia contain which base?,Sodium hydroxide,Magnesium hydroxide,Calcium carbonate,Zinc oxide,B,Magnesium hydroxide neutralizes excess stomach acid,,Curiosity Ch 2
SCI_C7_710,7,Science,Exploring Substances,Neutralization,Medium,MCQ,Antacids like Milk of Magnesia contain which basic chemical?,Magnesium hydroxide,Sodium chloride,Calcium oxide,Zinc sulphate,A,Magnesium hydroxide neutralizes excess hydrochloric acid in the stomach,,Curiosity Ch 2
ENG_C7_513,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants communicate by touching their:,Legs,Eyes,Feelers,Wings,C,Feelers (antennae) are the primary tools for message exchange in ants,,An Alien Hand Unit 1
ENG_C7_544,7,English,The Tiny Teacher,Behavior,Easy,MCQ,Ants communicate by touching:,Legs,Feelers,Eyes,Wings,B,Means of passing messages,,An Alien Hand Unit 1
ENG_C7_683,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants communicate with each other by touching their:,Legs,Eyes,Feelers,Wings,C,Ants use their antennae or feelers to pass messages and identify members,,An Alien Hand Unit 1
ENG_C7_733,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants greet by touching their:,Legs,Feelers,Eyes,Wings,B,Primary method for colony signaling,,An Alien Hand Unit 1
ENG_C7_539,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants greeting method is touching:,Feelers,Legs,Heads,Wings,A,Chemical and tactile interaction,,An Alien Hand Unit 1
ENG_C7_728,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants pass messages by touching their:,Feelers,Legs,Heads,Wings,A,Primary communication method in ant colonies,,An Alien Hand Unit 1
ENG_C7_145,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants pass messages to each other by touching their:,Legs,Wings,Feelers,Eyes,C,Feelers (antennae) are the primary tools for chemical and tactile communication in ants. [6],,
ENG_C7_759,7,English,The Tiny Teacher,Behavior,Easy,MCQ,Ants pass signals by touching:,Legs,Feelers,Eyes,Wings,B,Means of message exchange in colony,,An Alien Hand Unit 1
ENG_C7_533,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants touch feelers to:,Fight,Greet and talk,Dance,Sleep,B,Communication method in colonies,,An Alien Hand Unit 1
ENG_C7_528,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants use feelers to:,Fight,Greet and talk,Run,Fly,B,Primary method of sharing messages,,An Alien Hand Unit 1
SST_C7_532,7,SST,Constitution of India,Governance,Medium,MCQ,Architect of Constitution was:,Nehru,Gandhi,B.R. Ambedkar,Prasad,C,He led the Drafting Committee,,Exploring Society Ch 10
SST_C7_764,7,SST,Constitution of India,Governance,Medium,MCQ,Architect of Constitution:,Nehru,Gandhi,B.R. Ambedkar,Prasad,B,Drafting Committee team leader,,Exploring Society Ch 10
SST_C7_759,7,SST,Constitution of India,Governance,Medium,MCQ,Architect of the Constitution:,Nehru,Gandhi,B.R. Ambedkar,Prasad,B,Leader of the Drafting Committee,,Exploring Society Ch 10
MATH_C7_528,7,Math,Working with Fractions,Operations,Hard,MCQ,Area of rectangle with sides 15/4 and 48/5 is:,36,32,27,40,A,Multiply: $15/4 \\times 48/5 = 720/20 = 36$,,Ganita Prakash Ch 8
SST_C7_754,7,SST,Exploring Society,Civics,Hard,MCQ,Article 17 abolished what practice?,Child labor,Untouchability,Sati,Dowry,B,Constitutional social reform,,Exploring Society Ch 10
SST_C7_540,7,SST,Constitution of India,Rights,Hard,MCQ,Article 17 abolished what?,Taxes,Untouchability,Slavery,Child labor,B,Key social reform in the Constitution,,Exploring Society Ch 10
SST_C7_740,7,SST,Constitution of India,Rights,Hard,MCQ,Article 17 abolished which evil?,Slavery,Untouchability,Child labor,Sati,B,Ensures social dignity in the Constitution,,Exploring Society Ch 10
SST_C7_635,7,SST,The Constitution of India,Rights,Hard,MCQ,Article 17 of the Indian Constitution abolished which social evil?,Child labor,Untouchability,Sati,Dowry,B,This article was included to ensure social equality and dignity for all,,Exploring Society Ch 10
SST_C7_527,7,SST,Constitution of India,Rights,Hard,MCQ,Article abolishing untouchability is:,14,15,17,21,C,Ensures social equality in India,,Exploring Society Ch 10
ENG_C7_751,7,English,Three Questions,Theme,Medium,MCQ,Author of 'Three Questions' is:,Ruskin Bond,Leo Tolstoy,Henry James,Wordsworth,B,Russian writer of the ethical parable,,Honeycomb Unit 1
ENG_C7_750,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Baby elephant Golu was full of:,Food,Anger,Questions,Sleep,C,Theme of natural curiosity,,An Alien Hand Unit 3
MATH_C7_755,7,Math,Connecting the Dots,Probability,Hard,MCQ,Bag has 5 red and 5 blue balls. Prob of red is:,1,0.5,0.2,0.1,B,Ratio of 5 favorable to 10 total outcomes,,NCERT Ch 3
SCI_C7_013,7,Science,Acids Bases and Salts,Indicators,Medium,MCQ,Baking soda is classified as a/an:,Acid,Base,Salt,Indicator,B,Baking soda (sodium hydrogen carbonate) is basic and turns red litmus blue.,,
SCI_C7_085,7,Science,Exploring Substances,Reactions,Hard,MCQ,Baking soda reacts with dilute HCl to produce which fire-extinguishing gas?,Oxygen,Nitrogen,Carbon dioxide,Carbon monoxide,C,The reaction of $NaHCO_3$ with $HCl$ releases $CO_2$ which is used to put out fires. [1],,
SST_C7_747,7,SST,Understanding the Weather,Instruments,Easy,MCQ,Barometer measures:,Wind,Air pressure,Humidity,Rainfall,B,Weather station tool for pressure,,Exploring Society Ch 2
SST_C7_521,7,SST,From Barter to Money,Economics,Easy,MCQ,Barter system means exchanging goods for:,Money,Other goods,Gold,Paper,B,Primary form of exchange without currency,,Exploring Society Ch 11
SCI_C7_744,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,Base unit of speed is:,km/h,m/s,m/min,cm/s,B,International metric standard,,Curiosity Ch 8
SCI_C7_749,7,Science,Heat Transfer in Nature,Physics,Medium,MCQ,Best absorber of radiant heat is a:,White surface,Shiny surface,Black surface,Clear surface,C,Dark colors absorb more thermal radiation,,Curiosity Ch 7
SST_C7_528,7,SST,Understanding Markets,Economics,Medium,MCQ,Bulk seller to retailers is a:,Consumer,Producer,Wholesaler,Agent,C,Middleman in the market chain,,Exploring Society Ch 12
SCI_C7_721,7,Science,Changes Around Us,Chemical,Easy,MCQ,Burning of wood is classified as a:,Physical change,Chemical change,Temporary change,Reversible change,B,New substances like ash and smoke are formed during combustion,,Curiosity Ch 5
SCI_C7_521,7,Science,Changes Around Us,Chemical Changes,Easy,MCQ,Burning of wood is which change?,Physical,Chemical,Temporary,Reversible,B,New substances like ash and smoke are formed,,Curiosity Ch 5
SCI_C7_254,7,Science,Exploring Substances,Application,Medium,MCQ,Calamine solution contains which chemical to soothe acidic insect bites?,Sodium chloride,Zinc carbonate,Magnesium hydroxide,Citric acid,B,Calamine is zinc carbonate which neutralizes the acid injected during a bite. [1],,
SCI_C7_082,7,Science,Exploring Substances,pH,Easy,MCQ,Calamine solution used for skin irritation contains which chemical?,Zinc carbonate,Sodium chloride,Magnesium hydroxide,Zinc sulphate,A,Calamine is essentially zinc carbonate which is used to neutralize insect bite acidity. [1],,
MATH_C7_538,7,Math,Arithmetic Expressions,BODMAS,Hard,MCQ,Calculate $100 / 10 + 5$,6,15,10,20,B,Division before addition: $10 + 5 = 15$,,Ganita Prakash Ch 2
MATH_C7_738,7,Math,Arithmetic Expressions,BODMAS,Hard,MCQ,Calculate $100 / 10 + 5$.,6,15,10,20,B,Perform division before addition,,Ganita Prakash Ch 2
MATH_C7_515,7,Math,Arithmetic Expressions,BODMAS,Hard,MCQ,Calculate $50 \\times (10 + 2) \\div 6$,100,50,10,12,A,Parentheses first (12); then multiplication/division from left: $50 \\times 12 = 600$ then $600 \\div 6 = 100$,,Ganita Prakash Ch 2
MATH_C7_720,7,Math,Arithmetic Expressions,BODMAS,Hard,MCQ,Calculate $50 \\times (10 + 2) \\div 6$.,100,50,10,12,A,Solve parentheses first (12); then multiply (600); then divide (100),,Ganita Prakash Ch 2
MATH_C7_371,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Calculate the mean number of flowers blooming using the data: 2 7 9 4 3.,4,5,6,7,B,Mean = Sum / Count = $25 / 5 = 5$.,,Ganita Prakash Ch 13
MATH_C7_516,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Calculate the mean number of flowers if the data is 2 7 9 4 3,4,5,6,7,B,Mean = Sum / Count = $25 / 5 = 5$,,Ganita Prakash Ch 13
MATH_C7_711,7,Math,Connecting the Dots,Arithmetic Mean,Medium,MCQ,Calculate the mean number of flowers if the data is 2; 7; 9; 4; 3.,4,5,6,7,B,Mean is the sum (25) divided by the count (5) which equals 5,,Ganita Prakash Ch 13
MATH_C7_510,7,Math,Connecting the Dots,Arithmetic Mean,Medium,MCQ,Calculate the mean number of guavas per member if Shreyas's group of 5 members collected 30 guavas.,5,6,30,15,B,Mean = Total / Count = $30 / 5 = 6$,,Ganita Prakash Ch 13
MATH_C7_252,7,Math,Connecting the Dots,Arithmetic Mean,Medium,MCQ,Calculate the mean number of Hibiscus flowers blooming per day using the data: 2 7 9 4 3.,4,5,6,7,B,Mean = Sum of values / Number of values = $(2+7+9+4+3)/5 = 25/5 = 5$.,,
MATH_C7_707,7,Math,Connecting the Dots,Arithmetic Mean,Medium,MCQ,Calculate the mean of 10; 20; 30; 40; 50.,25,30,35,40,B,Total sum is 150; and dividing by 5 gives 30,,Ganita Prakash Ch 13
MATH_C7_716,7,Math,Connecting the Dots,Arithmetic Mean,Medium,MCQ,Calculate the mean of 5; 5; 10; 10.,5,7.5,10,30,B,Total sum is 30; and 30 divided by 4 equals 7.5,,Ganita Prakash Ch 13
MATH_C7_147,7,Math,Connecting the Dots,Arithmetic Mean,Medium,MCQ,Calculate the mean of the first five natural numbers.,2,3,4,5,B,Sum $= 1+2+3+4+5 = 15$. Mean $= 15 / 5 = 3$.,,
MATH_C7_703,7,Math,Arithmetic Expressions,Grouping,Medium,MCQ,Calculate the value of $100 / 10 + 5$.,6,15,10,20,B,Division is performed before addition: $10 + 5 = 15$,,Ganita Prakash Ch 2
MATH_C7_686,7,Math,Arithmetic Expressions,Grouping,Medium,MCQ,Calculate the value of $2 \\times (3 + 4)$ using the order of operations.,10,14,7,24,B,Solve the operation inside the parentheses first: $2 \\times 7 = 14$,,Ganita Prakash Ch 2
MATH_C7_145,7,Math,A Tale of Three Intersecting Lines,Triangle Inequality,Medium,MCQ,Can a triangle have side lengths 2 cm 3 cm and 5 cm?,Yes,No,Only if right-angled,Only if isosceles,B,The sum of any two sides must be greater than the third side; here $2 + 3 = 5$ which is not greater than 5.,,
MATH_C7_673,7,Math,Geometric Twins,Triangles,Medium,MCQ,Can a triangle have side lengths of 3 cm 6 cm and 9 cm?,Yes,No,Only if right-angled,Only if isosceles,B,According to the triangle inequality theorem the sum of any two sides must be strictly greater than the third side; $3 + 6 = 9$,,Ganita Prakash Ch 7
SCI_C7_748,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,Car speed 15 m/s. Distance in 1 min is:,15 m,90 m,900 m,150 m,C,Speed $\\times$ 60 seconds = 900 meters,,Curiosity Ch 8
SST_C7_524,7,SST,Constitution of India,Governance,Medium,MCQ,Chairman of Drafting Committee was:,Nehru,B.R. Ambedkar,Gandhi,Prasad,B,He is known as the architect of the Constitution,,Exploring Society Ch 10
SST_C7_750,7,SST,The Constitution of India,Governance,Medium,MCQ,Chairman of Drafting Committee:,Nehru,Prasad,B.R. Ambedkar,Gandhi,C,Led the finalization of the Constitution text,,Exploring Society Ch 10
SST_C7_758,7,SST,The Rise of Empires,History,Medium,MCQ,Chanakya advisor of Mauryan emperor:,Ashoka,Chandragupta Maurya,Akbar,Shivaji,B,Political strategist who wrote Arthashastra,,Exploring Society Ch 5
SST_C7_534,7,SST,The Rise of Empires,History,Medium,MCQ,Chanakya advisor of:,Ashoka,Chandragupta Maurya,Akbar,Shivaji,B,Key strategist of the Mauryas,,Exploring Society Ch 5
SST_C7_723,7,SST,The Rise of Empires,History,Medium,MCQ,Chanakya was the advisor for which emperor?,Ashoka,Chandragupta Maurya,Akbar,Shivaji,B,Key political and economic strategist of the Mauryan period,,Exploring Society Ch 5
SCI_C7_746,7,Science,Adolescence,Endocrinology,Medium,MCQ,Chemical messengers secreted by glands are:,Enzymes,Hormones,Proteins,Vitamins,B,Regulate physical and emotional changes,,Curiosity Ch 6
SCI_C7_543,7,Science,Changes Around Us,Chemical,Medium,MCQ,Chemical name of rust is:,Iron oxide,Copper sulphate,Sodium chloride,Zinc oxide,A,Result of oxidation of iron,,Curiosity Ch 5
ENG_C7_534,7,English,A Gift of Chappals,Plot,Easy,MCQ,Children gave chappals to:,Master,Beggar,Ravi,Lalli,B,Compassionate act in the story,,Honeycomb Unit 2
ENG_C7_734,7,English,A Gift of Chappals,Plot,Easy,MCQ,Children gave music master chappals to:,Ravi,Beggar,Lalli,Servant,B,Act of compassion in the story,,Honeycomb Unit 2
SCI_C7_203,7,Science,Exploring Substances,Indicators,Medium,MCQ,China rose indicator turns a basic solution to which color?,Dark pink,Green,Blue,Yellow,B,China rose turns magenta in acidic solutions and green in basic solutions.,,Curiosity Ch 2
SCI_C7_722,7,Science,Exploring Substances,Indicators,Medium,MCQ,China rose indicator turns basic solutions to which color?,Pink,Green,Blue,Yellow,B,It turns magenta in acidic and green in basic environments,,Curiosity Ch 2
SCI_C7_522,7,Science,Exploring Substances,Indicators,Medium,MCQ,China rose turns basic solutions to which color?,Pink,Green,Blue,Yellow,B,It turns magenta in acids and green in bases,,Curiosity Ch 2
ENG_C7_530,7,English,The Day the River Spoke,Character,Medium,MCQ,Confidant of Jahnavi was:,Father,Brother,The River,Teacher,C,She shared her school dreams with the river,,Poorvi Unit 1
SCI_C7_709,7,Science,Heat Transfer in Nature,Physics,Hard,MCQ,Convection occurs mainly in which type of materials?,Solids,Liquids and Gases,Vacuum,Metals,B,Convection involves the actual movement of particles in fluids to transfer heat,,Curiosity Ch 7
SCI_C7_004,7,Science,Nutrition in Plants,Parasitic Plants,Medium,MCQ,Cuscuta is an example of a/an:,Autotroph,Parasite,Saprotroph,Host,B,Cuscuta (Amarbel) is a parasitic plant that derives nutrition from a host tree.,,
SCI_C7_513,7,Science,Changes Around Us,Oxidation,Medium,MCQ,Depositing a layer of zinc on iron to prevent rusting is called:,Crystallization,Neutralization,Galvanization,Oxidation,C,Galvanization provides a protective zinc coating for steel or iron,,Curiosity Ch 5
SCI_C7_713,7,Science,Changes Around Us,Oxidation,Medium,MCQ,Depositing a zinc layer on iron to prevent rusting is called:,Crystallization,Neutralization,Galvanization,Oxidation,C,Galvanization provides a protective coating to prevent iron oxidation,,Curiosity Ch 5
SCI_C7_530,7,Science,Life Processes in Animals,Digestion,Easy,MCQ,Digestion starts in which part?,Stomach,Mouth,Small intestine,Esophagus,B,Salivary enzymes begin breakdown in the mouth,,Curiosity Ch 9
SST_C7_536,7,SST,From Barter to Money,Economics,Hard,MCQ,Disadvantage of barter system:,Fast exchange,Need for double coincidence of wants,Uses coins,Easy trade,B,Main hurdle in direct exchange,,Exploring Society Ch 11
SST_C7_544,7,SST,Constitution of India,Governance,Medium,MCQ,Drafting Committee chairman was:,Nehru,Gandhi,B.R. Ambedkar,Prasad,C,Key role in writing the Constitution,,Exploring Society Ch 10
SST_C7_744,7,SST,Constitution of India,Governance,Medium,MCQ,Drafting Committee chairman:,Nehru,Gandhi,B.R. Ambedkar,Prasad,C,Team leader for the Constitution text,,Exploring Society Ch 10
SCI_C7_483,7,Science,Earth Moon and the Sun,Eclipses,Hard,MCQ,During a lunar eclipse the phase of the Moon must be:,New Moon,Full Moon,Half Moon,Crescent,B,Lunar eclipses only happen when Earth's shadow falls on a Full Moon,,Curiosity Ch 12
SCI_C7_144,7,Science,Heat Transfer in Nature,Sea Breeze,Hard,MCQ,During a sea breeze air moves from:,Land to sea during day,Sea to land during day,Land to sea during night,Sea to land during night,B,During the day the land heats faster than water creating low pressure and drawing cool air from the sea.,,
SCI_C7_562,7,Science,Earth Moon and the Sun,Eclipses,Hard,MCQ,During a solar eclipse; which celestial body is in the middle?,Earth,Sun,Moon,Mars,C,The Moon moves between the Earth and the Sun; blocking the light,,Curiosity Ch 12
SST_C7_565,7,SST,The Gupta Era,History,Hard,MCQ,During the Gupta period; which metal was used to build the rust-free Iron Pillar at Mehrauli?,Copper,Iron,Gold,Silver,B,The pillar is a marvel of ancient Indian metallurgy that resists corrosion,,Exploring Society Ch 7
SST_C7_400,7,SST,Tracing Changes,Medieval History,Medium,MCQ,During the medieval period the term 'Hindustan' referred to:,The whole of Asia,Lands of the Delhi Sultanate,Modern India,Southern India,B,Historically the definition of Hindustan has shifted; in the medieval era it meant Sultanate territory.[3],,Our Pasts II Ch 1
SCI_C7_561,7,Science,Earth Moon and the Sun,Astronomy,Easy,MCQ,Earth completes one rotation on its axis in:,1 month,24 hours,365 days,12 hours,B,Rotation causes the cycle of day and night every 24 hours,,Curiosity Ch 12
SCI_C7_751,7,Science,Adolescence,Endocrinology,Medium,MCQ,Endocrine glands secrete which chemicals?,Enzymes,Hormones,Proteins,Vitamins,B,Regulators of body growth and behavior,,Curiosity Ch 6
MATH_C7_487,7,Math,Arithmetic Expressions,BODMAS,Hard,MCQ,Evaluate the expression $100 + 200 \\div 10 - 3 \\times 10$ using the order of operations,90,120,70,100,A,Division first (20); then multiplication (30); then addition/subtraction: $100 + 20 - 30 = 90$,,Ganita Prakash Ch 2
SST_C7_689,7,SST,From Barter to Money,Economics,Easy,MCQ,Exchanging goods directly for other goods without money is known as:,Banking,Barter system,Retail,Trade,B,The barter system was the primary mode of exchange before currency development,,Exploring Society Ch 11
SST_C7_756,7,SST,From Barter to Money,Economics,Easy,MCQ,Exchanging goods for goods is:,Banking,Barter system,Retail,Trade,B,Exchange mode before currency,,Exploring Society Ch 11
MATH_C7_499,7,Math,Working with Fractions,Mixed Numbers,Easy,MCQ,Express $3 \\frac{3}{4}$ as an improper fraction,9/4,15/4,12/4,7/4,B,To convert: $(3 \\times 4) + 3 = 15$; so the fraction is 15/4,,Ganita Prakash Ch 8
MATH_C7_091,7,Math,Working with Fractions,Mixed Forms,Easy,MCQ,Express $3 \\frac{3}{4}$ as an improper fraction.,9/4,15/4,12/4,7/4,B,To convert: $(3 \\times 4) + 3 = 15$. So the fraction is 15/4.,,
MATH_C7_575,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,Express the fraction 1/5 as a decimal:,0.1,0.2,0.5,0.05,B,Dividing 1.0 by 5 results in 0.2,,Ganita Prakash Ch 3
MATH_C7_715,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Express the fraction 1/5 as a decimal.,0.1,0.2,0.5,0.05,B,One divided by five results in zero point two,,Ganita Prakash Ch 3
MATH_C7_754,7,Math,Arithmetic Expressions,Grouping,Medium,MCQ,Expression equal to $5 \\times (10 + 2)$ is:,$5 \\times 10 + 2$,$5 \\times 10 + 5 \\times 2$,$5 + 10 \\times 2$,$5 \\times 12 + 10$,B,Distributive law of multiplication,,Ganita Prakash Ch 2
MATH_C7_745,7,Math,Arithmetic Expressions,BODMAS,Medium,MCQ,Find $2 \\times (3 + 4)$.,10,14,7,24,B,Solve brackets first then multiply,,Ganita Prakash Ch 2
MATH_C7_595,7,Math,Perimeter and Area,Rectangle,Easy,MCQ,Find the area of a rectangle with length 8 cm and breadth 5 cm:,13 sq cm,40 sq cm,26 sq cm,400 sq cm,B,Area is $length \\times breadth = 8 \\times 5 = 40$ square centimetres,,NCERT Ch 9
MATH_C7_329,7,Math,Working with Fractions,Operations,Hard,MCQ,Find the area of a rectangle with side lengths $3 \\frac{3}{4}$ ft and $9 \\frac{3}{5}$ ft.,36 sq ft,32 sq ft,27 sq ft,40 sq ft,A,Convert mixed numbers to improper fractions ($15/4 \\times 48/5$) to get 36 square feet.,,Ganita Prakash Ch 8
MATH_C7_257,7,Math,Working with Fractions,Operations,Hard,MCQ,Find the area of a rectangle with sides $3 \\frac{3}{4}$ ft and $9 \\frac{3}{5}$ ft.,$36$ sq ft,$32$ sq ft,$27$ sq ft,$40$ sq ft,A,Convert to improper: $15/4 \\times 48/5 = 720/20 = 36$ square feet.,,
MATH_C7_573,7,Math,Number Play,HCF,Medium,MCQ,Find the Highest Common Factor (HCF) of 12 and 18:,2,3,6,36,C,The largest number that divides both 12 and 18 exactly is 6,,Ganita Prakash Ch 6
MATH_C7_695,7,Math,Connecting the Dots,Arithmetic Mean,Medium,MCQ,Find the mean number of bounces if a player gets 6; 2; 9; and 3 bounces.,4,5,6,3,B,Total sum is $6+2+9+3=20$; and $20/4 = 5$,,Ganita Prakash Ch 13
MATH_C7_722,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Find the mean of 1; 2; 3; 4; 5.,2,3,4,5,B,Sum is 15; and dividing by the count of 5 gives 3,,Ganita Prakash Ch 13
MATH_C7_568,7,Math,Connecting the Dots,Median,Medium,MCQ,Find the median of 5; 2; 8; 10; 1:,8,2,5,10,C,Arrange in order: 1; 2; 5; 8; 10; the middle value is 5,,Ganita Prakash Ch 13
MATH_C7_333,7,Math,Connecting the Dots,Median,Medium,MCQ,Find the median of the data set: 10 16 18 20 22 26.,18,19,20,16,B,For an even number of values the median is the average of the two middle terms.,,Ganita Prakash Ch 13
MATH_C7_500,7,Math,Connecting the Dots,Median,Medium,MCQ,Find the median of the data set: 3 7 9 5 8,9,5,7,8,C,Arrange in order: 3 5 7 8 9; the middle value is 7,,NCERT Ch 3
MATH_C7_688,7,Math,Connecting the Dots,Median,Medium,MCQ,Find the median of the following data: 2 7 9 4 3.,7,4,9,3,B,Arrange in order: 2 3 4 7 9. The middle value is 4,,Ganita Prakash Ch 13
MATH_C7_589,7,Math,Operations with Integers,Predecessors,Easy,MCQ,Find the predecessor of the integer -1:,0,1,-2,-1,C,The predecessor of $n$ is $n - 1$; so $-1 - 1 = -2$,,NCERT Ch 1
MATH_C7_690,7,Math,Working with Fractions,Multiplication,Hard,MCQ,Find the product of $3/4 \\times 12$ expressed as an integer.,3,6,9,12,C,$12 \\div 4 = 3$ and $3 \\times 3 = 9$,,Ganita Prakash Ch 8
MATH_C7_148,7,Math,Connecting the Dots,Range,Easy,MCQ,Find the range of the data: 10 20 30 40 50.,30,40,50,10,B,Range is the difference between the maximum and minimum values: $50 - 10 = 40$.,,
MATH_C7_081,7,Math,Operations with Integers,Division,Medium,MCQ,Find the result of $35 \\div (– 5)$.,7,-7,30,-30,B,The quotient of a positive number divided by a negative number is always negative.,,
MATH_C7_582,7,Math,Finding the Unknown,Linear Equations,Easy,MCQ,Find the solution for $x - 7 = 0$:,-7,0,7,1,C,Adding 7 to both sides gives $x = 7$,,Ganita Prakash Ch 15
MATH_C7_206,7,Math,Finding the Unknown,Linear Equations,Medium,MCQ,Find the solution for the equation $5m = -10$.,2,-2,5,-10,B,Dividing both sides of the equation by 5 gives $m = -10 / 5 = -2$.,,Ganita Prakash Ch 7
MATH_C7_560,7,Math,Working with Fractions,Multiplication,Hard,MCQ,Find the value of $1/2$ of $1/4$ of $80$:,40,20,10,5,C,Calculation: $1/2 \\times 1/4 \\times 80 = 1/8 \\times 80 = 10$,,Ganita Prakash Ch 8
MATH_C7_405,7,Math,Arithmetic Expressions,Simplification,Medium,MCQ,Find the value of $100 + 200 \\div 10 - 3 \\times 10$ using BODMAS:,90,120,70,100,A,Calculation: $100 + (200/10) - (3 \\times 10) = 100 + 20 - 30 = 90$.,,Ganita Prakash I Ch 2
MATH_C7_581,7,Math,Expressions using Letter-Numbers,Algebraic expressions,Medium,MCQ,Find the value of $4m + 2$ when $m = -1$:,6,-2,2,-6,B,Substitute $m=-1$: $4(-1) + 2 = -4 + 2 = -2$,,Ganita Prakash Ch 4
MATH_C7_726,7,Math,Finding the Unknown,Equations,Medium,MCQ,Find the value of $m$ if $5m = -10$.,2,-2,5,-10,B,Divide by 5 to find the unknown value -2,,Ganita Prakash Ch 7
SCI_C7_388,7,Science,Life Processes in Animals,Absorption,Medium,MCQ,Finger-like projections in the small intestine are called:,Villi,Alveoli,Cilia,Papillae,A,Villi increase the surface area for nutrient absorption in the intestine.,,Curiosity Ch 9
ENG_C7_755,7,English,Three Days to See,Theme,Hard,MCQ,First day Helen Keller wants to see:,Museums,Faces of loved ones,Ocean,Movies,B,Focus on human kindness and connection,,Poorvi Unit 1
SCI_C7_089,7,Science,Changes Around Us,Oxidation,Medium,MCQ,Food contains fats which when exposed to air produce bad smells. This is called:,Rusting,Rancidity,Crystallization,Galvanization,B,Rancidity is the oxidation of fats and oils in food items. [1],,
SCI_C7_745,7,Science,Life Processes in Plants,Botany,Easy,MCQ,Food factory of a plant is:,Roots,Stem,Leaves,Flowers,C,Site of chlorophyll and photosynthesis,,Curiosity Ch 10
SCI_C7_545,7,Science,Life Processes in Plants,Botany,Easy,MCQ,Food factory of plant is:,Roots,Flowers,Leaves,Stems,C,Site of photosynthesis,,Curiosity Ch 10
SST_C7_525,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Force holding the atmosphere to Earth is:,Magnetic,Gravity,Centrifugal,Friction,B,Earth pull keeps the air from escaping into space,,Exploring Society Ch 2
SST_C7_542,7,SST,Exploring Society,Civics,Easy,MCQ,Full form of MLA is:,Member of Local Authority,Member of Legislative Assembly,Most Liable Administrator,Member of Local Association,B,Elected state representative,,Exploring Society Ch 12
SST_C7_742,7,SST,Exploring Society,Civics,Easy,MCQ,Full form of MLA:,Member of Local Authority,Member of Legislative Assembly,Most Liable Administrator,Member of Local Association,B,Elected state legislative representative,,Exploring Society Ch 12
ENG_C7_748,7,English,A Funny Man,Wit,Easy,MCQ,Funny man wore a shoe on his:,Foot,Hand,Head,Shoulder,C,Humorous detail from the poem,,Poorvi Unit 2
SCI_C7_531,7,Science,Changes Around Us,Chemical Changes,Medium,MCQ,Galvanization uses which metal layer?,Copper,Zinc,Gold,Lead,B,Prevents iron from rusting by coating it,,Curiosity Ch 5
SCI_C7_525,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Gas released by plants during photosynthesis is:,Carbon dioxide,Oxygen,Nitrogen,Hydrogen,B,Plants take in $CO_2$ and release $O_2$,,Curiosity Ch 10
SST_C7_752,7,SST,The Gupta Era,History,Medium,MCQ,Golden Age of India refers to which empire?,Maurya,Gupta,Chola,Mughal,B,Era of peak creativity and science,,Exploring Society Ch 7
ENG_C7_752,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Golu asked Aunt Ostrich about:,Dinner,Flying,Red eyes,River,B,Story of curious baby elephant,,An Alien Hand Unit 3
ENG_C7_560,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Golu was a baby elephant who was full of:,Food,Anger,Questions,Sleep,C,His curiosity led him to find out what the crocodile had for dinner,,An Alien Hand Unit 3
SST_C7_761,7,SST,From Barter to Money,Economics,Easy,MCQ,Goods for goods exchange is:,Banking,Barter system,Retail,Trade,B,Exchange system without money,,Exploring Society Ch 11
SCI_C7_001,7,Science,Nutrition in Plants,Photosynthesis,Easy,MCQ,Green plants prepare their own food by the process of:,Respiration,Photosynthesis,Transpiration,Digestion,B,Photosynthesis is the chemical process using sunlight to produce glucose.,,
SCI_C7_541,7,Science,Heat Transfer in Nature,Radiation,Easy,MCQ,Heat from Sun reaches Earth by:,Conduction,Convection,Radiation,Insulation,C,Travels through vacuum,,Curiosity Ch 7
SCI_C7_258,7,Science,Heat Transfer in Nature,Radiation,Easy,MCQ,Heat from the Sun reaches Earth through which mode of transfer?,Conduction,Convection,Radiation,Insulation,C,Radiation is the only mode of heat transfer that does not require a material medium. [2],,
SCI_C7_202,7,Science,Heat Transfer in Nature,Radiation,Easy,MCQ,Heat from the Sun reaches Earth through which process?,Conduction,Convection,Radiation,Insulation,C,Radiation is the mode of heat transfer that does not require a material medium to travel.,,Curiosity Ch 7
SCI_C7_339,7,Science,Heat Transfer in Nature,Radiation,Easy,MCQ,Heat from the Sun reaches the Earth through which process?,Conduction,Convection,Radiation,Insulation,C,Radiation is the only mode of heat transfer that does not require a material medium.,,Curiosity Ch 7
SCI_C7_381,7,Science,Heat Transfer in Nature,Conduction,Medium,MCQ,Heat is transferred by direct contact between objects in which process?,Radiation,Convection,Conduction,Evaporation,C,Conduction occurs when heat moves through a material via molecular collisions.,,Curiosity Ch 7
SCI_C7_019,7,Science,Heat Transfer in Nature,Conduction,Medium,MCQ,Heat is transferred by direct contact in which process?,Convection,Radiation,Conduction,Evaporation,C,"Conduction occurs when heat moves through a solid material via molecular collisions.[2, 1]",,Curiosity Ch 7
SCI_C7_734,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Heat radiation can travel through:,Solids only,Liquids only,Vacuum,Metals,C,Method requiring no material medium,,Curiosity Ch 7
SCI_C7_565,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Heat transfer in a metal spoon occurs by:,Conduction,Convection,Radiation,Insulation,A,Conduction is the primary mode of heat flow through solids,,Curiosity Ch 7
ENG_C7_267,7,English,Three Days to See,Theme,Hard,MCQ,Helen Keller highlights the value of which sense in her autobiography?,Taste,Sight,Smell,Hearing,B,She describes what she would do if given vision to show how much people ignore.,,
ENG_C7_747,7,English,Three Days to See,Character,Medium,MCQ,Helen Keller's teacher was:,William Wordsworth,Annie Sullivan,Leo Tolstoy,Nightingale,B,Taught her language through touch,,Poorvi Unit 1
ENG_C7_532,7,English,Three Questions,Ethics,Medium,MCQ,Hermit says most important person is:,King,Family,The person you are with,Hermit,C,Focuses on the importance of the present relationship,,Honeycomb Unit 1
SCI_C7_618,7,Science,Adolescence,Biology,Medium,MCQ,Hormones are best described as:,Enzymes,Chemical messengers,Nutrients,Waste products,B,Hormones are secreted by endocrine glands and travel via blood to target sites,,Curiosity Ch 6
SST_C7_479,7,SST,Understanding Markets,Civics,Medium,MCQ,How are prices mainly decided in a free market?,By the Governor,By supply and demand,By a single shopkeeper,By the police,B,Prices fluctuate based on how much is available and how many people want to buy it,,Exploring Society Ch 12
ENG_P_001,7,English,The Day the River Spoke,Theme,Medium,MCQ,How did the river help Jahnavi fulfill her dream of going to school?,By giving her money,By encouraging her to be brave,By teaching her how to read,By carrying her to the gate,B,The river acts as a silent listener and motivator encouraging Jahnavi to face her fears of school.,,Unit 1: Poorvi
ENG_C7_367,7,English,An Alien Hand,Plot,Hard,MCQ,How did Tilloo enter the 'forbidden passage'?,He broke the door,He used his father's security card,He found a key,He went through a hole,B,"Tilloo took his father's card while he was taking a nap.[10,12]",,An Alien Hand Unit 10
ENG_C7_659,7,English,An Alien Hand,Plot,Hard,MCQ,How did Tilloo manage to enter the forbidden passage?,He used a hidden key,He used his father's security card,He climbed a fence,He found a hole,B,Tilloo took the card while his father was taking a siesta or nap,,An Alien Hand Unit 7
ENG_C7_405,7,English,The Tiny Teacher,Communication,Easy,MCQ,How do ants communicate with each other?,By making sounds,By touching their feelers,By dancing,By sharing food,B,Ants use their antennae (feelers) to pass messages and identify group members.,,An Alien Hand Unit 1
ENG_C7_014,7,English,The Tiny Teacher,Behavior,Easy,MCQ,How do ants communicate with other ants from their colony?,By making clicking sounds,By touching their feelers,By leaving trails of food,By dancing,B,Ants touch their antennae (feelers) to greet each other and pass specific messages.[11],,An Alien Hand Ch 1
ENG_C7_081,7,English,The Tiny Teacher,Communication,Easy,MCQ,How do ants greet one another in an anthill?,By making sounds,By touching their feelers,By sharing food,By dancing,B,Ants use their antennae (feelers) to communicate and recognize colony members. [4],,
ENG_C7_263,7,English,The Tiny Teacher,Communication,Easy,MCQ,How do ants greet or talk to one another in an anthill?,By making clicking sounds,By touching their feelers,By dancing,By sharing food,B,"Ants use their antennae (feelers) to pass messages and identify colony members. [12,13]",,
ENG_C7_004,7,English,The Tiny Teacher,Communication,Easy,MCQ,How do ants greet or talk to one another?,By making sounds,By touching their feelers,By dancing,By sharing food,B,Ants use their antennae (feelers) to pass messages and identify colony members. [12][12],,
ENG_C7_654,7,English,The Tiny Teacher,Life Cycle,Hard,MCQ,How long does it take for an ant grub to become a complete ant?,One week,Two weeks,Around six weeks total,One year,C,It takes 2-3 weeks to become a cocoon and another 3 weeks to break out,,An Alien Hand Unit 1
MATH_C7_263,7,Math,Geometric Twins,Polygons,Easy,MCQ,How many equal sides does an equilateral triangle have?,1,2,3,0,C,By definition an equilateral triangle has all three sides of equal length.,,
SST_C7_686,7,SST,New Beginnings: Cities and States,History,Medium,MCQ,How many great kingdoms or Mahajanapadas existed in ancient India?,8,12,16,20,C,History records sixteen powerful kingdoms that emerged in the subcontinent,,Exploring Society Ch 4
MATH_C7_374,7,Math,Symmetry,Geometry,Easy,MCQ,How many lines of symmetry does a Rhombus have?,1,2,4,0,B,A rhombus has two lines of symmetry coinciding with its diagonals.,,Ganita Prakash II Ch 14
MATH_C7_577,7,Math,A Peek Beyond the Point,Conversions,Medium,MCQ,How many Litres are in 2500 millilitres (mL)?,25 L,2.5 L,0.25 L,250 L,B,Since $1000 mL = 1 L$ we divide 2500 by 1000 to get 2.5,,Ganita Prakash Ch 3
MATH_C7_687,7,Math,A Peek Beyond the Point,Measurement,Easy,MCQ,How many millimeters (mm) are there in 1 meter (m)?,100,10,1000,1,C,Standard metric conversion: $100 cm \\times 10 mm/cm = 1000 mm$,,Ganita Prakash Ch 3
MATH_C7_017,7,Math,A Peek Beyond the Point,Measurement,Easy,MCQ,How many millimeters (mm) are there in 1 meter?,100,10,1000,10000,C,$1 m = 100 cm$ and each $cm = 10 mm$. Thus $100 \\times 10 = 1000 mm$.,,Ganita Prakash Ch 3
MATH_C7_089,7,Math,A Peek Beyond the Point,Conversions,Easy,MCQ,How many millimeters (mm) make 1 meter (m)?,100,10,1000,10000,C,$1 m = 100 cm$ and $1 cm = 10 mm$. So $100 \\times 10 = 1000 mm$.,,
MATH_C7_335,7,Math,A Peek Beyond the Point,Conversions,Easy,MCQ,How many millimeters (mm) make up 1 meter (m)?,100,10,1000,10000,C,$1 m = 100 cm$ and $1 cm = 10 mm$ so the total is 1000 mm.,,Ganita Prakash Ch 3
MATH_C7_518,7,Math,A Peek Beyond the Point,Conversions,Easy,MCQ,How many mm are in 1 meter?,100,10,1000,10000,C,$100 cm \\times 10 mm/cm = 1000 mm$,,Ganita Prakash Ch 3
SST_C7_628,7,SST,New Beginnings: Cities and States,History,Medium,MCQ,How many powerful 'Mahajanapadas' emerged in ancient India around 600 BCE?,8,12,16,20,C,History records sixteen great kingdoms that existed in the subcontinent,,Exploring Society Ch 4
ENG_C7_268,7,English,Poorvi,Grammar,Medium,MCQ,Identify the palindrome from the following options:,Apple,Level,School,Teacher,B,A palindrome is a word that reads the same backward as forward.,,
MATH_C7_018,7,Math,Comparing Quantities,Percentages,Medium,MCQ,If $25\\%$ of a number is 15 then what is the value of the number?,40,60,75,100,B,To find the number: $0.25x = 15 \\rightarrow x = 15 / 0.25 = 60$.,,Ganita Prakash Ch 7
MATH_C7_012,7,Math,Comparing Quantities,Percentages,Medium,MCQ,If $25\\%$ of a number is 15 what is the number?,40,60,100,75,B,$0.25x = 15 \\rightarrow x = 15/0.25 = 60$.,,
MATH_CH4_001,7,Math,Simple Equations,Equation Solving,Medium,MCQ,If $3x - 5 = 10$ what is the value of $x$?,3,5,15,2,B,To solve $3x - 5 = 10$ add 5 to both sides ($3x = 15$) and then divide by 3 ($x = 5$).,,Ch 4: Simple Equations
MATH_C7_479,7,Math,Finding the Unknown,Equations,Medium,MCQ,If $4x - 2 = 10$ what is the value of $x$?,2,3,4,8,B,Add 2 to both sides ($4x = 12$) then divide by 4 ($x = 3$),,Ganita Prakash Ch 15
MATH_C7_541,7,Math,Finding the Unknown,Equations,Medium,MCQ,If $4x = 12$ what is $x$,2,3,4,48,B,Divide by 4 to solve,,Ganita Prakash Ch 15
MATH_C7_672,7,Math,Expressions using Letter-Numbers,Algebraic Logic,Medium,MCQ,If $k = 4$ then find the value of $3k + 2$.,10,12,14,6,C,Substitute $k=4$: $3(4) + 2 = 12 + 2 = 14$,,Ganita Prakash Ch 4
MATH_C7_684,7,Math,Finding the Unknown,Equations,Medium,MCQ,If $x - 8 = 12$ what is the value of $x$?,4,20,96,10,B,Add 8 to both sides of the equation to find $x = 20$,,Ganita Prakash Ch 15
MATH_C7_546,7,Math,Finding the Unknown,Equations,Easy,MCQ,If $x + 10 = 25$ what is $x$,15,35,10,5,A,Basic subtraction equation,,Ganita Prakash Ch 15
MATH_C7_521,7,Math,Finding the Unknown,Equations,Easy,MCQ,If $x + 5 = 15$ find $x$,5,10,20,15,B,Subtract 5 from both sides: $x = 10$,,Ganita Prakash Ch 15
MATH_C7_721,7,Math,Finding the Unknown,Equations,Easy,MCQ,If $x + 5 = 15$ find $x$.,5,10,20,15,B,Subtract 5 from both sides to isolate the variable $x$,,Ganita Prakash Ch 15
MATH_C7_556,7,Math,Finding the Unknown,Equations,Medium,MCQ,If $x/3 = 12$ then what is the value of $x$?,4,9,36,15,C,Multiply both sides by 3 to isolate $x$; so $x = 12 \\times 3 = 36$,,Ganita Prakash Ch 15
MATH_C7_140,7,Math,Expressions using Letter-Numbers,Algebraic Logic,Medium,MCQ,If $y = 5$ find the value of the expression $2y - 3$.,7,13,10,8,A,Substitute $y=5$: $2(5) - 3 = 10 - 3 = 7$.,,
MATH_C7_092,7,Math,Working with Fractions,Word Problems,Medium,MCQ,If 5 litres of oil is shared equally among 3 families how much does each get?,3/5 litres,1.5 litres,5/3 litres,2 litres,C,Sharing 5 litres among 3 families is represented by the division $5 \\div 3 = 5/3$.,,
SCI_C7_149,7,Science,Measurement of Time and Motion,Speed,Hard,MCQ,If a bicyclist covers 12 km in 30 minutes what is the speed in km/h?,6 km/h,12 km/h,24 km/h,30 km/h,C,30 minutes is 0.5 hours. Speed $= 12 / 0.5 = 24 km/h$.,,
SCI_C7_560,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,If a car travels at a constant speed of 15 m/s; how far will it travel in 1 minute?,15 m,90 m,900 m,150 m,C,Distance = Speed $\\times$ Time; 1 minute is 60 seconds; so $15 \\times 60 = 900$ meters,,Curiosity Ch 8
SCI_C7_674,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,If a cyclist travels 12 km in 30 minutes; what is their speed in km/h?,6 km/h,12 km/h,24 km/h,30 km/h,C,Speed equals distance divided by time: $12 / 0.5 = 24$ km/h,,Curiosity Ch 8
MATH_C7_256,7,Math,Working with Fractions,Reciprocals,Medium,MCQ,If a fraction is multiplied by its reciprocal the result is always:,0,1,The fraction itself,Not defined,B,By definition the product of a number and its reciprocal is the multiplicative identity which is 1.,,
MATH_C7_378,7,Math,Working with Fractions,Reciprocals,Medium,MCQ,If a fraction is multiplied by its reciprocal the result is:,0,1,The fraction,Not defined,B,The product of any non-zero number and its reciprocal is the multiplicative identity which is 1.,,Ganita Prakash Ch 8
MATH_C7_326,7,Math,Parallel and Intersecting Lines,Angles,Medium,MCQ,If a transversal intersects two parallel lines then each pair of alternate interior angles is:,Supplementary,Complementary,Equal,Parallel,C,Alternate interior angles formed by a transversal cutting parallel lines are always equal in measure.,,Ganita Prakash Ch 5
MATH_C7_144,7,Math,A Tale of Three Intersecting Lines,Exterior Angles,Hard,MCQ,If an exterior angle of a triangle is $110^{\\circ}$ and one interior opposite angle is $40^{\\circ}$ find the other.,$70^{\\circ}$,$150^{\\circ}$,$40^{\\circ}$,$110^{\\circ}$,A,An exterior angle equals the sum of its two interior opposite angles: $110 - 40 = 70$.,,
MATH_C7_680,7,Math,Connecting the Dots,Statistics,Hard,MCQ,If the mode is higher than the median in a dataset it suggests the distribution is:,Symmetric,Left-skewed,Right-skewed,Balanced,B,A mode higher than the median often indicates a tail extending toward lower values (negative/left skew),,Ganita Prakash Ch 13
MATH_C7_334,7,Math,Perimeter and Area,Square Geometry,Hard,MCQ,If the perimeter of a square is 160 cm find its area.,400 $cm^2$,1600 $cm^2$,80 $cm^2$,160 $cm^2$,B,The side is $160/4 = 40 cm$. Area is $side \\times side = 40 \\times 40 = 1600 cm^2$.,,NCERT Ch 9
MATH_C7_094,7,Math,Perimeter and Area,Square,Hard,MCQ,If the perimeter of a square is 160 cm what is its area?,400 $cm^2$,1600 $cm^2$,80 $cm^2$,160 $cm^2$,B,Side = $160/4 = 40 cm$. Area = $side \\times side = 40 \\times 40 = 1600 cm^2$.,,
MATH_CH5_001,7,Math,Lines and Angles,Supplementary Angles,Easy,MCQ,If two angles are supplementary their sum is:,$90^{\\circ}$,$180^{\\circ}$,$360^{\\circ}$,$45^{\\circ}$,B,Supplementary angles are defined as a pair of angles whose measures add up to $180^{\\circ}$.,,Ch 5: Lines and Angles
MATH_C7_562,7,Math,Parallel and Intersecting Lines,Angles,Medium,MCQ,If two lines intersect each other; the vertically opposite angles are always:,Different,Equal,Supplementary,Acute,B,A fundamental geometric property where crossing lines form equal opposite angles,,Ganita Prakash Ch 5
ENG_C7_543,7,English,Three Questions,Theme,Medium,MCQ,Important person according to hermit is:,Rich person,Wise man,Person you are with,Warrior,C,Wisdom on current interaction,,Honeycomb Unit 1
ENG_C7_270,7,English,Poorvi,Vocabulary,Medium,MCQ,In 'The Day the River Spoke' the word 'confidant' means:,A person one shares secrets with,A very proud person,A stranger,An enemy,A,Jahnavi shared her innermost dreams with the river as her confidant.,,
SCI_C7_693,7,Science,Electricity,Symbols,Medium,MCQ,In a circuit diagram a longer vertical line in the cell symbol represents:,Negative terminal,Positive terminal,Neutral terminal,Ground,B,The standard electrical symbol uses a long thin line for the positive end,,Curiosity Ch 3
SCI_C7_507,7,Science,Electricity,Circuit Components,Easy,MCQ,In a circuit diagram a longer vertical line in the symbol for a cell represents:,Negative terminal,Positive terminal,Switch,Battery,B,The standard electrical symbol uses a long thin line for positive and a short thick line for negative,,Curiosity Ch 3
SST_C7_557,7,SST,From the Rulers to the Ruled,Civics,Easy,MCQ,In a Monarchy; the final decision-making power lies with:,The People,The King or Queen,The Parliament,The Court,B,Monarchs hold absolute or constitutional authority over their subjects,,Exploring Society Ch 9
MATH_CH6_001,7,Math,Triangles,Pythagoras Property,Hard,MCQ,In a right-angled triangle if the legs are 6 cm and 8 cm find the hypotenuse.,10 cm,14 cm,100 cm,12 cm,A,Using $a^2 + b^2 = c^2$: $6^2 + 8^2 = 36 + 64 = 100$. $\\sqrt{100} = 10$.,,Ch 6: Triangles
MATH_C7_015,7,Math,Geometry,Triangle Properties,Hard,MCQ,In a right-angled triangle the legs are 6 cm and 8 cm. The hypotenuse is:,10 cm,14 cm,12 cm,100 cm,A,$h^2 = 6^2 + 8^2 = 100$. $\\sqrt{100} = 10$.,,
MATH_C7_401,7,Math,Geometric Twins,Triangle Properties,Medium,MCQ,In a right-angled triangle the side opposite to the right angle is called:,Base,Perpendicular,Hypotenuse,Altitude,C,The hypotenuse is always the longest side and lies directly opposite the $90^{\\circ}$ angle.,,Ganita Prakash II Ch 1
ENG_C7_518,7,English,The Tiny Teacher,Roles,Medium,MCQ,In an ant colony 'drones' are the:,Workers,Soldiers,Males,Queens,C,Drones are male ants whose primary role is mating,,An Alien Hand Unit 1
ENG_C7_146,7,English,The Tiny Teacher,Roles,Medium,MCQ,In an ant colony the 'drones' are the:,Workers,Soldiers,Males,Queens,C,Drones are the male ants whose primary role is mating with the queen. [6],,
ENG_C7_651,7,English,The Tiny Teacher,Roles,Medium,MCQ,In an ant colony the mother of the entire population is the:,Worker,Queen,Soldier,Drone,B,The queen ant is the only member that lays eggs for the colony,,An Alien Hand Unit 1
ENG_C7_086,7,English,Poorvi Ch 7,Vocabulary,Medium,MCQ,In the chapter the word 'altruistic' most nearly means:,Selfish,Generous,Angry,Fearful,B,Altruism refers to selfless concern for the well-being of others.,,
MATH_C7_141,7,Math,Expressions using Letter-Numbers,Terms,Easy,MCQ,In the expression $4x + 7$ the constant term is:,$4x$,4,7,$x$,C,A constant is a fixed numerical value in an expression that does not change with the variable.,,
MATH_C7_259,7,Math,Expressions using Letter-Numbers,Algebra,Medium,MCQ,In the expression $4x + 7$ which part is the constant?,$4x$,4,7,$x$,C,A constant is a fixed numerical value that does not change with the variable.,,
MATH_C7_682,7,Math,Expressions using Letter-Numbers,Terms,Easy,MCQ,In the expression $5x + 10$ which part is the constant term?,$5x$,5,10,$x$,C,A constant is a fixed numerical value that does not change with the variable,,Ganita Prakash Ch 4
SCI_C7_695,7,Science,Life Processes in Animals,Digestion,Easy,MCQ,In the human body where does the digestion of food begin?,Stomach,Small Intestine,Mouth,Esophagus,C,Mechanical chewing and salivary enzymes start the process in the mouth,,Curiosity Ch 9
MATH_C7_373,7,Math,Large Numbers Around Us,Place Value,Easy,MCQ,In the Indian numbering system one crore is equal to how many lakhs?,10,100,1000,1,B,One hundred lakhs make up the value of one crore.,,Ganita Prakash Ch 1
MATH_C7_689,7,Math,Large Numbers Around Us,Place Value,Easy,MCQ,In the Indian numbering system one hundred lakhs is equal to:,1 crore,1 million,10 crores,1000,A,One crore is written as 1 00 00 000 which is 100 lakhs,,Ganita Prakash Ch 1
SST_C7_643,7,SST,Tracing Changes,Medieval history,Medium,MCQ,In the medieval era the word 'Hindustan' was often used to mean:,Whole world,Lands of the Delhi Sultanate,Modern Republic of India,Southern tip of India,B,The definition of the word has changed significantly over the centuries,,Our Pasts II Ch 1
SST_C7_351,7,SST,Tracing Changes,Medieval Identity,Medium,MCQ,In the medieval period a 'foreigner' was someone who was:,Not an Indian,A stranger not part of a local society,A tourist,An invader,B,"Historically any person alien to a specific social or village circle was considered a foreigner.[3,4]",,Our Pasts II Ch 1
SST_C7_267,7,SST,Tracing Changes,Identity,Medium,MCQ,In the medieval period a 'foreigner' was someone who:,Was not Indian,Was a stranger not part of a local society,Was a tourist,Was an invader,B,"Historically anyone outside a specific village or social circle was considered 'alien'. [6,7]",,
MATH_C7_265,7,Math,Connecting the Dots,Coordinates,Medium,MCQ,In the ordered pair $(x y)$ the x-coordinate is also known as the:,Ordinate,Abscissa,Slope,Origin,B,Abscissa refers to the horizontal distance from the origin.,,
MATH_C7_551,7,Math,Connecting the Dots,Coordinate Geometry,Medium,MCQ,In the ordered pair $(x; y)$ the y-coordinate is also known as the:,Abscissa,Ordinate,Origin,Slope,B,The ordinate refers to the vertical distance of a point from the X-axis in a Cartesian plane,,Ganita Prakash Ch 13
ENG_C7_202,7,English,My Dear Soldiers,Poetry,Medium,MCQ,In the poem soldiers are compared to 'yogis' to emphasize their:,Magical powers,Discipline and endurance,Silence,Traditional clothing,B,This comparison highlights their unwavering focus and commitment in isolated terrains.,,Poorvi Unit 5
ENG_C7_492,7,English,The Day the River Spoke,Vocabulary,Medium,MCQ,In the story 'confidant' refers to someone who:,Is very proud,Is shared secrets with,Is a stranger,Is an enemy,B,The river acts as a confidant because Jahnavi shares her innermost dreams with it,,Poorvi Unit 1
ENG_C7_687,7,English,The Day the River Spoke,Vocabulary,Medium,MCQ,In the story the word 'confidant' refers to someone who:,Is very proud,Is shared secrets with,Is a complete stranger,Is a fierce enemy,B,Jahnavi shared her innermost dreams and fears with the river as her confidant,,Poorvi Unit 1
ENG_C7_667,7,English,The Day the River Spoke,Vocabulary,Medium,MCQ,In the story the word 'mimicking' refers to:,Singing loudly,Copying or imitating sounds,Running away,Hiding secrets,B,Jahnavi would often imitate the sounds of the environment around the river,,Poorvi Unit 1
ENG_C7_551,7,English,The Day the River Spoke,Vocabulary,Medium,MCQ,In the story; 'mimicking' means:,Singing loudly,Copying or imitating someone,Running fast,Hiding away,B,Jahnavi would often imitate the sounds of the environment near the river,,Poorvi Unit 1
ENG_C7_672,7,English,Three Questions,Vocabulary,Medium,MCQ,In the story; what is the meaning of the word 'Hermit'?,A king's general,A person who lives alone in simplicity,A powerful magician,A wealthy merchant,B,The hermit is a wise man living in a wood known for his simple lifestyle,,Honeycomb Unit 1
MATH_C7_675,7,Math,Connecting the Dots,Probability,Hard,MCQ,In the word HELLO what is the probability of randomly picking a vowel?,1/5,2/5,3/5,2/3,B,There are 5 total letters and 2 vowels (E and O); so the probability is 2/5,,Ganita Prakash Ch 13
SST_C7_632,7,SST,From the Rulers to the Ruled,Civics,Easy,MCQ,In which form of government does a single ruler like a King hold absolute power?,Democracy,Republic,Monarchy,Dictatorship,C,Monarchy is the system where authority is often passed down through a royal family,,Exploring Society Ch 9
SST_C7_506,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,In which layer of the atmosphere do most weather phenomena occur?,Stratosphere,Mesosphere,Troposphere,Exosphere,C,The troposphere is the lowest layer where air density is highest and clouds form,,Exploring Society Ch 2
SCI_C7_143,7,Science,Heat Transfer in Nature,Convection,Medium,MCQ,In which of the following is heat transferred mainly by convection?,Solids,Liquids and Gases,Vacuum,Metals,B,Convection involves the actual movement of particles in fluids (liquids/gases) to transfer heat.,,
SCI_C7_676,7,Science,Life Processes in Plants,Botany,Medium,MCQ,In which part of the plant is food primarily synthesized?,Roots,Flowers,Leaves,Stems,C,Leaves are the 'food factories' containing chlorophyll needed for photosynthesis,,Curiosity Ch 10
ENG_C7_737,7,English,Rani Abbakka,Civics,Medium,MCQ,Independent country means:,Rich,Sovereign,Large,Colony,B,Self-governing nation terminology,,Poorvi Unit 5
SST_C7_543,7,SST,From Barter to Money,Economics,Easy,MCQ,Indian currency issued by:,SBI,RBI,PNB,ICICI,B,Central bank of India,,Exploring Society Ch 11
SCI_C7_736,7,Science,Exploring Substances,pH,Medium,MCQ,Indicator that turns pink in base is:,Litmus,Turmeric,Phenolphthalein,China Rose,C,Synthetic chemical indicator,,Curiosity Ch 2
SCI_C7_536,7,Science,Exploring Substances,pH,Medium,MCQ,Indicator turning pink in base is:,Litmus,Turmeric,Phenolphthalein,China Rose,C,Laboratory chemical indicator,,Curiosity Ch 2
SST_C7_535,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Instrument for rainfall measurement is:,Barometer,Thermometer,Rain Gauge,Anemometer,C,Meteorological tool for precipitation,,Exploring Society Ch 2
MATH_C7_770,7,Math,Operations with Integers,Properties,Easy,MCQ,Integer neither positive nor negative:,1,-1,0,10,C,The center value zero in integers,,NCERT Ch 1
MATH_C7_550,7,Math,Operations with Integers,Properties,Easy,MCQ,Integer that is neither positive nor negative is:,1,-1,0,10,C,The boundary value zero,,NCERT Ch 1
MATH_C7_750,7,Math,Operations with Integers,Properties,Easy,MCQ,Integer that is neither positive nor negative:,1,-1,0,10,C,The center value zero,,NCERT Ch 1
MATH_C7_759,7,Math,Geometric Twins,Polygons,Easy,MCQ,Interior angles sum of triangle is:,90,180,360,270,B,Angle sum property theorem,,Ganita Prakash II Ch 1
MATH_C7_691,7,Math,Finding the Unknown,Equations,Medium,MCQ,Is $3x + 5$ considered an equation?,Yes,No,Only if $x=1$,Only if $x=0$,B,An equation must have an equals sign showing the equality of expressions,,Ganita Prakash Ch 15
ENG_C7_536,7,English,The Day the River Spoke,Character,Medium,MCQ,Jahnavi dream was to:,Fish,Go to school,Sing,Travel,B,Overcoming barriers to education,,Poorvi Unit 1
ENG_C7_736,7,English,The Day the River Spoke,Character,Medium,MCQ,Jahnavi's dream was to:,Fish,Go to school,Sing,Travel,B,Overcoming barriers to education,,Poorvi Unit 1
ENG_C7_496,7,English,The Day the River Spoke,Themes,Medium,MCQ,Jahnavi's story primarily encourages readers to:,Learn fishing,Value education and nature,Avoid school,Move to the city,B,The narrative highlights Jahnavi's desire for school and her deep connection with the environment,,Poorvi Unit 1
ENG_C7_366,7,English,Bringing Up Kari,Character,Medium,MCQ,Kari the elephant was most compared to a:,Trained soldier,Human baby,Wild beast,Helpful giant,B,The narrator describes Kari's playful and often naughty behavior as baby-like.[11],,An Alien Hand Unit 2
ENG_C7_006,7,English,Bringing Up Kari,Character,Medium,MCQ,Kari the elephant was most like a:,Trained soldier,Human baby,Wild beast,Helpful giant,B,The narrator describes Kari's playful and sometimes mischievous baby-like behavior. [14],,
SST_C7_734,7,SST,The Rise of Empires,History,Medium,MCQ,Kautilya was the advisor to:,Ashoka,Chandragupta Maurya,Akbar,Shivaji,B,Political strategist of the Mauryas,,Exploring Society Ch 5
SCI_C7_755,7,Science,Life Processes in Animals,Respiration,Medium,MCQ,Lactic acid is produced by which process?,Aerobic resp,Anaerobic resp,Digestion,Circulation,B,Occurs in muscles during high physical activity,,Curiosity Ch 9
SST_C7_530,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Layer where weather occurs is:,Troposphere,Stratosphere,Mesosphere,Exosphere,A,Contains most of the atmosphere mass and water vapor,,Exploring Society Ch 2
SCI_C7_765,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Leaf pores for gas exchange:,Chlorophyll,Stomata,Vessels,Roots,B,Essential for photosynthesis,,Curiosity Ch 10
SCI_C7_145,7,Science,Light: Shadows and Reflections,Light Path,Easy,MCQ,Light travels in a:,Curved line,Zigzag line,Straight line,Random path,C,Rectilinear propagation of light means it travels in straight lines unless obstructed.,,
SCI_C7_520,7,Science,Light: Shadows and Reflections,Physics,Medium,MCQ,Light travels in which path?,Curved,Straight,Zigzag,Spiral,B,Rectilinear propagation means light moves in straight lines,,Curiosity Ch 11
SCI_C7_557,7,Science,Exploring Substances,Indicators,Easy,MCQ,Litmus is a natural dye extracted from which organism?,Fungus,Algae,Lichens,Bacteria,C,Lichens are the source of litmus; used widely as a pH indicator,,Curiosity Ch 2
SCI_C7_747,7,Science,Exploring Substances,Indicators,Medium,MCQ,Litmus is extracted from which organism?,Fungus,Algae,Lichens,Bacteria,C,Natural dye used as pH indicator,,Curiosity Ch 2
SCI_C7_753,7,Science,Exploring Substances,Indicators,Easy,MCQ,Litmus source is which organism?,Fungus,Algae,Lichens,Bacteria,C,Natural symbiotic organism yielding dye,,Curiosity Ch 2
SST_C7_407,7,SST,The Rise of Empires,History,Medium,MCQ,Magadha became a powerful empire mainly due to its access to:,Silver and Gold,Iron and Fertile land,Spices and Silk,Ancient libraries,B,Iron was used for weapons and fertile land supported a large military surplus.,,Exploring Society Ch 5
SST_C7_347,7,SST,The Rise of Empires,History,Medium,MCQ,Magadha became powerful primarily due to its access to:,Silver and Gold,Iron and Fertile land,Spices and Silk,Ancient libraries,B,Iron resources allowed for superior weaponry while fertile land supported agricultural surplus.,,Exploring Society Ch 5
SST_C7_529,7,SST,The Rise of Empires,History,Easy,MCQ,Magadha rise was due to:,Gold,Spices,Iron and fertile land,Art,C,Key factors for military and economic power,,Exploring Society Ch 5
SST_C7_729,7,SST,The Rise of Empires,History,Easy,MCQ,Magadha's power grew due to its access to:,Gold,Spices,Iron and fertile land,Ancient art,C,Crucial resources for military and agriculture,,Exploring Society Ch 5
SST_C7_736,7,SST,From Barter to Money,Economics,Hard,MCQ,Major hurdle of barter system:,Fast exchange,Lack of double coincidence of wants,Gold use,Digital error,B,Exchange only happens if both want the other's good,,Exploring Society Ch 11
SST_C7_533,7,SST,Understanding Markets,Economics,Easy,MCQ,Mall is a large urban area with:,One shop,Many shops under one roof,Open fields,Only food stalls,B,Characteristic of urban retail centers,,Exploring Society Ch 12
SST_C7_537,7,SST,Understanding Markets,Economics,Medium,MCQ,Market chain connects producer and:,Shopkeeper,Consumer,Bank,Factory,B,Sequence of intermediaries in trade,,Exploring Society Ch 12
SST_C7_737,7,SST,Understanding Markets,Economics,Medium,MCQ,Market chain link between producer and consumer:,Bank,Retailer,Wholesaler,Both b and c,D,Sequence of intermediaries in trade,,Exploring Society Ch 12
SCI_C7_613,7,Science,Electricity,Conductivity,Easy,MCQ,Materials that do not allow electric current to pass through them are:,Conductors,Insulators,Metals,Electrolytes,B,Insulators like plastic and rubber block the flow of electricity,,Curiosity Ch 3
SST_C7_677,7,SST,Climates of India,Geography,Medium,MCQ,Mawsynram in Meghalaya is famous globally for which of the following?,High altitude,Highest rainfall in the world,Active volcanoes,Thick forests,B,The geographic location causes extreme rainfall due to the trapping of monsoon winds,,Exploring Society Ch 3
SST_C7_641,7,SST,Climates of India,Geography,Medium,MCQ,Mawsynram which is the wettest place on Earth is located in which state?,Assam,Meghalaya,Nagaland,Mizoram,B,Meghalaya's hills cause the heavy rainfall through topographic trapping,,Exploring Society Ch 3
SST_C7_491,7,SST,Climates of India,Geography,Medium,MCQ,Mawsynram which receives the highest rainfall in the world is located in:,Assam,Meghalaya,Nagaland,Sikkim,B,Mawsynram is globally recognized as the wettest place on Earth due to its topography,,Exploring Society Ch 3
MATH_C7_547,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Mean of 1 2 3 4 5 is:,2,3,4,5,B,Average of consecutive numbers,,Ganita Prakash Ch 13
MATH_C7_527,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Mean of 2 7 9 4 3 is:,4,5,6,3,B,Sum = 25; Count = 5; Mean = $25/5 = 5$,,Ganita Prakash Ch 13
MATH_C7_727,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Mean of 2; 7; 9; 4; 3 is:,4,5,6,3,B,Sum is 25 and division by 5 gives 5,,Ganita Prakash Ch 13
MATH_C7_532,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Mean of first five natural numbers is:,2,3,4,5,B,Sum 15 divided by 5 equals 3,,Ganita Prakash Ch 13
MATH_C7_767,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Mean of first five natural numbers:,2,3,4,5,B,Average of 1; 2; 3; 4; 5 is 3,,Ganita Prakash Ch 13
SCI_C7_518,7,Science,Changes Around Us,Physical Changes,Easy,MCQ,Melting of ice is which type of change?,Physical,Chemical,Biological,Permanent,A,It is a change in state that can be reversed by freezing,,Curiosity Ch 5
ENG_C7_522,7,English,Try Again,Poetry,Easy,MCQ,Message of poem 'Try Again' is:,Give up,Perseverance,Success is luck,Failure is end,B,Encourages continued effort after setbacks,,Poorvi Unit 1
ENG_C7_647,7,English,Three Questions,Plot,Medium,MCQ,Messengers were sent across the kingdom primarily to:,Fetch wise men,Find answers to the questions,Look for a hermit,Announce a war,B,The king was looking for anyone who could solve his three specific dilemmas,,Honeycomb Unit 1
ENG_C7_692,7,English,Three Questions,Theme,Medium,MCQ,Messengers were sent throughout the kingdom primarily to:,Fetch wise men,Find answers to the questions,Look for a hermit,Announce a war,B,The king sought specific answers he believed would ensure his success,,Honeycomb Unit 1
ENG_C7_084,7,English,Three Questions,Theme,Easy,MCQ,Messengers were sent throughout the kingdom to:,Fetch wise men,Find answers to the questions,Look for a hermit,Arrest the enemy,B,The king was desperate for answers to ensure his success as a ruler. [5],,
SCI_C7_723,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Mode of heat transfer in solid metals is:,Conduction,Convection,Radiation,Evaporation,A,Heat flows through solids by direct contact of molecules,,Curiosity Ch 7
SCI_C7_523,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Mode of heat transfer in solids is:,Conduction,Convection,Radiation,Evaporation,A,Heat moves through solids via molecular contact,,Curiosity Ch 7
SST_C7_554,7,SST,Climates of India,Geography,Medium,MCQ,Monsoon winds in India bring most of the rain during which season?,Winter,Summer,Autumn,Spring,B,The Southwest monsoon provides the bulk of India's annual precipitation during summer,,Exploring Society Ch 3
SST_C7_706,7,SST,Climates of India,Monsoon,Medium,MCQ,Monsoon winds in India provide rain mainly during which season?,Winter,Summer,Autumn,Spring,B,The Southwest monsoon provides the bulk of India's annual precipitation,,Exploring Society Ch 3
SST_C7_755,7,SST,Climates of India,Monsoon,Medium,MCQ,Monsoon word origin 'Mausim' means:,Rain,Season,Wind,Clouds,B,Arabic root describing seasonal winds,,Exploring Society Ch 3
ENG_C7_743,7,English,Three Questions,Theme,Medium,MCQ,Most important person says hermit is:,Ruler,Wise man,Person you are with,Warrior,C,Focuses on current human interaction,,Honeycomb Unit 1
ENG_C7_523,7,English,Three Questions,Theme,Medium,MCQ,Most important time according to hermit is:,Tomorrow,Now,Yesterday,Noon,B,Only the present is under our control,,Honeycomb Unit 1
SST_C7_748,7,SST,New Beginnings: Cities and States,History,Medium,MCQ,Number of Mahajanapadas in ancient India:,8,12,16,20,C,Sixteen great kingdoms recorded in history,,Exploring Society Ch 4
MATH_C7_001,7,Math,Integers,Number Line,Easy,MCQ,On a number line moving 5 steps to the left from $-3$ will land at:,-8,2,-2,-10,A,Moving left on a number line indicates subtraction: $-3 - 5 = -8$.,,
SST_C7_567,7,SST,The Constitution of India,History,Medium,MCQ,On which date was the Indian Constitution officially adopted and came into effect?,15 August 1947,26 January 1950,2 October 1948,1 January 1950,B,This day is celebrated annually as Republic Day in India,,Exploring Society Ch 10
SCI_C7_264,7,Science,Wastewater Story,Environment,Easy,MCQ,On which day is World Water Day celebrated?,22-Mar,05-Jun,22-Apr,21-Jun,A,22nd March is designated to raise awareness about the global water crisis. [1],,
ENG_C7_358,7,English,An Alien Hand,Setting,Medium,MCQ,On which planet do Tilloo and his parents live underground?,Earth,Venus,Mars,Jupiter,C,The story describes a future Martian society living in underground colonies due to surface conditions.[10],,An Alien Hand Unit 10
MATH_C7_146,7,Math,Large Numbers Around Us,Place Value,Easy,MCQ,One crore is equal to how many lakhs?,10,100,1000,1,B,In the Indian numbering system 100 lakhs make one crore.,,
MATH_C7_730,7,Math,Large Numbers Around Us,Place Value,Easy,MCQ,One hundred lakhs is equal to:,1 crore,1 million,10 crores,1000,A,Standard Indian numbering system term,,Ganita Prakash Ch 1
MATH_C7_729,7,Math,A Peek Beyond the Point,Measurement,Easy,MCQ,One meter contains how many mm?,100,10,1000,1,C,Standard metric conversion factor,,Ganita Prakash Ch 3
SST_C7_538,7,SST,Geographical Diversity of India,Physical,Hard,MCQ,Only active volcano in India is on:,Mount Abu,Barren Island,Munnar,Ladakh,B,Located in Andaman and Nicobar chain,,Exploring Society Ch 1
MATH_C7_537,7,Math,Connecting the Dots,Coordinate,Medium,MCQ,Point (-3 5) is in which quadrant?,I,II,III,IV,B,Negative x and positive y values,,Ganita Prakash Ch 13
SCI_C7_760,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Pores for gas exchange are:,Chlorophyll,Stomata,Vessels,Roots,B,Leaf structures for $CO_2$ and $O_2$,,Curiosity Ch 10
SST_C7_751,7,SST,New Beginnings: Cities and States,History,Medium,MCQ,Powerful guild 'Manigramam' was in:,North,South,West,East,B,Merchant association in medieval India,,Exploring Society Ch 4
SST_C7_541,7,SST,Understanding Markets,Economics,Medium,MCQ,Price in free market decided by:,Governor,Police,Supply and demand,Shopkeeper,C,Economic market forces,,Exploring Society Ch 12
SST_C7_741,7,SST,Understanding Markets,Economics,Medium,MCQ,Prices in free market decided by:,Governor,Police,Supply and demand,Shopkeeper,C,Market forces determine costs,,Exploring Society Ch 12
ENG_C7_541,7,English,Rani Abbakka,History,Medium,MCQ,Principality ruled by Abbakka was:,Goa,Ullal,Mangalore,Kochi,B,Coastal kingdom in Karnataka,,Poorvi Unit 5
SST_C7_749,7,SST,From Barter to Money,Economics,Medium,MCQ,Problem in barter system was lack of:,Gold,Double coincidence of wants,Credit cards,Digital apps,B,Exchange hurdle without money,,Exploring Society Ch 11
MATH_C7_543,7,Math,Working with Fractions,Operations,Medium,MCQ,Product of a number and its reciprocal is:,0,1,Same number,Infinity,B,Fundamental property of reciprocals,,Ganita Prakash Ch 8
MATH_C7_743,7,Math,Working with Fractions,Operations,Medium,MCQ,Product of fraction and its reciprocal is:,0,1,Same fraction,Infinity,B,Fundamental property of number reciprocals,,Ganita Prakash Ch 8
SCI_C7_566,7,Science,Changes Around Us,Chemical,Medium,MCQ,Production of a gas is often a sign of a:,Physical change,Chemical change,Temporary change,No change,B,Chemical reactions often release gases like $CO_2$ or $H_2$,,Curiosity Ch 5
ENG_C7_521,7,English,Rani Abbakka,History,Medium,MCQ,Queen of Ullal was:,Rani Abbakka,Rani Lakshmibai,Rani Chennamma,Indira Gandhi,A,Brave naval warrior who fought the Portuguese,,Poorvi Unit 5
ENG_C7_731,7,English,Rani Abbakka,History,Medium,MCQ,Queen who defeated Portuguese navy was:,Lakshibai,Abbakka,Chennamma,Raziyya,B,Brave warrior of Ullal,,Poorvi Unit 5
ENG_C7_531,7,English,Rani Abbakka,History,Medium,MCQ,Queen who fought Portuguese was:,Lakshibai,Abbakka,Chennamma,Raziyya,B,Heroic warrior of Ullal,,Poorvi Unit 5
SCI_C7_752,7,Science,Heat Transfer in Nature,Radiation,Easy,MCQ,Radiant heat is absorbed best by:,White,Shiny,Black,Clear,C,Surface color affects thermal absorption,,Curiosity Ch 7
SCI_C7_534,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Radiation travels through:,Solids only,Liquids only,Empty space,Metals,C,Does not require a material medium,,Curiosity Ch 7
SST_C7_745,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Rain gauge measures depth of:,Ocean,Rainfall,River,Well,B,Weather instrument for precipitation,,Exploring Society Ch 2
SST_C7_545,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Rain gauge measures:,Wind,Temperature,Rainfall,Pressure,C,Specific weather instrument,,Exploring Society Ch 2
MATH_C7_542,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Range of data 10 20 30 40 50 is:,30,40,50,10,B,Max - Min = $50 - 10 = 40$,,Ganita Prakash Ch 13
MATH_C7_742,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Range of data 10; 20; 30; 40; 50 is:,30,40,50,10,B,Difference between max and min is 40,,Ganita Prakash Ch 13
ENG_C7_726,7,English,Rani Abbakka,History,Medium,MCQ,Rani Abbakka fought against which naval power?,British,Portuguese,French,Dutch,B,Heroic resistance of coastal Karnataka,,Poorvi Unit 5
ENG_C7_516,7,English,Rani Abbakka,Theme,Medium,MCQ,Rani Abbakka victory showed that:,Large countries always win,Unity and courage can defeat a stronger force,Strategy is not important,War is the only way,B,Her victory inspired other local rulers to resist foreign control,,Poorvi Unit 5
ENG_C7_691,7,English,Rani Abbakka,History,Medium,MCQ,Rani Abbakka was the courageous queen of which coastal principality?,Goa,Mangalore,Ullal,Kochi,C,She is celebrated for her fearless defense of Ullal against foreign navies,,Poorvi Unit 5
ENG_C7_253,7,English,Rani Abbakka,History,Medium,MCQ,Rani Abbakka was the courageous queen of which region?,Goa,Mangalore,Ullal,Kochi,C,She ruled the coastal principality of Ullal in Karnataka.,,
ENG_C7_403,7,English,Rani Abbakka,History,Medium,MCQ,Rani Abbakka was the queen of which coastal kingdom?,Goa,Mangalore,Ullal,Kochi,C,She ruled Ullal and is famous for resisting the Portuguese navy.,,Poorvi Unit 5
ENG_C7_721,7,English,Rani Abbakka,History,Medium,MCQ,Rani Abbakka was the queen of which coastal principality?,Goa,Ullal,Mangalore,Kochi,B,Famous for her resistance against the Portuguese navy,,Poorvi Unit 5
SCI_C7_542,7,Science,Exploring Substances,Neutralization,Medium,MCQ,Reaction of acid and base gives:,Only gas,Salt and water,Only metal,Alcohol,B,Standard neutralization products,,Curiosity Ch 2
MATH_C7_523,7,Math,Working with Fractions,Operations,Medium,MCQ,Reciprocal of $2/5$ is:,$5/2$,$2/5$,$1/5$,1,A,Invert the fraction to get the reciprocal,,Ganita Prakash Ch 8
MATH_C7_763,7,Math,Working with Fractions,Operations,Medium,MCQ,Reciprocal of 2/5 is:,5/2,2/5,1/5,1,A,Inverting the fractional number,,Ganita Prakash Ch 8
SST_C7_623,7,SST,The Story of Indian Farming,Ecology,Medium,MCQ,Red soil gets its characteristic color from the presence of which element?,Nitrogen,Iron,Magnesium,Phosphorus,B,Iron oxides in the soil react with air and water to create a reddish tint,,Exploring Society Ch 1
SST_C7_743,7,SST,From Barter to Money,Economics,Easy,MCQ,Reserve Bank of India (RBI) issues:,Textbooks,Currency,Visas,Driving licenses,B,Central bank's monetary role,,Exploring Society Ch 11
SST_C7_757,7,SST,Understanding Markets,Economics,Easy,MCQ,Retailers buy bulk from:,Consumers,Wholesalers,Farmers,Tourists,B,Trade chain intermediary role,,Exploring Society Ch 12
SST_C7_762,7,SST,Understanding Markets,Economics,Easy,MCQ,Retailers buy from:,Consumers,Wholesalers,Farmers,Tourists,B,Market chain intermediary role,,Exploring Society Ch 12
SST_C7_722,7,SST,Understanding Markets,Economics,Easy,MCQ,Retailers primarily buy goods from which market?,Consumer market,Wholesale market,Weekly market,Retail mall,B,Retailers act as link between wholesalers and consumers,,Exploring Society Ch 12
ENG_C7_540,7,English,Three Questions,Ethics,Medium,MCQ,Right time for action is:,Tomorrow,Now,Yesterday,Future,B,Hermit wisdom on present moment,,Honeycomb Unit 1
SST_C7_731,7,SST,Exploring Society,Civics,Easy,MCQ,Right to vote for all adults is called:,Elite vote,Universal Adult Franchise,Public choice,Majority rule,B,Fundamental principle of democratic equality,,Exploring Society Ch 10
MATH_C7_753,7,Math,A Peek Beyond the Point,Rounding,Hard,MCQ,Round 38769957 to nearest ten lakh:,38000000,39000000,40000000,38800000,B,Standard rounding rule based on next digit,,Ganita Prakash Ch 1
MATH_C7_553,7,Math,A Peek Beyond the Point,Rounding,Hard,MCQ,Round the number 3;87;69;957 to the nearest ten lakh:,3;80;00;000,3;90;00;000,4;00;00;000,3;88;00;000,B,Since the lakhs digit 7 is greater than 5 we round up the ten lakhs place to 9,,Ganita Prakash Ch 1
SCI_C7_737,7,Science,Changes Around Us,Chemical,Medium,MCQ,Rusting needs oxygen and:,Nitrogen,Water,Heat,Light,B,Essential conditions for iron oxidation,,Curiosity Ch 5
SCI_C7_014,7,Science,Physical and Chemical Changes,Oxidation,Medium,MCQ,Rusting of iron is a _____ change:,Physical,Chemical,Temporary,Reversible,B,Rusting produces a new substance (iron oxide) and is irreversible.[2],,
SCI_C7_204,7,Science,Changes Around Us,Chemical Changes,Medium,MCQ,Rusting of iron is an example of a:,Physical change,Chemical change,Reversible change,Biological change,B,Rusting results in the formation of a new substance (iron oxide) and cannot be reversed.,,Curiosity Ch 5
SCI_C7_728,7,Science,Changes Around Us,Chemical,Medium,MCQ,Rusting of iron is classified as a:,Physical change,Chemical change,Reversible change,Temporary change,B,Formation of iron oxide is a permanent chemical process,,Curiosity Ch 5
SCI_C7_528,7,Science,Changes Around Us,Chemical Changes,Medium,MCQ,Rusting of iron is which change?,Physical,Chemical,Reversible,Temporary,B,Formation of iron oxide is permanent,,Curiosity Ch 5
SCI_C7_537,7,Science,Changes Around Us,Chemical,Medium,MCQ,Rusting requires oxygen and:,Nitrogen,Water,Heat,Light,B,Essential for oxidation of iron,,Curiosity Ch 5
SST_C7_566,7,SST,How the Land Becomes Sacred,Ecology,Medium,MCQ,Sacred groves are forest areas protected primarily due to:,Timber needs,Religious and cultural beliefs,Industrial use,Road building,B,Communities protect these areas as the abode of deities,,Exploring Society Ch 8
SCI_C7_540,7,Science,Electricity,Circuit,Easy,MCQ,Safety device in circuit is:,Switch,Fuse,Cell,Bulb,B,Protects by breaking high current flow,,Curiosity Ch 3
SCI_C7_740,7,Science,Electricity,Circuit,Easy,MCQ,Safety device to prevent electrical fires:,Switch,Fuse,Cell,Wire,B,Breaks the circuit if current is too high,,Curiosity Ch 3
SCI_C7_539,7,Science,Heat Transfer in Nature,Physics,Hard,MCQ,Sea breeze air moves from:,Land to sea day,Sea to land day,Land to sea night,Sea to land night,B,Caused by land heating faster than sea,,Curiosity Ch 7
SST_C7_624,7,SST,The Story of Indian Farming,Geology,Hard,MCQ,Sediment larger than clay but smaller than sand is specifically called:,Gravel,Silt,Humus,Loam,B,Silt is easily transported by rivers from mountains to the fertile plains,,Exploring Society Ch 1
ENG_C7_735,7,English,An Alien Hand,Plot,Medium,MCQ,Setting of 'An Alien Hand' is planet:,Earth,Mars,Moon,Venus,B,Story of underground Martian society,,An Alien Hand Unit 10
SST_C7_522,7,SST,Understanding Markets,Economics,Easy,MCQ,Shops under one roof in urban areas are in:,Weekly markets,Shopping malls,Fairs,Local streets,B,Malls are large enclosed retail spaces,,Exploring Society Ch 12
SCI_C7_009,7,Science,Fibre to Fabric,Sericulture,Easy,MCQ,Silk fibre is obtained from which stage of the silkworm?,Egg,Cocoon,Caterpillar,Adult moth,B,The cocoon is boiled or treated to extract long silk filaments. [1],,
SCI_C7_600,7,Science,The World of Metals and Non-metals,Fibres,Hard,MCQ,Silk fibres are primarily composed of which biological substance?,Carbohydrates,Fats,Proteins,Vitamins,C,Silk is a natural protein fibre produced by certain insect larvae,,Curiosity Ch 4
MATH_C7_519,7,Math,Arithmetic Expressions,BODMAS,Medium,MCQ,Simplify $10 + 5 \\times 2$,30,20,10,25,B,Multiplication before addition: $10 + 10 = 20$,,Ganita Prakash Ch 2
ENG_C7_738,7,English,My Dear Soldiers,Poetry,Medium,MCQ,Soldiers are compared to yogis for their:,Magic,Discipline and endurance,Silence,Dress,B,Focus on border duty devotion,,Poorvi Unit 5
ENG_C7_538,7,English,My Dear Soldiers,Poetry,Medium,MCQ,Soldiers are compared to yogis for:,Magic,Discipline and endurance,Silence,Clothing,B,Metaphor for their border duty,,Poorvi Unit 5
MATH_C7_751,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve $2n + 1 = 99$.,49,50,48,51,A,Subtract 1 then divide by 2 to find 49,,Ganita Prakash Ch 15
MATH_C7_536,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve $3(y - 4) = 15$,5,9,1,19,B,Expand to $3y - 12 = 15$; then $3y = 27$; so $y = 9$,,Ganita Prakash Ch 15
MATH_C7_736,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve $3(y - 4) = 15$.,5,9,1,19,B,Expand to $3y-12=15$ then add 12 to find $y=9$,,Ganita Prakash Ch 15
MATH_C7_328,7,Math,Finding the Unknown,Linear Equations,Medium,MCQ,Solve for $m$ in the equation $5m = -10$.,2,-2,5,-10,B,To find $m$ divide both sides by 5: $m = -10 / 5 = -2$.,,Ganita Prakash Ch 7
MATH_C7_677,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve for $n$ if $2n + 1 = 99$.,49,50,48,51,A,Subtract 1 to get $2n = 98$ then divide by 2 to get $n = 49$,,Ganita Prakash Ch 15
MATH_C7_717,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve for $x$ if $4x = 12$.,2,3,4,48,B,Divide both sides by 4 to find $x = 3$,,Ganita Prakash Ch 15
MATH_C7_701,7,Math,Finding the Unknown,Equations,Easy,MCQ,Solve for $x$ if $x + 10 = 25$.,15,35,10,5,A,Subtract 10 from both sides to find $x = 15$,,Ganita Prakash Ch 15
MATH_CH4_001,7,Math,Simple Equations,Equation Solving,Hard,MCQ,Solve for $x$: $4(x - 2) = 12$,3,5,1,8,B,Expanding the equation: $4x - 8 = 12 \\rightarrow 4x = 20 \\rightarrow x = 5$.,,Ch 4: Simple Equations
MATH_C7_511,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve for $y$ in the equation $8y - 22 = 50$,9,12,10,8,A,Add 22 to both sides ($8y = 72$) then divide by 8 ($y = 9$),,Ganita Prakash Ch 15
MATH_C7_706,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve for $y$ in the equation $8y - 22 = 50$.,9,12,10,8,A,Add 22 to get $8y = 72$ then divide by 8 to find $y = 9$,,Ganita Prakash Ch 15
MATH_C7_481,7,Math,Finding the Unknown,Equation Solving,Hard,MCQ,Solve for $y$: $3(y - 4) = 15$,5,9,1,19,B,Expand to $3y - 12 = 15$; add 12 to get $3y = 27$; divide by 3 to get $y = 9$,,Ganita Prakash Ch 15
MATH_C7_712,7,Math,Finding the Unknown,Equation Solving,Hard,MCQ,Solve for $y$: $3(y - 4) = 15$.,5,9,1,19,B,Expand to $3y - 12 = 15$ then add 12 to get $3y = 27$ then divide by 3,,Ganita Prakash Ch 15
ENG_C7_648,7,English,Three Questions,Comprehension,Medium,MCQ,Some wise men suggested the king needed a council of wise men to:,Fight for him,Help him act at the right time,Cook for him,Entertain him,B,They believed a single person could not always know the correct moment for action,,Honeycomb Unit 1
SCI_C7_672,7,Science,The World of Metals and Non-metals,Biology,Hard,MCQ,Sorter's disease is a lethal blood disease caused by which bacterium?,Salmonella,Bacillus anthracis,Rhinovirus,Amoeba,B,Anthrax is an occupational hazard for workers in the wool industry who sort infected fleece,,Curiosity Ch 4
ENG_C7_537,7,English,Rani Abbakka,Civics,Medium,MCQ,Sovereign country means:,Rich,Independent,Large,Small,B,Self-governing nation,,Poorvi Unit 5
SCI_C7_538,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,Speed of cyclist 12km in 30min in km/h is:,6,12,24,30,C,Distance / Time = $12 / 0.5 = 24 km/h$,,Curiosity Ch 8
SST_C7_497,7,SST,How the Land Becomes Sacred,Ecology,Medium,MCQ,Spiritual journeys taken to places of religious or cultural importance are called:,Tourism,Pilgrimages,Migration,Trade,B,Pilgrimages connect people with the sacred geography and history of their land,,Exploring Society Ch 8
SST_C7_207,7,SST,How the Land Becomes Sacred,Ecology,Medium,MCQ,Spiritual journeys taken to places of religious or cultural importance are:,Tourism,Pilgrimages,Migration,Trade,B,Pilgrimages connect people with the sacred geography and history of their land.,,Exploring Society Ch 8
SST_C7_260,7,SST,How the Land Becomes Sacred,Ecology,Medium,MCQ,Spiritual journeys to places of religious or cultural importance are called:,Tourism,Pilgrimages,Migration,Trade,B,Pilgrimages connect people with the sacred history of their land.,,
SCI_C7_087,7,Science,Changes Around Us,Chemistry,Medium,MCQ,Stainless steel is created by combining iron with:,Carbon and Nickel,Carbon Nickel and Chromium,Zinc and Lead,Silver and Gold,B,Chromium and nickel are added to iron to make it resistant to rusting. [1],,
SCI_C7_733,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,Standard S.I. unit of speed is:,km/h,m/s,m/min,cm/s,B,Globally accepted base unit for speed,,Curiosity Ch 8
SCI_C7_533,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,Standard unit of speed is:,km/h,m/s,m/min,cm/s,B,Globally accepted metric unit,,Curiosity Ch 8
SCI_C7_564,7,Science,Exploring Substances,pH,Medium,MCQ,Substances that are neither acidic nor basic are called:,Corrosive,Neutral,Indicators,Salts,B,Neutral substances like pure water have a pH of approximately 7,,Curiosity Ch 2
SCI_C7_604,7,Science,Exploring Substances,Indicators,Medium,MCQ,Substances that change color when added to acidic or basic solutions are:,Catalysts,Indicators,Solvents,Metals,B,Indicators like litmus or turmeric are used to test for acidity or alkalinity,,Curiosity Ch 2
MATH_C7_761,7,Math,Finding the Unknown,Equations,Easy,MCQ,Subtract 10 from $x$ is 15. $x$ is:,5,25,10,150,B,Algebraic balance equation,,Ganita Prakash Ch 15
MATH_C7_756,7,Math,Finding the Unknown,Equations,Medium,MCQ,Subtract 10 from $x$ results in 15. $x$ is:,5,25,10,150,B,Algebraic translation and solution,,Ganita Prakash Ch 15
ENG_C7_714,7,English,Try Again,Moral,Easy,MCQ,Success comes after perseverance according to which poem?,The Rebel,Try Again,The Tunnel,Rani Abbakka,B,The poem motivates students to keep attempting despite setbacks,,Poorvi Unit 1
ENG_C7_527,7,English,Try Again,Poetry,Easy,MCQ,Success comes after:,Luck,Perseverance,Giving up,Money,B,Core moral of the poem,,Poorvi Unit 1
MATH_C7_525,7,Math,Geometric Twins,Polygons,Easy,MCQ,Sum of interior angles of a triangle is:,90,180,360,270,B,Angle Sum Property of triangles,,Ganita Prakash II Ch 1
MATH_C7_540,7,Math,Geometric Twins,Triangles,Medium,MCQ,Sum of interior angles of triangle is:,90,180,360,270,B,Angle Sum Property,,Ganita Prakash II Ch 1
SCI_C7_526,7,Science,Heat Transfer in Nature,Radiation,Easy,MCQ,Sun heat reaches Earth by:,Conduction,Convection,Radiation,Insulation,C,Mode requiring no material medium,,Curiosity Ch 7
SCI_C7_726,7,Science,Heat Transfer in Nature,Radiation,Easy,MCQ,Sun's heat reaches the Earth through:,Conduction,Convection,Radiation,Insulation,C,Transfer method that does not require a material medium,,Curiosity Ch 7
SST_C7_517,7,SST,Understanding Markets,Economics,Medium,MCQ,Supply and demand mainly decide what in a market?,Shop location,Item color,Price,Shopkeeper name,C,Prices fluctuate based on availability and consumer interest,,Exploring Society Ch 12
SST_C7_621,7,SST,The Story of Indian Farming,History,Hard,MCQ,Surapala's Vrikshayurveda recommends sprinkling seeds with which substance to aid sprouting?,Salt water,Milk and Cow dung,Sand,Oil,B,Ancient Indian texts provide unique horticultural methods for plant success,,Exploring Society Ch 1
SCI_C7_529,7,Science,Electricity,Circuit,Easy,MCQ,Switch is used to:,Open/Close circuit,Produce electricity,Measure current,Heat wires,A,Basic function of a switch in a circuit,,Curiosity Ch 3
SST_C7_564,7,SST,The Rise of Empires,Strategy,Medium,MCQ,The 'Arthashastra' was a famous book on statecraft written by:,Ashoka,Kautilya,Megasthenes,Seleucus,B,Chanakya or Kautilya provided the political blueprint for the Mauryan empire,,Exploring Society Ch 5
SST_C7_694,7,SST,The Rise of Empires,Strategy,Medium,MCQ,The 'Arthashastra' was written by which famous advisor?,Ashoka,Kautilya,Panini,Chandragupta,B,Kautilya (Chanaky authored this foundational text on statecraft,,Exploring Society Ch 5
SST_C7_673,7,SST,The Gupta Era,History,Medium,MCQ,The 'Golden Age' of India refers to the period of which dynasty?,Maurya,Gupta,Chola,Mughal,B,The Gupta era is noted for immense progress in arts; science; and literature,,Exploring Society Ch 7
ENG_A_001,7,English,The Tiny Teacher,Life Cycles,Easy,MCQ,The 'grubs' of ants eventually turn into:,Beetles,Cocoons,Greenflies,Flies,B,After two or three weeks grubs become cocoons which then break to reveal complete ants.,,Unit 1: An Alien Hand
SST_C_001,7,SST,The Constitution of India,Equality,Easy,MCQ,The 'Mid-day Meal Scheme' was first introduced in which Indian state?,Kerala,Tamil Nadu,Andhra Pradesh,Karnataka,B,Tamil Nadu was the first state in India to introduce this scheme in 2001 to encourage school attendance.,,Ch 10: Exploring Society
SCI_C7_494,7,Science,Life Processes in Animals,Digestion,Easy,MCQ,The acid present in the human stomach that helps in digestion is:,Acetic acid,Hydrochloric acid,Sulphuric acid,Nitric acid,B,Hydrochloric acid ($HCl$) helps break down food and kills bacteria in the stomach,,Curiosity Ch 9
SCI_C7_407,7,Science,Life Processes in Animals,Digestion,Easy,MCQ,The acid secreted in the human stomach to help digestion is:,Sulphuric acid,Hydrochloric acid,Nitric acid,Acetic acid,B,Hydrochloric acid ($HCl$) helps break down food and kills bacteria in the stomach.,,Curiosity Ch 9
MATH_C7_082,7,Math,Operations with Integers,Inverses,Easy,MCQ,The additive inverse of -5 is:,-5,0,5,1,C,The additive inverse of an integer $a$ is the number which when added to $a$ results in zero.,,
MATH_C7_580,7,Math,Expressions using Letter-Numbers,Algebraic expressions,Medium,MCQ,The algebraic expression for 'y subtracted from 10' is:,$y - 10$,$10 - y$,$10y$,$10 + y$,B,Subtraction from a number means that number is the minuend; so $10 - y$,,Ganita Prakash Ch 4
MATH_C7_724,7,Math,Geometric Twins,Polygons,Easy,MCQ,The Angle Sum Property states that triangle interior angles sum to:,90,180,360,270,B,Fundamental property for all types of triangles,,Ganita Prakash II Ch 1
MATH_C7_578,7,Math,Perimeter and Area,Square,Easy,MCQ,The area of a square with side length 10 cm is:,40 cm,100 sq cm,20 sq cm,10 sq cm,B,Area is $side \\times side = 10 \\times 10 = 100$ square centimetres,,NCERT Ch 9
MATH_C7_495,7,Math,Connecting the Dots,Statistics,Medium,MCQ,The arithmetic average of all observations in a dataset is called the:,Mode,Median,Mean,Range,C,Mean is calculated by dividing the total sum of observations by the number of observations,,Ganita Prakash II Ch 13
ENG_C7_143,7,English,Three Days to See,Inference,Hard,MCQ,The author Helen Keller emphasizes the value of which sense?,Taste,Sight,Smell,Hearing,B,She describes what she would do if given three days of vision to highlight the beauty people often ignore.,,
MATH_C7_022,7,Math,Data Handling,Mean,Easy,MCQ,The average of 7 3 8 20 and 12 is:,10,12,15,11,B,Average = $(7+3+8+20+12)/5 = 60/5 = 12$.,,NCERT Ch 3
SCI_C7_620,7,Science,Measurement of Time and Motion,Meteorology,Medium,MCQ,The average weather pattern of a place over a long period of time is its:,Weather,Climate,Season,Adaptation,B,Climate describes the long-term trends rather than daily atmospheric changes,,Curiosity Ch 8
SCI_C7_015,7,Science,Weather and Climate,Definitions,Easy,MCQ,The average weather pattern over a long period is called:,Weather,Climate,Season,Adaptation,B,Climate describes long-term atmospheric trends while weather is daily.,,
SCI_C7_596,7,Science,The World of Metals and Non-metals,Biology,Hard,MCQ,The bacterial disease 'Sorters disease' is caused by which pathogen?,Salmonella,Bacillus anthracis,Rhinovirus,Amoeba,B,Anthrax is an occupational hazard for workers in the wool industry,,Curiosity Ch 4
SST_C7_721,7,SST,From Barter to Money,Economics,Easy,MCQ,The barter system involves exchanging goods for:,Money,Other goods,Gold,Paper,B,Primary mode of exchange before currency was invented,,Exploring Society Ch 11
SST_C7_086,7,SST,Geographical Diversity of India,Rivers,Medium,MCQ,The Bhagirathi River originates from which of the following places?,Cherrapunji,Pangong Tso,Gaumukh,Mount Abu,C,Gaumukh is the snout of the Gangotri Glacier where the Bhagirathi begins.,,
SCI_C7_480,7,Science,Light: Shadows and Reflections,Optics,Medium,MCQ,The bouncing of light off a shiny surface is called:,Refraction,Reflection,Dispersion,Absorption,B,Reflection occurs when light hits a surface and changes direction without passing through,,Curiosity Ch 11
SCI_C7_607,7,Science,The World of Metals and Non-metals,Oxidation,Medium,MCQ,The brownish layer formed on iron objects when exposed to air and moisture is:,Zinc,Rust,Copper,Silver,B,Rusting is the slow oxidation of iron in the presence of water and oxygen,,Curiosity Ch 4
ENG_C7_209,7,English,Golu Grows a Nose,Fable,Medium,MCQ,The central lesson Golu learns in the story is related to:,Greed,Self-acceptance and adaptation,How to fly,How to swim,B,Golu realizes that his new long nose provides him with several practical advantages.,,An Alien Hand Unit 3
SST_C7_695,7,SST,Constitution of India,Governance,Medium,MCQ,The chairman of the Drafting Committee of the Indian Constitution was:,Jawaharlal Nehru,Dr. Rajendra Prasad,Dr. B.R. Ambedkar,Sardar Patel,C,He is widely regarded as the chief architect of the Indian Constitution,,Exploring Society Ch 10
SCI_C7_257,7,Science,Changes Around Us,Oxidation,Medium,MCQ,The chemical name for rust is:,Ferrous sulphate,Iron oxide,Copper oxide,Zinc chloride,B,Rust forms when iron reacts with oxygen and moisture to create iron oxide.,,
SCI_C7_486,7,Science,Changes Around Us,Oxidation,Medium,MCQ,The chemical name of the substance formed during the rusting of iron is:,Ferrous sulphate,Iron oxide,Copper oxide,Zinc chloride,B,Rust is essentially iron oxide formed when iron reacts with oxygen and moisture,,Curiosity Ch 5
SCI_C7_552,7,Science,Adolescence,Endocrinology,Medium,MCQ,The chemical substances secreted by endocrine glands are called:,Enzymes,Hormones,Proteins,Vitamins,B,Hormones are chemical messengers that regulate various body functions during growth,,Curiosity Ch 6
MATH_C7_410,7,Math,Perimeter and Area,Circle,Hard,MCQ,The circumference of a circle with radius 7 cm (taking $\\pi = 22/7$) is:,22 cm,44 cm,154 cm,88 cm,B,$C = 2\\pi r = 2 \\times 22/7 \\times 7 = 44 cm$.,,NCERT Ch 9
ENG_C7_716,7,English,Rani Abbakka,History,Medium,MCQ,The coastal kingdom ruled by Rani Abbakka was:,Goa,Ullal,Mangalore,Kochi,B,She is a famous warrior queen from Ullal in Karnataka,,Poorvi Unit 5
ENG_C7_730,7,English,The Day the River Spoke,Character,Medium,MCQ,The confidant of Jahnavi was the:,Father,Brother,River,Teacher,C,She shared her school dreams with the waterway,,Poorvi Unit 1
ENG_C7_722,7,English,Try Again,Moral,Easy,MCQ,The core message of the poem 'Try Again' is:,Give up,Perseverance,Luck,Winning,B,Encourages continued effort to achieve success,,Poorvi Unit 1
ENG_C7_681,7,English,Rani Abbakka,History,Medium,MCQ,The courageous queen Rani Abbakka fought against which foreign power?,British,Portuguese,French,Dutch,B,She is famous for her naval resistance in the coastal region of Ullal,,Poorvi Unit 5
SST_C7_501,7,SST,From Barter to Money,Economics,Easy,MCQ,The current official currency issued by the RBI in India is the:,Dollar,Indian Rupee,Euro,Pound,B,The Indian Rupee ($₹$) is the legal tender managed by the central bank,,Exploring Society Ch 11
MATH_C7_210,7,Math,Data Handling,Stats,Easy,MCQ,The difference between the highest and lowest observations in a dataset is called:,Mean,Median,Mode,Range,D,Range is a measure of spread calculated by subtracting the minimum value from the maximum value.,,NCERT Ch 3
MATH_C7_697,7,Math,Connecting the Dots,Data Handling,Easy,MCQ,The difference between the highest and lowest observations is called:,Mean,Median,Mode,Range,D,Range is a measure of spread in a given data set,,NCERT Ch 3
MATH_C7_590,7,Math,Arithmetic Expressions,Algebraic rules,Medium,MCQ,The expression $a(b + $ is equal to:,$ab + c$,$ab + ac$,$abc$,$a + b + c$,B,This represents the distributive property of multiplication over addition,,Ganita Prakash Ch 2
SST_C7_518,7,SST,The Rise of Empires,History,Easy,MCQ,The first great empire in India was the:,Gupta,Maurya,Maratha,Chola,B,The Mauryan empire unified a large part of the subcontinent,,Exploring Society Ch 5
SST_C7_410,7,SST,Exploring Society,Civics,Easy,MCQ,The full form of MLA is:,Member of Local Authority,Member of Legislative Assembly,Most Liable Administrator,Member of Local Association,B,MLAs are elected representatives of the people in the state legislature.,,Exploring Society Ch 12
SST_C7_519,7,SST,Exploring Society,Civics,Easy,MCQ,The full form of PHC in health centers is:,Private Health Center,Public Health Center,Primary Health Center,Personal Health Care,C,PHCs are the basic government clinics in rural areas,,Exploring Society Ch 12
SST_C7_503,7,SST,Understanding Markets,Governance,Medium,MCQ,The government sets a 'Minimum Support Price' (MSP) primarily to help:,Mall owners,Foreign tourists,Farmers,Factory workers,C,MSP ensures that farmers get a fair price for their crops even if market prices drop,,Exploring Society Ch 12
SCI_C7_514,7,Science,Life Processes in Plants,Botany,Easy,MCQ,The green pigment in leaves that traps solar energy is:,Hemoglobin,Chlorophyll,Melanin,Anthocyanin,B,Chlorophyll is essential for capturing light energy for photosynthesis,,Curiosity Ch 10
SST_C7_206,7,SST,The Gupta Era,History,Medium,MCQ,The Gupta period is often called the 'Golden Age' of India because of its:,High taxes,Continuous wars,Progress in arts and science,Discovery of gold mines,C,This era saw significant achievements in mathematics medicine and Sanskrit literature.,,Exploring Society Ch 7
SST_C7_010,7,SST,Environment,Landforms,Medium,MCQ,The hard top layer of the earth is known as the:,Atmosphere,Hydrosphere,Lithosphere,Biosphere,C,The lithosphere comprises the crust and the rigid uppermost mantle. [6][10],,
ENG_C7_712,7,English,Three Questions,Ethics,Medium,MCQ,The hermit teaches that the most important affair in life is:,Gain wealth,Do good to others,Win wars,Live alone,B,The goal is to perform kind acts for the person you are currently with,,Honeycomb Unit 1
ENG_C7_708,7,English,Three Questions,Theme,Medium,MCQ,The hermit teaches that the most important person is:,The King,The wise man,The person you are with,The soldier,C,The lesson focuses on the value of the current human connection,,Honeycomb Unit 1
ENG_C7_723,7,English,Three Questions,Theme,Medium,MCQ,The hermit's final answer for the right time to act was:,Tomorrow,Now,Noon,When ordered,B,Teaches that only the present moment is in our control,,Honeycomb Unit 1
ENG_C7_650,7,English,Three Questions,Ethics,Medium,MCQ,The hermit's final answer for the right time to do anything was:,Tomorrow,Now,Noon,When ordered,B,The hermit taught that the present moment is the only time we have power,,Honeycomb Unit 1
MATH_C7_702,7,Math,Connecting the Dots,Coordinate Geometry,Medium,MCQ,The horizontal number line in a Cartesian plane is called the:,X-axis,Y-axis,Origin,Quadrant,A,The X-axis measures the horizontal distance from the origin,,Ganita Prakash Ch 13
SCI_C7_616,7,Science,Light: Shadows and Reflections,Optics,Medium,MCQ,The image formed by a pinhole camera is always:,Upright,Inverted,Virtual,Larger than object,B,Light rays cross at the pinhole; causing the top of the object to appear at the bottom,,Curiosity Ch 11
SST_C7_006,7,SST,Inside Our Earth,Structure,Medium,MCQ,The innermost layer of the Earth is called the:,Crust,Mantle,Core,Lithosphere,C,The core is the deepest layer primarily composed of nickel and iron (nife). [6][6],,
SST_C7_682,7,SST,Constitution of India,Governance,Medium,MCQ,The introductory document to the Indian Constitution is called the:,Index,Preamble,Preface,Summary,B,The Preamble outlines the core values and objectives of the Constitution,,Exploring Society Ch 10
ENG_C7_487,7,English,Three Questions,Theme,Medium,MCQ,The king believed that knowing the answers to three questions would:,Make him wealthy,Ensure he never failed,Help him win wars,Find him a queen,B,The king thought these answers were the key to perfect governance and success,,Honeycomb Unit 1
ENG_C7_646,7,English,Three Questions,Theme,Medium,MCQ,The king believed that the answers to his three questions would:,Make him wealthy,Help him never fail,Help him win wars,Find him a queen,B,The king sought perfect knowledge to be a successful and effective ruler,,Honeycomb Unit 1
ENG_C7_729,7,English,Three Questions,Theme,Medium,MCQ,The king believed three answers would ensure:,Wealth,No failure,Many friends,Long life,B,Belief system of the ruler in the story,,Honeycomb Unit 1
ENG_C7_519,7,English,Three Questions,Plot,Medium,MCQ,The king wanted the answers to three questions to become a:,Wealthy king,Great ruler,Famous warrior,Wise hermit,B,The king believed these answers would make him a perfect and successful governor,,Honeycomb Unit 1
SST_C7_559,7,SST,From Barter to Money,Economics,Medium,MCQ,The lack of 'double coincidence of wants' was a major problem in:,Digital banking,Barter system,Credit system,Cash system,B,Barter requires both parties to want exactly what the other is offering,,Exploring Society Ch 11
SST_C7_004,7,SST,Mughal Empire,Revenue,Hard,MCQ,The land revenue system 'Zabt' was developed by which minister?,Birbal,Raja Todar Mal,Abul Fazl,Bairam Khan,B,Todar Mal served as Akbar's finance minister and implemented revenue reforms. [3],,
SST_C7_017,7,SST,Age of Reorganisation,Medieval India,Hard,MCQ,The land revenue system known as 'Zabt' was implemented by which minister?,Birbal,Raja Todar Mal,Abul Fazl,Man Singh,B,"Todar Mal served as Akbar's finance minister and standardized land surveys and taxes.[7]""",,Exploring Society Ch 6
SST_C7_256,7,SST,New Beginnings: Cities and States,History,Medium,MCQ,The large political units in ancient India around 600 BCE were called:,Janapadas,Mahajanapadas,Ganas,Empires,B,Mahajanapadas were sixteen powerful kingdoms that emerged in the subcontinent.,,
SST_C7_204,7,SST,New Beginnings: Cities and States,Governance,Medium,MCQ,The large political units that emerged in ancient India around 600 BCE were called:,Janapadas,Mahajanapadas,Ganas,Empires,B,Mahajanapadas refer to the sixteen great kingdoms that existed in the Indian subcontinent.,,Exploring Society Ch 4
MATH_C7_083,7,Math,Number Play,Divisibility,Hard,MCQ,The largest 3-digit number divisible by 9 is:,990,999,981,900,B,A number is divisible by 9 if the sum of its digits is a multiple of 9. $9+9+9=27$ which is divisible by 9.,,
SST_C7_561,7,SST,Geographical Diversity of India,Landforms,Easy,MCQ,The largest delta in the world located in India is:,Nile Delta,Sundarban Delta,Amazon Delta,Indus Delta,B,The Sundarbans are formed by the confluence of the Ganga and Brahmaputra,,Exploring Society Ch 1
SCI_C7_021,7,Science,Exploring Substances,pH and Acids,Medium,MCQ,The Latin word 'acere' from which 'acid' is derived means:,Sweet,Bitter,Sour,Salty,C,"Acids are defined by their sour taste which is described by the Latin root word.[1]""",,Curiosity Ch 2
SST_C7_627,7,SST,Understanding the Weather,Atmosphere,Medium,MCQ,The layer of the atmosphere that protects us from harmful UV rays is the:,Troposphere,Stratosphere,Mesosphere,Exosphere,B,The stratosphere contains the ozone layer which absorbs ultraviolet radiation,,Exploring Society Ch 2
SST_C7_730,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,The layer where clouds form is the:,Troposphere,Stratosphere,Mesosphere,Exosphere,A,Lowest layer containing most water vapor,,Exploring Society Ch 2
SST_C7_640,7,SST,Geographical Diversity of India,Etymology,Easy,MCQ,The literal meaning of the word 'Himalaya' is:,High peak,Abode of snow,Land of rivers,Green valley,B,It comes from the Sanskrit words 'hima' (snow) and 'alaya' (abode),,Exploring Society Ch 1
MATH_C7_522,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,The mean of 1 2 3 4 5 is:,2,3,4,5,B,Sum = 15; Count = 5; Mean = $15/5 = 3$,,Ganita Prakash Ch 13
MATH_C7_732,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,The mean of 1; 2; 3; 4; 5 is:,2,3,4,5,B,Average of consecutive natural numbers,,Ganita Prakash Ch 13
SCI_C7_610,7,Science,Changes Around Us,Physical changes,Easy,MCQ,The melting of ghee is classified as a:,Chemical change,Physical change,Irreversible change,Biological change,B,It is a change of state that can be reversed by cooling; so it is physical,,Curiosity Ch 5
ENG_C7_732,7,English,Three Questions,Ethics,Medium,MCQ,The most important person according to hermit is:,King,Family,The person you are with,Hermit,C,Focuses on the present human relationship,,Honeycomb Unit 1
ENG_C7_558,7,English,A Homage to Our Brave Soldiers,Values,Easy,MCQ,The National War Memorial is located in which city?,Mumbai,Kolkata,New Delhi,Chennai,C,It is a monument built to honor the personnel of the Indian Armed Forces,,Poorvi Unit 5
ENG_C7_670,7,English,A Homage to Our Brave Soldiers,Values,Easy,MCQ,The National War Memorial is located in which Indian city?,Mumbai,Kolkata,New Delhi,Chennai,C,This monument was built to honor the personnel of the Indian Armed Forces,,Poorvi Unit 5
MATH_C7_574,7,Math,Operations with Integers,Signs,Easy,MCQ,The negative of a negative integer is always:,Negative,Positive,Zero,One,B,The opposite of $-a$ is $+a$ because $-(- = a$,,NCERT Ch 1
SCI_C7_515,7,Science,Wastewater Story,Sanitation,Medium,MCQ,The network of big and small pipes carrying wastewater is called:,Sewer,Sewage,Sewerage,Silt,C,Sewerage is the entire infrastructure of pipes and pumps for waste disposal,,Curiosity Ch 13
SST_C7_147,7,SST,Exploring Society,Civics,Easy,MCQ,The nominal head of an Indian state is the:,Chief Minister,Prime Minister,Governor,President,C,The Governor represents the center and is the constitutional head of the state. [4],,
SST_C7_494,7,SST,Exploring Society,Governance,Medium,MCQ,The nominal head of an Indian state who represents the central government is the:,Chief Minister,Prime Minister,Governor,President,C,The Governor is the constitutional head of the state appointed by the President,,Exploring Society Ch 12
MATH_CH3_001,7,Math,Data Handling,Mode,Easy,MCQ,The observation that occurs most frequently in a data set is called:,Mean,Median,Mode,Range,C,Mode is defined as the value that appears most often in a set of data.,,Ch 3: Data Handling
SCI_C7_205,7,Science,Life Processes in Animals,Digestion,Medium,MCQ,The organ responsible for producing bile juice is the:,Pancreas,Stomach,Liver,Gall bladder,C,The liver produces bile which is essential for the digestion and absorption of fats.,,Curiosity Ch 9
SCI_C7_387,7,Science,Life Processes in Animals,Digestion,Medium,MCQ,The organ where bile juice is produced is the:,Pancreas,Stomach,Liver,Gall bladder,C,The liver produces bile which is then stored in the gall bladder for digestion.,,Curiosity Ch 9
SST_C7_514,7,SST,Geographical Diversity of India,Physical,Medium,MCQ,The Peninsular Plateau is surrounded by water on how many sides?,One,Two,Three,Four,C,A peninsula is a landmass surrounded by water on three sides,,Exploring Society Ch 1
MATH_C7_579,7,Math,Geometric Twins,Triangles,Easy,MCQ,The perimeter of an equilateral triangle with side 4 cm is:,8 cm,12 cm,16 cm,4 cm,B,Perimeter is $3 \\times side = 3 \\times 4 = 12$ centimetres,,Ganita Prakash II Ch 1
SCI_C7_551,7,Science,Adolescence,Biology,Easy,MCQ,The period of life between childhood and adulthood is called:,Maturity,Infancy,Adolescence,Senescence,C,Adolescence is the phase of physical and mental transition to adulthood,,Curiosity Ch 6
ENG_C7_505,7,English,My Dear Soldiers,Imagery,Medium,MCQ,The phrase ' Prime of your youth given to the nation' highlights the soldiers:,Skill,Salary,Sacrifice,Education,C,It refers to giving the best years of one's life to protect the country,,Poorvi Unit 5
ENG_C7_565,7,English,A Funny Man,Imagery,Medium,MCQ,The poem 'A Funny Man' describes a man who does things in a _____ way:,Serious,Mixed-up and silly,Angry,Sad,B,The humor comes from his wearing shoes on his head and buns as roses,,Poorvi Unit 2
ENG_C7_147,7,English,My Dear Soldiers,Themes,Medium,MCQ,The poem 'My Dear Soldiers' describes soldiers patrolling lonely expanses as:,Tourists,Yogis,Farmers,Hunters,B,The comparison to yogis highlights their discipline focus and endurance in isolated regions.,,
MATH_C7_264,7,Math,Connecting the Dots,Graphs,Easy,MCQ,The point $(0 0)$ on a Cartesian plane is called the:,Vertex,Origin,Axis,Quadrant,B,The origin is the intersection of the X and Y axes where both coordinates are zero.,,
MATH_C7_379,7,Math,Connecting the Dots,Graphs,Easy,MCQ,"The point $(0, 0)$ on a Cartesian plane is called the:",Vertex,Origin,Axis,Quadrant,B,The origin is the intersection of the X and Y axes.,,Ganita Prakash Ch 13
MATH_C7_685,7,Math,Connecting the Dots,Coordinate Geometry,Medium,MCQ,The point where both numerical axes intersect on a graph is the:,Vertex,Origin,Center,Intercept,B,The origin has coordinates $(0 0)$ and is the starting point for both axes,,Ganita Prakash Ch 13
MATH_C7_503,7,Math,Connecting the Dots,Origin,Easy,MCQ,The point where the X-axis and Y-axis intersect is called:,Vertex,Center,Origin,Point zero,C,The origin is the starting point $(0 0)$ for all coordinates on a graph,,Ganita Prakash Ch 13
MATH_C7_512,7,Math,Connecting the Dots,Origin,Easy,MCQ,The point with coordinates $(0 0)$ on a graph is called the:,Quadrant,Origin,Axis,Slope,B,The origin is the starting point for both numerical axes,,Ganita Prakash Ch 13
SST_C7_558,7,SST,The Constitution of India,Governance,Medium,MCQ,The Preamble of the Indian Constitution describes India as a:,Colony,Sovereign Socialist Secular Democratic Republic,Monarchy,Military State,B,These core values define the identity of the Indian nation as per its constitution,,Exploring Society Ch 10
SST_C7_717,7,SST,Constitution of India,Governance,Medium,MCQ,The Preamble starts with the words:,We the People of India,India is free,Justice for all,Freedom for citizens,A,The Preamble represents the collective will of the Indian people,,Exploring Society Ch 10
SST_C7_520,7,SST,Constitution of India,Governance,Medium,MCQ,The Preamble to the Constitution starts with the words:,We the People of India,India is a free land,Justice for all,Freedom for citizens,A,The Preamble represents the collective will of the Indian citizens,,Exploring Society Ch 10
SST_C7_633,7,SST,The Constitution of India,Governance,Medium,MCQ,The Preamble to the Indian Constitution declares India as a:,Colony,Sovereign Socialist Secular Democratic Republic,Monarchy,Empire,B,These core principles define the nature of the Indian state,,Exploring Society Ch 10
SCI_C7_499,7,Science,Earth Moon and the Sun,Astronomy,Easy,MCQ,The primary cause of day and night on Earth is:,Earth revolution,Moon rotation,Earth rotation,Sun movement,C,Day and night occur because Earth spins on its axis once every 24 hours,,Curiosity Ch 12
SST_C7_210,7,SST,Understanding Markets,Economics,Easy,MCQ,The primary role of a market in daily life is to:,Provide a place for sports,Facilitate the exchange of goods and services,Store historical artifacts,Guard the streets,B,Markets serve as platforms where producers and consumers meet to trade.,,Exploring Society Ch 12
SST_C7_622,7,SST,The Story of Indian Farming,Ecology,Medium,MCQ,The process by which rocks are broken down into soil by wind or water is:,Erosion,Weathering,Deposition,Volcanism,B,Weathering is the foundational process for soil formation over long periods,,Exploring Society Ch 1
SCI_CH5_001,7,Science,Changes Around Us,Chemical Changes,Medium,MCQ,The process of depositing a layer of zinc on iron to prevent rusting is known as:,Crystallization,Neutralization,Galvanization,Oxidation,C,Galvanization is a chemical prevention method where a protective zinc coating is applied to steel or iron.,,Ch 5: Curiosity
SCI_C7_018,7,Science,Changes Around Us,Chemical Prevention,Easy,MCQ,The process of depositing a zinc layer on iron is called:,Galvanisation,Crystallisation,Rusting,Neutralisation,A,"Galvanisation provides a protective coating of zinc to prevent the iron from oxidizing.[1]""",,Curiosity Ch 5
SCI_C7_337,7,Science,Changes Around Us,Chemical Prevention,Easy,MCQ,The process of depositing a zinc layer on iron to prevent rusting is:,Galvanisation,Crystallisation,Neutralisation,Oxidation,A,Galvanisation involves applying a protective zinc coating to prevent iron from oxidizing.[1],,Curiosity Ch 5
SCI_C7_405,7,Science,Heat Transfer in Nature,Convection,Hard,MCQ,The process of transferring heat in liquids and gases through the actual movement of particles is:,Conduction,Convection,Radiation,Insulation,B,Convection occurs as warmer less dense fluid rises and cooler fluid sinks.,,Curiosity Ch 7
SCI_C7_601,7,Science,The World of Metals and Non-metals,Processing,Medium,MCQ,The process of washing sheared skin to remove grease and dust is called:,Shearing,Scouring,Sorting,Reeling,B,Scouring is a crucial cleaning step in wool production,,Curiosity Ch 4
SCI_C7_612,7,Science,Heat Transfer in Nature,Physics,Hard,MCQ,The process where heat is transferred by the actual movement of fluid particles is:,Conduction,Convection,Radiation,Insulation,B,Convection occurs in liquids and gases as warmer portions rise and cooler ones sink,,Curiosity Ch 7
MATH_CH1_001,7,Math,Integers,Multiplication Properties,Medium,MCQ,The product of $(-15) \\times (-10) \\times 0$ is equal to:,150,-150,0,1,C,Any number multiplied by zero results in zero regardless of its original sign or value.,,Ch 1: Integers
MATH_C7_557,7,Math,Operations with Integers,Signs,Medium,MCQ,The product of three negative integers is always:,Positive,Negative,Zero,One,B,An odd number of negative factors results in a negative product,,NCERT Ch 1
MATH_C7_014,7,Math,Fractions,Operations,Hard,MCQ,The product of two decimals is 0.063. If one is 0.9 what is the other?,0.7,0.07,7,0.007,B,$0.063 / 0.9 = 0.07$.,,
MATH_C7_006,7,Math,Integers,Multiplication,Easy,MCQ,The product of two negative integers is always:,Negative,Positive,Zero,One,B,According to integer rules the product of two negatives is positive.,,
SCI_C7_718,7,Science,Changes Around Us,Chemical,Medium,MCQ,The production of heat or light is often a sign of a:,Physical change,Chemical change,Temporary change,No change,B,Chemical reactions often release or absorb significant energy,,Curiosity Ch 5
SCI_C7_495,7,Science,Heat Transfer in Nature,Thermometry,Easy,MCQ,The range of a standard clinical thermometer is usually between:,0-100 Celsius,35-42 Celsius,32-212 Fahrenheit,35-50 Celsius,B,Clinical thermometers are designed to measure human body temperature which stays within this narrow range,,Curiosity Ch 7
MATH_C7_570,7,Math,Data Handling,Statistics,Medium,MCQ,The range of the data 5; 15; 25; 35 is:,30,35,25,10,A,Range = Max (35) minus Min (5) which equals 30,,NCERT Ch 3
SCI_C7_493,7,Science,Exploring Substances,Neutralization,Medium,MCQ,The reaction between an acid and a base results in the formation of:,Only water,Salt and water,Only salt,Only gas,B,Neutralization produces salt and water while releasing heat energy,,Curiosity Ch 2
SCI_C7_606,7,Science,Exploring Substances,Reactions,Hard,MCQ,The reaction of baking soda and vinegar releases which gas?,Oxygen,Carbon dioxide,Hydrogen,Nitrogen,B,The reaction between sodium bicarbonate and acetic acid produces $CO_2$ gas,,Curiosity Ch 2
MATH_C7_723,7,Math,Working with Fractions,Operations,Medium,MCQ,The reciprocal of 2/5 is:,5/2,2/5,1/5,1,A,A reciprocal is obtained by inverting the numerator and denominator,,Ganita Prakash Ch 8
MATH_C7_008,7,Math,Fractions,Reciprocals,Easy,MCQ,The reciprocal of the fraction $-3/7$ is:,3/7,-7/3,7/3,1,B,A reciprocal is found by inverting the numerator and denominator while keeping the sign.,,
MATH_C7_204,7,Math,Working with Fractions,Reciprocals,Easy,MCQ,The reciprocal of the fraction 2/3 is:,2/3,3/2,1/3,1/2,B,The reciprocal of a fraction is obtained by inverting the numerator and the denominator.,,Ganita Prakash Ch 8
ENG_C7_717,7,English,Three Questions,Ethics,Medium,MCQ,The right time for any action according to the hermit is:,Tomorrow,Now,Yesterday,Noon,B,Only the present moment allows for active human control,,Honeycomb Unit 1
SST_C7_511,7,SST,Exploring Society,Civics,Easy,MCQ,The right to vote for all citizens above 18 years is called:,Adult franchise,Universal Adult Franchise,Elite voting,Public choice,B,This principle ensures democratic equality for all adults,,Exploring Society Ch 10
SST_C7_556,7,SST,The Age of Reorganisation,Dynasties,Hard,MCQ,The Satavahana dynasty primarily ruled in which part of India?,North,Deccan region,Himalayas,Bengal,B,The Satavahanas were a major power in the central and southern regions,,Exploring Society Ch 6
SST_C7_631,7,SST,The Age of Reorganisation,History,Medium,MCQ,The Satavahana dynasty was a major power in which region of India?,Himalayas,Deccan region,Bengal,Thar Desert,B,The Satavahanas ruled over the central and southern parts of the subcontinent,,Exploring Society Ch 6
SST_C7_685,7,SST,Climates of India,Geography,Medium,MCQ,The seasonal reversal in wind direction that brings rain to India is the:,Cyclone,Monsoon,Tornado,Blizzard,B,Monsoons are the lifeline of Indian agriculture providing seasonal rainfall,,Exploring Society Ch 3
SCI_C7_263,7,Science,Wastewater Story,Sanitation,Medium,MCQ,The semi-solid human waste that settles during treatment is called:,Scum,Sludge,Sewage,Silt,B,Sludge is the organic solid matter that settles at the bottom of sedimentation tanks.,,
SCI_C7_598,7,Science,The World of Metals and Non-metals,Fibres,Medium,MCQ,The soft wool known as 'Mohair' is obtained from which animal?,Yak,Angora goat,Llama,Rabbit,B,Angora goats produce a distinct and highly valued wool fibre,,Curiosity Ch 4
ENG_C7_508,7,English,My Dear Soldiers,Theme,Medium,MCQ,The soldiers in the poem are compared to 'yogis' to emphasize their:,Magical powers,Discipline and endurance,Silence,Traditional clothing,B,This metaphor highlights their focus in lonely and harsh terrains,,Poorvi Unit 5
SCI_C7_097,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,The standard S.I. unit of heat energy is:,Calorie,Joule,Watt,Celsius,B,In the SI system energy including heat is measured in Joules.,,
SCI_C7_406,7,Science,Measurement of Time and Motion,Speed Units,Easy,MCQ,The standard S.I. unit of speed is:,$km/h$,$m/min$,$m/s$,$cm/s$,C,Meter per second ($m/s$) is the globally accepted unit for speed measurement.,,Curiosity Ch 8
ENG_C7_520,7,English,The Day the River Spoke,Ecology,Medium,MCQ,The story encourages students to think about:,Modern gadgets,Importance of nature,Big city life,Video games,B,It uses the character Jahnavi to show a deep spiritual link with the environment,,Poorvi Unit 1
ENG_C7_207,7,English,Animals Birds and Dr Dolittle,Wit,Medium,MCQ,The story of Dr. Dolittle inspires curiosity about which field?,Hunting,Animal communication and science,Industrial farming,Professional cooking,B,The character is a doctor who gains the unique ability to speak with animals.,,Poorvi Unit 2
MATH_C7_267,7,Math,Parallel and Intersecting Lines,Angles,Medium,MCQ,The sum of adjacent angles of a parallelogram is always:,$90^{\\circ}$,$180^{\\circ}$,$360^{\\circ}$,$45^{\\circ}$,B,Consecutive or adjacent angles in a parallelogram are supplementary.,,
MATH_C7_497,7,Math,Geometric Twins,Quadrilaterals,Medium,MCQ,The sum of adjacent angles of a parallelogram is:,90 degrees,180 degrees,360 degrees,45 degrees,B,Consecutive or adjacent angles in a parallelogram are supplementary,,Ganita Prakash II Ch 14
MATH_C7_561,7,Math,Number Play,Computational Thinking,Hard,MCQ,The sum of the digits of a number is 18; this number is definitely divisible by:,2,5,9,4,C,If the sum of digits is divisible by 9 then the number itself is divisible by 9,,Ganita Prakash Ch 6
MATH_C7_143,7,Math,A Tale of Three Intersecting Lines,Triangles,Medium,MCQ,The sum of the interior angles of a triangle is always:,$90^{\\circ}$,$180^{\\circ}$,$360^{\\circ}$,$270^{\\circ}$,B,The Angle Sum Property states that all interior angles of any triangle sum to $180^{\\circ}$. [1],,
MATH_C7_692,7,Math,Geometric Twins,Triangles,Medium,MCQ,The sum of the interior angles of any triangle is:,90 degrees,180 degrees,360 degrees,270 degrees,B,The Angle Sum Property states that triangle internal angles always sum to 180,,Ganita Prakash II Ch 1
MATH_C7_506,7,Math,Finding the Unknown,Word Problems,Hard,MCQ,The sum of three consecutive integers is 33. Find the smallest integer.,10,11,12,9,A,Let integers be $x; x+1; x+2$. Then $3x + 3 = 33 \\rightarrow 3x = 30 \\rightarrow x = 10$,,Ganita Prakash Ch 15
MATH_C7_408,7,Math,Operations with Integers,Properties,Easy,MCQ,The sum of two integers is always an integer. This is known as:,Commutative property,Associative property,Closure property,Distributive property,C,The closure property for addition states that the sum of any two integers $a$ and $b$ is an integer.,,Ganita Prakash II Ch 2
MATH_C7_491,7,Math,A Tale of Three Intersecting Lines,Angles,Medium,MCQ,The sum of two interior angles of a triangle is equal to the:,Interior angle,Exterior angle,Vertically opposite angle,None,B,The exterior angle of a triangle is equal to the sum of its two interior opposite angles,,Ganita Prakash Ch 7
MATH_C7_571,7,Math,Number Play,Parity,Medium,MCQ,The sum of two odd numbers is always:,Odd,Even,Prime,Zero,B,If we add two odd numbers like $3+5=8$ the result is always divisible by 2,,Ganita Prakash Ch 6
SST_C7_493,7,SST,From Barter to Money,Economics,Easy,MCQ,The system of exchanging goods directly for other goods without money is:,Banking,Barter system,Trade,Credit,B,Barter was the earliest form of economic exchange before currency existed,,Exploring Society Ch 11
SST_C7_209,7,SST,From Barter to Money,Economics,Easy,MCQ,The system of exchanging goods directly for other goods without using money is:,Banking,Barter system,Retail trade,Monopoly,B,Barter was the primary mode of economic exchange before the development of currency.,,Exploring Society Ch 11
SST_C7_264,7,SST,From Barter to Money,Economics,Easy,MCQ,The system of exchanging goods directly without money is known as:,Banking,Barter system,Retail,Trade,B,The barter system was the primary mode of exchange before currency.,,
SST_C7_510,7,SST,From Barter to Money,Economics,Easy,MCQ,The system of exchanging one good for another without money is known as:,Banking,Barter system,Retail,Trade,B,The barter system was the primary mode of exchange before currency,,Exploring Society Ch 11
SST_C7_476,7,SST,From Barter to Money,Economics,Easy,MCQ,The system of exchanging one good for another without money is:,Banking,Barter system,Trade,Credit,B,Barter was the earliest form of economic exchange before currency existed,,Exploring Society Ch 11
SST_C7_409,7,SST,Economic Life,Markets,Easy,MCQ,The system where goods are exchanged directly for other goods without money is:,Banking,Barter system,Trade,Retail,B,The barter system was the primary mode of exchange before currency.,,Exploring Society Ch 11
ENG_C7_657,7,English,The Bear Story,Character,Medium,MCQ,The tame bear in the story was mostly fond of eating:,Meat,Fruit,Fish,Grass,B,The bear was raised by humans and had a very gentle and vegetarian diet,,An Alien Hand Unit 5
SST_H_001,7,SST,The Rise of Empires,Administration,Medium,MCQ,The tax 'Vetti' collected during the Chola period was in the form of:,Cash,Forced labor,Grains,Cattle,B,Vetti was a tax taken not in cash but in the form of forced labor from the villagers.,,Ch 5: Exploring Society
SCI_C7_007,7,Science,Nutrition in Animals,Dental Structure,Medium,MCQ,The teeth used for cutting food items are:,Canines,Molars,Incisors,Premolars,C,Incisors are sharp-edged teeth located at the front of the mouth for cutting.,,
SCI_C7_555,7,Science,Earth Moon and the Sun,Astronomy,Hard,MCQ,The tilt of the Earth's axis is approximately:,$0^{\\circ}$,$23.5^{\\circ}$,$45^{\\circ}$,$90^{\\circ}$,B,Earth's axis is tilted relative to its orbital plane; which causes the seasons,,Curiosity Ch 12
SCI_C7_481,7,Science,Earth Moon and the Sun,Lunar Phases,Hard,MCQ,The time taken from one New Moon to the next is approximately:,15 days,29.5 days,365 days,24 hours,B,The synodic month is the average period of the Moon's phases relative to Earth,,Curiosity Ch 12
SCI_C7_614,7,Science,Life Processes in Plants,Botany,Medium,MCQ,The tiny pores on leaves used for gas exchange and transpiration are:,Stomata,Xylem,Phloem,Roots,A,Stomata open and close to allow $CO_2$ in and $O_2$ and water vapor out,,Curiosity Ch 10
SCI_C7_206,7,Science,Life Processes in Plants,Botany,Easy,MCQ,The tiny pores on the surface of leaves used for exchange of gases are:,Chlorophyll,Stomata,Vessels,Lamina,B,Stomata facilitate the entry of $CO_2$ and the release of $O_2$ during photosynthesis.,,Curiosity Ch 10
SST_C7_563,7,SST,New Beginnings: Cities and States,Social History,Medium,MCQ,The traditional social division system in ancient India was called:,Barter,Varna-Jati,Monarchy,Guild,B,This system categorized people based on birth and occupation,,Exploring Society Ch 4
SST_C7_629,7,SST,New Beginnings: Cities and States,Social History,Medium,MCQ,The traditional Varna-Jati system was primarily based on:,Wealth,Birth and occupation,Education level,Geography,B,Society was organized into groups determined by family lineage and hereditary work,,Exploring Society Ch 4
SCI_C7_011,7,Science,Heat,Transfer Methods,Medium,MCQ,The transfer of heat by direct contact between objects is:,Conduction,Convection,Radiation,Reflection,A,Conduction involves heat moving through a solid via molecular collisions.[2],,
SST_C7_144,7,SST,Geographical Diversity of India,Landforms,Medium,MCQ,The triangular landmass in central and southern India is the:,Gangetic Plain,Thar Desert,Peninsular Plateau,Himalayas,C,The Peninsular Plateau is one of the oldest landforms in India surrounded by water on three sides.,,
SCI_C7_002,7,Science,Nutrition in Plants,Energy Sources,Easy,MCQ,The ultimate source of energy for all living organisms is:,Moon,Sun,Air,Water,B,Solar energy is the primary driver of the food chain via photosynthesis.,,
SST_C7_625,7,SST,The Story of Indian Farming,Geography,Medium,MCQ,The Upper Gangetic Plain is an example of a specific:,Political state,Agroclimatic zone,Desert,Island,B,Agroclimatic zones help plan agricultural activities based on local conditions,,Exploring Society Ch 1
MATH_C7_488,7,Math,Operations with Integers,Multiplication,Medium,MCQ,The value of $(-2) \\times 5 \\times (-1) \\times (-3) \\times (-10)$ is:,-300,300,0,310,A,Four negative factors results in a positive product; but here we have four negative signs so the product is $2 \\times 5 \\times 1 \\times 3 \\times 10 = 300$ with an even count of signs being positive; however checking the count: $(-2); (-1); (-3); (-10)$ is four negative signs which is positive 300,,NCERT Ch 1
MATH_CH11_001,7,Math,Exponents and Powers,Laws of Exponents,Hard,MCQ,The value of $(3^0 + 2^0) \\times 5^0$ is:,0,1,2,5,C,According to the laws of exponents any non-zero number raised to power 0 is 1. Thus $(1+1) \\times 1 = 2$.,,Ch 11: Exponents and Powers
MATH_CH11_001,7,Math,Exponents and Powers,Laws of Exponents,Medium,MCQ,The value of $(5^0 + 2^0) \\times 3^2$ is:,0,9,18,1,C,Any non-zero number to power 0 is 1. So $(1+1) \\times 9 = 2 \\times 9 = 18$.,,Ch 11: Exponents and Powers
MATH_C7_021,7,Math,Arithmetic Expressions,Simplification,Hard,MCQ,The value of $1673 \\times 99 - (-1673)$ is:,1637,1673,167300,0,C,Using the distributive law: $1673 \\times (99 + 1) = 1673 \\times 100 = 167300$.,,Ganita Prakash Ch 2
MATH_C7_566,7,Math,Expressions using Letter-Numbers,Algebra,Medium,MCQ,The value of $2x + 5$ when $x = 10$ is:,15,25,20,10,B,Substitute $x=10$: $2(10) + 5 = 20 + 5 = 25$,,Ganita Prakash Ch 4
MATH_C7_403,7,Math,Connecting the Dots,Central Values,Easy,MCQ,The value that occurs most frequently in a given set of data is the:,Mean,Median,Mode,Range,C,The mode is the observation with the highest frequency in a dataset.,,Ganita Prakash II Ch 13
SST_C7_141,7,SST,New Beginnings: Cities and States,Social Structure,Medium,MCQ,The Varna-Jati system was based on which of the following?,Wealth,Birth and Occupation,Education,Geography,B,Society was traditionally organized into groups based on hereditary occupations and lineage.,,
MATH_C7_502,7,Math,Connecting the Dots,Coordinate Geometry,Medium,MCQ,The vertical number line in a Cartesian plane is called the:,X-axis,Y-axis,Origin,Quadrant,B,The Y-axis is the vertical line used to measure vertical distance from the origin,,Ganita Prakash Ch 13
ENG_C7_660,7,English,An Alien Hand,Sci-Fi,Medium,MCQ,The Viking mission spacecraft had come from which planet?,Mars,Earth,Venus,Jupiter,B,The story describes humans from Earth sending a probe to search for Martian life,,An Alien Hand Unit 7
SCI_C7_617,7,Science,Adolescence,Growth,Medium,MCQ,The visible bulge in the throat of adolescent boys is known as:,Pharynx,Adam's apple,Tonsil,Epiglottis,B,This is caused by the enlargement of the voice box or larynx,,Curiosity Ch 6
SST_C7_726,7,SST,Climates of India,Geography,Medium,MCQ,The wettest place on Earth is:,Cherrapunji,Mawsynram,Shillong,Panaji,B,Located in the Khasi Hills of Meghalaya,,Exploring Society Ch 3
MATH_C7_003,7,Math,Integers,Properties,Easy,MCQ,The whole number that is neither positive nor negative is:,1,2,3,0,D,Zero is the only integer that serves as the boundary between positive and negative values without being either.,,
ENG_C7_711,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,The word 'dauntless' used in the chapter means:,Afraid,Fearless and brave,Very old,Weak,B,It describes the queen's courage in resisting foreign invasion,,Poorvi Unit 5
ENG_C7_497,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,The word 'dauntless' used to describe Abbakka means:,Fearless and brave,Quick and rash,Angry,Weak,A,It characterizes her spirit in fighting the powerful Portuguese navy,,Poorvi Unit 5
ENG_C7_675,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,The word 'dauntless' used to describe Rani Abbakka means:,Afraid,Fearless and brave,Very old,Angry,B,It characterizes her spirit in resisting the powerful Portuguese navy,,Poorvi Unit 5
SST_C7_487,7,SST,Geographical Diversity of India,Etymology,Easy,MCQ,The word 'Himalaya' is derived from Sanskrit and literally means:,Land of rivers,Abode of snow,High peaks,Green mountains,B,It comes from 'hima' (snow) and 'alaya' (abode),,Exploring Society Ch 1
SST_C7_201,7,SST,Geographical Diversity of India,Himalayas,Easy,MCQ,The word 'Himalaya' literally means:,Land of mountains,Abode of snow,High peaks,Source of rivers,B,It is derived from the Sanskrit words 'hima' (snow) and 'alaya' (abode).,,Exploring Society Ch 1
SST_C7_639,7,SST,Climates of India,Geography,Medium,MCQ,The word 'Monsoon' is derived from the Arabic word 'Mausim' which means:,Rain,Season,Wind,Clouds,B,Monsoons are seasonal winds that reverse direction and bring rain,,Exploring Society Ch 3
ENG_C7_501,7,English,Rani Abbakka,Civics,Medium,MCQ,The word 'sovereign' as used in the chapter means free and:,Rich,Independent,Large,Peaceful,B,Abbakka declared Ullal a sovereign country that would not accept foreign rule,,Poorvi Unit 5
ENG_C7_269,7,English,Rani Abbakka,Civics,Medium,MCQ,The word 'sovereign' means free and:,Rich,Independent,Large,Peaceful,B,Abbakka declared Ullal a sovereign country that would not accept foreign rule.,,
MATH_C7_752,7,Math,Connecting the Dots,Coordinate,Medium,MCQ,The y-coordinate is also known as:,Abscissa,Ordinate,Origin,Slope,B,Vertical position in Cartesian plane,,Ganita Prakash Ch 13
ENG_C7_499,7,English,The Tiny Teacher,Life Cycle,Medium,MCQ,The young ones of ants are known as:,Grubs,Larva,Saliva,Puppies,A,Ant larvae are specifically referred to as grubs in the text,,An Alien Hand Unit 1
ENG_C7_652,7,English,The Tiny Teacher,Life Cycle,Easy,MCQ,The young ones of ants that hatch from eggs are called:,Cubs,Grubs,Larva,Puppies,B,The text specifically uses the term grubs for ant larvae,,An Alien Hand Unit 1
SCI_C7_685,7,Science,Heat Transfer in Nature,Radiation,Easy,MCQ,Through which process does heat from a campfire reach your hands without touching?,Conduction,Convection,Radiation,Insulation,C,Radiation transfers heat energy through waves without needing a material medium,,Curiosity Ch 7
SCI_C7_712,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Through which process does heat travel through a metal spoon?,Conduction,Convection,Radiation,Insulation,A,Conduction is the primary mode of heat transfer in solid materials,,Curiosity Ch 7
ENG_C7_658,7,English,An Alien Hand,Setting,Medium,MCQ,Tilloo and his parents lived in a society that resided:,In high towers,Beneath the surface of a planet,In the middle of an ocean,In the clouds,B,Hostile surface conditions forced the inhabitants to live in underground colonies,,An Alien Hand Unit 7
ENG_C7_265,7,English,An Alien Hand,Setting,Medium,MCQ,Tilloo and his parents lived where on their planet?,In a big city,In a forest,Beneath the surface,In the clouds,C,"Surface conditions on Mars forced the inhabitants to live in underground colonies. [15,13]",,
ENG_C7_525,7,English,An Alien Hand,Sci-Fi,Medium,MCQ,Tilloo lived on which planet?,Earth,Mars,Venus,Jupiter,B,Martian society living in underground colonies,,An Alien Hand Unit 10
ENG_C7_545,7,English,An Alien Hand,Setting,Medium,MCQ,Tilloo lived underground on which planet?,Earth,Venus,Mars,Jupiter,B,Martian sci-fi setting,,An Alien Hand Unit 10
ENG_C7_535,7,English,An Alien Hand,Plot,Medium,MCQ,Tilloo lived underground on:,Earth,Mars,Moon,Jupiter,B,Setting of the sci-fi story,,An Alien Hand Unit 10
ENG_C7_012,7,English,An Alien Hand,Setting,Medium,MCQ,Tilloo lived with his parents in an underground colony on which planet?,Earth,Venus,Mars,Jupiter,C,"The story is set in a future where humans live in controlled underground environments on Mars.[9, 10]",,An Alien Hand Ch 7
ENG_C7_715,7,English,An Alien Hand,Sci-Fi,Medium,MCQ,Tilloo took his father's security card while he was taking a:,Siesta,Walk,Bath,Lesson,A,Tilloo used the opportunity of his father's nap to enter the passage,,An Alien Hand Unit 10
SCI_C7_535,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Tiny pores for gas exchange are:,Chlorophyll,Stomata,Vessels,Roots,B,Located on the surface of leaves,,Curiosity Ch 10
SCI_C7_735,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Tiny pores on leaf surfaces are:,Chlorophyll,Stomata,Vessels,Roots,B,Used for gas exchange during photosynthesis,,Curiosity Ch 10
ENG_C7_490,7,English,A Gift of Chappals,Plot,Easy,MCQ,To whom did the children give the music master's chappals?,Ravi,The beggar,Lalli,The postman,B,The children felt pity for the beggar whose feet were blistered by the hot road,,Honeycomb Unit 2
MATH_C7_769,7,Math,Geometric Twins,Polygons,Easy,MCQ,Triangle with all sides equal:,Isosceles,Equilateral,Scalene,Right,B,Regular triangle definition,,Ganita Prakash II Ch 1
MATH_C7_744,7,Math,Geometric Twins,Triangles,Easy,MCQ,Triangle with one angle $> 90$ is:,Acute,Obtuse,Right,Scalene,B,Classification based on internal angles,,Ganita Prakash II Ch 1
MATH_C7_544,7,Math,Geometric Twins,Triangles,Easy,MCQ,Triangle with one angle more than 90 is:,Acute,Obtuse,Right,Scalene,B,Classification based on angles,,Ganita Prakash II Ch 1
ENG_C7_749,7,English,The Tunnel,Plot,Hard,MCQ,Tunnel represents for Suraj:,Sleep place,Mystery and adventure,Shortcut,Trap,B,Theme of curiosity in the story,,Poorvi Unit 4
SCI_C7_732,7,Science,Exploring Substances,Indicators,Medium,MCQ,Turmeric turns red in base solutions like:,Lemon juice,Vinegar,Soap,Water,C,Soap is a common alkaline household substance,,Curiosity Ch 2
SCI_C7_532,7,Science,Exploring Substances,Indicators,Medium,MCQ,Turmeric turns red in basic solution like:,Lemon juice,Vinegar,Soap,Water,C,Soap is a common basic household substance,,Curiosity Ch 2
SCI_C7_527,7,Science,Exploring Substances,Indicators,Medium,MCQ,Turmeric turns red in which solution?,Acidic,Basic,Neutral,Salty,B,Used to test for basic substances like soap,,Curiosity Ch 2
SCI_C7_727,7,Science,Exploring Substances,Indicators,Medium,MCQ,Turmeric turns reddish-brown in solutions that are:,Acidic,Basic,Neutral,Salty,B,Commonly observed when washing turmeric stains with soap,,Curiosity Ch 2
ENG_C7_756,7,English,Rani Abbakka,History,Medium,MCQ,Ullal queen fought which power?,British,Portuguese,French,Dutch,B,Karnataka warrior history,,Poorvi Unit 5
SST_C7_012,7,SST,Constitution of India,Rights,Medium,MCQ,Universal Adult Franchise ensures that every citizen of India can vote if they are above:,21 years,18 years,25 years,16 years,B,This is a fundamental democratic principle where every adult has one vote regardless of background.[3],,Exploring Society Ch 10
SST_C7_354,7,SST,The Constitution of India,Rights,Medium,MCQ,Universal Adult Franchise grants the right to vote to all citizens above:,21 years,18 years,25 years,16 years,B,"This principle ensures democratic equality where every adult has one vote.[6,2]",,Exploring Society Ch 10
SST_C7_672,7,SST,From the Rulers to the Ruled,Civics,Easy,MCQ,Universal Adult Franchise means that the right to vote is granted to all adults above:,21 years,18 years,25 years,16 years,B,This democratic principle ensures equality in voting rights regardless of background,,Exploring Society Ch 9
SST_C7_007,7,SST,On Equality,Civics,Easy,MCQ,Universal Adult Franchise means that:,Only educated people can vote,Only property owners can vote,All adults have the right to vote,Only men can vote,C,This principle ensures one person one vote regardless of caste or gender. [7][8],,
MATH_C7_524,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,Value of $0.5 \\times 0.2$,1,0.1,0.01,0.52,B,Multiply $5 \\times 2 = 10$; place decimal for two digits: 0.10,,Ganita Prakash Ch 3
MATH_C7_760,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,Value of $0.5 \\times 0.2$ is:,1,0.1,0.01,0.52,B,Standard decimal multiplication result,,Ganita Prakash Ch 3
MATH_C7_533,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,Value of $0.5 \\times 0.5$,2.5,0.25,0.05,1,B,Tenths multiplied give hundredths,,Ganita Prakash Ch 3
MATH_C7_733,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,Value of $0.5 \\times 0.5$ is:,2.5,0.25,0.05,1,B,Multiply 5 by 5 and place the decimal for two places,,Ganita Prakash Ch 3
MATH_C7_545,7,Math,Arithmetic Expressions,BODMAS,Medium,MCQ,Value of $2 \\times (3 + 4)$,10,14,7,24,B,Solve parentheses first then multiply,,Ganita Prakash Ch 2
MATH_C7_758,7,Math,Working with Fractions,Operations,Medium,MCQ,Value of $3/4 \\times 12$.,3,6,9,12,C,Calculation results in integer 9,,Ganita Prakash Ch 8
MATH_C7_526,7,Math,Finding the Unknown,Equations,Medium,MCQ,Value of $m$ if $5m = -10$,2,-2,5,-10,B,Divide by 5 to get $m = -2$,,Ganita Prakash Ch 7
MATH_C7_531,7,Math,Finding the Unknown,Equations,Medium,MCQ,Value of $x$ if $x + 10 = 25$,15,35,10,5,A,Standard subtraction from both sides,,Ganita Prakash Ch 15
SCI_C7_266,7,Science,Wastewater Story,Biotechnology,Medium,MCQ,Vermi-processing toilets use which organism to treat human waste?,Bacteria,Earthworms,Fungi,Viruses,B,Earthworms convert waste into high-quality manure known as vermi-cakes.,,
SST_C7_531,7,SST,Exploring Society,Civics,Easy,MCQ,Voting right for all adults is:,Elite vote,Universal Adult Franchise,Public choice,Majority rule,B,Ensures democratic equality,,Exploring Society Ch 10
SST_C7_753,7,SST,The Story of Indian Farming,History,Medium,MCQ,Vrikshayurveda is a text about:,War,Plant science,Stars,Music,B,Ancient Indian horticultural knowledge,,Exploring Society Ch 1
SST_C7_684,7,SST,The Story of Indian Farming,History,Medium,MCQ,Weathering is the foundational process for the formation of:,Water,Soil,Metals,Fossils,B,Weathering is the physical and chemical breakdown of rocks over time,,Exploring Society Ch 1
SST_C7_552,7,SST,The Story of Indian Farming,Ecology,Medium,MCQ,Weathering is the process by which rocks are broken down into:,Water,Soil particles,Metals,Fossils,B,Soil is formed through the physical and chemical breakdown of rocks over time,,Exploring Society Ch 1
SST_C7_746,7,SST,The Story of Indian Farming,Geology,Hard,MCQ,Weathering is the process that creates:,Water,Soil particles,Metals,Fossils,B,Foundational process for soil creation,,Exploring Society Ch 1
SST_C7_526,7,SST,Climates of India,Geography,Medium,MCQ,Wettest place in India is:,Cherrapunji,Mawsynram,Shillong,Panaji,B,Located in Meghalaya state,,Exploring Society Ch 3
SST_C7_539,7,SST,Climates of India,Geography,Medium,MCQ,Wettest place on Earth is:,Mawsynram,Leh,Kochi,Mumbai,A,Topographic features cause extreme rainfall here,,Exploring Society Ch 3
SCI_C7_408,7,Science,Life Processes in Plants,Botany,Medium,MCQ,What are the green 'food factories' of the plants?,Roots,Flowers,Leaves,Stems,C,Leaves contain chlorophyll and are the primary site of photosynthesis.,,Curiosity Ch 10
SCI_C7_345,7,Science,Exploring Substances,Neutralisation,Medium,MCQ,What are the primary products of a neutralisation reaction?,Only acid,Salt and water,Only base,Metal and gas,B,An acid and a base react to form salt and water while releasing heat.[1],,Curiosity Ch 2
SCI_C7_682,7,Science,Exploring Substances,Neutralization,Medium,MCQ,What are the primary products of a neutralization reaction?,Only gas,Salt and water,Only metal,Only base,B,An acid and a base react to form salt and water while releasing heat,,Curiosity Ch 2
SCI_C7_509,7,Science,Life Processes in Plants,Botany,Medium,MCQ,What are the tiny openings on the underside of leaves called?,Chlorophyll,Vessels,Stomata,Lamina,C,Stomata facilitate the exchange of gases ($CO_2$ and $O_2$) during photosynthesis,,Curiosity Ch 10
SCI_CH10_001,7,Science,Life Processes in Plants,Photosynthesis,Medium,MCQ,What are the tiny pores on the surface of leaves called?,Chlorophyll,Stomata,Vessels,Lamina,B,Stomata are tiny openings used for gas exchange ($CO_2$ and $O_2$) during photosynthesis.,,Ch 10: Curiosity
SCI_C7_707,7,Science,Life Processes in Plants,Botany,Medium,MCQ,What are the tiny pores on the underside of leaves called?,Chlorophyll,Vessels,Stomata,Lamina,C,Stomata facilitate the exchange of gases ($CO_2$ and $O_2$) during photosynthesis,,Curiosity Ch 10
SCI_CH2_001,7,Science,Exploring Substances,Indicators,Medium,MCQ,What color change is observed when baking soda is added to a turmeric indicator?,Blue,Green,Reddish-brown,No change,C,Baking soda is a base. Bases react with turmeric to turn it from yellow to reddish-brown.,,Ch 2: Curiosity
SCI_C7_336,7,Science,Exploring Substances,Indicators,Medium,MCQ,What color change is observed when turmeric is added to basic lime water?,Blue,Red,Green,Yellow,B,Turmeric is a natural indicator that turns red when it reacts with basic substances like lime water.[1],,Curiosity Ch 2
SCI_C7_080,7,Science,Exploring Substances,Indicators,Medium,MCQ,What color change is observed when turmeric is added to lime water?,Blue,Red,Yellow,Pink,B,Lime water is a base. Turmeric indicator turns red when added to a basic substance. [1],,
SCI_C7_251,7,Science,Exploring Substances,Indicators,Medium,MCQ,What color change occurs when turmeric is added to basic lime water?,Blue,Red,Green,Pink,B,Turmeric is a natural indicator that turns red in basic environments.,,
ENG_C7_701,7,English,Rani Abbakka,Civics,Medium,MCQ,What did Rani Abbakka mean by calling Ullal a 'sovereign country'?,It was very rich,It was an independent nation with its own authority,It was very large,It was a colony,B,She refused to accept foreign rule or pay tribute to the Portuguese,,Poorvi Unit 5
ENG_C7_662,7,English,Rani Abbakka,Civics,Medium,MCQ,What did Rani Abbakka mean when she called Ullal a 'sovereign country'?,It was very rich,It was an independent nation with its own authority,It was very large,it was a vassal state,B,She refused to accept Portuguese rule or pay them any tribute,,Poorvi Unit 5
ENG_C7_553,7,English,A Funny Man,Wit,Easy,MCQ,What did the funny man wear upon his feet in the poem?,Shoes,Socks,Hats,Gloves,C,The poem uses humor by showing the man wearing items in the wrong places,,Poorvi Unit 2
SST_C7_016,7,SST,Tracing Changes,Medieval Society,Medium,MCQ,What did the term 'Hindustan' refer to during the Delhi Sultanate period?,The whole of Asia,Lands of the Delhi Sultanate,Modern Republic of India,Southern India,B,Historically the definition of Hindustan has shifted; in the medieval era it meant the Sultanate's territory.[6],,Our Pasts II Ch 1
ENG_C7_684,7,English,An Alien Hand,Plot,Medium,MCQ,What did Tilloo use to enter the forbidden passage?,A hidden key,His father's security card,A ladder,A secret password,B,Tilloo took the card while his father was sleeping to explore the passage,,An Alien Hand Unit 10
ENG_C7_510,7,English,The Tiny Teacher,Behavior,Easy,MCQ,What do ants use their antennae for?,To fight,To greet and talk,To carry food,To lay eggs,B,Ants pass messages to each other by touching their feelers (antennae),,An Alien Hand Unit 1
ENG_A_001,7,English,The Tiny Teacher,Behavior,Easy,MCQ,What do ants use their feelers (antennae) for in an anthill?,To fight enemies,To greet and talk to other ants,To carry heavy food items,To build new rooms,B,Ants communicate by touching their feelers to pass messages and identify group members.,,Unit 1: An Alien Hand [1]
ENG_C7_695,7,English,The Tiny Teacher,Behavior,Easy,MCQ,What do ants use their feelers (antennae) for?,To fight,To greet and talk,To carry food,To lay eggs,B,Ants pass messages to each other by touching their antennae,,An Alien Hand Unit 1
SST_C7_638,7,SST,Understanding Markets,Economics,Medium,MCQ,What does 'MSP' stand for in the context of government help for farmers?,Maximum Sales Price,Minimum Support Price,Many Small Products,Main Seed Project,B,MSP is a guaranteed price to protect farmers from market price drops,,Exploring Society Ch 12
SST_C7_716,7,SST,Exploring Society,Civics,Easy,MCQ,What does MSP stand for in government agricultural aid?,Maximum Sales Price,Minimum Support Price,Main Seed Project,Many Small Products,B,MSP ensures farmers get a guaranteed price for their crops,,Exploring Society Ch 12
ENG_C7_479,7,English,My Dear Soldiers,Theme,Hard,MCQ,What does the phrase 'prime of your youth' refer to in the poem?,Old age,Retirement,Best and most energetic years,School days,C,The poet acknowledges that soldiers give their best years to the nation's service,,Poorvi Unit 5
ENG_C7_556,7,English,The Tunnel,Plot,Hard,MCQ,What does the tunnel represent for the character Suraj?,A place to sleep,Mystery and adventure,A shortcut to school,A dangerous trap,B,Suraj is fascinated by the passage of the train and the darkness of the tunnel,,Poorvi Unit 4
ENG_C7_686,7,English,Rani Abbakka,Civics,Medium,MCQ,What does the word 'sovereign' mean as used in the chapter?,Very rich,Independent and free,Very large,Powerful and mean,B,Abbakka declared Ullal a sovereign country that would not accept foreign rule,,Poorvi Unit 5
ENG_C7_663,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,What does the word 'tribute' mean in the context of Rani Abbakka's story?,A gift for a friend,Money or goods paid to show control by a power,A medal of honor,A school prize,B,The Portuguese demanded this payment to acknowledge their dominance over Ullal,,Poorvi Unit 5
ENG_C7_365,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,What does the word “dauntless” used to describe Abbakka mean?,Fearless and brave,Quick and rash,Angry,Weak,A,It characterizes her spirit in fighting the powerful Portuguese navy.,,Poorvi Unit 15
MATH_C7_708,7,Math,Working with Fractions,Logic,Medium,MCQ,What happens to a number when it is multiplied by a proper fraction?,Increases,Decreases,No change,Becomes zero,B,Multiplying by a value less than 1 reduces the original number,,Ganita Prakash Ch 8
MATH_C7_517,7,Math,Working with Fractions,Logic,Medium,MCQ,What happens to a number when multiplied by a fraction less than 1?,Increases,Decreases,No change,Becomes zero,B,Multiplying by a value less than 1 results in a smaller product,,Ganita Prakash Ch 8
MATH_C7_505,7,Math,Working with Fractions,Logic,Medium,MCQ,What happens to the product when a number is multiplied by a proper fraction?,It increases,It decreases,It remains same,It becomes zero,B,Multiplying by a fraction less than 1 reduces the value of the original number,,Ganita Prakash Ch 8
MATH_C7_710,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,What is $0.5 \\times 0.2$?,1,0.1,0.01,0.52,B,Multiply $5 \\times 2 = 10$ and place the decimal for two total places to get 0.10,,Ganita Prakash Ch 3
MATH_C7_569,7,Math,Operations with Integers,Arithmetic,Easy,MCQ,What is $100 - (-50)$?,50,-50,150,-150,C,Subtracting a negative is equivalent to adding a positive,,NCERT Ch 1
MATH_C7_741,7,Math,Finding the Unknown,Equations,Medium,MCQ,What is $x$ if $4x = 12$?,2,3,4,48,B,Divide by 4 to solve for 3,,Ganita Prakash Ch 15
ENG_C7_083,7,English,The Tiny Teacher,Caste System,Medium,MCQ,What is a male ant commonly called?,Beetle,Greenfly,Drone,King ant,C,In an ant colony the male is referred to as the drone. [4],,
MATH_C7_496,7,Math,Operations with Integers,Inverses,Easy,MCQ,What is the additive inverse of -5?,-5,0,5,1,C,The additive inverse of an integer $a$ is the number which when added to $a$ results in zero,,NCERT Ch 1
MATH_C7_514,7,Math,Operations with Integers,Inverses,Easy,MCQ,What is the additive inverse of 10?,10,0,-10,1/10,C,The additive inverse makes the sum zero: $10 + (-10) = 0$,,NCERT Ch 1
MATH_C7_004,7,Math,Integers,Additive Inverse,Easy,MCQ,What is the additive inverse of 6?,-6,0,1,1/6,A,The additive inverse of a number $a$ is $-a$ such that $a + (- = 0$.,,
ENG_C7_256,7,English,My Dear Soldiers,Theme,Medium,MCQ,What is the central theme of the poem 'My Dear Soldiers'?,Nature and weather,Patriotism and sacrifice,Travel and adventure,Animals in the wild,B,The poem honors the dedication of soldiers guarding the nation's borders.,,
SCI_C7_692,7,Science,Changes Around Us,Oxidation,Medium,MCQ,What is the chemical name for the brown substance formed on iron called rust?,Ferrous sulphate,Iron oxide,Copper oxide,Zinc chloride,B,Rust forms through the chemical reaction of iron with oxygen and moisture,,Curiosity Ch 5
SCI_C7_012,7,Science,Acids Bases and Salts,Chemical Nature,Easy,MCQ,What is the chemical nature of lemon juice?,Acidic,Basic,Neutral,Salty,A,Lemon juice contains citric acid which gives it a sour taste and low pH.,,
SCI_C7_389,7,Science,Exploring Substances,Chemistry,Easy,MCQ,What is the chemical taste associated with acids?,Bitter,Sour,Salty,Sweet,B,Acids are defined by their sour taste which comes from the Latin word 'acere'.,,Curiosity Ch 2
ENG_C7_502,7,English,Try Again,Moral,Easy,MCQ,What is the core message of the poem 'Try Again'?,Failure is final,Perseverance leads to success,Luck is essential,Avoid difficult tasks,B,The poem encourages students to keep attempting tasks despite initial setbacks,,Poorvi Unit 1
SCI_C7_502,7,Science,Light: Shadows and Reflections,Shadows,Easy,MCQ,What is the dark region behind an opaque object in light called?,Mirror,Shadow,Reflection,Prism,B,A shadow is formed where light rays are obstructed by an object,,Curiosity Ch 11
MATH_C7_694,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,What is the decimal form of nine-tenths?,0.09,0.9,9,90,B,Nine-tenths is written as $9/10$ which equals 0.9,,Ganita Prakash Ch 3
MATH_C7_559,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,What is the decimal form of seven and six-tenths?,0.76,7.06,7.6,76,C,The phrase seven and six-tenths represents the whole number 7 followed by 0.6,,Ganita Prakash Ch 3
SST_C7_681,7,SST,Exploring Society,Governance,Easy,MCQ,What is the full form of MLA in the context of state government?,Member of Local Authority,Member of Legislative Assembly,Most Liable Administrator,Member of Local Association,B,MLAs are elected representatives of people in the state legislature,,Exploring Society Ch 12
SCI_C7_498,7,Science,Wastewater Story,Sanitation,Easy,MCQ,What is the full form of WWTP?,Water Works Tool Part,Wastewater Treatment Plant,World Water Task Plan,Waste Water Tool Part,B,WWTPs are facilities designed to remove contaminants from sewage,,Curiosity Ch 13
MATH_C7_490,7,Math,Number Play,Divisibility,Hard,MCQ,What is the largest 3-digit number divisible by 9?,990,999,981,900,B,A number is divisible by 9 if the sum of its digits is a multiple of 9; $9+9+9=27$ is divisible,,Ganita Prakash Ch 6
MATH_C7_572,7,Math,Number Play,LCM,Medium,MCQ,What is the Least Common Multiple (LCM) of 4 and 6?,2,12,24,10,B,The smallest number that both 4 and 6 divide into without a remainder is 12,,Ganita Prakash Ch 6
SST_C7_080,7,SST,The Constitution of India,Governance,Medium,MCQ,What is the main purpose of the Indian Constitution?,To record history,To lay down basic rules for the country,To list national holidays,To explain other countries,B,A constitution establishes the fundamental principles and laws of a nation. [3],,
MATH_C7_563,7,Math,Connecting the Dots,Arithmetic Mean,Easy,MCQ,What is the mean of the numbers 10; 20; 30?,10,20,30,60,B,Total sum 60 divided by count 3 equals 20,,Ganita Prakash Ch 13
MATH_C7_583,7,Math,Connecting the Dots,Arithmetic Mean,Easy,MCQ,What is the mean of the numbers 5; 5; 10; 10?,5,7.5,10,30,B,Total sum 30 divided by count 4 equals 7.5,,Ganita Prakash Ch 13
ENG_H_001,7,English,Three Questions,Vocabulary,Medium,MCQ,What is the meaning of the word 'Hermit'?,A king's advisor,A person who lives alone in simplicity,A powerful magician,A brave soldier,B,In the story the hermit is a wise man living in a wood known for his simple life and wisdom.,,Unit 1: Honeycomb
MATH_C7_593,7,Math,Geometric Twins,Triangles,Easy,MCQ,What is the measure of each angle in an equilateral triangle?,45 degrees,60 degrees,90 degrees,180 degrees,B,Since all sides are equal all angles are equal and $180/3 = 60$,,Ganita Prakash II Ch 1
MATH_C7_584,7,Math,Connecting the Dots,Median,Easy,MCQ,What is the median of 12; 15; 18?,12,15,18,45,B,The numbers are in order and the middle value is 15,,Ganita Prakash Ch 13
MATH_C7_149,7,Math,Connecting the Dots,Median,Medium,MCQ,What is the median of 3 5 7 8 9?,5,7,8,3,B,The data is already ordered and the middle value is 7.,,
MATH_C7_010,7,Math,Data Handling,Median,Medium,MCQ,What is the median of the data set: 3 7 9 5 8?,9,5,7,8,C,Arrange in order: 3 5 7 8 9. The middle value is 7.,,
MATH_C7_404,7,Math,Connecting the Dots,Median,Medium,MCQ,What is the median of the following data: 22 16 18 20 26 10 16?,16,18,20,22,B,Arrange in order: 10 16 16 18 20 22 26. The middle value is 18.,,Ganita Prakash II Ch 13
SST_C7_570,7,SST,Exploring Society,Civics,Easy,MCQ,What is the minimum age to be eligible to vote in India?,21 years,18 years,25 years,16 years,B,Universal Adult Franchise grants the right to vote to all citizens 18 and older,,Exploring Society Ch 10
MATH_C7_142,7,Math,Expressions using Letter-Numbers,Coefficients,Medium,MCQ,What is the numerical coefficient of $x$ in $-5xy$?,5,-5,$y$,$-5y$,D,The coefficient is the factor that multiplies the specific variable; for $x$ it is $-5y$. [1],,
MATH_C7_260,7,Math,Expressions using Letter-Numbers,Coefficients,Medium,MCQ,What is the numerical coefficient of $x$ in the term $-5xy$?,5,-5,$y$,$-5y$,D,The coefficient of a variable is the entire factor multiplying it; in $-5xy$ it is $-5y$.,,
SCI_C7_081,7,Science,Exploring Substances,Neutralization,Medium,MCQ,What is the outcome of a neutralization reaction?,Only acid,A salt and water,A base,Only gas,B,Neutralization occurs between an acid and a base to produce salt and water with heat. [1],,
SCI_C7_603,7,Science,Exploring Substances,pH,Medium,MCQ,What is the pH value of an acidic solution?,Greater than 7,Less than 7,Exactly 7,14,B,Acids have high hydrogen ion concentrations and low pH values,,Curiosity Ch 2
SCI_C7_681,7,Science,Earth Moon and the Sun,Astronomy,Easy,MCQ,What is the primary cause of day and night on Earth?,Earth revolution,Moon rotation,Earth rotation,Sun movement,C,Rotation on its axis once every 24 hours causes the cycle of light and darkness,,Curiosity Ch 12
SCI_C7_094,7,Science,Life Processes in Plants,Botany,Easy,MCQ,What is the primary function of roots in most plants?,Photosynthesis,Absorption of water and minerals,Transpiration,Respiration,B,Roots anchor the plant and draw essential nutrients and water from the soil.,,
ENG_C7_554,7,English,Say the Right Thing,Ethics,Medium,MCQ,What is the primary lesson of the chapter 'Say the Right Thing'?,How to speak fast,The importance of honesty and polite communication,How to win a debate,How to write a story,B,Effective communication involves choosing words that are truthful and kind,,Poorvi Unit 2
MATH_C7_594,7,Math,Connecting the Dots,Probability,Medium,MCQ,What is the probability of picking a vowel from the letters in HELLO?,1/5,2/5,3/5,2/3,B,There are 5 letters total and 2 vowels (E and O); so 2/5,,Ganita Prakash Ch 13
MATH_C7_409,7,Math,Working with Fractions,Multiplication,Medium,MCQ,What is the product of $1/4 \\times 1/2$?,1/2,1/6,1/8,1/4,C,Multiply numerators ($1 \\times 1$) and denominators ($4 \\times 2$) to get 1/8.,,Ganita Prakash I Ch 8
MATH_C7_009,7,Math,Fractions,Mixed Fractions,Medium,MCQ,What is the product of $3/5 \\times 7$ expressed as a mixed fraction?,$3 \\frac{2}{5}$,$4 \\frac{1}{5}$,$2 \\frac{1}{5}$,$4 \\frac{2}{5}$,B,$3/5 \\times 7 = 21/5 = 4 \\frac{1}{5}$.,,
SCI_C7_611,7,Science,Heat Transfer in Nature,Thermometry,Easy,MCQ,What is the range of a clinical thermometer in Celsius?,0 to 100,35 to 42,-10 to 110,32 to 212,B,Clinical thermometers are specifically designed for the human body temperature range,,Curiosity Ch 7
SCI_C7_093,7,Science,Heat Transfer in Nature,Thermometry,Medium,MCQ,What is the range of a standard clinical thermometer?,$0–100^{\\circ}C$,$35–42^{\\circ}C$,$32–212^{\\circ}F$,$35–50^{\\circ}C$,B,Clinical thermometers are limited to the human body temperature range. [2],,
MATH_CH2_001,7,Math,Fractions and Decimals,Reciprocals,Medium,MCQ,What is the reciprocal of $3 \\frac{1}{4}$?,$\\frac{4}{13}$,$\\frac{13}{4}$,$\\frac{1}{4}$,4,A,First convert the mixed fraction: $3 \\frac{1}{4} = \\frac{13}{4}$. The reciprocal is obtained by inverting it to $\\frac{4}{13}$.,,Ch 2: Fractions and Decimals
MATH_C7_591,7,Math,Working with Fractions,Reciprocals,Easy,MCQ,What is the reciprocal of 1/10?,1,10,0.1,100,B,The reciprocal is obtained by inverting the numerator and denominator,,Ganita Prakash Ch 8
MATH_CH2_001,7,Math,Fractions and Decimals,Reciprocals,Easy,MCQ,What is the reciprocal of the improper fraction $\\frac{5}{2}$?,$\\frac{2}{5}$,$\\frac{5}{2}$,$2.5$,1,A,The reciprocal of a fraction is obtained by inverting the numerator and the denominator.,,Ch 2: Fractions and Decimals
MATH_C7_097,7,Math,Integers,Arithmetic,Easy,MCQ,What is the result of $165 - 22$?,143,187,133,145,A,This is a basic subtraction operation within the set of positive integers.,,
MATH_C7_565,7,Math,Working with Fractions,Operations,Medium,MCQ,What is the result of $3/4 \\times 12$?,3,6,9,12,C,$12 \\div 4 = 3$ and $3 \\times 3 = 9$,,Ganita Prakash Ch 8
MATH_C7_007,7,Math,Integers,Division,Medium,MCQ,What is the result of $35 \\div (-5)$?,7,-7,30,-30,B,Dividing a positive by a negative results in a negative quotient.,,
SST_C7_481,7,SST,Understanding Markets,Economics,Hard,MCQ,What is the role of a 'middleman' in a market chain?,Producing the raw material,Buying from producer and selling to consumer,Guarding the marketplace,Fixing the national budget,B,Middlemen like wholesalers and distributors connect the producer to the final buyer,,Exploring Society Ch 12
MATH_C7_084,7,Math,Working with Fractions,Simplification,Medium,MCQ,What is the simplest form of the fraction 24/56?,12/28,6/14,3/7,4/8,C,Dividing both the numerator and the denominator by their HCF (8) gives 3/7.,,
MATH_C7_671,7,Math,Expressions using Letter-Numbers,Simplification,Easy,MCQ,What is the simplified form of $4x + 2x$?,$6x$,$8x$,$4x$,$2x$,A,Like terms are combined by adding their numerical coefficients: $4+2=6$,,Ganita Prakash Ch 4
SCI_C7_675,7,Science,Wastewater Story,Sanitation,Medium,MCQ,What is the solid waste that settles at the bottom during wastewater treatment called?,Scum,Sludge,Sewage,Silt,B,Sludge is the organic solid matter removed by scrapers in sedimentation tanks,,Curiosity Ch 13
MATH_C7_019,7,Math,Finding the Unknown,Linear Equations,Medium,MCQ,What is the solution for the equation $5m = -10$?,2,-2,5,-5,B,Dividing both sides by 5: $m = -10 / 5 = -2$.,,Ganita Prakash Ch 4
MATH_C7_494,7,Math,Finding the Unknown,Equations,Medium,MCQ,What is the solution for the equation $x - (-3) = 7$?,4,-4,10,-10,A,$x + 3 = 7$ leads to $x = 7 - 3 = 4$,,Ganita Prakash II Ch 7
SCI_C7_488,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,What is the standard S.I. unit of speed?,$km/h$,$m/min$,$m/s$,$cm/s$,C,Meter per second ($m/s$) is the globally accepted standard unit for measuring speed,,Curiosity Ch 8
SCI_C7_619,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,What is the standard S.I. unit of time?,Minute,Hour,Second,Day,C,The second is the base unit of time in the International System of Units,,Curiosity Ch 8
MATH_C7_588,7,Math,Operations with Integers,Successors,Medium,MCQ,What is the successor of the integer -100?,-101,-99,101,99,B,The successor of $n$ is $n + 1$; so $-100 + 1 = -99$,,NCERT Ch 1
MATH_C7_486,7,Math,Operations with Integers,Successors,Medium,MCQ,What is the successor of the integer -239?,-238,-240,239,240,A,The successor of a number $n$ is $n + 1$; so $-239 + 1 = -238,,NCERT Ch 1
MATH_C7_268,7,Math,A Tale of Three Intersecting Lines,Triangles,Medium,MCQ,What is the sum of the interior angles of any triangle?,$90^{\\circ}$,$180^{\\circ}$,$360^{\\circ}$,$270^{\\circ}$,B,The Angle Sum Property states that triangle interior angles always sum to $180^{\\circ}$.,,
MATH_C7_592,7,Math,Parallel and Intersecting Lines,Parallelogram,Medium,MCQ,What is the sum of two adjacent angles in a parallelogram?,90 degrees,180 degrees,360 degrees,270 degrees,B,Adjacent angles in a parallelogram are supplementary,,Ganita Prakash Ch 5
SCI_C7_384,7,Science,Heat Transfer in Nature,Thermometry,Medium,MCQ,What is the temperature range of a standard clinical thermometer?,$0–100^{\\circ}C$,$35–42^{\\circ}C$,$32–212^{\\circ}F$,$35–50^{\\circ}C$,B,Clinical thermometers are limited to the human body temperature range.[1],,Curiosity Ch 7
MATH_C7_002,7,Math,Integers,Operations,Medium,MCQ,What is the value of $(-12) + (7) + (-5)$?,-10,-12,-15,-5,A,$(-12) + (-5) = -17$. Then $-17 + 7 = -10$.,,
MATH_C7_209,7,Math,Operations with Integers,Multiplication,Medium,MCQ,What is the value of $(-6) \\times 4$?,24,-24,-10,10,B,Multiplying a negative integer by a positive integer always results in a negative product.,,Ganita Prakash II Ch 2
MATH_C7_080,7,Math,Operations with Integers,Multiplication,Medium,MCQ,What is the value of $(– 6) \\times (4)$?,24,-24,-10,10,B,Multiplying a negative integer by a positive integer results in a negative product.,,
MATH_C7_483,7,Math,Another Peek Beyond the Point,Decimals,Easy,MCQ,What is the value of $0.5 \\times 0.5$?,2.5,0.25,0.05,1,B,Multiplying tenths results in hundredths; $5 \\times 5 = 25$ so $0.25$,,Ganita Prakash Ch 12
MATH_C7_090,7,Math,Working with Fractions,Operations,Medium,MCQ,What is the value of $1/4 \\div 1/2$?,1/2,1/6,2,1/8,A,Dividing by a fraction is the same as multiplying by its reciprocal: $1/4 \\times 2 = 1/2$.,,
MATH_C7_498,7,Math,Arithmetic Expressions,Multiplication,Medium,MCQ,What is the value of $1673 \\times 99 - (-1673)$?,1637,99,167300,None,C,Using the distributive law: $1673 \\times (99 + 1) = 1673 \\times 100 = 167300$,,NCERT Ch 1
MATH_C7_731,7,Math,Finding the Unknown,Equations,Medium,MCQ,What is the value of $x$ in $x + 10 = 25$?,15,35,10,5,A,Standard subtraction from both sides to find 15,,Ganita Prakash Ch 15
MATH_C7_005,7,Math,Integers,Operations,Medium,MCQ,What is the value of $x$ in the equation $x - (-3) = 7$?,4,-4,10,-10,A,$x + 3 = 7$ leads to $x = 7 - 3 = 4$.,,
MATH_C7_476,7,Math,Finding the Unknown,Equations,Easy,MCQ,What is the value of $x$ in the equation $x + 10 = 25$?,15,35,10,5,A,Subtract 10 from both sides to get $x = 15$,,Ganita Prakash Ch 15
ENG_C7_742,7,English,Try Again,Poetry,Easy,MCQ,What leads to success in 'Try Again'?,Luck,Giving up,Perseverance,Money,C,Encourages persistence after failure,,Poorvi Unit 1
ENG_C7_542,7,English,Try Again,Poetry,Easy,MCQ,What leads to success in poem?,Luck,Giving up,Trying again,Money,C,Main lesson of the text,,Poorvi Unit 1
ENG_C7_707,7,English,Try Again,Poetry,Easy,MCQ,What leads to success in the poem 'Try Again'?,Luck,Giving up,Perseverance,Money,C,The poem encourages students to keep attempting after setbacks,,Poorvi Unit 1
ENG_C7_009,7,English,The Tunnel,Plot,Hard,MCQ,What made Suraj visit the tunnel?,To take a nap,To watch the train and explore,To meet a friend,He was lost,B,Suraj's curiosity about the train passage led him to explore the tunnel.,,
SCI_C7_253,7,Science,Exploring Substances,Neutralization,Easy,MCQ,What products are formed in a neutralization reaction?,Only acid,Only base,Salt and water,Gas and metal,C,Acid and base react to form salt and water with the evolution of heat.,,
ENG_C7_655,7,English,Golu Grows a Nose,Fable,Medium,MCQ,What question did Golu ask his aunt the ostrich?,What is for dinner?,Why do not you ever fly like other birds?,Why are your eyes red?,Where is the river?,B,Golu's curiosity about nature's variety is a central theme of the story,,An Alien Hand Unit 3
ENG_C7_727,7,English,Try Again,Poetry,Easy,MCQ,What results in success in the poem 'Try Again'?,Luck,Perseverance,Giving up,Money,B,Core moral lesson of the text,,Poorvi Unit 1
ENG_C7_016,7,English,The Tunnel,Plot,Hard,MCQ,What rhythmic sound convinced Sunder Singh that a leopard was in the tunnel?,Footsteps,Sawing sound,Growling,Whistling,B,"The leopard's breathing is described in the text as a characteristic rhythmic sawing sound.""",,Poorvi Unit 10
ENG_C7_719,7,English,Try Again,Inspiration,Easy,MCQ,What should you do after failure according to the poem?,Give up,Try again,Cry,Do nothing,B,The poem emphasizes perseverance as the key to ultimate success,,Poorvi Unit 1
ENG_C7_702,7,English,Try Again,Moral,Easy,MCQ,What should you do if you fail at first according to the poem?,Give up,Cry,Try again,Do nothing,C,The poem emphasizes perseverance in the face of initial failure,,Poorvi Unit 1
ENG_C7_517,7,English,Try Again,Inspiration,Easy,MCQ,What should you do if you fail the first time according to the poem?,Give up,Cry,Try again,Do nothing,C,The poem emphasizes perseverance in the face of failure,,Poorvi Unit 1
ENG_C7_210,7,English,The Tunnel,Plot,Hard,MCQ,What specific sound convinced Sunder Singh that a leopard was inside the tunnel?,A loud roar,A rhythmic sawing sound,Fast footsteps,A high whistle,B,The rhythmic sawing sound is described as the characteristic breathing of a leopard.,,Poorvi Unit 10
SCI_C7_088,7,Science,Changes Around Us,Observation,Medium,MCQ,What type of change is observed when a blade tip is placed on a gas stove?,Chemical,Physical,Biological,Nuclear,B,The tip turns black due to heat but the composition remains the same (physical change). [1],,
ENG_C7_666,7,English,Three Days to See,Theme,Hard,MCQ,What was Helen Keller's primary wish to see on the first day if given vision?,Museums,The faces of her loved ones,The ocean,Motion pictures,B,She valued human connection and kindness above all else,,Poorvi Unit 1
ENG_P_001,7,English,The Day the River Spoke,Comprehension,Medium,MCQ,What was Jahnavi's dream in the story?,To become a singer,To go to school,To catch a big fish,To travel to the city,B,Jahnavi lived near the river and her greatest desire was to attend school like the other children.,,Unit 1: Poorvi
ENG_C7_201,7,English,The Day the River Spoke,Comprehension,Medium,MCQ,What was Jahnavi's greatest desire in the story?,To become a singer,To go to school,To catch a big fish,To travel to the city,B,The story follows her journey of overcoming fears to achieve her dream of education.,,Poorvi Unit 1
ENG_C7_251,7,English,The Day the River Spoke,Theme,Medium,MCQ,What was Jahnavi's greatest dream in the story?,To travel the world,To become a singer,To attend school,To learn fishing,C,The story focuses on her overcoming fears to achieve her goal of education.,,
SST_C7_636,7,SST,From Barter to Money,Economics,Medium,MCQ,What was the main drawback of the barter system?,It used too much gold,Lack of double coincidence of wants,It required computers,It was too fast,B,Trade only worked if both people wanted exactly what the other had,,Exploring Society Ch 11
SST_C7_013,7,SST,The Rise of Empires,History,Medium,MCQ,What was the main reason for the rapid rise of the Magadha empire?,Large temples,Fertile land and iron resources,High taxes,Artistic skills,B,Access to iron for weapons and fertile soil for agricultural surplus allowed Magadha to expand.,,Exploring Society Ch 5
SST_C7_083,7,SST,The Rise of Empires,History,Medium,MCQ,What was the main reason for the rise of the Magadha empire?,Large temples,Fertile land and iron resources,High taxes,Skill in painting,B,Access to iron for weapons and fertile soil for surplus food fueled Magadha's growth.,,
ENG_C7_555,7,English,My Brother's Great Invention,Theme,Medium,MCQ,What was the nature of the invention described in the story?,A time machine,A flying car,A creative and imaginative device,A cooking tool,C,The story explores sibling relationships and the power of creative thinking,,Poorvi Unit 3
SST_C7_495,7,SST,Tracing Changes,Administration,Medium,MCQ,What was the official language of administration under the Delhi Sultans?,Hindi,Arabic,Persian,Urdu,C,Persian was the court language used for record-keeping and governance,,Our Pasts II Ch 3
ENG_C7_500,7,English,An Alien Hand,Sci-Fi,Medium,MCQ,What was the purpose of the 'mechanical hand' from the spacecraft?,To attack,To collect soil samples,To build a house,To find water,B,The hand was programmed to gather Martian soil to search for signs of life,,An Alien Hand Unit 10
SST_C7_140,7,SST,New Beginnings: Cities and States,Political Units,Medium,MCQ,What were the large political units in ancient India called?,Janapadas,Mahajanapadas,Ganas,Empires,B,Mahajanapadas were the sixteen great kingdoms that emerged around 600 BCE.,,
ENG_C7_208,7,English,The Rebel,Poetry,Easy,MCQ,When everyone else wears a formal uniform the rebel wears:,A suit,Fantastic clothes,Nothing,A school dress,B,The poem illustrates the rebel's nature of always doing the opposite of the group.,,Honeycomb Poem 2
ENG_C7_008,7,English,The Rebel,Poetry,Easy,MCQ,When everyone has short hair the rebel lets his hair grow:,Short,Long,Curly,Blue,B,The poem illustrates how a rebel always does the opposite of the majority. [17],,
ENG_C7_559,7,English,The Rebel,Poetry,Medium,MCQ,When everyone is talking during the lesson; the rebel:,Talks louder,Stays quiet,Leaves the room,Starts singing,B,The rebel always chooses the behavior opposite to the group norm,,Honeycomb Poem 2
SCI_C7_092,7,Science,Wastewater Story,Resources,Easy,MCQ,When is World Water Day celebrated every year?,21-Mar,22-Mar,05-Jun,22-Apr,B,22 March is designated by the UN to advocate for the sustainable management of water. [1],,
ENG_C7_406,7,English,An Alien Hand,Plot,Medium,MCQ,Where did Tilloo and his parents live on their planet?,In a big city,Beneath the surface,In a forest,In the clouds,B,Due to hostile surface conditions the inhabitants lived in underground colonies.,,An Alien Hand Unit 7
ENG_C7_720,7,English,An Alien Hand,Sci-Fi,Medium,MCQ,Where did Tilloo live with his parents?,Underground colony,High tower,Forest village,Cloud city,A,Surface conditions forced inhabitants to live in subsurface habitats,,An Alien Hand Unit 10
ENG_C7_653,7,English,The Tiny Teacher,Social structure,Medium,MCQ,Where do the soldier ants live in an anthill?,Storehouses,Barracks,Nurseries,Kitchens,B,The ant colony is divided into specialized rooms for different groups,,An Alien Hand Unit 1
SST_C7_483,7,SST,Understanding Markets,Economics,Easy,MCQ,Where do we find many shops under one roof in an urban area?,Weekly market,Shopping mall,Local fair,Village square,B,Malls are large enclosed spaces with multiple branded and non-branded retail outlets,,Exploring Society Ch 12
SCI_C7_730,7,Science,Life Processes in Animals,Digestion,Easy,MCQ,Where does human digestion begin?,Stomach,Mouth,Small intestine,Esophagus,B,Breakdown begins with chewing and saliva in the mouth,,Curiosity Ch 9
SCI_C7_023,7,Science,Life Processes in Animals,Digestion,Easy,MCQ,Where does the process of digestion of food begin in the human body?,Stomach,Small Intestine,Mouth,Large Intestine,C,"Mechanical and chemical digestion starts in the mouth through chewing and saliva.""",,Curiosity Ch 9
SST_C7_349,7,SST,Geographical Diversity of India,Volcanology,Hard,MCQ,Where is the only active volcano in India located?,Mount Abu,Barren Island,Munnar,Ladakh,B,Barren Island in the Andaman and Nicobar chain is home to India's only active volcano.,,Exploring Society Ch 1
MATH_C7_093,7,Math,Visualising Solid Shapes,Attributes,Easy,MCQ,Which 3D shape has 6 faces 12 edges and 8 vertices?,Cylinder,Sphere,Cube,Cone,C,A cube or cuboid is defined by these specific counts of faces edges and vertices.,,
SST_C7_551,7,SST,The Story of Indian Farming,History,Medium,MCQ,Which ancient Indian text contains detailed recommendations on seed preparation?,Arthashastra,Vrikshayurveda,Ramayana,Vedas,B,Surapala's Vrikshayurveda provides extensive knowledge on ancient plant science and farming,,Exploring Society Ch 1
SST_C7_675,7,SST,The Story of Indian Farming,History,Hard,MCQ,Which ancient Indian text provides detailed methods for seed preparation using milk and cow dung?,Arthashastra,Vrikshayurveda,Ramayana,Vedas,B,Surapala's Vrikshayurveda contains ancient knowledge on plant science and horticulture,,Exploring Society Ch 1
ENG_C7_673,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Which animal did Golu ask; 'Why don't you ever fly like other birds?'?,The Elephant,The Ostrich,The Python,The Giraffe,B,Golu's curiosity about nature is a recurring theme in the story,,An Alien Hand Unit 3
SST_C7_727,7,SST,Constitution of India,Rights,Hard,MCQ,Which Article abolished untouchability in India?,14,15,17,21,C,Ensures social equality for all citizens,,Exploring Society Ch 10
SST_C7_355,7,SST,Exploring Society,Civics,Medium,MCQ,Which Article of the Indian Constitution abolished 'Untouchability'?,Article 14,Article 15,Article 17,Article 21,C,"Article 17 specifically prohibits the practice of untouchability in any form.[5,7]",,Exploring Society Ch 10
SST_C7_486,7,SST,Exploring Society,Civics,Hard,MCQ,Which Article of the Indian Constitution abolished the practice of 'Untouchability'?,Article 14,Article 15,Article 17,Article 21,C,Article 17 specifically prohibits the practice of untouchability in any form to ensure equality,,Exploring Society Ch 10
SST_C7_402,7,SST,Constitution of India,Rights,Hard,MCQ,Which Article of the Indian Constitution states that 'Untouchability' is abolished?,Article 14,Article 15,Article 17,Article 21,C,Article 17 specifically prohibits the practice of untouchability to ensure equality.,,Exploring Society Ch 10
SCI_C7_201,7,Science,Life Processes in Plants,Symbiosis,Medium,MCQ,Which association involves two organisms living together where one provides shelter and the other food?,Parasitism,Saprotrophism,Symbiosis,Autotrophism,C,Symbiosis is a mutually beneficial relationship such as that found in Lichens.,,Curiosity Ch 10
SCI_C7_690,7,Science,Wastewater Story,Sanitation,Medium,MCQ,Which byproduct of wastewater treatment can be used as a renewable fuel?,Biogas,Oxygen,Chlorine,Silt,A,Biogas is produced through the anaerobic decomposition of sludge,,Curiosity Ch 13
SCI_C7_489,7,Science,Wastewater Story,Sanitation,Medium,MCQ,Which byproduct of wastewater treatment is decomposed to produce biogas?,Scum,Sludge,Contaminants,Chlorine,B,Sludge is broken down by anaerobic bacteria to produce biogas which can be used as fuel,,Curiosity Ch 13
SCI_C7_208,7,Science,Wastewater Story,Sanitation,Medium,MCQ,Which byproduct of wastewater treatment is used as a renewable fuel?,Sludge,Biogas,Scum,Chlorine,B,Biogas is produced through the anaerobic decomposition of organic matter in sludge.,,Curiosity Ch 13
SCI_C7_410,7,Science,Wastewater Story,Sanitation,Medium,MCQ,Which byproduct of wastewater treatment is used to produce biogas?,Scum,Sludge,Contaminants,Chemicals,B,Sludge is decomposed by anaerobic bacteria to produce biogas for fuel.,,Curiosity Ch 13
SCI_C7_265,7,Science,Wastewater Story,Treatment,Medium,MCQ,Which chemical is used to disinfect wastewater before release?,Nitrogen,Chlorine,Oxygen,Carbon,B,Chlorine or ozone is added to kill harmful pathogens in treated water.,,
SST_C7_011,7,SST,Climates of India,Monsoon,Easy,MCQ,Which city in Meghalaya receives the highest rainfall in the world?,Cherrapunji,Mawsynram,Shillong,Tura,B,Mawsynram is globally recognized as the wettest place on Earth due to its unique topography.,,Exploring Society Ch 3
SST_C7_507,7,SST,Climates of India,Monsoon,Medium,MCQ,Which city receives the highest rainfall in the world?,Leh,Mawsynram,Shillong,Kochi,B,Mawsynram in Meghalaya is the wettest inhabited place on Earth,,Exploring Society Ch 3
SCI_C7_706,7,Science,Electricity,Safety,Medium,MCQ,Which component in an electric circuit acts as a safety device?,Switch,Bulb,Fuse,Cell,C,A fuse melts to break the circuit when the current exceeds safe limits,,Curiosity Ch 3
SCI_C7_492,7,Science,Electricity,Safety,Medium,MCQ,Which component in an electric circuit is used as a safety device to prevent fires?,Switch,Cell,Fuse,Wire,C,A fuse breaks the circuit if the current becomes too high; protecting appliances from damage,,Curiosity Ch 3
SCI_C7_140,7,Science,Electricity: Circuits and Components,Circuit Basics,Easy,MCQ,Which component is used to 'open' or 'close' an electric circuit?,Bulb,Wire,Cell,Switch,D,A switch is a simple device that breaks or completes the circuit path.,,
ENG_C7_656,7,English,Golu Grows a Nose,Plot,Medium,MCQ,Which creature helped Golu pull his nose from the crocodile's grip?,Elephant,Python,Giraffe,Ostrich,B,The python coiled around Golu's legs to help him in the tug of war,,An Alien Hand Unit 3
MATH_C7_676,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Which decimal number is closest to 1 among 0.9; 1.1; 1.01; and 1.11?,0.9,1.1,1.01,1.11,C,1.01 is only 0.01 units away from 1 while 0.9 is 0.1 units away,,Ganita Prakash Ch 3
MATH_C7_406,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Which decimal number is greater: 7.00 or 0.07?,0.07,7,They are equal,None,B,Comparing the whole number part 7 is much larger than 0.,,Ganita Prakash I Ch 3
MATH_C7_576,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Which decimal number is the smallest?,0.1,0.11,0.01,0.101,C,Comparing the tenths place 0 is smaller than 1; so 0.01 is the smallest,,Ganita Prakash Ch 3
ENG_C7_258,7,English,My Dear Soldiers,Poetic Device,Hard,MCQ,Which device is used in 'Wind chimes of my land vibrate your feet'?,Simile,Metaphor,Alliteration,Personification,B,The wind chimes represent the nation's respect and honor for the soldiers' steps.,,
SCI_C7_567,7,Science,Electricity,Safety,Medium,MCQ,Which device is used to prevent excess current from flowing in a circuit?,Switch,Bulb,Fuse,Cell,C,A fuse melts to break the circuit when current exceeds safe limits,,Curiosity Ch 3
SCI_C7_261,7,Science,Measurement of Time and Motion,Instruments,Medium,MCQ,Which device uses a swinging weight to measure time?,Sundial,Digital clock,Simple pendulum,Stopwatch,C,The periodic motion of a simple pendulum was fundamental to early timekeeping.,,
SCI_C7_689,7,Science,Measurement of Time and Motion,Instruments,Medium,MCQ,Which device uses the periodic motion of a swinging weight to measure time?,Sundial,Digital clock,Simple pendulum,Stopwatch,C,The simple pendulum was foundational to early mechanical clocks,,Curiosity Ch 8
SCI_C7_714,7,Science,Measurement of Time and Motion,Time,Easy,MCQ,Which device was used by early humans to measure time using sunlight?,Sundial,Digital clock,Simple pendulum,Stopwatch,A,Sundials track the position of a shadow to determine the hour of day,,Curiosity Ch 8
SST_C7_146,7,SST,The Age of Reorganisation,Dynasties,Medium,MCQ,Which dynasty emerged after the decline of the Mauryan Empire in the north?,Cholas,Shungas,Guptas,Mughals,B,The Shungas took control of the Magadha region following the end of the Mauryas.,,
SCI_C7_390,7,Science,Changes Around Us,Chemistry,Hard,MCQ,Which elements are added to iron to create stainless steel?,Carbon Nickel Chromium,Zinc Lead,Copper Tin,Silver Gold,A,Chromium and nickel are added to make iron resistant to rusting.[1],,Curiosity Ch 5
SST_C7_516,7,SST,The Gupta Era,History,Medium,MCQ,Which empire is known for the invention of the concept of 'Zero'?,Maurya,Gupta,Chola,Mughal,B,Indian mathematicians in the Gupta era pioneered many advanced concepts,,Exploring Society Ch 7
SST_C7_687,7,SST,The Rise of Empires,History,Easy,MCQ,Which empire unified a large part of India for the first time?,Gupta,Maurya,Maratha,Chola,B,The Mauryan Empire was the first pan-regional empire in India,,Exploring Society Ch 5
SST_C7_499,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Which force holds the atmosphere in place around the Earth?,Magnetic force,Gravity,Centrifugal force,Friction,B,Earth's gravitational pull prevents the gaseous layer of the atmosphere from escaping into space,,Exploring Society Ch 2
SST_C7_725,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Which force keeps the air attached to the Earth?,Magnetic,Gravity,Centrifugal,Friction,B,Gravity holds the atmospheric layers in place,,Exploring Society Ch 2
SCI_C7_568,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Which gas do plants primarily take in during the day for photosynthesis?,Oxygen,Nitrogen,Carbon dioxide,Hydrogen,C,Plants consume $CO_2$ and release $O_2$ in the presence of sunlight,,Curiosity Ch 10
SCI_C7_720,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Which gas do plants release into the air during photosynthesis?,Carbon dioxide,Oxygen,Nitrogen,Hydrogen,B,Oxygen is produced as a byproduct of food synthesis in leaves,,Curiosity Ch 10
SCI_C7_090,7,Science,Changes Around Us,Ecology,Easy,MCQ,Which gas in the atmosphere protects us from harmful UV radiations?,Oxygen,Nitrogen,Ozone,Carbon dioxide,C,The ozone ($O_3$) layer absorbs ultraviolet rays from the sun to protect life. [1],,
SCI_C7_344,7,Science,Wastewater Story,Sanitation,Medium,MCQ,Which gas is produced during the decomposition of sludge?,Oxygen,Biogas,Nitrogen,Chlorine,B,Anaerobic bacteria break down organic matter in sludge to produce renewable biogas.,,Curiosity Ch 13
SCI_C7_386,7,Science,Life Processes in Plants,Photosynthesis,Medium,MCQ,Which gas is released by green plants during photosynthesis?,Carbon dioxide,Oxygen,Nitrogen,Hydrogen,B,Oxygen is produced as a byproduct when plants synthesize glucose from sunlight.,,Curiosity Ch 10
SCI_C7_096,7,Science,Nutrition in Plants,Gaseous Exchange,Medium,MCQ,Which gas is released by green plants during the process of photosynthesis?,Carbon dioxide,Oxygen,Nitrogen,Hydrogen,B,Oxygen is produced as a byproduct when plants synthesize glucose from sunlight.,,
SCI_C7_003,7,Science,Nutrition in Plants,Gaseous Exchange,Easy,MCQ,Which gas is released by plants during photosynthesis?,Carbon dioxide,Nitrogen,Oxygen,Hydrogen,C,Oxygen is a byproduct of the photosynthesis reaction essential for aerobic life.,,
SCI_C7_725,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Which gas is released by plants during the day?,Carbon dioxide,Oxygen,Nitrogen,Hydrogen,B,Oxygen is a byproduct of the photosynthesis process,,Curiosity Ch 10
SCI_C7_679,7,Science,Exploring Substances,Chemistry,Hard,MCQ,Which gas is released when baking soda reacts with dilute hydrochloric acid?,Oxygen,Carbon dioxide,Hydrogen,Nitrogen,B,The reaction between a carbonate and an acid produces salt; water and $CO_2$ gas,,Curiosity Ch 2
SCI_C7_597,7,Science,The World of Metals and Non-metals,Resources,Medium,MCQ,Which Indian state is a leading producer of wool?,Kerala,Punjab,Goa,Tamil Nadu,B,Punjab is recognized for high wool yield from its livestock,,Curiosity Ch 4
SCI_C7_083,7,Science,Exploring Substances,Indicators,Medium,MCQ,Which indicator turns green when combined with a basic solution?,Litmus,Turmeric,China Rose,Phenolphthalein,C,China rose indicator turns dark pink in acids and green in basic solutions. [1],,
SCI_C7_512,7,Science,Exploring Substances,Indicators,Medium,MCQ,Which indicator turns pink in basic solutions?,Litmus,China Rose,Phenolphthalein,Turmeric,C,Phenolphthalein is a synthetic indicator that is colorless in acid and pink in base,,Curiosity Ch 2
SCI_C7_487,7,Science,Exploring Substances,Indicators,Medium,MCQ,Which indicator turns reddish-brown when added to a basic solution like soap?,Litmus,China Rose,Turmeric,Red Rose,C,Turmeric is a natural indicator that changes from yellow to red in the presence of a base,,Curiosity Ch 2
SST_C7_569,7,SST,Economic Life,Banking,Medium,MCQ,Which institution is the main regulator of money and banking in India?,State Bank of India,Reserve Bank of India,Ministry of Finance,ICICI Bank,B,The RBI issues currency and manages the nation's monetary policy,,Exploring Society Ch 11
SST_C7_676,7,SST,Understanding the Weather,Instruments,Easy,MCQ,Which instrument is used at weather stations to measure atmospheric pressure?,Thermometer,Barometer,Rain gauge,Anemometer,B,A barometer measures the weight of air to help predict weather patterns,,Exploring Society Ch 2
SST_C7_513,7,SST,Understanding the Weather,Instruments,Easy,MCQ,Which instrument is used to measure air pressure?,Thermometer,Barometer,Rain Gauge,Anemometer,B,A barometer is the standard tool for measuring atmospheric pressure,,Exploring Society Ch 2
SST_C7_626,7,SST,Understanding the Weather,Instruments,Easy,MCQ,Which instrument is used to measure atmospheric pressure?,Thermometer,Barometer,Rain gauge,Anemometer,B,A barometer is the standard tool for monitoring air pressure changes,,Exploring Society Ch 2
SST_C7_202,7,SST,Understanding the Weather,Instruments,Easy,MCQ,Which instrument is used to measure the amount of rainfall at a weather station?,Thermometer,Barometer,Rain Gauge,Anemometer,C,A rain gauge is a specialized instrument for determining the depth of liquid precipitation.,,Exploring Society Ch 2
SST_C7_254,7,SST,Understanding the Weather,Instruments,Easy,MCQ,Which instrument is used to measure the amount of rainfall?,Thermometer,Barometer,Rain Gauge,Anemometer,C,A rain gauge collects and measures the depth of liquid precipitation.,,
SCI_C7_482,7,Science,Light: Shadows and Reflections,Instruments,Medium,MCQ,Which instrument uses two mirrors to see over or around obstacles?,Kaleidoscope,Periscope,Telescope,Microscope,B,A periscope reflects light at two $45^{\\circ}$ angles to allow viewing from different levels,,Curiosity Ch 11
MATH_C7_513,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,Which is greater: $1.009$ or $1.090$?,$1.009$,$1.090$,Both are equal,Cannot say,B,Comparing hundredths digit: 9 is greater than 0,,Ganita Prakash Ch 3
MATH_C7_564,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,Which is greater: 0.5 or 0.05?,0.5,0.05,Both are equal,None,A,0.5 has 5 in the tenths place while 0.05 has 0 in the tenths place,,Ganita Prakash Ch 3
MATH_C7_262,7,Math,Number Play,Divisibility,Hard,MCQ,Which is the largest 3-digit number divisible by 9?,990,999,981,900,B,A number is divisible by 9 if its digit sum is a multiple of 9. $9+9+9=27$ which is divisible.,,
SST_G_001,7,SST,Geographical Diversity of India,Physical Divisions,Medium,MCQ,Which island group of India is primarily composed of coral origin?,Andaman Islands,Nicobar Islands,Lakshadweep Islands,Barren Island,C,Lakshadweep is classified as a coral island group located in the Arabian Sea.,,Ch 1: Exploring Society
SST_C7_088,7,SST,Geographical Diversity of India,Islands,Medium,MCQ,Which island group of India is primarily of coral origin?,Andaman Islands,Sundarbans,Lakshadweep Islands,Nicobar Islands,C,Lakshadweep consists of 36 small islands classified as coral atolls.,,
SST_C7_562,7,SST,Understanding the Weather,Atmosphere,Medium,MCQ,Which layer of the atmosphere contains the ozone layer?,Troposphere,Stratosphere,Mesosphere,Thermosphere,B,The stratosphere protects Earth from harmful UV radiation,,Exploring Society Ch 2
SCI_C7_259,7,Science,Heat Transfer in Nature,Conduction,Medium,MCQ,Which material is the best conductor of heat?,Wood,Plastic,Copper,Glass,C,Metals like copper have free electrons that facilitate rapid heat transfer through conduction.,,
SST_C7_515,7,SST,From Barter to Money,History,Medium,MCQ,Which material was commonly used as 'commodity money' in ancient India?,Plastic,Cowrie shells,Paper,Steel,B,Shells and grains were often used as mediums of exchange before standardized coins,,Exploring Society Ch 11
MATH_C7_480,7,Math,Connecting the Dots,Statistics,Medium,MCQ,Which measure is the arithmetic average of a data set?,Mode,Median,Mean,Range,C,The mean is calculated by dividing the sum of values by the total count,,NCERT Ch 3
SCI_C7_608,7,Science,The World of Metals and Non-metals,Metallurgy,Hard,MCQ,Which metal is added to iron to create stainless steel for rust resistance?,Copper,Chromium,Lead,Gold,B,Chromium creates a passive layer that prevents the iron from oxidizing,,Curiosity Ch 4
SCI_C7_731,7,Science,Changes Around Us,Chemical,Medium,MCQ,Which metal is used in galvanization?,Copper,Zinc,Gold,Lead,B,Prevents iron from rusting by coating it,,Curiosity Ch 5
SCI_C7_409,7,Science,Light,Optics,Medium,MCQ,Which mirror is used by dentists to see a magnified image of teeth?,Convex,Plane,Concave,Double-convex,C,Concave mirrors form enlarged virtual images when the object is very close.,,Curiosity Ch 11
SCI_C7_207,7,Science,Light: Shadows and Reflections,Mirrors,Hard,MCQ,Which mirror is used by dentists to see an enlarged image of teeth?,Convex,Plane,Concave,Cylindrical,C,Concave mirrors can produce virtual and magnified images when the object is placed close to the mirror.,,Curiosity Ch 11
SCI_C7_511,7,Science,Heat Transfer in Nature,Physics,Hard,MCQ,Which mode of heat transfer involves the actual movement of matter particles?,Conduction,Convection,Radiation,Reflection,B,Convection occurs in fluids as warmer portions rise and cooler ones sink,,Curiosity Ch 7
SCI_CH2_001,7,Science,Exploring Substances,Indicators,Medium,MCQ,Which natural indicator turns green when added to a basic solution?,Litmus,Turmeric,China Rose,Phenolphthalein,C,China rose indicator turns dark pink in acidic solutions and green in basic solutions.,,Ch 2: Curiosity
SCI_C7_711,7,Science,Exploring Substances,Indicators,Medium,MCQ,Which natural indicator turns green when combined with a basic solution?,Litmus,Turmeric,China Rose,Phenolphthalein,C,China rose indicator changes from dark pink to green in basic environments,,Curiosity Ch 2
SCI_C7_673,7,Science,Exploring Substances,Indicators,Medium,MCQ,Which natural indicator turns reddish-brown when added to a basic solution like soap?,Litmus,China Rose,Turmeric,Red Rose,C,Turmeric is a yellow indicator that reacts with bases to change color to red/brown,,Curiosity Ch 2
SCI_C7_401,7,Science,Exploring Substances,Indicators,Medium,MCQ,Which natural indicator turns reddish-brown when added to a basic solution?,Litmus,China Rose,Turmeric,Red Rose,C,Turmeric is a yellow indicator that turns red/brown in bases like soap or lime water.,,Curiosity Ch 2
SCI_C7_008,7,Science,Fibre to Fabric,Animal Fibres,Easy,MCQ,Which of the following animals yields wool?,Yak,Goat,Sheep,All of these,D,Wool is harvested from the fleece of various animals including sheep yaks and goats. [1],,
SCI_C7_020,7,Science,Changes Around Us,Chemical Composition,Hard,MCQ,Which of the following are the primary constituents of stainless steel?,Iron Carbon Nickel Chromium,Iron Nickel Manganese,Carbon Iron Nickel,Iron Lead Zinc,A,Stainless steel is an alloy specifically designed to resist corrosion using these elements.[1],,Curiosity Ch 5
MATH_C7_254,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Which of the following decimal numbers is closest to 1?,0.9,1.1,1.01,1.11,C,The distance from 1 to 1.01 is $0.01$ while 0.9 is $0.1$ away.,,
MATH_C7_016,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Which of the following decimal numbers is greater?,1.009,1.09,1.0009,1,B,Comparing the hundredths place: 0.09 is greater than 0.00. Therefore 1.090 > 1.009.,,Ganita Prakash Ch 3
MATH_C7_554,7,Math,Arithmetic Expressions,Grouping,Medium,MCQ,Which of the following expressions is equivalent to $5 \\times (10 + 2)$?,$5 \\times 10 + 2$,$5 \\times 10 + 5 \\times 2$,$5 + 10 \\times 2$,$5 \\times 12 + 10$,B,The distributive property states that $a(b +  = ab + ac$,,Ganita Prakash Ch 2
SCI_C7_256,7,Science,Changes Around Us,Chemical Changes,Medium,MCQ,Which of the following indicates a chemical change has occurred?,Change in color,Production of heat/light,Production of a gas,All of these,D,"Chemical changes involve the formation of new substances often accompanied by energy shifts or gas release. [2,1]",,
SST_C7_005,7,SST,Environment,Ecology,Easy,MCQ,Which of the following is a biotic component of the environment?,Land,Plants,Water,Air,B,Biotic components are living elements like flora and fauna. [6][6],,
SCI_C7_609,7,Science,Changes Around Us,Chemical changes,Medium,MCQ,Which of the following is a chemical and irreversible change?,Melting ice,Burning leaves,Folding paper,Boiling water,B,Burning creates new substances like ash and smoke that cannot be reversed,,Curiosity Ch 5
SCI_CH5_001,7,Science,Changes Around Us,Chemical Changes,Medium,MCQ,Which of the following is a chemical change?,Melting of wax,Breaking of glass,Rusting of iron,Dissolving salt in water,C,Rusting is a chemical change because a new substance (iron oxide) is formed through a reaction with oxygen and moisture.,,Ch 5: Curiosity
SCI_C7_403,7,Science,Electricity,Conductivity,Easy,MCQ,Which of the following is a good conductor of electricity?,Wood,Plastic,Copper wire,Rubber,C,Metals like copper allow electric current to flow through them easily.,,Curiosity Ch 3
SCI_C7_680,7,Science,Changes Around Us,Chemical,Medium,MCQ,Which of the following is a sign that a chemical change has occurred?,Production of a gas,Change in state,Change in shape,Melting,A,Chemical changes involve the formation of new substances often releasing gas bubbles,,Curiosity Ch 5
MATH_C7_251,7,Math,Connecting the Dots,Data Literacy,Medium,MCQ,Which of the following is a statistical question?,What is the capital of India?,How old are the dogs that live on this street?,What is $5 + 7$?,Where is the Red Fort located?,B,A statistical question is one that can be answered by collecting data that varies.,,
SCI_C7_255,7,Science,Changes Around Us,Physical Changes,Easy,MCQ,Which of the following is an example of a physical change?,Rusting of iron,Burning of paper,Melting of ice,Ripening of fruit,C,Melting of ice only changes the state of matter without creating new substances.,,
SCI_C7_086,7,Science,Changes Around Us,Chemical Changes,Easy,MCQ,Which of the following is an indicator of a chemical change?,Change in state,Production of heat or light,Change in shape,Melting,B,Chemical changes involve new substances and often release or absorb energy. [1],,
SCI_C7_142,7,Science,Electricity: Circuits and Components,Materials,Easy,MCQ,Which of the following is an insulator?,Copper,Aluminum,Rubber,Iron,C,Insulators like rubber do not allow electric current to pass through them.,,
SCI_C7_383,7,Science,Changes Around Us,Chemical Changes,Medium,MCQ,Which of the following is an irreversible chemical change?,Melting ghee,Freezing water,Burning wood,Dissolving salt,C,Burning produces new substances and cannot be reversed to its original state.,,Curiosity Ch 5
SST_C7_085,7,SST,Geographical Diversity of India,Physical,Medium,MCQ,Which of the following is NOT part of the Indian mainland's major divisions?,The Himalayas,The Gangetic Plains,The Andes,The Peninsular Plateau,C,The Andes is a mountain range located in South America.,,
SCI_CH1_001,7,Science,Nutrition in Plants,Photosynthesis,Easy,MCQ,Which of the following is the 'food factory' of the plant?,Roots,Stem,Leaves,Flowers,C,Leaves contain chlorophyll and are the primary site where photosynthesis occurs to produce food.,,Ch 1: Curiosity
MATH_CH1_001,7,Math,Integers,Additive Identity,Easy,MCQ,Which of the following is the additive identity for integers?,1,-1,0,None,C,Zero is the additive identity because adding zero to any integer does not change its value ($a + 0 = a$).,,Ch 1: Integers
SCI_CH1_001,7,Science,Nutrition in Plants,Photosynthesis,Easy,MCQ,Which of the following is the green pigment in leaves that captures solar energy?,Hemoglobin,Chlorophyll,Xanthophyll,Anthocyanin,B,Chlorophyll is essential for capturing light energy to synthesize food from $CO_2$ and $H_2O$.,,Ch 1: Curiosity
MATH_C7_202,7,Math,Number Play,Divisibility,Hard,MCQ,Which of the following is the largest 3-digit number divisible by 9?,990,999,981,900,B,A number is divisible by 9 if the sum of its digits is a multiple of 9. $9+9+9=27$ which is divisible by 9.,,Ganita Prakash Ch 6
SCI_C7_569,7,Science,Measurement of Time and Motion,Time,Easy,MCQ,Which of the following is the S.I. unit of time?,Minute,Hour,Second,Day,C,The second is the fundamental unit of time in the metric system,,Curiosity Ch 8
SCI_C7_095,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,Which of the following is the standard S.I. unit of force?,Newton,Joule,Watt,Pascal,A,The Newton (N) is the unit used to measure force in the International System.,,
MATH_C7_327,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Which of the following is true regarding decimal comparison?,$1.009 < 1.090$,$1.009 > 1.090$,$1.009 = 1.090$,None,A,Comparing the hundredths place shows that 0.09 is greater than 0.00; thus 1.090 is the larger value.,,Ganita Prakash Ch 3
MATH_C7_086,7,Math,A Peek Beyond the Point,Comparison,Medium,MCQ,Which of the following is true?,$1.009 < 1.090$,$1.009 > 1.090$,$1.009 = 1.090$,None,A,Comparing the hundredths place: 0.09 is greater than 0.00.,,
SCI_C7_687,7,Science,Electricity,Conductivity,Easy,MCQ,Which of the following materials is an insulator?,Copper,Aluminum,Plastic,Iron,C,Insulators like plastic do not allow electric current to pass through them,,Curiosity Ch 3
SST_C7_478,7,SST,From Barter to Money,History,Medium,MCQ,Which of the following served as 'commodity money' in ancient times?,Paper notes,Credit cards,Grains and Cattle,Digital coins,C,Before coins; people used valuable items like cattle or salt as a medium of exchange,,Exploring Society Ch 11
SCI_C7_022,7,Science,Measurement of Time and Motion,Time,Easy,MCQ,Which of the following was used by early humans to measure time before modern clocks?,Mobile phones,Movement of shadows,Television,Radio,B,"The position and length of shadows served as a natural clock based on the Sun's movement.""",,Curiosity Ch 8
SST_C7_087,7,SST,Geographical Diversity of India,Landforms,Medium,MCQ,Which of these is a characteristic feature of the Thar Desert?,Heavy rainfall,Thick forests,Sand dunes shaped by wind,Active volcanoes,C,Wind-blown sand dunes (barchans) are the defining feature of the Thar.,,
SCI_C7_615,7,Science,Life Processes in Animals,Digestion,Medium,MCQ,Which organ in the human body is responsible for producing bile juice?,Pancreas,Liver,Stomach,Gall bladder,B,The liver secretes bile which helps in the emulsification of fats,,Curiosity Ch 9
SCI_C7_671,7,Science,Adolescence,Growth,Medium,MCQ,Which part of the body creates the visible bulge in the throat of adolescent boys?,Adam's apple,Pharynx,Tonsils,Epiglottis,A,This bulge is caused by the enlargement of the voice box or larynx during puberty,,Curiosity Ch 6
SCI_C7_553,7,Science,Adolescence,Development,Medium,MCQ,Which part of the body is responsible for the deep voice in boys?,Lungs,Adam's apple,Pharynx,Diaphragm,B,The enlargement of the larynx or voice box creates a visible bulge called the Adam's apple,,Curiosity Ch 6
SST_C7_081,7,SST,The Constitution of India,Rights,Medium,MCQ,Which part of the Indian Constitution contains the Fundamental Rights?,Part I,Part II,Part III,Part IV,C,Fundamental Rights are enshrined in Part III of the Constitution. [3],,
SCI_C7_490,7,Science,Life Processes in Plants,Botany,Easy,MCQ,Which part of the plant is known as the 'food factory'?,Roots,Stem,Leaves,Flowers,C,Leaves contain chlorophyll and are the primary site of photosynthesis,,Curiosity Ch 10
SCI_C7_556,7,Science,Light: Shadows and Reflections,Optics,Medium,MCQ,Which phenomenon explains why we see our face in a still water pond?,Refraction,Reflection,Dispersion,Scattering,B,Still water acts like a smooth mirror; reflecting light to form an image,,Curiosity Ch 11
SCI_C7_684,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Which pigment in leaves captures solar energy for photosynthesis?,Hemoglobin,Chlorophyll,Melanin,Anthocyanin,B,Chlorophyll is essential for converting light energy into chemical energy,,Curiosity Ch 10
SCI_C7_338,7,Science,Life Processes in Plants,Photosynthesis,Easy,MCQ,Which pigment in leaves captures solar energy to prepare food?,Hemoglobin,Chlorophyll,Melanin,Anthocyanin,B,Chlorophyll is the green pigment responsible for absorbing sunlight for photosynthesis.,,Curiosity Ch 10
SST_C7_203,7,SST,Climates of India,Monsoon,Medium,MCQ,Which place in India receives the highest rainfall in the world?,Cherrapunji,Mawsynram,Shillong,Kochi,B,Mawsynram in Meghalaya is globally recognized as the wettest inhabited place on Earth.,,Exploring Society Ch 3
SST_C7_406,7,SST,Climates of India,Geography,Medium,MCQ,Which place in Meghalaya receives the highest rainfall in the world?,Cherrapunji,Mawsynram,Shillong,Guwahati,B,Mawsynram is globally recognized as the wettest place on Earth.,,Exploring Society Ch 3
SCI_C7_605,7,Science,Exploring Substances,Neutralization,Medium,MCQ,Which products are formed when an acid reacts with a base?,Metal and gas,Salt and water,Only base,Only gas,B,Neutralization results in the formation of a salt and water with heat release,,Curiosity Ch 2
MATH_C7_020,7,Math,Operations with Integers,Properties,Easy,MCQ,Which property is represented by $a + b = b + a$?,Associative,Distributive,Commutative,Closure,C,"The commutative property states that the order of addition does not change the sum.""",,Ganita Prakash Ch 10
SST_C7_257,7,SST,The Rise of Empires,History,Medium,MCQ,Which region became powerful due to its access to iron and fertile land?,Magadha,Kalinga,Avanti,Kosala,A,Iron resources allowed Magadha to build strong weapons for expansion.,,
SST_C7_489,7,SST,The Rise of Empires,History,Medium,MCQ,Which region became powerful mainly due to its access to iron and fertile land?,Magadha,Kalinga,Avanti,Kosala,A,Iron resources allowed Magadha to build superior weapons while fertile land supported a large army,,Exploring Society Ch 5
SCI_C7_602,7,Science,The World of Metals and Non-metals,Livestock,Medium,MCQ,Which sheep breed is known for producing the finest quality wool?,Lohi,Merino,Marwari,Bakharwal,B,Merino sheep are globally famous for their high-quality fine fleece,,Curiosity Ch 4
SCI_C7_599,7,Science,The World of Metals and Non-metals,Sericulture,Medium,MCQ,Which stage of the silkworm life cycle requires the most feeding?,Egg,Caterpillar,Pupa,Adult,B,The larva or caterpillar stage consumes vast amounts of mulberry leaves to grow,,Curiosity Ch 4
MATH_C7_203,7,Math,Connecting the Dots,Statistics,Medium,MCQ,Which statistical measure is affected the most by an extreme outlier in a dataset?,Minimum,Maximum,Mean,Median,C,The mean is calculated using the sum of all values so a single extreme value can significantly shift the average.,,Ganita Prakash Ch 13
SCI_C7_084,7,Science,Exploring Substances,Safety,Medium,MCQ,Which substance can be used to soothe the discomfort of a basic wasp sting?,Baking soda,Vinegar,Soap,Salt,B,Wasp stings are basic; vinegar is an acid that can neutralize the irritation. [1],,
SCI_C7_554,7,Science,Heat Transfer in Nature,Thermodynamics,Medium,MCQ,Which surface absorbs more radiant heat?,White surface,Shiny surface,Black surface,Transparent surface,C,Dark colored surfaces are better absorbers of thermal radiation than light ones,,Curiosity Ch 7
SCI_C7_252,7,Science,Exploring Substances,pH,Medium,MCQ,Which synthetic indicator remains colorless in acidic solutions but turns pink in bases?,Litmus,Methyl orange,Phenolphthalein,China Rose,C,Phenolphthalein is a laboratory indicator used to distinguish between acids and bases. [1],,
SCI_C7_147,7,Science,Exploring Substances,Indicators,Medium,MCQ,Which synthetic indicator turns pink in basic solutions?,Litmus,Turmeric,Phenolphthalein,China Rose,C,Phenolphthalein is a laboratory indicator that remains colorless in acids but turns pink in bases. [2],,
SCI_C7_010,7,Science,Heat,Thermometry,Easy,MCQ,Which thermometer is used to measure human body temperature?,Laboratory thermometer,Clinical thermometer,Digital meter,Barometer,B,Clinical thermometers are calibrated to the human body range ($35^{\\circ}C$ to $42^{\\circ}C$).,,
SCI_CH11_001,7,Science,Light,Mirrors,Hard,MCQ,Which type of mirror is used as a side-view mirror in vehicles?,Concave,Convex,Plane,Parabolic,B,Convex mirrors provide a wider field of view and form upright diminished images of distant objects.,,Ch 11: Curiosity
MATH_C7_507,7,Math,Connecting the Dots,Central Tendency,Hard,MCQ,Which value is affected the most by an extreme outlier in a dataset?,Minimum,Maximum,Mean,Median,C,The mean uses the sum of all values so a single very high or low value significantly shifts the result,,Ganita Prakash Ch 13
SST_C7_263,7,SST,Constitution of India,History,Hard,MCQ,Which value was added to the Preamble by the 42nd Amendment (1976)?,Republic,Sovereign,Socialist and Secular,Justice,C,The 42nd Amendment updated the Preamble to reflect these modern values. [4],,
SST_C7_082,7,SST,The Constitution of India,Amendments,Hard,MCQ,Which values were added to the Preamble by the 42nd Amendment in 1976?,Republic and Sovereign,Socialist and Secular,Equality and Liberty,Unity and Integrity,B,The 42nd Amendment updated the Preamble to include these key descriptive terms. [3],,
ENG_C7_557,7,English,Conquering the Summit,Heroism,Medium,MCQ,Which world-famous mountain is the focus of this adventure story?,Mount K2,Mount Everest,Mount Kangchenjunga,Mount Anamudi,B,The chapter recounts the challenges of scaling the world's highest peak,,Poorvi Unit 4
ENG_C7_362,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Who assisted Golu in pulling his nose back from the crocodile?,The ostrich,The elephant,The python,The giraffe,C,The python helped Golu during the dangerous encounter at the riverbank.[11],,An Alien Hand Unit 3
ENG_C7_255,7,English,Rani Abbakka,Plot,Medium,MCQ,Who did Rani Abbakka form an alliance with to strengthen Ullal?,The Portuguese,The British,The Zamorin of Kozhikode,Local merchants,C,This strategic alliance helped her resist foreign invasions effectively.,,
SST_C7_555,7,SST,The Rise of Empires,History,Medium,MCQ,Who founded the Mauryan Empire after defeating the Nandas?,Ashoka,Bindusara,Chandragupta Maurya,Akbar,C,Chandragupta Maurya established the first pan-regional empire in India,,Exploring Society Ch 5
ENG_C7_409,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Who helped Golu pull his nose back from the crocodile?,The ostrich,The elephant,The python,The giraffe,C,The python assisted Golu during the dangerous encounter at the riverbank.,,An Alien Hand Unit 3
ENG_C7_010,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Who helped Golu pull his nose from the crocodile's grip?,The python,The elephant,The giraffe,The ostrich,A,The python assisted Golu during the dangerous encounter at the river. [14],,
SST_C7_634,7,SST,The Constitution of India,Governance,Medium,MCQ,Who is known as the architect of the Indian Constitution for his role in drafting it?,Nehru,Dr. B.R. Ambedkar,Gandhi,Rajendra Prasad,B,He served as the chairman of the Drafting Committee,,Exploring Society Ch 10
SST_C7_724,7,SST,Constitution of India,Governance,Medium,MCQ,Who is known as the architect of the Indian Constitution?,Nehru,B.R. Ambedkar,Gandhi,Prasad,B,He served as the leader of the Drafting Committee,,Exploring Society Ch 10
ENG_C7_003,7,English,The Tiny Teacher,Biology in Lit,Easy,MCQ,Who is the 'Tiny Teacher' referred to in the story?,A honeybee,An ant,A butterfly,A grasshopper,B,The story uses the disciplined life of ants as a moral and educational lesson. [12][12],,
ENG_C7_080,7,English,The Tiny Teacher,Biology in Lit,Easy,MCQ,Who is the 'Tiny Teacher' referred to in this chapter?,The mosquito,The ants,The rabbits,The squirrel,B,The story uses the highly disciplined life of ants as an educational model. [4],,
ENG_C7_680,7,English,Three Days to See,Theme,Hard,MCQ,Who is the author of 'Three Days to See'?,Helen Keller,Annie Sullivan,William Wordsworth,Anne Frank,A,Helen Keller writes about the beauty of the world that people with sight often ignore,,Poorvi Unit 1
ENG_C7_671,7,English,Three Questions,Theme,Medium,MCQ,Who is the author of the story 'Three Questions'?,Ruskin Bond,Leo Tolstoy,Henry James,William Wordsworth,B,Leo Tolstoy used this royal parable to teach ethical life lessons,,Honeycomb Unit 1
SST_C7_008,7,SST,State Government,Governance,Medium,MCQ,Who is the head of a state in India?,Chief Minister,Prime Minister,Governor,President,C,The Governor is the nominal head of a state while the CM is the executive head. [9],,
ENG_C7_674,7,English,My Dear Soldiers,Theme,Medium,MCQ,Who is the speaker/poet of the poem 'My Dear Soldiers'?,Sarojini Naidu,A.P.J. Abdul Kalam,Rabindranath Tagore,Kamala Das,B,The poem is a tribute written by the former President to the Indian Armed Forces,,Poorvi Unit 5
SST_C7_732,7,SST,Constitution of India,Governance,Medium,MCQ,Who led the Drafting Committee of the Constitution?,Nehru,Gandhi,B.R. Ambedkar,Prasad,C,Chief architect of the Indian Constitution,,Exploring Society Ch 10
SST_C_001,7,SST,The Constitution of India,Governance,Medium,MCQ,Who served as the Chairman of the Drafting Committee of the Indian Constitution?,Jawaharlal Nehru,Dr. Rajendra Prasad,Dr. B.R. Ambedkar,Sardar Patel,C,Dr. B.R. Ambedkar led the committee responsible for writing the final draft of the Constitution.,,Ch 10: Exploring Society
ENG_C7_552,7,English,Three Days to See,Character,Medium,MCQ,Who was Helen Keller's teacher who opened the world of language to her?,William Wordsworth,Annie Sullivan,Leo Tolstoy,Florence Nightingale,B,Annie Sullivan taught Helen how to communicate despite her blindness and deafness,,Poorvi Unit 1
ENG_C7_514,7,English,A Gift of Chappals,Character,Easy,MCQ,Who was Lalli in the story?,A teacher,A beggar,A child learning music,A servant,C,Lalli was the girl taking violin lessons from the music master,,Honeycomb Unit 2
SST_C7_509,7,SST,Constitution of India,Governance,Medium,MCQ,Who was the Chairman of the Drafting Committee of the Indian Constitution?,Jawaharlal Nehru,Dr. Rajendra Prasad,Dr. B.R. Ambedkar,Sardar Patel,C,Dr. Ambedkar is the primary architect of the Indian Constitution,,Exploring Society Ch 10
SST_C7_678,7,SST,The Rise of Empires,History,Medium,MCQ,Who was the chief advisor and political strategist for Chandragupta Maurya?,Ashoka,Panini,Kautilya,Megasthenes,C,Kautilya or Chanakya wrote the Arthashastra which outlined Mauryan statecraft,,Exploring Society Ch 5
SST_H_001,7,SST,The Rise of Empires,Administration,Hard,MCQ,Who was the chief advisor and strategist behind the success of Chandragupta Maurya?,Ashoka,Megasthenes,Kautilya (Chanaky,Seleucus Nicator,C,Kautilya wrote the Arthashastra and was the primary architect of the Mauryan administration.,,Ch 5: Exploring Society
SST_C7_508,7,SST,The Rise of Empires,Strategy,Medium,MCQ,Who was the chief advisor behind Chandragupta Maurya's success?,Ashoka,Panini,Kautilya (Chanaky,Megasthenes,C,Kautilya authored the Arthashastra and guided Mauryan politics,,Exploring Society Ch 5
SST_C7_399,7,SST,The Rise of Empires,History,Medium,MCQ,Who was the chief advisor for Chandragupta Maurya?,Ashoka,Panini,Kautilya,Megasthenes,C,Kautilya (Chanaky authored the Arthashastra and guided the empire's rise.,,Exploring Society Ch 5
SST_C7_205,7,SST,The Rise of Empires,Strategy,Medium,MCQ,Who was the chief strategist behind the success of Chandragupta Maurya?,Ashoka,Panini,Kautilya,Megasthenes,C,Kautilya (Chanaky authored the Arthashastra and provided political guidance to the Mauryas.,,Exploring Society Ch 5
SST_C7_630,7,SST,The Rise of Empires,History,Easy,MCQ,Who was the first emperor to unify a large part of India under the Mauryan Empire?,Ashoka,Chandragupta Maurya,Bindusara,Akbar,B,He founded the empire after defeating the Nanda dynasty with Chanakya's help,,Exploring Society Ch 5
SST_C7_512,7,SST,The Rise of Empires,Strategy,Medium,MCQ,Who wrote the ancient Indian political treatise 'Arthashastra'?,Ashoka,Kautilya,Panini,Chandragupta,B,Kautilya (Chanaky provided the political and economic foundations for the Mauryas,,Exploring Society Ch 5
SST_C7_719,7,SST,The Rise of Empires,Strategy,Medium,MCQ,Who wrote the ancient political treatise 'Arthashastra'?,Ashoka,Kautilya,Panini,Chandragupta,B,Chanakya or Kautilya provided the political blueprint for the Mauryas,,Exploring Society Ch 5
SST_C7_718,7,SST,Understanding Markets,Economics,Easy,MCQ,Wholesale markets primarily sell goods to:,Consumers,Retailers,Farmers,Tourists,B,Wholesalers act as bulk distributors in the market chain,,Exploring Society Ch 12
SST_C7_728,7,SST,Understanding Markets,Economics,Medium,MCQ,Wholesalers sell goods primarily to:,Consumers,Retailers,Manufacturers,Farmers,B,Bulk sale intermediaries in the trade chain,,Exploring Society Ch 12
ENG_C7_013,7,English,The Day the River Spoke,Character,Medium,MCQ,Why did Jahnavi visit the river almost every day?,To catch fish,To swim,To share her thoughts and feelings,To fetch water,C,The river served as a silent listener and confidant for Jahnavi as she dreamed of going to school.,,Poorvi Unit 1
ENG_C7_015,7,English,A Gift of Chappals,Plot,Easy,MCQ,Why did the children give the music master's chappals to the beggar?,Because they were old,Because the beggar had blisters on his feet,Because they didn't like the master,To play a prank,B,"The children felt compassionate toward the beggar whose feet were burning on the hot road.[12, 13]",,Honeycomb Unit 2
ENG_H_001,7,English,Three Questions,Character,Medium,MCQ,Why did the king seek the answers to his three specific questions?,To gain immense wealth,To never fail in life,To defeat his enemies,To find a hidden treasure,B,The king believed that knowing the right time person and action would make him a perfect ruler.,,Unit 1: Honeycomb
ENG_C7_356,7,English,Three Questions,Theme,Medium,MCQ,Why did the king send messengers throughout the kingdom?,To fetch wise men,To find answers to the questions,To look for a hermit,To announce a war,B,The king sought answers to three questions he believed would ensure he never failed.[8],,Honeycomb Unit 1
ENG_C7_503,7,English,The Day the River Spoke,Character,Medium,MCQ,Why did the River know so much about Jahnavi?,They were neighbors,She visited it every day to share her feelings,The river could read minds,Her father told the river,B,The river served as a silent listener and confidant for Jahnavi's dreams,,Poorvi Unit 1
SCI_C7_016,7,Science,Nutrition in Plants,Insectivorous Plants,Medium,MCQ,Why does the Pitcher plant trap and digest insects?,It is a heterotroph,It grows in nitrogen-deficient soil,It has no chlorophyll,It needs water,B,Pitcher plants photosynthesize but eat insects to fulfill their nitrogen requirements from the soil.,,Curiosity Ch 1
ENG_C7_665,7,English,My Dear Soldiers,Imagery,Medium,MCQ,Why does the poet compare soldiers to 'yogis' in the poem?,Because they perform yoga,Because of their discipline and endurance in isolation,Because they wear orange,because they live in temples,B,This metaphor highlights their unwavering focus and commitment in harsh terrains,,Poorvi Unit 5
ENG_C7_402,7,English,My Dear Soldiers,Imagery,Medium,MCQ,Why does the poet compare soldiers to 'yogis'?,Because they perform yoga,Because of their discipline and endurance in isolation,Because they wear orange,Because they live in temples,B,The comparison highlights their unwavering focus in harsh and lonely terrains.,,Poorvi Unit 5
SST_C7_259,7,SST,The Gupta Era,History,Medium,MCQ,Why is the Gupta period called the 'Golden Age' of India?,Huge gold mines,Constant expansion,Progress in arts science and literature,High taxes,C,This era saw significant achievements in mathematics medicine and Sanskrit.,,
SST_C7_496,7,SST,The Gupta Era,History,Medium,MCQ,Why is the Gupta period often called the 'Golden Age' of India?,Huge gold mines,Constant expansion,Progress in arts science and literature,High taxes,C,This era saw significant achievements in mathematics medicine and Sanskrit literature,,Exploring Society Ch 7
ENG_C7_649,7,English,Three Questions,Comprehension,Hard,MCQ,Why was the king advised to consult magicians by some people?,To perform tricks,To look into the future,To heal the sick,To build palaces,B,Some believed that knowing the right time for an action required future sight,,Honeycomb Unit 1
ENG_C7_369,7,English,Three Questions,Theme,Hard,MCQ,Why were the messengers promised a large sum of money?,To travel far,To find someone to answer the king's questions,To buy a gift,To start a business,B,The king offered a reward for satisfactory solutions to his three queries.[8],,Honeycomb Unit 1
ENG_C7_144,7,English,An Alien Hand,Plot,Medium,MCQ,Why were the scientists on Earth excited about the Viking mission?,They found gold on Mars,They wanted to search for life on Mars,They wanted to build a mall,They found water,B,The mission's primary objective was to analyze Martian soil for biological signatures. [5],,
SCI_C7_756,7,Science,Changes Around Us,Chemical,Easy,MCQ,Wood burning is which change?,Physical,Chemical,Temporary,Reversible,B,Permanent formation of ash and gas,,Curiosity Ch 5
ENG_C7_746,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,Word 'mimicking' means:,Singing,Imitating,Running,Hiding,B,Jahnavi copied river sounds in the story,,Poorvi Unit 1
ENG_C7_754,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,Word 'tribute' in story means:,Gift,Sign of control,Medal,Prize,B,Portuguese payment demand from Ullal,,Poorvi Unit 5
SCI_C7_759,7,Science,Wastewater Story,Treatment,Easy,MCQ,WWTP facility acronym means:,Water Works Tool Part,Wastewater Treatment Plant,World Water Task Plan,Waste Water Tool Part,B,Standard sewage treatment term,,Curiosity Ch 13
SCI_C7_764,7,Science,Wastewater Story,Treatment,Easy,MCQ,WWTP means:,Water Works Tool Part,Wastewater Treatment Plant,World Water Task Plan,Waste Water Tool Part,B,Facility for cleaning sewage,,Curiosity Ch 13
ENG_C7_524,7,English,The Tiny Teacher,Biology,Easy,MCQ,Young ones of ants are called:,Grubs,Larva,Puppies,Kittens,A,Specific term used for ant larvae in the text,,An Alien Hand Unit 1
ENG_C7_718,7,English,The Tiny Teacher,Behavior,Easy,MCQ,Young ones of ants are specifically called:,Grubs,Larva,Puppies,Kittens,A,The text uses the term grubs for ant larvae before they become cocoons,,An Alien Hand Unit 1
MATH_C7_771,7,Math,Parallel and Intersecting Lines,Linear Pair,Easy,MCQ,If two angles form a linear pair; what is the sum of their measures?,90 degrees,180 degrees,360 degrees,45 degrees,B,Angles on a straight line that are adjacent form a linear pair and always sum to 180 degrees,,Ganita Prakash Ch 5
MATH_C7_772,7,Math,Number Play,Prime Factorisation,Medium,MCQ,Which of the following is the prime factorisation of 36?,$2 \\times 2 \\times 3 \\times 3$,$4 \\times 9$,$2 \\times 18$,$3 \\times 12$,A,Prime factorisation must consist only of prime numbers that multiply to the original number,,Ganita Prakash Ch 6
MATH_C7_773,7,Math,A Tale of Three Intersecting Lines,Triangle Inequality,Medium,MCQ,In any triangle; the sum of the lengths of any two sides is _____ than the third side.,Less,Equal,Greater,Half,C,The triangle inequality theorem states that a triangle can only be formed if the sum of any two sides exceeds the third,,Ganita Prakash Ch 7
MATH_C7_774,7,Math,Working with Fractions,Mixed to Improper,Easy,MCQ,What is the improper fraction representation of $5 \\frac{2}{3}$?,10/3,17/3,13/3,7/3,B,Multiply the whole number by the denominator and add the numerator: $(5 \\times 3) + 2 = 17$,,Ganita Prakash Ch 8
MATH_C7_775,7,Math,Geometric Twins,Congruence,Hard,MCQ,If $\\Delta ABC \\cong \\Delta PQR$ under the correspondence $ABC \\leftrightarrow PQR$; then side $BC$ corresponds to:,$PQ$,$PR$,$QR$,$AC$,C,In congruent triangles; the order of letters indicates corresponding sides and angles,,Ganita Prakash II Ch 1
MATH_C7_776,7,Math,Operations with Integers,Commutative Property,Easy,MCQ,Division of integers is not commutative. This means $a \\div b$ is _____ $b \\div a$.,Always equal to,Never equal to,Not necessarily equal to,Double,C,Unlike addition and multiplication; the order of numbers in division matters for the result,,Ganita Prakash II Ch 2
MATH_C7_777,7,Math,Connecting the Dots,Central Tendency,Medium,MCQ,Which measure of central tendency is the value in the middle of a sorted data set?,Mean,Mode,Median,Range,C,The median is the middle observation when data is arranged in ascending or descending order,,Ganita Prakash II Ch 13
MATH_C7_778,7,Math,Expressions using Letter-Numbers,Terms,Medium,MCQ,In the expression $5x^2 - 3x + 2$; how many terms are there?,1,2,3,4,C,Terms are the parts of an algebraic expression separated by addition or subtraction signs,,Ganita Prakash Ch 4
MATH_C7_779,7,Math,Finding the Unknown,Balance Method,Medium,MCQ,If you add 5 to both sides of the equation $x - 5 = 10$; the equation remains:,Balanced,Unbalanced,Negative,Zero,A,According to the properties of equality; adding the same number to both sides maintains the balance,,Ganita Prakash II Ch 7
MATH_C7_780,7,Math,A Peek Beyond the Point,Decimals,Hard,MCQ,What is the result of $0.08 \\times 1000$?,0.8,8,80,800,C,Multiplying by 1000 shifts the decimal point three places to the right,,Ganita Prakash Ch 3
SCI_C7_771,7,Science,Adolescence,Reproduction,Easy,MCQ,The first menstrual flow that begins at puberty is termed:,Menopause,Menarche,Ovulation,Gestation,B,Menarche marks the beginning of the reproductive phase in girls during adolescence,,Curiosity Ch 6
SCI_C7_772,7,Science,Exploring Substances,pH,Medium,MCQ,Which of the following substances has a pH value closest to 7?,Lemon juice,Soap solution,Pure water,Stomach acid,C,Pure water is a neutral substance with a pH value of approximately 7,,Curiosity Ch 2
SCI_C7_773,7,Science,The World of Metals and Non-metals,Metallurgy,Hard,MCQ,Stainless steel is made by mixing iron with carbon and which other metals?,Copper and Zinc,Chromium and Nickel,Gold and Silver,Lead and Tin,B,Chromium and nickel are added to iron to create an alloy that does not rust easily,,Curiosity Ch 4
SCI_C7_774,7,Science,Heat Transfer in Nature,Radiation,Easy,MCQ,Which mode of heat transfer does not require any material medium like air or water?,Conduction,Convection,Radiation,Insulation,C,Radiation involves heat transfer through electromagnetic waves that can travel through a vacuum,,Curiosity Ch 7
SCI_C7_775,7,Science,Life Processes in Animals,Anatomy,Medium,MCQ,Which organ in the human body is responsible for the removal of carbon dioxide from the blood?,Heart,Kidney,Lungs,Liver,C,Lungs facilitate the exchange of gases where $O_2$ is taken in and $CO_2$ is expelled,,Curiosity Ch 9
SCI_C7_776,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,Distance travelled by an object in unit time is called its:,Speed,Acceleration,Gravity,Friction,A,Speed is a fundamental physical quantity measuring how fast an object moves,,Curiosity Ch 8
SCI_C7_777,7,Science,Earth Moon and the Sun,Astronomy,Medium,MCQ,A solar eclipse occurs when which celestial body comes between the other two?,Earth,Sun,Moon,Mars,C,A solar eclipse happens when the Moon blocks the Sun's light from reaching the Earth,,Curiosity Ch 12
SCI_C7_778,7,Science,Electricity: Circuits and Components,Circuit Diagrams,Easy,MCQ,A thin wire inside a bulb that glows when electricity passes through it is the:,Switch,Battery,Filament,Terminals,C,The filament is usually made of tungsten and produces light through heating,,Curiosity Ch 3
SCI_C7_779,7,Science,Wastewater Story,Microbiology,Medium,MCQ,Which type of bacteria is used in aeration tanks to consume organic waste?,Anaerobic,Aerobic,Parasitic,Fungal,B,Aerobic bacteria require oxygen pumped into the tank to break down contaminants,,Curiosity Ch 13
SCI_C7_780,7,Science,Changes Around Us,Observation,Medium,MCQ,Production of a 'pop' sound during a chemical reaction usually indicates the release of:,Oxygen,Hydrogen,Carbon dioxide,Nitrogen,B,The combustion of hydrogen gas in the presence of a flame produces a characteristic pop sound,,Curiosity Ch 5
SST_C7_771,7,SST,New Beginnings: Cities and States,Political History,Medium,MCQ,What was the first capital of the powerful Magadha kingdom?,Pataliputra,Rajagriha,Vaishali,Taxila,B,Rajagriha (modern Rajgir) was the initial capital before it shifted to Pataliputra,,Exploring Society Ch 4
SST_C7_772,7,SST,Rise of Empires,Administration,Easy,MCQ,The chief revenue officer in the Mauryan administration was known as:,Samaharta,Purohita,Senapati,Amatya,A,The Samaharta was responsible for the collection of taxes and managing the state budget,,Exploring Society Ch 5
SST_C7_773,7,SST,Understanding the Weather,Instruments,Easy,MCQ,Which instrument is used to determine the direction of the wind?,Barometer,Rain gauge,Wind vane,Thermometer,C,A wind vane (or weather cock) shows the direction from which the wind is blowing,,Exploring Society Ch 2
SST_C7_774,7,SST,Climates of India,Meteorology,Medium,MCQ,Monsoon winds that enter India from the southwest during June are called:,Retreating monsoons,Advancing monsoons,Cyclones,Trade winds,B,The advancing monsoon marks the beginning of the rainy season in India,,Exploring Society Ch 3
SST_C7_775,7,SST,The Age of Reorganisation,Dynasties,Hard,MCQ,Which dynasty built the famous Kailashanatha Temple at Ellora?,Cholas,Rashtrakutas,Pallavas,Guptas,B,The Rashtrakuta kings were patrons of art and architecture in the Deccan region,,Exploring Society Ch 6
SST_C7_776,7,SST,From the Rulers to the Ruled,Civics,Easy,MCQ,A form of government where people elect their representatives is called:,Monarchy,Dictatorship,Democracy,Oligarchy,C,In a democracy; the supreme power is vested in the people and exercised by them directly or indirectly,,Exploring Society Ch 9
SST_C7_777,7,SST,The Constitution of India,History,Medium,MCQ,How long did it take to complete the drafting of the Indian Constitution?,1 year,2 years 11 months 18 days,5 years,6 months,B,The Constituent Assembly worked meticulously for nearly three years to finalize the document,,Exploring Society Ch 10
SST_C7_778,7,SST,From Barter to Money,Economics,Medium,MCQ,Standardized metal pieces used as money in ancient India were called:,Tokens,Punch-marked coins,Paper notes,Digital coins,B,Punch-marked coins were the earliest form of metallic currency in the subcontinent,,Exploring Society Ch 11
SST_C7_779,7,SST,Understanding Markets,Economics,Easy,MCQ,A person who produces goods or services is called a:,Consumer,Producer,Retailer,Wholesaler,B,Producers create value by transforming raw materials into finished products,,Exploring Society Ch 12
SST_C7_780,7,SST,Geographical Diversity of India,Hydrology,Medium,MCQ,Which river is known as the 'Dakshin Ganga' (Ganga of the South)?,Krishna,Kaveri,Godavari,Narmada,C,The Godavari is the largest river in the southern peninsula and holds great cultural significance,,Exploring Society Ch 1
ENG_C7_771,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,The word 'principality' used to describe Ullal means:,A big empire,A small territory ruled by a prince or princess,A school building,A desert land,B,Ullal was a small but strategically important territory on the Karnataka coast,,Poorvi Unit 5
ENG_C7_772,7,English,Say the Right Thing,Phrasal Verbs,Medium,MCQ,In the sentence 'The meeting was put off;' what does the phrasal verb mean?,Started,Postponed,Cancelled,Announced,B,To put off something means to move it to a later time or date,,Poorvi Unit 2
ENG_C7_773,7,English,Three Days to See,Literary Device,Hard,MCQ,Helen Keller uses which sense to describe the texture of a leaf?,Sight,Sound,Touch,Smell,C,She emphasizes the beauty of the world felt through tactile vibrations and textures,,Poorvi Unit 1
ENG_C7_774,7,English,A Funny Man,Comprehension,Easy,MCQ,What was the 'Funny Man' doing at the end of the poem?,Sleeping,Hopping on his head,Running a race,Climbing a tree,B,The humorous poem describes him going home in an unconventional and silly way,,Poorvi Unit 2
ENG_C7_775,7,English,My Dear Soldiers,Theme,Hard,MCQ,The poem 'My Dear Soldiers' addresses soldiers as:,Travelers,Great sons of the land,Foreigners,Merchants,B,The poet honors the bravery and identity of those defending the borders,,Poorvi Unit 5
ENG_C7_776,7,English,The Day the River Spoke,Vocabulary,Medium,MCQ,In the story; 'on the verge of' means:,Very far from,At the point where something is about to happen,Inside,Behind,B,It describes Jahnavi being close to making a decision about going to school,,Poorvi Unit 1
ENG_C7_777,7,English,Try Again,Poetry,Easy,MCQ,What should you do if your task is hard according to the poem?,Quit immediately,Time will bring you your reward,Ask someone else to do it,Hide away,B,The poem teaches that perseverance leads to eventual success,,Poorvi Unit 1
ENG_C7_778,7,English,The Tiny Teacher,Roles,Medium,MCQ,Which group of ants is responsible for guarding the anthill?,Workers,Soldiers,Cleaners,Drones,B,Soldier ants have specialized roles for defense within the colony,,An Alien Hand Unit 1
ENG_C7_779,7,English,Golu Grows a Nose,Character,Medium,MCQ,Golu went to the Limpopo river to find out what the _____ had for dinner.,Python,Crocodile,Hippopotamus,Baboon,B,His curiosity about the crocodile's habits drives the plot of the fable,,An Alien Hand Unit 3
ENG_C7_780,7,English,An Alien Hand,Sci-Fi,Hard,MCQ,The scientists found that the surface of Mars was:,Full of green plants,Barren and devoid of life,Covered with oceans,Crowded with cities,B,The spacecraft instruments indicated that Mars was currently a dead planet,,An Alien Hand Unit 10
MATH_C7_781,7,Math,Parallel and Intersecting Lines,Transversals,Hard,MCQ,If a transversal cuts two parallel lines; the sum of interior angles on the same side is:,90 degrees,180 degrees,360 degrees,0 degrees,B,Co-interior angles formed by a transversal with parallel lines are supplementary,,Ganita Prakash Ch 5
MATH_C7_782,7,Math,Arithmetic Expressions,BODMAS,Hard,MCQ,Calculate $20 + (15 \\div 3) \\times 2 - 5$:,25,15,30,18,A,Calculation: $20 + (5 \\times 2) - 5 = 20 + 10 - 5 = 25$,,Ganita Prakash Ch 2
MATH_C7_783,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Which decimal represents twelve and five hundredths?,12.5,12.05,1.205,12.005,B,Five hundredths means the digit 5 is in the second decimal place after the point,,Ganita Prakash Ch 3
MATH_C7_784,7,Math,Number Play,Computational Thinking,Hard,MCQ,In a cryptarithm; if $A + A = A$; then the value of $A$ must be:,1,2,0,5,C,Zero is the only single digit that satisfies $0 + 0 = 0$,,Ganita Prakash Ch 6
MATH_C7_785,7,Math,Connecting the Dots,Arithmetic Mean,Medium,MCQ,If the mean of 10; 15; $x$; and 25 is 20; find $x$.,20,30,15,25,B,Total sum must be $20 \\times 4 = 80$. $10+15+25 = 50$. So $x = 80 - 50 = 30$,,Ganita Prakash II Ch 13
MATH_C7_786,7,Math,Geometric Twins,Triangle Properties,Hard,MCQ,A triangle cannot have more than one _____ angle.,Acute,Right,Interior,External,B,Since the sum of angles is 180; two right angles would leave 0 for the third,,Ganita Prakash II Ch 1
MATH_C7_787,7,Math,Operations with Integers,Signs,Medium,MCQ,The value of $(-1)^{100}$ is:,-1,1,100,-100,B,Any negative number raised to an even power results in a positive value,,NCERT Ch 11
MATH_C7_788,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve for $y$ in $4y = -28$:,7,-7,32,-32,B,Divide both sides by 4 to get $y = -7$,,Ganita Prakash II Ch 7
MATH_C7_789,7,Math,Expressions using Letter-Numbers,Algebra,Medium,MCQ,Write the expression for 'Twice a number n decreased by 10':,$10 - 2n$,$2n - 10$,$2(n - 10)$,$n/2 - 10$,B,Twice a number is $2n$ and decreasing it by 10 means subtracting 10 from it,,Ganita Prakash Ch 4
MATH_C7_790,7,Math,Working with Fractions,Multiplication,Medium,MCQ,Find $2/3$ of $1/4$:,2/7,8/3,1/6,3/12,C,Calculation: $(2 \\times 1) / (3 \\times 4) = 2/12 = 1/6$,,Ganita Prakash Ch 8
SCI_C7_781,7,Science,Exploring Substances,Nature of Materials,Easy,MCQ,Substances that do not change the color of litmus paper are:,Acids,Bases,Neutrals,Indicators,C,Neutral substances like sugar solution or salt solution do not react with litmus,,Curiosity Ch 2
SCI_C7_782,7,Science,Electricity: Circuits and Components,Switch,Medium,MCQ,When the switch is in the 'OFF' position; the circuit is said to be:,Closed,Open,Full,Hot,B,An open circuit has a break that prevents electric current from flowing,,Curiosity Ch 3
SCI_C7_783,7,Science,The World of Metals and Non-metals,Properties,Hard,MCQ,The property of metals by which they can be beaten into thin sheets is:,Ductility,Sonority,Malleability,Conductivity,C,Malleability allows metals like gold and silver to be hammered into very thin foils,,Curiosity Ch 4
SCI_C7_784,7,Science,Changes Around Us,Chemical Prevention,Easy,MCQ,Which of the following is used to prevent rusting in water pipes?,Painting,Greasing,Galvanisation,Boiling,C,Applying a zinc coating (galvanisation) protects iron from air and moisture,,Curiosity Ch 5
SCI_C7_785,7,Science,Adolescence,Endocrinology,Hard,MCQ,Which gland is often called the 'master gland' of the endocrine system?,Thyroid,Adrenal,Pituitary,Pancreas,C,The pituitary gland controls the functioning of many other endocrine glands,,Curiosity Ch 6
SCI_C7_786,7,Science,Heat Transfer in Nature,Meteorology,Medium,MCQ,Warm air rising and cool air blowing from the sea during the day causes:,Land breeze,Sea breeze,Thunderstorm,Monsoon,B,A sea breeze is a local wind system created by differential heating of land and water,,Curiosity Ch 7
SCI_C7_787,7,Science,Measurement of Time and Motion,Timekeeping,Easy,MCQ,Which of the following units is used for measuring very long durations of time?,Seconds,Minutes,Years,Microseconds,C,Years are the standard unit for astronomical and historical time scales,,Curiosity Ch 8
SCI_C7_788,7,Science,Life Processes in Animals,Digestion,Medium,MCQ,The process of breaking down complex food into simpler substances is:,Absorption,Digestion,Assimilation,Egestion,B,Digestion allows the body to utilize nutrients from food through chemical and mechanical means,,Curiosity Ch 9
SCI_C7_789,7,Science,Life Processes in Plants,Transport,Hard,MCQ,Which tissue is responsible for transporting food from leaves to other parts?,Xylem,Phloem,Stomata,Cortex,B,Phloem is the living tissue that carries synthesized glucose to roots and fruits,,Curiosity Ch 10
SCI_C7_790,7,Science,Light: Shadows and Reflections,Optics,Medium,MCQ,A shadow is always formed on the _____ side of the light source.,Same,Opposite,Left,Upper,B,Shadows form when an opaque object obstructs light; casting a dark area away from the source,,Curiosity Ch 11
SST_C7_781,7,SST,New Beginnings: Cities and States,Civics,Medium,MCQ,The word 'Janapada' literally means:,Capital city,The land where a 'jana' or tribe sets its foot,A market area,A king's palace,B,Janapadas were the early tribal settlements that evolved into kingdoms,,Exploring Society Ch 4
SST_C7_782,7,SST,Rise of Empires,History,Hard,MCQ,Which Greek general invaded India and was later defeated by Chandragupta Maurya?,Alexander,Seleucus Nicator,Menander,Antiochus,B,The conflict ended with a peace treaty and a matrimonial alliance between the two powers,,Exploring Society Ch 5
SST_C7_783,7,SST,Understanding the Weather,Atmosphere,Easy,MCQ,The blanket of air that surrounds the Earth is called the:,Hydrosphere,Lithosphere,Atmosphere,Biosphere,C,The atmosphere is held in place by Earth's gravity and supports all life,,Exploring Society Ch 2
SST_C7_784,7,SST,Climates of India,Agriculture,Medium,MCQ,Crops that are sown in the winter season are called:,Kharif crops,Rabi crops,Zaid crops,Cash crops,B,Wheat and mustard are examples of Rabi crops grown during the cooler months,,Exploring Society Ch 3
SST_C7_785,7,SST,The Age of Reorganisation,Dynasties,Medium,MCQ,The Kushanas are famous for being the first to issue large-scale _____ coins in India.,Silver,Gold,Copper,Iron,B,Gold coins reflected the prosperity and extensive trade during the Kushana rule,,Exploring Society Ch 6
SST_C7_786,7,SST,From the Rulers to the Ruled,Civics,Medium,MCQ,A 'Republic' is a country where the head of state is:,A hereditary King,An elected person,A religious leader,A military general,B,In a Republic; the power is held by the people and their elected representatives,,Exploring Society Ch 9
SST_C7_787,7,SST,The Constitution of India,Principles,Medium,MCQ,The word 'Secular' in the Preamble means that India:,Has no religion,Treats all religions equally,Follows one state religion,Opposes all religions,B,India is a secular state where citizens have the freedom to practice any faith,,Exploring Society Ch 10
SST_C7_788,7,SST,From Barter to Money,Economics,Hard,MCQ,Which institution currently manages the monetary policy of India?,State Bank of India,Reserve Bank of India,Ministry of Defence,Supreme Court,B,The RBI is the central bank responsible for currency issuance and banking regulation,,Exploring Society Ch 11
SST_C7_789,7,SST,Understanding Markets,Trade,Easy,MCQ,A market that connects manufacturers to retailers is called a:,Retail market,Weekly market,Wholesale market,Farmers market,C,Wholesalers buy in bulk from producers and distribute to local shopkeepers,,Exploring Society Ch 12
SST_C7_790,7,SST,Geographical Diversity of India,Landforms,Medium,MCQ,The vast plain area formed by the Ganga and Brahmaputra rivers is the:,Deccan Plateau,North Indian Plains,Thar Desert,Western Ghats,B,These plains are among the most fertile and densely populated regions in the world,,Exploring Society Ch 1
ENG_C7_781,7,English,Animals Birds and Dr Dolittle,Wit,Medium,MCQ,Dr. Dolittle had the unique ability to:,Fly like a bird,Speak the language of animals,Cure any human disease,Build massive ships,B,His talent allowed him to treat animals more effectively by understanding their needs,,Poorvi Unit 2
ENG_C7_782,7,English,Rani Abbakka,Character,Medium,MCQ,Rani Abbakka belongs to which historical period?,Ancient,Medieval (16th Century),Modern,Pre-historic,B,She ruled during the period of early European colonial expansion in India,,Poorvi Unit 5
ENG_C7_784,7,English,A Funny Man,Poetry,Easy,MCQ,The poem 'A Funny Man' is primarily written to provide:,Moral lessons,Scientific facts,Entertainment and humor,Sad news,C,The absurd imagery of the man is intended to amuse the young readers,,Poorvi Unit 2
ENG_C7_785,7,English,My Dear Soldiers,Ethics,Hard,MCQ,The poet says soldiers tread lonely expanses as 'yogis' to highlight their:,Magical powers,Discipline and endurance,Religious beliefs,Silence,B,Patrolling desolate borders requires immense focus and mental strength like a yogi,,Poorvi Unit 5
ENG_C7_786,7,English,The Day the River Spoke,Theme,Medium,MCQ,Jahnavi's fear of the 'headmaster' shows that she initially viewed school as:,A playground,An intimidating and strange place,A place to sleep,A market,B,The story traces her transition from being fearful to embracing formal education,,Poorvi Unit 1
ENG_C7_787,7,English,Try Again,Moral,Easy,MCQ,If you do not win at first; the poem suggests you should:,Give up,Be ashamed,Try again,Change your goal,C,The central message is that failure is merely a stepping stone to success through persistence,,Poorvi Unit 1
ENG_C7_788,7,English,The Tiny Teacher,Behavior,Medium,MCQ,Ants use their antennae primarily for:,Flying,Fighting,Communicating and sensing,Digging,C,They pass messages and identify colony members through chemical and tactile signals,,An Alien Hand Unit 1
ENG_C7_789,7,English,Golu Grows a Nose,Plot,Hard,MCQ,What was the outcome of the struggle between Golu and the crocodile?,Golu lost his nose,Golu's nose became long and useful,The crocodile died,Golu ran away immediately,B,Though painful; the experience gave him a trunk which helped him survive better,,An Alien Hand Unit 3
ENG_C7_790,7,English,An Alien Hand,Character,Medium,MCQ,Tilloo was curious about the _____ that his father used to go to work.,Spacecraft,Underground passage,Magic wand,Aeroplane,B,His curiosity about the restricted area leads to the major conflict in the story,,An Alien Hand Unit 10
MATH_C7_791,7,Math,Number Play,Computational Logic,Hard,MCQ,The number of zeros at the end of the product $5 \\times 2 \\times 5 \\times 2 \\times 5$ is:,1,2,3,0,B,Calculation: $10 \\times 10 \\times 5 = 500$; so there are two zeros,,Ganita Prakash Ch 6
MATH_C7_792,7,Math,Parallel and Intersecting Lines,Angles,Medium,MCQ,When two lines intersect; the sum of two adjacent angles is always:,90 degrees,180 degrees,360 degrees,0 degrees,B,Adjacent angles on a straight line are supplementary according to the linear pair axiom,,Ganita Prakash Ch 5
MATH_C7_793,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Find the value of $0.1 + 0.01 + 0.001$:,0.3,0.111,1.11,0.003,B,Add the values in their respective place value columns to get 0.111,,Ganita Prakash Ch 3
MATH_C7_794,7,Math,Geometric Twins,Triangle Properties,Hard,MCQ,A triangle whose angles are in the ratio 1:1:2 is a/an:,Equilateral triangle,Right-angled isosceles triangle,Scalene triangle,Obtuse triangle,B,The angles are 45; 45; and 90 degrees; making it both right-angled and isosceles,,Ganita Prakash II Ch 1
MATH_C7_795,7,Math,Working with Fractions,Logic,Hard,MCQ,If a whole number is divided by a proper fraction; the result is _____ the original number.,Smaller than,Equal to,Greater than,Zero,C,Dividing by a fraction less than 1 is equivalent to multiplying by its reciprocal (greater than 1),,Ganita Prakash Ch 8
MATH_C7_796,7,Math,Connecting the Dots,Probability,Medium,MCQ,What is the probability of a sure event?,0,0.5,1,Infinity,C,A sure event is certain to happen; so its probability is always 1,,Ganita Prakash II Ch 13
MATH_C7_797,7,Math,Arithmetic Expressions,Grouping,Medium,MCQ,In the expression $10 - (5 - 2)$; which operation is performed first?,Addition,Subtraction inside brackets,Subtraction outside brackets,Multiplication,B,According to the order of operations; brackets are always solved first,,Ganita Prakash Ch 2
MATH_C7_798,7,Math,Expressions using Letter-Numbers,Constants,Easy,MCQ,In the expression $7y + 4$; 4 is the:,Variable,Coefficient,Constant,Operator,C,A constant is a fixed numerical value that does not depend on any variable,,Ganita Prakash Ch 4
MATH_C7_799,7,Math,Finding the Unknown,Equations,Medium,MCQ,What is the solution for $3x + 1 = 10$?,3,9,2,4,A,Subtract 1 to get $3x = 9$; then divide by 3 to get $x = 3$,,Ganita Prakash II Ch 7
MATH_C7_800,7,Math,Perimeter and Area,Square,Medium,MCQ,If the side of a square is doubled; its area increases by _____ times.,2,4,8,16,B,New Area = $(2s) \\times (2s) = 4s^2$; which is 4 times the original area,,NCERT Ch 9
SCI_C7_791,7,Science,Exploring Substances,Neutralization,Medium,MCQ,Which of the following is a salt formed during neutralization?,Sodium Hydroxide,Hydrochloric acid,Sodium Chloride,Magnesium,C,Sodium chloride (table salt) is formed when HCl reacts with NaOH,,Curiosity Ch 2
SCI_C7_792,7,Science,Electricity: Circuits and Components,Conductivity,Easy,MCQ,Why are electric wires usually covered with plastic?,Plastic is a good conductor,Plastic is an insulator,Plastic is pretty,Plastic is a metal,B,Insulators prevent electric current from flowing into our bodies when we touch the wire,,Curiosity Ch 3
SCI_C7_793,7,Science,The World of Metals and Non-metals,Sonority,Easy,MCQ,Objects that produce a ringing sound when struck are said to be:,Malleable,Ductile,Sonorous,Opaque,C,Sonority is a characteristic property of metals used in making bells,,Curiosity Ch 4
SCI_C7_794,7,Science,Changes Around Us,Chemical Indicators,Medium,MCQ,What happens to a copper plate when placed in a silver nitrate solution?,No change,Copper gets a silver coating,Copper turns red,Copper melts,B,Copper displaces silver from its solution due to its higher reactivity,,Curiosity Ch 5
SCI_C7_795,7,Science,Adolescence,Hygiene,Easy,MCQ,Personal hygiene is especially important during adolescence to prevent:,Growing tall,Skin infections and body odor,Good grades,Hunger,B,Increased sweat gland activity during puberty requires regular cleaning to avoid bacteria,,Curiosity Ch 6
SCI_C7_796,7,Science,Heat Transfer in Nature,Physics,Hard,MCQ,Which state of matter allows heat transfer primarily through convection?,Only solids,Only liquids,Liquids and gases,Only metals,C,Convection requires the movement of molecules; which is only possible in fluids,,Curiosity Ch 7
SCI_C7_797,7,Science,Measurement of Time and Motion,Graphs,Medium,MCQ,In a distance-time graph; a straight line indicates _____ motion.,Uniform,Non-uniform,Circular,No,A,Uniform motion means the object covers equal distances in equal intervals of time,,Curiosity Ch 8
SCI_C7_798,7,Science,Life Processes in Animals,Respiration,Medium,MCQ,Blowing into lime water turns it milky due to the presence of _____ in exhaled air.,Oxygen,Nitrogen,Carbon dioxide,Argon,C,Exhaled air contains a higher concentration of $CO_2$ which reacts with lime water,,Curiosity Ch 9
SCI_C7_799,7,Science,Life Processes in Plants,Botany,Medium,MCQ,During the night; plants primarily perform which process?,Photosynthesis,Respiration,Transpiration,Digestion,B,Plants respire continuously; but photosynthesis only occurs in the presence of light,,Curiosity Ch 10
SCI_C7_800,7,Science,Light: Shadows and Reflections,Reflectivity,Easy,MCQ,Which of the following acts as a luminous source of light?,Moon,Mirror,Sun,Table,C,Luminous objects produce their own light; while non-luminous ones only reflect it,,Curiosity Ch 11
SST_C7_791,7,SST,New Beginnings: Cities and States,Society,Medium,MCQ,In ancient India; associations of traders and craftsmen were called:,Mahajanapadas,Shrenis,Varnas,Jatis,B,Shrenis acted as banks and regulated the quality and price of goods,,Exploring Society Ch 4
SST_C7_792,7,SST,Rise of Empires,Inscriptions,Medium,MCQ,The messages of Emperor Ashoka to his subjects were mostly written in:,Sanskrit,Prakrit,Hindi,Persian,B,Prakrit was the language of the common people in the Mauryan empire,,Exploring Society Ch 5
SST_C7_793,7,SST,Understanding the Weather,Hydrology,Easy,MCQ,The falling of water from clouds in the form of rain; snow; or hail is:,Evaporation,Condensation,Precipitation,Collection,C,Precipitation is a key component of the water cycle,,Exploring Society Ch 2
SST_C7_794,7,SST,Climates of India,Monsoon,Hard,MCQ,Monsoon winds that bring rain to Tamil Nadu during winter are the:,Southwest monsoons,Northeast monsoons,Trade winds,Westerlies,B,The retreat of the monsoon causes rainfall on the Coromandel coast during Oct-Nov,,Exploring Society Ch 3
SST_C7_795,7,SST,The Age of Reorganisation,History,Medium,MCQ,Which famous university was established during the Gupta period in Bihar?,Nalanda,Takshashila,Vikramshila,Aligarh,A,Nalanda was a world-renowned center of higher learning and Buddhist studies,,Exploring Society Ch 7
SST_C7_796,7,SST,From the Rulers to the Ruled,Governance,Easy,MCQ,In a Democracy; who is considered the ultimate source of power?,The Army,The Parliament,The People,The King,C,The preamble of the Indian Constitution emphasizes 'We; the people',,Exploring Society Ch 10
SST_C7_797,7,SST,The Constitution of India,Rights,Hard,MCQ,The Right against Exploitation specifically prohibits:,Going to school,Child labor and human trafficking,Traveling,Eating food,B,The Constitution protects children from being forced to work in dangerous conditions,,Exploring Society Ch 10
SST_C7_798,7,SST,From Barter to Money,History,Medium,MCQ,The use of paper money in India was popularized during the _____ period.,Ancient,Medieval,Modern British,Vedic,C,Modern paper currency systems were introduced under colonial administration,,Exploring Society Ch 11
SST_C7_799,7,SST,Understanding Markets,Civics,Medium,MCQ,A place where small shops sell items for daily needs in a colony is a:,Wholesale market,Shopping mall,Neighborhood market,Weekly market,C,These shops are convenient for residents as they are open daily and located nearby,,Exploring Society Ch 12
SST_C7_800,7,SST,Geographical Diversity of India,Plateaus,Easy,MCQ,The Deccan Plateau is primarily composed of which type of rock?,Sedimentary,Metamorphic,Volcanic (Basalt),Sandstone,C,The plateau was formed by massive lava flows millions of years ago,,Exploring Society Ch 1
MATH_C7_871,7,Math,Operations with Integers,Absolute Value,Easy,MCQ,What is the absolute value of the integer -11?,-11,11,0,1,B,The absolute value of a number is its distance from zero regardless of its sign,,NCERT Ch 1
MATH_C7_872,7,Math,Expressions using Letter-Numbers,Terms,Medium,MCQ,How many terms are in the algebraic expression $3x^2 + 5x - 9$?,1,2,3,4,C,Terms are the individual components of an expression separated by plus or minus signs,,Ganita Prakash Ch 4
MATH_C7_873,7,Math,Connecting the Dots,Arithmetic Mean,Medium,MCQ,If the mean of five numbers is 40; find their total sum.,8,200,320,40,B,Total sum is calculated by multiplying the mean by the number of values: $40 \\times 5 = 200$,,Ganita Prakash Ch 13
MATH_C7_874,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Which decimal number is exactly halfway between 0.1 and 0.2?,0.11,0.15,0.12,0.105,B,Adding 0.1 and 0.2 gives 0.3; then dividing by 2 gives 0.15,,Ganita Prakash Ch 3
MATH_C7_875,7,Math,Number Play,Computational Thinking,Hard,MCQ,In the cryptarithm $T + T + T = UT$; if $T$ is a single digit; find $T$.,3,4,5,9,C,If $T=5$ then $5+5+5=15$; so $U=1$ and $T=5$ which satisfies the equation,,Ganita Prakash Ch 6
MATH_C7_876,7,Math,Geometric Twins,Angles,Medium,MCQ,Two angles are complementary if their sum is:,90 degrees,180 degrees,45 degrees,360 degrees,A,Complementary angles are a pair of angles whose measures add up to exactly 90 degrees,,Ganita Prakash II Ch 1
MATH_C7_877,7,Math,Parallel and Intersecting Lines,Properties,Medium,MCQ,If a transversal cuts two parallel lines; which angle pair is NOT necessarily equal?,Corresponding angles,Alternate interior angles,Co-interior angles,Vertically opposite angles,C,Co-interior angles are supplementary (sum to 180) rather than equal; unless they are 90 degrees each,,Ganita Prakash Ch 5
MATH_C7_878,7,Math,Working with Fractions,Operations,Hard,MCQ,What is the value of $3/4 \\div 6$?,1/8,1/2,9/2,1/4,A,Dividing by 6 is the same as multiplying by 1/6: $3/4 \\times 1/6 = 3/24 = 1/8$,,Ganita Prakash Ch 8
MATH_C7_879,7,Math,Connecting the Dots,Quadrants,Medium,MCQ,A point where $x$ is positive and $y$ is negative lies in which quadrant?,Quadrant I,Quadrant II,Quadrant III,Quadrant IV,D,Quadrant IV is the region of the Cartesian plane with positive horizontal and negative vertical values,,Ganita Prakash Ch 13
MATH_C7_880,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve for $x$ in $2x - 5 = x + 10$.,5,15,10,-15,B,Subtract $x$ from both sides ($x - 5 = 10$) then add 5 to both sides to find $x = 15$,,Ganita Prakash II Ch 7
MATH_C7_881,7,Math,Large Numbers Around Us,Estimation,Easy,MCQ,Rounding 463128 to the nearest lakh gives:,"4,00,000","5,00,000","4,60,000","4,70,000",B,Since the ten-thousands digit 6 is 5 or greater; we round up to 5;00;000,,Ganita Prakash Ch 1
MATH_C7_882,7,Math,Number Play,Sequences,Hard,MCQ,What is the 5th term of the Virahanka-Fibonacci sequence starting 1; 2; 3;...?,5,8,7,10,B,The sequence is 1; 2; 3; 5; 8; where each term is the sum of the previous two,,Ganita Prakash Ch 6
MATH_C7_883,7,Math,Working with Fractions,Mixed Numbers,Medium,MCQ,Convert 15/4 into a mixed fraction.,$3 \\frac{1}{4}$,$4 \\frac{3}{4}$,$3 \\frac{3}{4}$,$2 \\frac{7}{4}$,C,Divide 15 by 4 to get 3 with a remainder of 3; so $3 \\frac{3}{4}$,,Ganita Prakash Ch 8
MATH_C7_884,7,Math,Parallel and Intersecting Lines,Angles,Easy,MCQ,Angles that share a common vertex and a common arm are called:,Linear pair,Adjacent angles,Vertically opposite,Supplementary,B,Adjacent angles are next to each other and share a boundary arm without overlapping,,Ganita Prakash Ch 5
MATH_C7_885,7,Math,Connecting the Dots,Central Tendency,Hard,MCQ,Which value is least affected by an outlier in a dataset?,Mean,Median,Total sum,Average,B,The median depends only on the middle position; not the magnitude of extreme values,,Ganita Prakash Ch 13
MATH_C7_886,7,Math,Arithmetic Expressions,Grouping,Medium,MCQ,Simplify $8 + (4 \\times 2) - 10$.,14,6,10,4,B,Solve brackets first (8); then add 8 to get 16; then subtract 10 to get 6,,Ganita Prakash Ch 2
MATH_C7_887,7,Math,A Peek Beyond the Point,Measurement,Easy,MCQ,How many centimeters are in 2.5 meters?,25 cm,250 cm,0.25 cm,2500 cm,B,Multiply by 100 to convert meters to centimeters: $2.5 \\times 100 = 250$,,Ganita Prakash Ch 3
MATH_C7_888,7,Math,Expressions using Letter-Numbers,Logic,Medium,MCQ,Write the expression for '5 times z increased by 3'.,$5z + 3$,$3z + 5$,$5(z + 3)$,$z/5 + 3$,A,Increase by 3 means adding 3 to the product of 5 and z,,Ganita Prakash Ch 4
MATH_C7_889,7,Math,Geometric Twins,Polygons,Easy,MCQ,A polygon with 6 equal sides and 6 equal angles is a:,Pentagon,Hexagon,Regular Hexagon,Heptagon,C,A hexagon has 6 sides; but it is called regular only if all sides and angles are equal,,Ganita Prakash II Ch 1
MATH_C7_890,7,Math,Finding the Unknown,Balance,Easy,MCQ,The equation $x + 4 = 4$ implies $x$ is:,4,0,8,1,B,Subtracting 4 from both sides results in $x = 0$,,Ganita Prakash II Ch 7
MATH_C7_891,7,Math,Connecting the Dots,Data Literacy,Easy,MCQ,A question that can be answered by collecting data that varies is a:,Personal question,Constant question,Statistical question,Fixed question,C,Statistical questions like 'How tall are the students' involve variability in data,,Ganita Prakash Ch 13
MATH_C7_892,7,Math,Operations with Integers,Signs,Medium,MCQ,Find the value of $(-1) \\times (-1) \\times (-1)$.,1,-1,0,3,B,An odd number of negative signs in a product results in a negative value,,NCERT Ch 1
MATH_C7_893,7,Math,Number Play,Parity,Medium,MCQ,The product of two odd numbers is always:,Even,Odd,Prime,Zero,B,Multiplying two odd numbers like $3 \\times 5 = 15$ always results in an odd number,,Ganita Prakash Ch 6
MATH_C7_894,7,Math,Geometric Twins,Triangle Property,Hard,MCQ,If two angles of a triangle are 36 and 72; find the third angle.,72,108,90,36,A,The sum is 180; so $180 - (36 + 72) = 180 - 108 = 72$,,Ganita Prakash II Ch 1
MATH_C7_895,7,Math,Expressions using Letter-Numbers,Evaluation,Medium,MCQ,If $p = 4$ and $q = 2$; find $7p - 3q$.,22,34,10,25,A,Substitute values: $7(4) - 3(2) = 28 - 6 = 22$,,Ganita Prakash Ch 4
SCI_C7_896,7,Science,Adolescence,Endocrinology,Medium,MCQ,The male hormone responsible for secondary sexual characteristics is:,Estrogen,Progesterone,Testosterone,Insulin,C,Testosterone triggers changes like facial hair and voice deepening in boys,,Curiosity Ch 6
SCI_C7_897,7,Science,Earth Moon and the Sun,Astronomy,Hard,MCQ,During a lunar eclipse; the shadow of the Earth falls on the:,Sun,Moon,Mars,Venus,B,A lunar eclipse occurs when Earth is positioned between the Sun and the Moon,,Curiosity Ch 12
SCI_C7_898,7,Science,Exploring Substances,pH,Easy,MCQ,What is the nature of a solution that turns red litmus blue?,Acidic,Basic,Neutral,Salty,B,Bases are substances that react with red litmus to change its color to blue,,Curiosity Ch 2
SCI_C7_899,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,If an object covers 100 meters in 10 seconds; its speed is:,1 km/h,10 m/s,100 m/s,0.1 m/s,B,Speed is distance divided by time: $100 / 10 = 10$ meters per second,,Curiosity Ch 8
SCI_C7_900,7,Science,Life Processes in Plants,Transport,Hard,MCQ,Which tissue is responsible for carrying water from roots to leaves?,Phloem,Xylem,Cortex,Stomata,B,Xylem vessels form a continuous system of channels for water and mineral transport,,Curiosity Ch 10
SCI_C7_901,7,Science,Changes Around Us,Oxidation,Medium,MCQ,Rusting occurs when iron reacts with oxygen and:,Nitrogen,Carbon,Water,Hydrogen,C,Moisture or water is essential for the chemical reaction of rusting to proceed,,Curiosity Ch 5
SCI_C7_902,7,Science,Electricity: Circuits and Components,Safety,Easy,MCQ,A device that breaks an electric circuit during a power surge is a:,Switch,Fuse,Battery,Bulb,B,A fuse protects electrical appliances from damage by melting if current is too high,,Curiosity Ch 3
SCI_C7_903,7,Science,Heat Transfer in Nature,Physics,Hard,MCQ,Heat transfer in liquids and gases primarily occurs through:,Conduction,Convection,Radiation,Reflection,B,Convection involves the actual movement of fluid particles to transfer thermal energy,,Curiosity Ch 7
SCI_C7_904,7,Science,Light: Shadows and Reflections,Optics,Medium,MCQ,An image that cannot be obtained on a screen is called a:,Real image,Virtual image,Inverted image,Clear image,B,Virtual images appear to be behind the mirror and cannot be projected; unlike real images,,Curiosity Ch 11
SCI_C7_905,7,Science,Wastewater Story,Microbiology,Medium,MCQ,Which organisms are used in vermi-processing toilets to treat human waste?,Bacteria,Fungi,Earthworms,Viruses,C,Earthworms process waste into high-quality manure known as vermi-cakes,,Curiosity Ch 13
SCI_C7_906,7,Science,Life Processes in Animals,Respiration,Medium,MCQ,What is the byproduct of anaerobic respiration in yeast used in baking?,Lactic acid,Alcohol and $CO_2$,Oxygen,Water,B,Yeast breaks down glucose into ethanol and carbon dioxide without using oxygen,,Curiosity Ch 9
SCI_C7_907,7,Science,The World of Metals and Non-metals,Biology,Hard,MCQ,Sorter's disease is associated with which occupational hazard?,Mining,Farming,Wool industry,Construction,C,Workers sorting wool can be infected by the bacterium Bacillus anthracis,,Curiosity Ch 4
SCI_C7_908,7,Science,Adolescence,Development,Medium,MCQ,The visible bulge in the throat of adolescent boys is the:,Pharynx,Larynx,Adam's apple,Tonsil,C,This is caused by the growth of the voice box during puberty,,Curiosity Ch 6
SCI_C7_909,7,Science,Exploring Substances,Indicators,Easy,MCQ,Which natural indicator is obtained from Lichens?,Turmeric,China Rose,Litmus,Red Cabbage,C,Litmus is a natural dye widely used in laboratories to test for acids and bases,,Curiosity Ch 2
SCI_C7_910,7,Science,Changes Around Us,Chemical,Medium,MCQ,Magnesium ribbon burns with a brilliant white light to form:,Mg Chloride,Mg Oxide,Mg Sulphate,Mg Carbonate,B,The magnesium reacts with atmospheric oxygen to produce a white powdery ash,,Curiosity Ch 5
SCI_C7_911,7,Science,Measurement of Time and Motion,Time,Easy,MCQ,The S.I. unit of time is the:,Minute,Hour,Second,Day,C,The second is the standard base unit for measuring duration globally,,Curiosity Ch 8
SCI_C7_912,7,Science,Heat Transfer in Nature,Meteorology,Hard,MCQ,Cool air moving from the land towards the sea at night is called:,Sea breeze,Land breeze,Monsoon,Storm,B,Land breeze occurs at night because the land cools down faster than the water,,Curiosity Ch 7
SCI_C7_913,7,Science,Light: Shadows and Reflections,Physics,Medium,MCQ,Light travels in a straight line; a property known as:,Reflection,Refraction,Rectilinear propagation,Dispersion,C,Light rays move along straight paths unless they hit an object or change medium,,Curiosity Ch 11
SCI_C7_914,7,Science,Earth Moon and the Sun,Seasons,Medium,MCQ,Seasons on Earth are caused by the tilt of Earth's axis and its:,Rotation,Gravity,Revolution,Distance,C,The orbit around the Sun combined with the axial tilt changes light intensity,,Curiosity Ch 12
SCI_C7_915,7,Science,Wastewater Story,Sanitation,Easy,MCQ,World Water Day is celebrated annually on:,22-Mar,05-Jun,22-Apr,01-Jan,A,This day is designated by the UN to raise awareness about the water crisis,,Curiosity Ch 13
SCI_C7_916,7,Science,Life Processes in Plants,Botany,Medium,MCQ,The flat green part of a leaf is called the:,Petiole,Lamina,Stomata,Vein,B,The lamina (leaf blade) provides the surface area for capturing sunlight,,Curiosity Ch 10
SCI_C7_917,7,Science,Electricity: Circuits and Components,Conductivity,Easy,MCQ,Materials that allow electricity to pass through them are called:,Insulators,Conductors,Opaque,Transparent,B,Metals are generally good conductors because of their free electrons,,Curiosity Ch 3
SCI_C7_918,7,Science,The World of Metals and Non-metals,Properties,Hard,MCQ,Metals produce a ringing sound when hit. This property is:,Malleability,Ductility,Sonority,Lustre,C,Sonority is why metals like copper or bronze are used to make bells,,Curiosity Ch 4
SCI_C7_919,7,Science,Adolescence,Health,Medium,MCQ,Adolescents need to eat iron-rich food to prevent:,Scurvy,Rickets,Anemia,Goitre,C,Iron is essential for blood formation; especially during rapid growth phases,,Curiosity Ch 6
SCI_C7_920,7,Science,Life Processes in Animals,Digestion,Medium,MCQ,The muscular organ that helps in mixing food with saliva is the:,Teeth,Tongue,Esophagus,Stomach,B,The tongue is a fleshy muscular organ used for tasting; swallowing; and mixing,,Curiosity Ch 9
SST_C7_921,7,SST,New Beginnings: Cities and States,History,Easy,MCQ,A territory where a clan settled and was led by a rājā was called a:,Empire,Janapada,Mahajanapada,State,B,Janapada literally means the land where the 'jana' or tribe sets its foot,,Exploring Society Ch 4
SST_C7_922,7,SST,Rise of Empires,Administration,Hard,MCQ,Kautilya's 'Arthashastra' primarily deals with:,Religious rituals,Statecraft and economy,Music,Medicine,B,Chanakya or Kautilya wrote this text as a manual for governing an empire,,Exploring Society Ch 5
SST_C7_923,7,SST,The Constitution of India,Governance,Medium,MCQ,Who was the chairman of the Drafting Committee of the Constitution?,Nehru,B.R. Ambedkar,Rajendra Prasad,Gandhi,B,Dr. Ambedkar is known as the architect of the Indian Constitution,,Exploring Society Ch 10
SST_C7_924,7,SST,Geographical Diversity of India,Geomorphology,Medium,MCQ,The Peninsular Plateau of India is surrounded by water on how many sides?,One,Two,Three,Four,C,A peninsula is a landmass projecting into water bodies on three of its sides,,Exploring Society Ch 1
SST_C7_925,7,SST,Understanding the Weather,Atmosphere,Easy,MCQ,Which instrument measures the amount of rainfall?,Barometer,Rain Gauge,Anemometer,Wind Vane,B,A rain gauge is a meteorological tool used to determine the depth of precipitation,,Exploring Society Ch 2
SST_C7_926,7,SST,Climates of India,Geography,Medium,MCQ,Mawsynram in Meghalaya is globally famous for:,Active volcanoes,Highest rainfall,Deepest caves,High peaks,B,It is recognized as the wettest inhabited place on Earth due to monsoon trapping,,Exploring Society Ch 3
SST_C7_927,7,SST,New Beginnings: Cities and States,Social Structure,Medium,MCQ,The traditional four-fold division of society in ancient India was called:,Varna system,Barter system,Jati system,Shreni system,A,The Varna system divided people into Brahmins; Kshatriyas; Vaishyas; and Shudras,,Exploring Society Ch 4
SST_C7_928,7,SST,The Age of Reorganisation,Dynasties,Hard,MCQ,The Satavahana kings primarily ruled in which region of India?,Himalayas,Deccan,Bengal,Thar Desert,B,The Satavahanas were a major power in the central and southern territories,,Exploring Society Ch 6
SST_C7_929,7,SST,From the Rulers to the Ruled,Civics,Easy,MCQ,The form of government where power is passed through a royal family is:,Democracy,Monarchy,Republic,Dictatorship,B,In a monarchy; the ruler's position is usually hereditary,,Exploring Society Ch 9
SST_C7_930,7,SST,The Constitution of India,Equality,Hard,MCQ,Which Article of the Constitution abolished 'Untouchability'?,Article 14,Article 15,Article 17,Article 21,C,Article 17 ensures social equality by prohibiting discriminatory caste practices,,Exploring Society Ch 10
SST_C7_931,7,SST,From Barter to Money,Economics,Medium,MCQ,One major disadvantage of the barter system was:,Fast trade,Lack of double coincidence of wants,Use of gold,Overproduction,B,Exchange was difficult because both parties had to want exactly what the other had,,Exploring Society Ch 11
SST_C7_932,7,SST,Understanding Markets,Economics,Easy,MCQ,Where are many shops located under one roof in an urban area?,Weekly market,Shopping mall,Neighborhood shop,Local fair,B,Malls are large enclosed retail spaces typical of urban development,,Exploring Society Ch 12
SST_C7_933,7,SST,Geographical Diversity of India,Plateaus,Easy,MCQ,An elevated landform with a flat top and steep sides is a:,Mountain,Plateau,Valley,Delta,B,A plateau is also known as a tableland because of its characteristic shape,,Exploring Society Ch 1
SST_C7_934,7,SST,Understanding the Weather,Meteorology,Medium,MCQ,The weight of the air pressing down on Earth's surface is called:,Wind speed,Air pressure,Gravity,Humidity,B,Air pressure changes are used by meteorologists to forecast weather,,Exploring Society Ch 2
SST_C7_935,7,SST,Rise of Empires,History,Medium,MCQ,Which powerful kingdom had its capital first at Rajagriha?,Kalinga,Magadha,Kosala,Avanti,B,Magadha rose to power because of its iron resources and fertile land,,Exploring Society Ch 4
SST_C7_936,7,SST,The Age of Reorganisation,Dynasties,Medium,MCQ,The Cholas; Cheras; and Pandyas were the 'Three Crowned Kings' of the:,North,South,West,East,B,These dynasties are celebrated in ancient Tamil Sangam literature,,Exploring Society Ch 6
SST_C7_937,7,SST,From the Rulers to the Ruled,Civics,Medium,MCQ,The right to vote for all citizens above 18 is known as:,Adult voting,Universal Adult Franchise,Public choice,Civil right,B,This is a fundamental pillar of Indian democracy ensuring equality,,Exploring Society Ch 10
SST_C7_938,7,SST,The Constitution of India,Principles,Medium,MCQ,The word 'Secular' in the Preamble means India:,Has no religion,Treats all religions equally,Opposes religion,Follows one book,B,Secularism in India means the state is neutral in matters of faith,,Exploring Society Ch 10
SST_C7_939,7,SST,From Barter to Money,Economics,Easy,MCQ,Which material was used for the first coins in India?,Gold,Silver,Iron,Plastic,B,Punch-marked silver coins were the earliest standardized currency in India,,Exploring Society Ch 11
SST_C7_940,7,SST,Understanding Markets,Trade,Hard,MCQ,A sequence of markets that connects the producer to the consumer is a:,Trade ring,Market chain,Shopping line,Retail circle,B,The market chain involves multiple intermediaries like wholesalers and retailers,,Exploring Society Ch 12
SST_C7_941,7,SST,Geographical Diversity of India,Hydrology,Medium,MCQ,The largest delta in the world formed in India is the:,Nile Delta,Sundarban Delta,Amazon Delta,Indus Delta,B,The Sundarbans are created by the Ganga and Brahmaputra rivers,,Exploring Society Ch 1
SST_C7_942,7,SST,Understanding the Weather,Atmosphere,Easy,MCQ,The thin layer of air that surrounds the Earth is the:,Hydrosphere,Lithosphere,Atmosphere,Biosphere,C,The atmosphere protects Earth from extreme temperatures and harmful rays,,Exploring Society Ch 2
SST_C7_943,7,SST,Rise of Empires,Inscriptions,Medium,MCQ,The messages of Emperor Ashoka were mostly written in which language?,Sanskrit,Prakrit,Hindi,Persian,B,Ashoka used Prakrit to ensure his messages reached the common people,,Exploring Society Ch 5
SST_C7_944,7,SST,The Age of Reorganisation,History,Hard,MCQ,Which dynasty built the Kailashanatha Temple at Ellora?,Chola,Rashtrakuta,Pallava,Gupta,B,The temple is a masterpiece of rock-cut architecture in Maharashtra,,Exploring Society Ch 6
SST_C7_945,7,SST,The Constitution of India,Governance,Easy,MCQ,The introductory document to the Indian Constitution is the:,Preface,Preamble,Index,Summary,B,The Preamble outlines the core values and objectives of the nation,,Exploring Society Ch 10
ENG_C7_946,7,English,Say the Right Thing,Vocabulary,Medium,MCQ,What is a 'Suffix'?,Added at the start,Added at the end,A synonym,An antonym,B,Suffixes like -ly or -ness are added to roots to change their word class,,Poorvi Unit 2
ENG_C7_947,7,English,A Funny Man,Imagery,Easy,MCQ,In the poem; the funny man offered a _____ instead of a rose.,Flower,Bun,Book,Hat,B,The humor stems from the man using a currant bun as a smelling flower,,Poorvi Unit 2
ENG_C7_948,7,English,Three Days to See,Theme,Hard,MCQ,On her first day of sight; Helen Keller wanted to see:,Museums,Faces of loved ones,The ocean,Movies,B,She emphasized the value of human connection and kindness,,Poorvi Unit 1
ENG_C7_949,7,English,Try Again,Moral,Easy,MCQ,What should you do after a failure according to the poem?,Give up,Try again,Cry,Run away,B,Perseverance is the central theme of this motivational poem,,Poorvi Unit 1
ENG_C7_950,7,English,The Day the River Spoke,Vocabulary,Medium,MCQ,In the story; the word 'mimicking' means:,Singing,Copying or imitating,Hiding,Flying,B,Jahnavi would often imitate the sounds she heard near the river,,Poorvi Unit 1
ENG_C7_951,7,English,Rani Abbakka,History,Medium,MCQ,Rani Abbakka was the courageous queen of:,Goa,Ullal,Mangalore,Kochi,B,She is celebrated for her resistance against Portuguese naval power,,Poorvi Unit 5
ENG_C7_952,7,English,My Dear Soldiers,Imagery,Medium,MCQ,The poet compares soldiers to 'yogis' to emphasize their:,Magic,Discipline and focus,Silence,Dress,B,Patrolling lonely borders requires intense mental and physical endurance,,Poorvi Unit 5
ENG_C7_953,7,English,The Tunnel,Plot,Hard,MCQ,What sound convinced Sunder Singh that a leopard was in the tunnel?,A roar,A rhythmic sawing sound,Footsteps,A whistle,B,The text describes the leopard's breathing as a sawing sound,,Poorvi Unit 4
ENG_C7_955,7,English,An Alien Hand,Setting,Medium,MCQ,Tilloo lived with his parents on which planet?,Earth,Mars,Venus,Jupiter,B,The story is set in an underground colony on the planet Mars,,An Alien Hand Unit 10
ENG_C7_956,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Golu asked his aunt the Ostrich: 'Why don't you ever _____?',Eat grass,Fly like other birds,Sing,Drink water,B,Golu's curiosity about animal differences drives the narrative,,An Alien Hand Unit 3
ENG_C7_957,7,English,Three Questions,Theme,Medium,MCQ,The king believed that three answers would ensure he:,Became rich,Never failed,Won every war,Found a treasure,B,The king sought perfect wisdom to be an ideal ruler,,Honeycomb Unit 1
ENG_C7_958,7,English,A Gift of Chappals,Plot,Easy,MCQ,To whom did the children give the chappals?,The master,The beggar,Ravi,Lalli,B,The children felt pity for the beggar's blistered feet,,Honeycomb Unit 2
ENG_C7_959,7,English,Rani Abbakka,Civics,Medium,MCQ,What does the word 'sovereign' mean in the chapter?,Rich,Independent and free,Large,Mean,B,Abbakka declared Ullal was free and would not pay tribute to foreign powers,,Poorvi Unit 5
ENG_C7_960,7,English,The Rebel,Poetry,Easy,MCQ,When everyone has short hair; the rebel lets his hair grow:,Short,Long,Curly,Blue,B,The poem describes a character who always does the opposite of others,,Honeycomb Poem 2
ENG_C7_961,7,English,Three Days to See,Literary Device,Hard,MCQ,Helen Keller described the beauty of the world through her sense of:,Sight,Touch,Sound,Smell,B,She felt the 'vibrations' and 'textures' of nature through her fingers,,Poorvi Unit 1
ENG_C7_962,7,English,Say the Right Thing,Ethics,Medium,MCQ,Effective communication involves being:,Loud,Fast,Honest and polite,Very quiet,C,The chapter teaches the importance of choosing kind and truthful words,,Poorvi Unit 2
ENG_C7_963,7,English,The Day the River Spoke,Character,Medium,MCQ,Who was Jahnavi's confidant in the story?,Her teacher,The River,Her brother,A neighbor,B,She shared her innermost dreams about school with the river,,Poorvi Unit 1
ENG_C7_964,7,English,Bringing Up Kari,Character,Medium,MCQ,Kari the elephant was compared most to a:,Trained soldier,Human baby,Wild beast,Helpful giant,B,Kari's playful and naughty behavior was very similar to a toddler's,,An Alien Hand Unit 2
ENG_C7_965,7,English,An Alien Hand,Plot,Hard,MCQ,How did Tilloo enter the forbidden passage?,Found a key,Used father security card,Broke the lock,A hole,B,Tilloo took the card while his father was sleeping to explore the passage,,An Alien Hand Unit 10
ENG_C7_966,7,English,A Funny Man,Wit,Easy,MCQ,How did the funny man go home at the end of the poem?,By running,By hopping on his head,On a bicycle,Walking,B,The absurd imagery adds to the humor of the poem,,Poorvi Unit 2
ENG_C7_967,7,English,Try Again,Inspiration,Easy,MCQ,If you do not win at first; the poem says you should:,Give up,Try again,Feel ashamed,Sleep,B,Persistence is shown as the path to eventual victory,,Poorvi Unit 1
ENG_C7_968,7,English,Three Questions,Ethics,Medium,MCQ,The hermit says the most important time is:,Tomorrow,Now,Yesterday,Future,B,Only the present moment is within our power to act,,Honeycomb Unit 1
ENG_C7_969,7,English,The Tiny Teacher,Life Cycle,Medium,MCQ,What are the young ones of ants called?,Cubs,Grubs,Larva,Puppies,B,Grubs are the larvae that eventually become cocoons and then ants,,An Alien Hand Unit 1
ENG_C7_970,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,The word 'dauntless' used for Abbakka means:,Afraid,Brave and fearless,Very old,Weak,B,It describes the queen's courage in the face of Portuguese threats,,Poorvi Unit 5
MATH_C7_971,7,Math,Comparing Quantities,Ratios,Medium,MCQ,Find the ratio of 15 kg to 210 g.,500:7,7:500,15:210,50:7,A,Convert kg to g ($15000 g$); then simplify the ratio $15000:210$ to $500:7$,,NCERT Ch 7
MATH_C7_972,7,Math,Comparing Quantities,Interest,Hard,MCQ,Find the Simple Interest on ₹5000 for 2 years at 10% per annum.,₹500,"₹1,000",₹200,₹100,B,Using $I = (P \\times R \\times T) / 100$: $(5000 \\times 10 \\times 2) / 100 = 1000$,,NCERT Ch 7
MATH_C7_973,7,Math,Rational Numbers,Standard Form,Medium,MCQ,What is the standard form of the rational number -18/45?,-2/5,-3/5,2/5,-6/15,A,Divide both numerator and denominator by their HCF (9) to get -2/5,,NCERT Ch 8
MATH_C7_974,7,Math,Rational Numbers,Operations,Medium,MCQ,Find the sum of -5/9 and 2/9.,-7/9,-3/9,3/9,-1/3,D,The sum is -3/9 which simplifies to -1/3,,NCERT Ch 8
MATH_C7_975,7,Math,Perimeter and Area,Circle,Hard,MCQ,The area of a circle with diameter 14 cm is:,44 sq cm,154 sq cm,616 sq cm,88 sq cm,B,Radius is 7 cm; Area = $\\pi r^2 = 22/7 \\times 7 \\times 7 = 154$ sq cm,,NCERT Ch 9
MATH_C7_976,7,Math,Algebraic Expressions,Simplification,Medium,MCQ,Simplify the expression: $12m^2 - 9m + 5m - 4m^2$,$8m^2 - 4m$,$16m^2 - 14m$,$8m^2 + 4m$,$4m^2 - 8m$,A,Combine like terms: $(12-4)m^2 + (-9+5)m = 8m^2 - 4m$,,NCERT Ch 10
MATH_C7_977,7,Math,Exponents and Powers,Laws,Hard,MCQ,The value of $2^3 \\times 3^2$ is:,36,72,48,12,B,Calculation: $8 \\times 9 = 72$,,NCERT Ch 11
MATH_C7_978,7,Math,Symmetry,Rotational,Medium,MCQ,What is the order of rotational symmetry for a square?,1,2,3,4,D,A square looks the same after every 90 degree turn; appearing 4 times in a full circle,,NCERT Ch 12
MATH_C7_979,7,Math,Visualising Solid Shapes,Nets,Easy,MCQ,A net that can be folded to form a cylinder consists of:,Two circles and one rectangle,Three circles,One circle and two squares,Six squares,A,The curved surface of a cylinder opens into a rectangle while the ends are circles,,NCERT Ch 13
MATH_C7_980,7,Math,Operations with Integers,Signs,Medium,MCQ,What is the value of $(-1) \\times (-1) \\times (-1) \\times (-1) \\times (-1)$?,1,-1,0,5,B,An odd number of negative factors results in a negative product,,NCERT Ch 1
MATH_C7_981,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Convert the fraction 7/8 into a decimal.,0.875,0.78,0.125,0.7,A,Dividing 7 by 8 results in 0.875,,Ganita Prakash Ch 3
MATH_C7_982,7,Math,Finding the Unknown,Equations,Medium,MCQ,If $x/5 + 3 = 7$ find the value of $x$.,20,2,50,10,A,Subtract 3 ($x/5 = 4$) then multiply by 5 ($x = 20$),,Ganita Prakash II Ch 7
MATH_C7_983,7,Math,Geometric Twins,Triangles,Medium,MCQ,An isosceles triangle has two angles of 70 degrees each. Find the third angle.,70,40,110,90,B,Sum is 180; so $180 - (70+70) = 40$ degrees,,Ganita Prakash II Ch 1
MATH_C7_984,7,Math,Connecting the Dots,Arithmetic Mean,Easy,MCQ,The mean of 8; 12; 10; and 10 is:,8,10,12,40,B,Total sum is 40 and dividing by 4 gives 10,,Ganita Prakash Ch 13
MATH_C7_985,7,Math,Number Play,Divisibility,Hard,MCQ,A number is divisible by 3 if the sum of its digits is divisible by:,2,3,9,5,B,The rule for 3 requires the sum of digits to be a multiple of 3,,Ganita Prakash Ch 6
SCI_C7_971,7,Science,Respiration in Organisms,Physiology,Medium,MCQ,Which of the following occurs during exhalation?,Ribs move up,Diaphragm moves down,Ribs move down and inwards,Lungs expand,C,Exhalation involves the contraction of the chest cavity to push air out,,NCERT Ch 6
SCI_C7_972,7,Science,Respiration in Organisms,Cellular,Easy,MCQ,The process of breakdown of food in the cell with the use of oxygen is:,Anaerobic respiration,Aerobic respiration,Fermentation,Digestion,B,Aerobic respiration uses oxygen to release energy from glucose,,NCERT Ch 6
SCI_C7_973,7,Science,Respiration in Organisms,Biology,Medium,MCQ,In cockroaches; air enters the body through tiny openings called:,Gills,Spiracles,Lungs,Stomata,B,Spiracles are the external openings of the tracheal system in insects,,NCERT Ch 6
SCI_C7_974,7,Science,Transportation in Animals,Biology,Medium,MCQ,The fluid part of the blood is called:,RBC,WBC,Platelets,Plasma,D,Plasma is the straw-colored liquid that carries blood cells and nutrients,,NCERT Ch 7
SCI_C7_975,7,Science,Transportation in Animals,Anatomy,Hard,MCQ,The rhythmic contraction and expansion of the heart is known as:,Pulse,Heartbeat,Blood pressure,Circulation,B,A heartbeat consists of one complete contraction and relaxation of the heart chambers,,NCERT Ch 7
SCI_C7_976,7,Science,Reproduction in Plants,Botany,Easy,MCQ,The male reproductive part of a flower is the:,Pistil,Stamen,Petal,Sepal,B,The stamen consists of the anther and filament which produce pollen,,NCERT Ch 8
SCI_C7_977,7,Science,Reproduction in Plants,Botany,Medium,MCQ,Seed dispersal in 'Xanthium' occurs through:,Wind,Water,Animals,Explosion,C,Xanthium seeds have hooks that attach to the fur of passing animals,,NCERT Ch 8
SCI_C7_978,7,Science,Measurement of Time and Motion,Physics,Medium,MCQ,If the distance-time graph is a curved line; the motion is:,Uniform,Non-uniform,Stationary,Circular,B,Non-uniform motion shows a varying speed over time resulting in a curve,,Curiosity Ch 8
SCI_C7_979,7,Science,Electric Current,Safety,Easy,MCQ,An MCB stands for:,Mini Circuit Board,Miniature Circuit Breaker,Main Current Box,Motor Control Base,B,An MCB automatically switches off the circuit when the current exceeds the safety limit,,NCERT Ch 10
SCI_C7_980,7,Science,Light,Optics,Medium,MCQ,A spherical mirror with a reflecting surface curved inwards is a:,Convex mirror,Concave mirror,Plane mirror,Lens,B,Concave mirrors converge light and can form real images,,Curiosity Ch 11
SCI_C7_981,7,Science,Exploring Substances,Indicators,Medium,MCQ,Phenolphthalein turns which color in a basic solution?,Colorless,Pink,Yellow,Blue,B,Phenolphthalein is a synthetic indicator used for titration and pH testing,,Curiosity Ch 2
SCI_C7_982,7,Science,Changes Around Us,Chemical,Easy,MCQ,Which of the following is a sign of a chemical change?,Formation of a gas,Change in state,Slicing fruit,Mixing sand and water,A,Gas production indicates a new substance is being formed chemically,,Curiosity Ch 5
SCI_C7_983,7,Science,Heat Transfer in Nature,Physics,Hard,MCQ,The transfer of heat in a vacuum can only occur through:,Conduction,Convection,Radiation,Insulation,C,Radiation uses electromagnetic waves and does not require matter,,Curiosity Ch 7
SCI_C7_984,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Which part of the plant is responsible for transpiration?,Roots,Stems,Leaves,Flowers,C,Water vapor is lost through the stomata on the surface of leaves,,Curiosity Ch 10
SCI_C7_985,7,Science,Adolescence,Growth,Easy,MCQ,The sudden increase in height during puberty is caused by the growth of:,Fingers,Long bones of arms and legs,Hair,Teeth,B,Bone elongation is a primary physical change during the adolescent growth spurt,,Curiosity Ch 6
SST_C7_971,7,SST,Inside Our Earth,Geology,Easy,MCQ,The thinnest layer of the Earth is the:,Mantle,Core,Crust,Lithosphere,C,The crust ranges from only 5 km to 35 km in thickness,,NCERT Ch 2
SST_C7_972,7,SST,Inside Our Earth,Composition,Medium,MCQ,The oceanic crust mainly consists of silica and:,Alumina,Magnesium,Iron,Nickel,B,The oceanic crust is often called 'Sima' (Silica and Magnesium),,NCERT Ch 2
SST_C7_973,7,SST,Inside Our Earth,Rocks,Medium,MCQ,Rocks formed by the cooling of molten magma are:,Sedimentary,Metamorphic,Igneous,Fossil rocks,C,Igneous rocks (primary rocks) are the first to form from magma,,NCERT Ch 2
SST_C7_974,7,SST,Air,Atmosphere,Hard,MCQ,Which gas in the atmosphere protects us from harmful UV rays?,Carbon dioxide,Nitrogen,Ozone,Argon,C,Ozone ($O_3$) is located in the stratosphere and filters ultraviolet radiation,,NCERT Ch 4
SST_C7_975,7,SST,Air,Weather,Medium,MCQ,Which of the following is an element of weather?,Population,Humidity,Literacy rate,Road width,B,Humidity; temperature; and pressure are the physical variables of weather,,NCERT Ch 4
SST_C7_976,7,SST,On Equality,Civics,Easy,MCQ,The Indian Constitution recognizes every person as:,Superior,Inferior,Equal,Different,C,Equality before the law is a fundamental right in India,,NCERT Ch 1
SST_C7_977,7,SST,How the State Government Works,Civics,Medium,MCQ,A political party whose MLAs have won more than half the number of constituencies is in a:,Minority,Majority,Coalition,Opposition,B,The majority party has the right to form the government,,NCERT Ch 3
SST_C7_978,7,SST,Markets Around Us,Economics,Easy,MCQ,A market where goods are sold on a specific day of the week is a:,Shopping mall,Neighborhood shop,Weekly market,Wholesale market,C,Weekly markets do not have permanent buildings and offer lower prices,,NCERT Ch 7
SST_C7_979,7,SST,Rise of Empires,History,Medium,MCQ,The first empire to unify a large part of India was the:,Gupta,Mughal,Mauryan,Chola,C,Chandragupta Maurya founded the empire around 321 BCE,,Exploring Society Ch 5
SST_C7_980,7,SST,Geographical Diversity of India,Plateaus,Medium,MCQ,The Deccan Plateau is located in which part of India?,North,South,East,West,B,The Deccan is a large volcanic plateau covering much of southern India,,Exploring Society Ch 1
SST_C7_981,7,SST,Understanding the Weather,Instruments,Medium,MCQ,An Anemometer is used to measure:,Rainfall,Wind speed,Air pressure,Temperature,B,Meteorologists use anemometers to track the velocity of wind,,Exploring Society Ch 2
SST_C7_982,7,SST,The Age of Reorganisation,History,Hard,MCQ,Which dynasty took over the Magadha region after the Mauryas?,Guptas,Shungas,Kushanas,Satavahanas,B,The Shungas established their rule in the north after the Mauryan decline,,Exploring Society Ch 6
SST_C7_983,7,SST,The Constitution of India,Governance,Medium,MCQ,Who is known as the 'Father of the Indian Constitution'?,Gandhi,Nehru,Dr. B.R. Ambedkar,Sardar Patel,C,He led the Drafting Committee and finalized the constitutional framework,,Exploring Society Ch 10
SST_C7_984,7,SST,From Barter to Money,Economics,Medium,MCQ,Which metal was used to make the earliest punch-marked coins in India?,Gold,Silver,Copper,Bronze,B,Silver was the primary material for the first standardized metallic currency,,Exploring Society Ch 11
SST_C7_985,7,SST,The Story of Indian Farming,History,Hard,MCQ,Surapala's Vrikshayurveda deals with the science of:,War,Plants and horticulture,Stars,Animals,B,This ancient text provides methods for healthy plant growth and seed care,,Exploring Society Ch 1
ENG_C7_971,7,English,Gopal and the Hilsa Fish,Comprehension,Medium,MCQ,Why was the King tired of hearing about the Hilsa fish?,He did not like fish,Everyone in the kingdom was only talking about it,It was too expensive,He was allergic to it,B,The season of Hilsa fish dominated every conversation; frustrating the King,,NCERT Ch 3
ENG_C7_972,7,English,Gopal and the Hilsa Fish,Plot,Easy,MCQ,What challenge did the King give to Gopal?,To catch the biggest fish,To buy a Hilsa and bring it to the palace without anyone asking about it,To cook a fish,To write a poem,B,Gopal had to use his wit to distract people from the fish he carried,,NCERT Ch 3
ENG_C7_973,7,English,The Shed (Poem),Inference,Medium,MCQ,What does the speaker's brother say is hidden under the floorboards in the shed?,A treasure,A ghost,A dragon,A spy,B,The brother tells scary stories to keep the speaker away from the shed,,NCERT Poem 3
ENG_C7_974,7,English,The Desert,Comprehension,Easy,MCQ,A desert is generally described as a place that is:,Full of water,Dry,hot,and without shelter,B,Deserts are arid regions with minimal rainfall and vegetation,,An Alien Hand Ch 3
ENG_C7_975,7,English,The Desert,Biology in Lit,Medium,MCQ,How does a camel adapt to the desert heat?,It drinks water every hour,It sweats very little and can withstand high body temperatures,It grows thick fur,It hides in caves all day,B,Camels are designed to retain moisture for long periods in harsh climates,,An Alien Hand Ch 3
ENG_C7_976,7,English,The Day the River Spoke,Vocabulary,Medium,MCQ,In the story; what does the word 'verge' mean in the phrase 'on the verge of'?,Very far,At the edge or point where something happens,Inside a room,Behind a mountain,B,Jahnavi was very close to making her decision about school,,Poorvi Unit 1
ENG_C7_977,7,English,Try Again,Poetry,Easy,MCQ,What is the main moral of the poem 'Try Again'?,Give up after one failure,Persistence leads to success,Luck is everything,Do not take risks,B,The poem encourages students to keep attempting their tasks,,Poorvi Unit 1
ENG_C7_978,7,English,A Funny Man,Wit,Easy,MCQ,In the poem; where did the funny man wear his shoe?,On his foot,On his hand,On his head,On his shoulder,C,The absurdity of his dressing is the source of humor in the poem,,Poorvi Unit 2
ENG_C7_979,7,English,Rani Abbakka,Character,Medium,MCQ,Rani Abbakka ruled the coastal kingdom of:,Goa,Ullal,Mangalore,Kochi,B,She is a historic warrior queen from coastal Karnataka,,Poorvi Unit 5
ENG_C7_980,7,English,The Tiny Teacher,Communication,Easy,MCQ,How do ants recognize members of their own colony?,By sight,By touching their feelers,By the sound they make,By their color,B,Ants use their antennae for chemical and tactile identification,,An Alien Hand Unit 1
ENG_C7_981,7,English,An Alien Hand,Sci-Fi,Hard,MCQ,The Viking spacecraft sent to Mars was intended to search for:,Gold,Signs of life,Water,Aliens with weapons,B,The scientific mission focused on biological analysis of Martian soil,,An Alien Hand Unit 10
ENG_C7_982,7,English,Three Questions,Ethics,Medium,MCQ,According to the hermit; the most important time is:,Tomorrow,Now,Yesterday,Future,B,Only the present moment is within our control to act,,Honeycomb Unit 1
ENG_C7_983,7,English,My Dear Soldiers,Theme,Medium,MCQ,The poem 'My Dear Soldiers' is written by which Indian personality?,Sarojini Naidu,A.P.J. Abdul Kalam,Rabindranath Tagore,Mahatma Gandhi,B,The former President wrote this as a tribute to the armed forces,,Poorvi Unit 5
ENG_C7_984,7,English,Say the Right Thing,Vocabulary,Medium,MCQ,A 'Prefix' is a word part added to the _____ of a base word.,Beginning,End,Middle,Top,A,Prefixes change the meaning of a word when added to the front,,Poorvi Unit 2
ENG_C7_985,7,English,The Tunnel,Plot,Hard,MCQ,What rhythmic sound signaled the presence of a leopard to Sunder Singh?,Footsteps,Sawing sound,Growling,Hissing,B,The leopard's breathing is described as a characteristic sawing noise,,Poorvi Unit 4
MATH_C7_986,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Find the value of $0.07 \\times 100$.,0.7,7,70,0.007,B,Multiplying by 100 shifts the decimal two places to the right,,Ganita Prakash Ch 3
MATH_C7_987,7,Math,Operations with Integers,Arithmetic,Easy,MCQ,Evaluate: $10 - (-5) + 3$.,8,12,18,2,C,Calculation: $10 + 5 + 3 = 18$,,NCERT Ch 1
MATH_C7_988,7,Math,Working with Fractions,Logic,Medium,MCQ,Reciprocal of a proper fraction is always a/an _____ fraction.,Proper,Improper,Unit,Mixed,B,Inverting a value less than 1 results in a value greater than 1,,Ganita Prakash Ch 8
MATH_C7_989,7,Math,Geometric Twins,Polygons,Easy,MCQ,A triangle with three sides of 5 cm each is:,Scalene,Isosceles,Equilateral,Right-angled,C,All sides are equal in length,,Ganita Prakash II Ch 1
MATH_C7_990,7,Math,Connecting the Dots,Median,Medium,MCQ,Find the median of: 2; 5; 8; 10; 1.,8,2,5,1,C,Sorted: 1; 2; 5; 8; 10. Middle is 5,,Ganita Prakash Ch 13
MATH_C7_991,7,Math,Finding the Unknown,Equations,Medium,MCQ,What is the value of $m$ if $3m = -15$?,5,-5,45,-45,B,Divide by 3 to get -5,,Ganita Prakash II Ch 7
MATH_C7_992,7,Math,Expressions using Letter-Numbers,Terms,Medium,MCQ,What is the constant in $4k - 7$?,4k,4,7,-7,D,The constant term includes its preceding sign,,Ganita Prakash Ch 4
MATH_C7_993,7,Math,Connecting the Dots,Arithmetic Mean,Medium,MCQ,The mean of the first three odd numbers is:,3,1,5,9,A,Average of 1; 3; 5 is $(1+3+5)/3 = 3$,,Ganita Prakash Ch 13
MATH_C7_994,7,Math,Number Play,Computational Thinking,Hard,MCQ,What is the sum of $1+3+5+...+19$?,100,190,81,200,A,The sum of the first $n$ odd numbers is $n^2$; here $n=10$,,Ganita Prakash Ch 6
MATH_C7_995,7,Math,A Peek Beyond the Point,Conversions,Easy,MCQ,How many mL are in 0.5 Litres?,50,500,5000,5,B,Multiply by 1000 to get 500,,Ganita Prakash Ch 3
SCI_C7_986,7,Science,Earth Moon and the Sun,Astronomy,Easy,MCQ,The time taken for Earth to complete one revolution around the Sun is:,24 hours,1 month,365.25 days,12 hours,C,Revolution defines the length of one year,,Curiosity Ch 12
SCI_C7_987,7,Science,Electricity: Circuits and Components,Circuit,Easy,MCQ,A device used to close or open an electric circuit is:,Bulb,Switch,Wire,Cell,B,The switch controls the flow of current,,Curiosity Ch 3
SCI_C7_988,7,Science,Exploring Substances,Indicators,Medium,MCQ,Turmeric turns red in base solution like:,Vinegar,Lemon juice,Soap solution,Distilled water,C,Soap is alkaline and reacts with turmeric,,Curiosity Ch 2
SCI_C7_989,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Radiation is the transfer of heat by:,Contact,Waves,Fluid flow,Touching,B,Thermal energy travels as electromagnetic waves,,Curiosity Ch 7
SCI_C7_990,7,Science,Changes Around Us,Chemical,Medium,MCQ,Rusting of iron requires oxygen and:,Nitrogen,Heat,Water vapor,Light,C,Oxidation of iron needs both air and moisture,,Curiosity Ch 5
SCI_C7_991,7,Science,Life Processes in Animals,Digestion,Medium,MCQ,The largest gland in the human body is the:,Pancreas,Liver,Salivary gland,Thyroid,B,The liver performs multiple metabolic and digestive functions,,Curiosity Ch 9
SCI_C7_992,7,Science,Life Processes in Plants,Botany,Easy,MCQ,Chlorophyll is found in which cell organelle?,Nucleus,Mitochondria,Chloroplast,Vacuole,C,Chloroplasts are the site of photosynthesis in plant cells,,Curiosity Ch 10
SCI_C7_993,7,Science,Light,Optics,Hard,MCQ,The image formed by a plane mirror is always:,Real and inverted,Virtual and upright,Real and upright,Inverted and virtual,B,Mirrors reflect light to create non-projectable upright images,,Curiosity Ch 11
SCI_C7_994,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,Speed is calculated as:,Distance / Time,Distance $\\times$ Time,Time / Distance,Acceleration $\\times$ Time,A,Fundamental formula for average speed,,Curiosity Ch 8
SCI_C7_995,7,Science,Wastewater Story,Sanitation,Medium,MCQ,Wastewater treatment byproduct used as fuel is:,Scum,Biogas,Silt,Oxygen,B,Decomposition of sludge releases methane-rich biogas,,Curiosity Ch 13
SST_C7_986,7,SST,Climates of India,Geography,Medium,MCQ,The word 'Monsoon' is derived from 'Mausim' which means:,Rain,Season,Wind,Cloud,B,Arabic word describing seasonal wind reversal,,Exploring Society Ch 3
SST_C7_987,7,SST,Exploring Society,Civics,Easy,MCQ,The age for voting in India is:,21,18,25,16,B,Universal Adult Franchise threshold,,Exploring Society Ch 10
SST_C7_988,7,SST,New Beginnings: Cities and States,History,Medium,MCQ,Sixteen powerful kingdoms in ancient India were called:,Mahajanapadas,Janapadas,Ganas,Shrenis,A,Major political units around 600 BCE,,Exploring Society Ch 4
SST_C7_989,7,SST,Understanding Markets,Economics,Medium,MCQ,Wholesalers sell goods in bulk to:,Consumers,Retailers,Farmers,Factories,B,Bulk distributors in the market chain,,Exploring Society Ch 12
SST_C7_990,7,SST,From Barter to Money,History,Easy,MCQ,Trade without using money is:,Digital pay,Barter system,Credit,Loan,B,Direct exchange of goods,,Exploring Society Ch 11
SST_C7_991,7,SST,Constitution of India,Rights,Hard,MCQ,Article 17 of the Constitution abolished:,Slavery,Untouchability,Taxes,Monarchy,B,Social reform to ensure equality,,Exploring Society Ch 10
SST_C7_992,7,SST,Understanding the Weather,Atmosphere,Easy,MCQ,Weather events occur mostly in the:,Troposphere,Stratosphere,Mesosphere,Exosphere,A,Lowest layer with air and moisture,,Exploring Society Ch 2
SST_C7_993,7,SST,The Rise of Empires,Strategy,Medium,MCQ,Kautilya wrote a famous book on statecraft called:,Vedas,Arthashastra,Puranas,Jatakas,B,Foundational political text for Mauryas,,Exploring Society Ch 5
SST_C7_994,7,SST,Geographical Diversity of India,Plateaus,Easy,MCQ,The Deccan Plateau is a landform with a:,Sharp peak,Flat top,Deep valley,Snowy surface,B,Characteristic of a plateau or tableland,,Exploring Society Ch 1
SST_C7_995,7,SST,Exploring Society,Civics,Easy,MCQ,MLA stands for Member of:,Local Authority,Legislative Assembly,Legal Association,Local Army,B,Elected state government representative,,Exploring Society Ch 12
ENG_C7_986,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,The word 'dauntless' means:,Fearful,Fearless,Angry,Old,B,Characterizes her bravery in battle,,Poorvi Unit 5
ENG_C7_987,7,English,Three Questions,Theme,Medium,MCQ,The hermit says the most important person is:,King,The person you are with,The enemy,The family,B,Lesson on the present relationship,,Honeycomb Unit 1
ENG_C7_988,7,English,Try Again,Moral,Easy,MCQ,Perseverance in the face of failure leads to:,Sadness,Success,Luck,Boredom,B,Main message of the motivational poem,,Poorvi Unit 1
ENG_C7_991,7,English,My Dear Soldiers,Imagery,Medium,MCQ,Soldiers are compared to 'yogis' because of their:,Magic,Discipline and endurance,Clothing,Religion,B,Endurance in lonely border terrains,,Poorvi Unit 5
ENG_C7_992,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Who helped Golu pull his nose from the crocodile?,Python,Elephant,Ostrich,Giraffe,A,Helper in the river struggle,,An Alien Hand Unit 3
ENG_C7_993,7,English,A Gift of Chappals,Plot,Easy,MCQ,The children gave chappals to the:,Teacher,Beggar,Ravi,Friend,B,Act of pity for burned feet,,Honeycomb Unit 2
ENG_C7_994,7,English,The Day the River Spoke,Character,Medium,MCQ,Jahnavi's confidant was the:,Father,River,Teacher,Brother,B,Shared dreams with the water,,Poorvi Unit 1
ENG_C7_995,7,English,Three Days to See,Theme,Hard,MCQ,Helen Keller values which sense most in her text?,Taste,Sight,Smell,Hearing,B,Beauty of vision often ignored,,Poorvi Unit 1
MATH_C7_996,7,Math,Finding the Unknown,Equations,Medium,MCQ,If $x + 10 = 25$ find $x$.,15,35,10,5,A,Basic algebraic subtraction,,Ganita Prakash Ch 15
MATH_C7_997,7,Math,Connecting the Dots,Arithmetic Mean,Medium,MCQ,Average of first five natural numbers is:,2,3,4,5,B,Sum 15 / 5 = 3,,Ganita Prakash Ch 13
MATH_C7_998,7,Math,Rational Numbers,Standard Form,Medium,MCQ,Standard form of 10/25 is:,2/5,1/2,4/10,5/10,A,Divided by HCF 5,,NCERT Ch 8
MATH_C7_999,7,Math,Working with Fractions,Reciprocals,Medium,MCQ,Reciprocal of 2/3 is:,3/2,2/3,1/3,1/2,A,Invert numerator and denominator,,Ganita Prakash Ch 8
MATH_C7_1000,7,Math,Geometric Twins,Polygons,Easy,MCQ,Triangle with all sides equal is:,Isosceles,Equilateral,Scalene,Right,B,Regular triangle definition,,Ganita Prakash II Ch 1
SCI_C7_996,7,Science,Changes Around Us,Chemical,Easy,MCQ,Burning wood is which change?,Physical,Chemical,Temporary,Reversible,B,New substances like ash formed,,Curiosity Ch 5
SCI_C7_997,7,Science,Exploring Substances,Indicators,Medium,MCQ,China rose turns basic solutions to:,Pink,Green,Blue,Yellow,B,Indicator color change rule,,Curiosity Ch 2
SCI_C7_998,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Heat transfer in solids is:,Conduction,Convection,Radiation,Evaporation,A,Direct contact energy flow,,Curiosity Ch 7
SCI_C7_999,7,Science,Wastewater Story,Treatment,Easy,MCQ,WWTP stands for:,Water Works Tool Part,Wastewater Treatment Plant,World Water Task Plan,Waste Water Tool Part,B,Standard sanitation term,,Curiosity Ch 13
SCI_C7_1000,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Gas released by plants during photosynthesis:,Carbon dioxide,Oxygen,Nitrogen,Hydrogen,B,Byproduct of food synthesis,,Curiosity Ch 10
SST_C7_996,7,SST,From Barter to Money,Economics,Easy,MCQ,Barter system means exchanging:,Money,Goods for goods,Gold,Paper,B,Primary mode of ancient trade,,Exploring Society Ch 11
SST_C7_997,7,SST,Understanding Markets,Economics,Easy,MCQ,Retailers buy bulk from which market?,Consumer,Wholesale,Weekly,Rural,B,Bulk sale intermediary role,,Exploring Society Ch 12
SST_C7_998,7,SST,The Rise of Empires,History,Medium,MCQ,Chanakya was the advisor to:,Ashoka,Chandragupta Maurya,Akbar,Shivaji,B,Key Mauryan strategist,,Exploring Society Ch 5
SST_C7_999,7,SST,Constitution of India,Governance,Medium,MCQ,Architect of the Indian Constitution was:,Nehru,B.R. Ambedkar,Gandhi,Prasad,B,Finalized the draft text,,Exploring Society Ch 10
SST_C7_1000,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Force holding air to Earth is:,Magnetic,Gravity,Centrifugal,Friction,B,Earth's pull on the atmosphere,,Exploring Society Ch 2
ENG_C7_996,7,English,Rani Abbakka,History,Medium,MCQ,Abbakka was queen of coastal kingdom:,Goa,Ullal,Mangalore,Kochi,B,Famous warrior queen of Ullal,,Poorvi Unit 5
ENG_C7_997,7,English,Try Again,Poetry,Easy,MCQ,Perseverance after failure leads to:,Luck,Success,Money,Fear,B,Core moral lesson,,Poorvi Unit 1
ENG_C7_998,7,English,Three Questions,Theme,Medium,MCQ,hermits says most important person is:,King,Person you are with,Wise man,Soldier,B,Ethics of present relationship,,Honeycomb Unit 1
ENG_C7_999,7,English,The Tiny Teacher,Behavior,Easy,MCQ,Ants signaling by touching:,Legs,Feelers,Eyes,Wings,B,Means of communication,,An Alien Hand Unit 1
ENG_C7_1000,7,English,An Alien Hand,Setting,Medium,MCQ,Tilloo lived underground on planet:,Earth,Mars,Venus,Moon,B,Martian colony sci-fi setting,,An Alien Hand Unit 10
MATH_C7_1001,7,Math,Comparing Quantities,Profit Loss,Hard,MCQ,A book bought for ₹450 and sold for ₹500. Profit is:,₹50,₹450,₹500,₹50 profit percentage,A,Calculation: $SP - CP = 500 - 450 = 50$,,NCERT Ch 7
MATH_C7_1002,7,Math,Rational Numbers,Operations,Hard,MCQ,What rational number lies exactly between 2/5 and 3/5?,1/2,5/10,Both a and b,4/5,C,The midpoint is 1/2 which is also 5/10,,NCERT Ch 8
MATH_C7_1003,7,Math,Perimeter and Area,Rectangle,Medium,MCQ,Perimeter of rectangle with length 20 cm and breadth 10 cm:,30 cm,60 cm,200 sq cm,10 cm,B,Calculation: $2 \\times (20 + 10) = 60$,,NCERT Ch 9
MATH_C7_1004,7,Math,Algebraic Expressions,Binomials,Easy,MCQ,Which of the following is a binomial?,$3x$,$x + y$,$3x^2$,7,B,A binomial contains exactly two unlike terms,,NCERT Ch 10
MATH_C7_1005,7,Math,Exponents and Powers,Laws,Medium,MCQ,Value of $2^5$ is:,10,32,25,16,B,Calculation: $2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$,,NCERT Ch 11
SCI_C7_1001,7,Science,Respiration in Organisms,Anaerobic,Medium,MCQ,During heavy exercise; cramps occur due to accumulation of:,Alcohol,Lactic acid,Carbon dioxide,Water,B,Produced by anaerobic respiration in muscles,,NCERT Ch 6
SCI_C7_1002,7,Science,Transportation in Plants,Xylem,Easy,MCQ,Tissue that conducts water from roots to leaves is:,Phloem,Xylem,Stomata,Bark,B,Xylem vessels carry water and minerals,,NCERT Ch 7
SCI_C7_1003,7,Science,Transportation in Animals,Heart,Medium,MCQ,Which chamber of the heart receives oxygen-rich blood from the lungs?,Right atrium,Left atrium,Right ventricle,Left ventricle,B,Oxygenated blood enters the left side of the heart,,NCERT Ch 7
SCI_C7_1004,7,Science,Reproduction in Plants,Pollination,Easy,MCQ,Transfer of pollen from anther to stigma is called:,Fertilization,Pollination,Germination,Seed formation,B,First step in sexual reproduction of plants,,NCERT Ch 8
SCI_C7_1005,7,Science,Light,Optics,Medium,MCQ,Type of mirror used in car side-view is:,Concave,Convex,Plane,Parabolic,B,Convex mirrors provide a wide field of view,,NCERT Ch 11
SST_C7_1001,7,SST,Inside Our Earth,Structure,Medium,MCQ,Innermost layer of Earth is:,Crust,Mantle,Core,Sial,C,Highest density and temperature layer,,NCERT Ch 2
SST_C7_1002,7,SST,Environment,Ecology,Easy,MCQ,Natural ecosystem not including:,Forest,Lake,Aquarium,Desert,C,Aquariums are man-made environments,,NCERT Ch 1
SST_C7_1003,7,SST,Air,Atmosphere,Medium,MCQ,Atmosphere is held to Earth by:,Magnetism,Gravity,Rotation,Pressure,B,Earth's pull prevents air from escaping,,NCERT Ch 4
SST_C7_1004,7,SST,On Equality,Civics,Hard,MCQ,The 1955 bus incident leading to US Civil Rights involved:,Rosa Parks,Martin Luther King,Abraham Lincoln,Nelson Mandela,A,Her refusal sparked a major movement for equality,,NCERT Ch 1
SST_C7_1005,7,SST,How the State Government Works,Governance,Medium,MCQ,Governor is appointed by the:,Prime Minister,President,Chief Minister,People,B,Represents the central authority in a state,,NCERT Ch 3
ENG_C7_1001,7,English,Gopal and the Hilsa Fish,Theme,Medium,MCQ,The story shows that a clever person can:,Win wars,Solve any problem using wit,Catch many fish,Become a king,B,Gopal's intelligence is the focus of the folk tale,,NCERT Ch 3
ENG_C7_1002,7,English,The Shed,Imagery,Easy,MCQ,The shed's door hinges are described as:,Rusty and creaky,Shiny and new,Made of gold,Not there,A,Vivid description of neglect in the poem,,NCERT Poem 3
ENG_C7_1003,7,English,The Tiny Teacher,Roles,Medium,MCQ,Main work of worker ants is:,Lays eggs,Search for food,Defend hill,Clean grubs only,B,Search for food is their primary task,,An Alien Hand Unit 1
ENG_C7_1004,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Golu asked Uncle Baboon about:,Food,Why melons taste as they do,Flying,Red eyes,B,His curiosity covered many different animals,,An Alien Hand Unit 3
ENG_C7_1005,7,English,An Alien Hand,Plot,Hard,MCQ,Number One and Two are members of which Bureau?,Central Bureau,Space Agency,Food Dept,Education Board,A,Responsible for defending the Martian colony,,An Alien Hand Unit 10
MATH_C7_1006,7,Math,Rational Numbers,Operations,Medium,MCQ,Find value of 1 divided by 1/2.,1/2,2,1,0,B,Dividing by 1/2 is multiplying by 2,,NCERT Ch 8
MATH_C7_1007,7,Math,Perimeter and Area,Circle,Easy,MCQ,Circumference formula:,$2\\pi r$,$\\pi r^2$,$2r$,$\\pi d^2$,A,Standard formula for circle boundary,,NCERT Ch 9
MATH_C7_1008,7,Math,Algebraic Expressions,Coefficients,Easy,MCQ,Numerical coefficient of $x$ in $7x$ is:,$x$,7,1,0,B,The number factor multiplying the variable,,NCERT Ch 10
MATH_C7_1009,7,Math,Exponents and Powers,Laws,Hard,MCQ,Value of $(2^0 + 3^0) \\times 4^0$:,0,1,2,6,C,Any non-zero power 0 is 1. $(1+1) \\times 1 = 2$,,NCERT Ch 11
MATH_C7_1010,7,Math,Symmetry,Rotational,Medium,MCQ,Order of rotational symmetry of an Equilateral Triangle:,1,2,3,6,C,Three rotations of 120 degrees look the same,,NCERT Ch 12
SCI_C7_1006,7,Science,Respiration,Biology,Easy,MCQ,Fish breathe through:,Lungs,Gills,Skin,Spiracles,B,Specialized organs for underwater gas exchange,,NCERT Ch 6
SCI_C7_1007,7,Science,Transportation,Biology,Easy,MCQ,Pulse rate is measured from the:,Heart,Artery,Vein,Nerve,B,Rhythmic flow of blood detected in arteries,,NCERT Ch 7
SCI_C7_1008,7,Science,Transportation,Physics,Medium,MCQ,Relationship: Speed = Distance / _____?,Time,Acceleration,Velocity,Gravity,A,Time is the denominator in the speed formula,,Curiosity Ch 8
SCI_C7_1009,7,Science,Reproduction,Botany,Medium,MCQ,Yeast reproduces by:,Spores,Budding,Fragmentation,Seeds,B,Asexual reproduction by small outgrowths,,NCERT Ch 8
SCI_C7_1010,7,Science,Electricity,Conductivity,Easy,MCQ,Human body is a _____ of electricity.,Conductor,Insulator,Semi-conductor,Non-metal,A,Electricity passes through biological fluids easily,,Curiosity Ch 3
SST_C7_1006,7,SST,Tracing Changes,Identity,Medium,MCQ,In medieval India; a stranger was a:,Neighbor,Foreigner,Friend,Relative,B,Alien to the local society circle,,Our Pasts II Ch 1
SST_C7_1007,7,SST,Kings and Kingdoms,Administration,Medium,MCQ,Rulers gave land grants on which metal plates?,Gold,Silver,Copper,Bronze,C,Inscriptions on copper plates recorded land gifts,,Our Pasts II Ch 2
SST_C7_1008,7,SST,Delhi Sultans,History,Hard,MCQ,Only woman ruler of Delhi Sultanate:,Raziyya,Nur Jahan,Chand Bibi,Rani Abbakka,A,Daughter of Iltutmish who ruled in the 13th century,,Our Pasts II Ch 3
SST_C7_1009,7,SST,Inside Our Earth,Rocks,Easy,MCQ,Sedimentary rock example:,Granite,Sandstone,Basalt,Marble,B,Formed by accumulation of particles,,NCERT Ch 2
SST_C7_1010,7,SST,Air,Meteorology,Easy,MCQ,Instrument measuring temperature:,Barometer,Thermometer,Rain gauge,Wind vane,B,Standard tool for degrees of hot/cold,,NCERT Ch 4
ENG_C7_1006,7,English,Gopal and Hilsa Fish,Wit,Medium,MCQ,Gopal dressed as a _____ to distract people.,Rich man,Madman,Fisherman,Soldier,B,He smeared ash and wore rags to look crazy,,NCERT Ch 3
ENG_C7_1007,7,English,The Shed,Theme,Medium,MCQ,The poet plans to visit the shed:,Never,Soon one day,Tomorrow,Next year,B,Curiosity overcoming fear eventually,,NCERT Poem 3
ENG_C7_1008,7,English,The Tiny Teacher,Nature,Easy,MCQ,Ants live in comfortable homes called:,Nests,Burrows,Anthills,Hives,C,Specific term for ant colonies,,An Alien Hand Unit 1
ENG_C7_1009,7,English,Golu Grows a Nose,Ethics,Medium,MCQ,Golu realized that his long nose was:,Ugly,Heavy,Very useful,A mistake,C,He could swat flies and eat grass easily,,An Alien Hand Unit 3
ENG_C7_1010,7,English,An Alien Hand,Sci-Fi,Medium,MCQ,Martian surface temperature was:,Very hot,Extremely cold,Same as Earth,Pleasant,B,Hostile low temperatures made life impossible,,An Alien Hand Unit 10
MATH_C7_1011,7,Math,Rational Numbers,Operations,Medium,MCQ,Product of 2/3 and 3/4 is:,1/2,5/7,6/7,1,A,Calculation: $6/12 = 1/2$,,NCERT Ch 8
MATH_C7_1012,7,Math,Perimeter and Area,Circle,Hard,MCQ,Circumference of circle with radius 14 cm (use 22/7):,44,88,154,616,B,Calculation: $2 \\times 22/7 \\times 14 = 88$,,NCERT Ch 9
MATH_C7_1013,7,Math,Algebraic Expressions,Simplification,Medium,MCQ,Combine like terms: $x - y - (x - y)$,$2x - 2y$,0,$2x$,$-2y$,B,Subtraction of the same expression results in zero,,NCERT Ch 10
MATH_C7_1014,7,Math,Exponents and Powers,Laws,Easy,MCQ,Which is greater: $2^3$ or $3^2$?,$2^3$,$3^2$,Equal,None,B,$3^2 = 9$ and $2^3 = 8$,,NCERT Ch 11
MATH_C7_1015,7,Math,Symmetry,Geometric,Easy,MCQ,Lines of symmetry in a Circle:,1,2,4,Infinite,D,Any diameter is a line of symmetry,,NCERT Ch 12
SCI_C7_1011,7,Science,Respiration,Biology,Medium,MCQ,Earthworms breathe through their:,Lungs,Skin,Gills,Trachea,B,Moist skin allows for diffusion of gases,,NCERT Ch 6
SCI_C7_1012,7,Science,Transportation,Anatomy,Easy,MCQ,Blood cells that fight germs:,RBC,WBC,Platelets,Plasma,B,White blood cells are part of the immune system,,NCERT Ch 7
SCI_C7_1013,7,Science,Electricity,Circuit,Medium,MCQ,Safety fuse works on _____ effect of current.,Magnetic,Heating,Chemical,Lighting,B,Fuse melts when wire gets too hot from high current,,Curiosity Ch 3
SCI_C7_1014,7,Science,Reproduction,Botany,Easy,MCQ,Ovary in a flower matures into:,Seed,Fruit,Petal,Stamen,B,Biological development after fertilization,,NCERT Ch 8
SCI_C7_1015,7,Science,Light,Optics,Medium,MCQ,Rainbow is formed by _____ of sunlight.,Reflection,Dispersion,Absorption,Shadow,B,Splitting of light into colors by water drops,,Curiosity Ch 11
SST_C7_1011,7,SST,Kings and Kingdoms,Dynasties,Medium,MCQ,Rashtrakutas were initially subordinates to:,Cholas,Chalukyas,Palas,Mughals,B,Dantidurga overthrew his Chalukya overlord,,Our Pasts II Ch 2
SST_C7_1012,7,SST,Delhi Sultans,Administration,Medium,MCQ,Muqtis were responsible for maintaining:,Markets,Law and Order and Military,Temples,Schools,B,Administrative role in assigned land iqtas,,Our Pasts II Ch 3
SST_C7_1013,7,SST,Environment,Hydrology,Easy,MCQ,Water body not including:,River,Ocean,Mountain,Lake,C,Mountains are part of the lithosphere,,NCERT Ch 1
SST_C7_1014,7,SST,Inside Our Earth,Structure,Easy,MCQ,Crust thickness under continents:,5 km,35 km,100 km,2900 km,B,Continental crust is thicker than oceanic crust,,NCERT Ch 2
SST_C7_1015,7,SST,Air,Atmosphere,Medium,MCQ,Atmospheric layer where planes fly:,Troposphere,Stratosphere,Mesosphere,Thermosphere,B,Lack of weather disturbances makes it ideal,,NCERT Ch 4
ENG_C7_1011,7,English,Gopal and Hilsa Fish,Comprehension,Easy,MCQ,Did Gopal win the challenge?,Yes,No,king forgot,Gopal failed,A,He reached the king without anyone mentioning the fish,,NCERT Ch 3
ENG_C7_1012,7,English,The Shed,Character,Medium,MCQ,The speaker thinks the shed is _____:,Haunted,Beautiful,A playground,Too small,A,Initial fearful perception in the poem,,NCERT Poem 3
ENG_C7_1013,7,English,The Tiny Teacher,Biology,Easy,MCQ,Ants milk which insect for honeydew?,Butterfly,Greenfly,Bee,Beetle,B,Symbiotic relationship in the ant hill,,An Alien Hand Unit 1
ENG_C7_1014,7,English,Golu Grows a Nose,Fable,Easy,MCQ,Golu's uncle the Hippopotamus had _____ eyes.,Blue,Red,Green,Yellow,B,A detail from the curious elephant's questions,,An Alien Hand Unit 3
ENG_C7_1015,7,English,An Alien Hand,Plot,Medium,MCQ,Who advised Number One not to destroy spacecraft?,Number Two,Number Three,The King,Father,A,Suggested wait and watch strategy,,An Alien Hand Unit 10
MATH_C7_1016,7,Math,Rational Numbers,Operations,Medium,MCQ,Subtract 1/2 from 1.,0,1/2,1,2,B,Calculation: $1 - 0.5 = 0.5$,,NCERT Ch 8
MATH_C7_1017,7,Math,Perimeter and Area,Circle,Easy,MCQ,Ratio of circumference to diameter is:,1,2,$\\pi$,Radius,C,Definition of the mathematical constant pi,,NCERT Ch 9
MATH_C7_1018,7,Math,Algebraic Expressions,Terms,Easy,MCQ,How many terms in $3xy$?,1,2,3,0,A,A single product of factors is one term,,NCERT Ch 10
MATH_C7_1019,7,Math,Exponents and Powers,Laws,Medium,MCQ,Value of $10^3$ is:,30,100,1000,10,C,Calculation: $10 \\times 10 \\times 10 = 1000$,,NCERT Ch 11
MATH_C7_1020,7,Math,Symmetry,Geometric,Easy,MCQ,Line of symmetry in letter 'A':,Vertical,Horizontal,Diagonal,None,A,Folds along the center top to bottom,,NCERT Ch 12
SCI_C7_1016,7,Science,Respiration,Biology,Medium,MCQ,Lungs are located in the _____ cavity.,Abdominal,Chest,Oral,Pelvic,B,Protected by the rib cage,,NCERT Ch 6
SCI_C7_1017,7,Science,Transportation,Anatomy,Easy,MCQ,Pulse is the throb caused by blood in:,Veins,Arteries,Capillaries,Heart,B,Detection of pressure waves in arteries,,NCERT Ch 7
SCI_C7_1018,7,Science,Electricity,Safety,Medium,MCQ,Which effect is used in electrical bulbs to glow?,Magnetic,Chemical,Heating,Cooling,C,Filament gets hot and emits light,,Curiosity Ch 3
SCI_C7_1019,7,Science,Reproduction,Botany,Medium,MCQ,Pollen grains are produced in:,Anther,Ovary,Stigma,Style,A,Site of male gamete production in flowers,,NCERT Ch 8
SCI_C7_1020,7,Science,Light,Optics,Easy,MCQ,Light reflects from a _____ surface better.,Dull,Rough,Shiny,Dark,C,Smooth polished surfaces follow laws of reflection,,Curiosity Ch 11
SST_C7_1016,7,SST,Kings and Kingdoms,Administration,Medium,MCQ,Tax in medieval South on forced labor:,Vetti,Kadamai,Chauth,Bali,A,Tax taken not in cash but labor,,Our Pasts II Ch 2
SST_C7_1017,7,SST,Delhi Sultans,History,Medium,MCQ,Language used by chroniclers (tawarikh):,Hindi,Sanskrit,Persian,Arabic,C,Official language of the Sultanate administration,,Our Pasts II Ch 3
SST_C7_1018,7,SST,Environment,Ecology,Medium,MCQ,Narrow zone where land; water; air interact:,Lithosphere,Biosphere,Atmosphere,Hydrosphere,B,The life-supporting zone of Earth,,NCERT Ch 1
SST_C7_1019,7,SST,Inside Our Earth,Geology,Hard,MCQ,Core of Earth mainly made of:,Silica,Iron and Nickel,Gold,Aluminum,B,Referred to as 'Nife' layer,,NCERT Ch 2
SST_C7_1020,7,SST,Air,Atmosphere,Easy,MCQ,Gas needed for burning:,Nitrogen,Carbon dioxide,Oxygen,Hydrogen,C,Essential component for combustion,,NCERT Ch 4
ENG_C7_1016,7,English,Gopal and Hilsa Fish,Vocabulary,Medium,MCQ,Meaning of 'comical' in story:,Sad,Funny,Angry,Serious,B,Describes Gopal's strange appearance,,NCERT Ch 3
ENG_C7_1017,7,English,The Shed,Poetry,Easy,MCQ,Spiders web hangs across the:,Window,Door,Floor,Roof,B,Indication that the door hasn't been opened,,NCERT Poem 3
ENG_C7_1018,7,English,The Tiny Teacher,Behavior,Medium,MCQ,Ants live for about:,One month,Few years,One day,10 years,B,Queen ant can live up to 15 years,,An Alien Hand Unit 1
ENG_C7_1019,7,English,Golu Grows a Nose,Plot,Medium,MCQ,Golu's new nose helped him swat a:,Fly,Mosquito,Bee,Bird,A,Practical advantage of the long trunk,,An Alien Hand Unit 3
ENG_C7_1020,7,English,An Alien Hand,Character,Easy,MCQ,Tilloo father worked in the:,Farm,Control Room,School,Market,B,Highly restricted technical area,,An Alien Hand Unit 10
MATH_C7_1021,7,Math,Rational Numbers,Operations,Easy,MCQ,Is zero a rational number?,Yes,No,Only sometimes,Cannot say,A,Zero can be written as 0/1; satisfying rational number definition,,NCERT Ch 8
MATH_C7_1022,7,Math,Perimeter and Area,Square,Medium,MCQ,Area of square side 5 cm:,20 cm,25 sq cm,10 cm,15 sq cm,B,Calculation: $5 \\times 5 = 25$,,NCERT Ch 9
MATH_C7_1023,7,Math,Algebraic Expressions,Simplification,Medium,MCQ,Value of $2x$ if $x = 10$,5,20,12,100,B,Standard substitution and multiplication,,NCERT Ch 10
MATH_C7_1024,7,Math,Exponents and Powers,Laws,Easy,MCQ,Any number power 1 is:,1,0,The number itself,Infinity,C,Fundamental law of exponents,,NCERT Ch 11
MATH_C7_1025,7,Math,Symmetry,Geometric,Easy,MCQ,Lines of symmetry in Isosceles Triangle:,1,2,3,0,A,Along the altitude from the vertex to the base,,NCERT Ch 12
SCI_C7_1021,7,Science,Respiration,Biology,Medium,MCQ,Process converting food to energy without oxygen:,Aerobic,Anaerobic,Digestion,Breathing,B,Common in yeast and overworked muscles,,NCERT Ch 6
SCI_C7_1022,7,Science,Transportation,Anatomy,Medium,MCQ,Red color of blood is due to:,WBC,Hemoglobin,Platelets,Plasma,B,Iron-rich protein in RBCs,,NCERT Ch 7
SCI_C7_1023,7,Science,Electricity,Circuit,Easy,MCQ,Standard cell terminal with long line is:,Positive,Negative,Neutral,Earth,A,Symbolic representation in diagrams,,Curiosity Ch 3
SCI_C7_1024,7,Science,Reproduction,Botany,Medium,MCQ,Transfer of pollen by wind is _____ pollination.,Self,Cross,Artificial,None,B,Can be cross if to another flower,,NCERT Ch 8
SCI_C7_1025,7,Science,Light,Optics,Easy,MCQ,Image in plane mirror is same _____ as object.,Size,Shape,Both size and shape,Neither,C,Reflection creates an exact replica regarding dimensions,,Curiosity Ch 11
SST_C7_1021,7,SST,Kings and Kingdoms,Inscriptions,Hard,MCQ,Prashastis were written in which language?,Sanskrit,Hindi,Persian,English,A,Poems in praise of rulers often in Sanskrit,,Our Pasts II Ch 2
SST_C7_1022,7,SST,Delhi Sultans,History,Medium,MCQ,Internal frontier of Sultanate means:,Border countries,Hinterlands of garrison towns,Overseas,Mountains,B,Area surrounding city settlements,,Our Pasts II Ch 3
SST_C7_1023,7,SST,Environment,Ecology,Medium,MCQ,Human-made environment include:,Mountain,Bridge,Ocean,Forest,B,Built by humans for utility,,NCERT Ch 1
SST_C7_1024,7,SST,Inside Our Earth,Structure,Easy,MCQ,Middle layer of Earth:,Crust,Mantle,Core,Sima,B,Layer between crust and core,,NCERT Ch 2
SST_C7_1025,7,SST,Air,Atmosphere,Medium,MCQ,Atmospheric layer reflecting radio waves:,Troposphere,Stratosphere,Thermosphere (Ionosphere),Mesosphere,C,High ion concentration aids communication,,NCERT Ch 4
ENG_C7_1021,7,English,Gopal and Hilsa Fish,Comprehension,Easy,MCQ,The King told Gopal he was _____:,Clever,Stupid,Mad,Fisherman,A,Praise after winning the bet,,NCERT Ch 3
ENG_C7_1022,7,English,The Shed,Imagery,Easy,MCQ,Dusty window has three _____ of glass.,Frames,Cracked panes,Sheets,Patterns,B,Detail showing the shed is old,,NCERT Poem 3
ENG_C7_1023,7,English,The Tiny Teacher,Roles,Medium,MCQ,Who has wings but bites them off?,Drone,Queen ant,Soldier,Worker,B,After her wedding flight she loses her wings,,An Alien Hand Unit 1
ENG_C7_1024,7,English,Golu Grows a Nose,Plot,Medium,MCQ,Golu was pulled by the nose for _____ days.,2,5,1,7,A,Duration of the tug-of-war in the story,,An Alien Hand Unit 3
ENG_C7_1025,7,English,An Alien Hand,Plot,Medium,MCQ,Tilloo was caught by the _____ cameras.,Security,Space,Video,Secret,A,Automated monitoring of the forbidden passage,,An Alien Hand Unit 10
MATH_C7_1026,7,Math,Rational Numbers,Operations,Medium,MCQ,Find 5/6 of 30.,25,5,180,30,A,Calculation: $30/6 \\times 5 = 25$,,NCERT Ch 8
MATH_C7_1027,7,Math,Perimeter and Area,Rectangle,Hard,MCQ,Area of rectangle length 12 cm and perimeter 40 cm:,96 sq cm,48 sq cm,120 sq cm,80 sq cm,A,Breadth is $(40/2) - 12 = 8$. Area is $12 \\times 8 = 96$,,NCERT Ch 9
MATH_C7_1028,7,Math,Algebraic Expressions,Simplification,Medium,MCQ,Simplify $a + b - (a - $,$2a$,$2b$,0,$2a + 2b$,B,Calculation: $a + b - a + b = 2b$,,NCERT Ch 10
MATH_C7_1029,7,Math,Exponents and Powers,Laws,Medium,MCQ,Value of $3^4$:,12,81,27,64,B,Calculation: $3 \\times 3 \\times 3 \\times 3 = 81$,,NCERT Ch 11
MATH_C7_1030,7,Math,Symmetry,Rotational,Easy,MCQ,Angle of rotation for a Square:,45,90,180,360,B,Minimum turn for same appearance,,NCERT Ch 12
SCI_C7_1026,7,Science,Respiration,Physiology,Easy,MCQ,Inhalation involves ribs moving:,Down,Up and outwards,Inwards,Stationary,B,Expands chest cavity to draw air in,,NCERT Ch 6
SCI_C7_1027,7,Science,Transportation,Anatomy,Medium,MCQ,Valves in veins prevent _____ flow.,Forward,Backward,Rapid,Oxygen,B,Ensure one-way blood travel to heart,,NCERT Ch 7
SCI_C7_1028,7,Science,Electricity,Circuit,Easy,MCQ,Combination of two or more cells is a:,Fuse,Switch,Battery,Bulb,C,Power source for many devices,,Curiosity Ch 3
SCI_C7_1029,7,Science,Reproduction,Botany,Medium,MCQ,Male gamete of plant found in:,Pollen,Ovary,Fruit,Stamen only,A,Microscopic structures for fertilization,,NCERT Ch 8
SCI_C7_1030,7,Science,Light,Optics,Medium,MCQ,Splitting of white light to colors is:,Reflection,Dispersion,Refraction,Shadow,B,Occurs in prisms and raindrops,,Curiosity Ch 11
SST_C7_1026,7,SST,Kings and Kingdoms,Dynasties,Medium,MCQ,Tripartite struggle involved Palas; Rashtrakutas; and:,Cholas,Gurjara-Pratiharas,Mughals,Marathas,B,Conflict over control of Kanauj,,Our Pasts II Ch 2
SST_C7_1027,7,SST,Delhi Sultans,Administration,Hard,MCQ,Iqta was a grant of _____:,Gold,Revenue from land,Army,Food,B,System of territorial governance,,Our Pasts II Ch 3
SST_C7_1028,7,SST,Environment,Hydrology,Easy,MCQ,Percentage of water on Earth's surface:,50%,71%,90%,30%,B,Majority covered by oceans,,NCERT Ch 1
SST_C7_1029,7,SST,Inside Our Earth,Rocks,Easy,MCQ,Metamorphic rock example:,Granite,Slate,Basalt,Coal,B,Formed from shale under heat and pressure,,NCERT Ch 2
SST_C7_1030,7,SST,Air,Atmosphere,Medium,MCQ,Most abundant gas in air:,Oxygen,Nitrogen,Argon,CO2,B,Nitrogen makes up 78% of the atmosphere,,NCERT Ch 4
ENG_C7_1026,7,English,Gopal and Hilsa Fish,Theme,Easy,MCQ,Why did Gopal stop shaving half his face?,He forgot,To look comical for his challenge,He lost his razor,To scare people,B,Part of his strategy to be a distraction,,NCERT Ch 3
ENG_C7_1027,7,English,The Shed,Imagery,Medium,MCQ,The shed has a _____ at the bottom of the garden.,Pool,Tree,Shed,Grave,C,Location of the mysterious building,,NCERT Poem 3
ENG_C7_1028,7,English,The Tiny Teacher,Roles,Easy,MCQ,Who stays in the nursery rooms?,Queen,Soldiers,Grubs,Drones,C,Specialized area for young ones,,An Alien Hand Unit 1
ENG_C7_1029,7,English,Golu Grows a Nose,Ethics,Medium,MCQ,Golu used his nose to eat _____.,Grass,Fish,Meat,Wood,A,Discovery of its practical use,,An Alien Hand Unit 3
ENG_C7_1030,7,English,An Alien Hand,Plot,Medium,MCQ,Scientists used a _____ to pick up Martian soil.,Robot arm,Mechanical hand,Human,Net,B,Instrument on the unmanned spacecraft,,An Alien Hand Unit 10
MATH_C7_1031,7,Math,Rational Numbers,Operations,Easy,MCQ,Are all integers rational numbers?,Yes,No,Only 0,Only 1,A,Any integer $n$ can be written as $n/1$,,NCERT Ch 8
MATH_C7_1032,7,Math,Perimeter and Area,Circle,Medium,MCQ,Value of pi ($\\pi$) approximately:,3.14,3.14159,22/7,All of these,D,Different levels of precision for the constant,,NCERT Ch 9
MATH_C7_1033,7,Math,Algebraic Expressions,Terms,Easy,MCQ,Coefficient of $y$ in $-3y$,3,-3,$y$,1,B,Includes the negative sign factor,,NCERT Ch 10
MATH_C7_1034,7,Math,Exponents and Powers,Laws,Easy,MCQ,Value of $1^{100}$:,100,1,0,10,B,One raised to any power is one,,NCERT Ch 11
MATH_C7_1035,7,Math,Symmetry,Geometric,Easy,MCQ,Line of symmetry in letter 'M':,Vertical,Horizontal,Diagonal,None,A,Reflects across the center vertical line,,NCERT Ch 12
SCI_C7_1031,7,Science,Respiration,Biology,Medium,MCQ,Final products of aerobic respiration:,Glucose,$CO_2$,water,energy,B,Complete breakdown of nutrients,,NCERT Ch 6
SCI_C7_1032,7,Science,Transportation,Anatomy,Easy,MCQ,Component of blood for clotting:,RBC,WBC,Platelets,Plasma,C,Prevent excessive bleeding from injuries,,NCERT Ch 7
SCI_C7_1033,7,Science,Electricity,Circuit,Easy,MCQ,Symbol for 'ON' switch shows a _____ wire.,Broken,Connected,Thin,Wavy,B,Completes the circuit loop,,Curiosity Ch 3
SCI_C7_1034,7,Science,Reproduction,Botany,Medium,MCQ,Female gamete found in:,Pollen,Ovule,Stigma,Petal,B,Located inside the ovary of the flower,,NCERT Ch 8
SCI_C7_1035,7,Science,Light,Optics,Easy,MCQ,Light travels in _____ lines.,Straight,Curved,Wavy,Zigzag,A,Rectilinear propagation of light,,Curiosity Ch 11
SST_C7_1031,7,SST,Kings and Kingdoms,History,Hard,MCQ,Mahmud of Ghazni targetted which famous temple?,Somnath,Meenakshi,Konark,Sanchi,A,Rich temple in Gujarat raided multiple times,,Our Pasts II Ch 2
SST_C7_1032,7,SST,Delhi Sultans,Administration,Medium,MCQ,Official history records in Sultanate are:,Vedas,Tawarikh,Jatakas,Prashastis,B,Learned accounts written in Persian,,Our Pasts II Ch 3
SST_C7_1033,7,SST,Environment,Ecology,Medium,MCQ,Domain of land is:,Lithosphere,Hydrosphere,Atmosphere,Biosphere,A,Hard top layer of the Earth,,NCERT Ch 1
SST_C7_1034,7,SST,Inside Our Earth,Structure,Easy,MCQ,Layer made of Sial (Silica and Alumin:,Oceanic Crust,Continental Crust,Mantle,Core,B,The granite-rich top layer of land,,NCERT Ch 2
SST_C7_1035,7,SST,Air,Atmosphere,Medium,MCQ,Which layer has the highest gas concentration?,Troposphere,Stratosphere,Mesosphere,Exosphere,A,Density decreases with altitude,,NCERT Ch 4
ENG_C7_1031,7,English,Gopal and Hilsa Fish,Comprehension,Easy,MCQ,Gopal's wife thought he was _____:,Mad,Handsome,Busy,Sick,A,Due to his half-shaven face and dirty clothes,,NCERT Ch 3
ENG_C7_1032,7,English,The Shed,Theme,Medium,MCQ,The speaker's brother tells _____ to keep shed for himself.,Truth,Lies,Jokes,Secrets,B,Fabricated ghost stories to maintain privacy,,NCERT Poem 3
ENG_C7_1033,7,English,The Tiny Teacher,Roles,Easy,MCQ,Workers feed the _____.,King,Queen,Grubs,Soldiers,C,Nursing the next generation of ants,,An Alien Hand Unit 1
ENG_C7_1034,7,English,Golu Grows a Nose,Plot,Medium,MCQ,Crocodile wanted to eat Golu's _____.,Tail,Ear,Nose,Leg,C,Leading to the tug-of-war river fight,,An Alien Hand Unit 3
ENG_C7_1035,7,English,An Alien Hand,Plot,Medium,MCQ,Spacecraft was from planet _____.,Mars,Earth,Venus,Moon,B,Humans searching for life on the Red Planet,,An Alien Hand Unit 10
MATH_C7_1036,7,Math,Rational Numbers,Standard Form,Medium,MCQ,Standard form of -15/35:,-3/7,-1/5,3/7,-5/7,A,Divided by common factor 5,,NCERT Ch 8
MATH_C7_1037,7,Math,Perimeter and Area,Circle,Medium,MCQ,Area of circle with radius 1 cm (use pi=3.14):,3.14 sq cm,6.28 sq cm,1 sq cm,3.14 cm,A,Calculation: $3.14 \\times 1 \\times 1 = 3.14$,,NCERT Ch 9
MATH_C7_1038,7,Math,Algebraic Expressions,Terms,Easy,MCQ,Like terms of $x$ are:,$y$,$5x$,$x^2$,$3xy$,B,Must have same variable and power,,NCERT Ch 10
MATH_C7_1039,7,Math,Exponents and Powers,Laws,Medium,MCQ,Value of $5^0$ is:,0,5,1,Infinity,C,Any non-zero base power 0 is 1,,NCERT Ch 11
MATH_C7_1040,7,Math,Symmetry,Geometric,Easy,MCQ,Is a Scalene Triangle symmetric?,Yes,No,Only 1 line,Depends on size,B,No sides are equal so no folding line works,,NCERT Ch 12
SCI_C7_1036,7,Science,Respiration,Biology,Hard,MCQ,Normal breathing rate of adult human at rest:,5-10,15-18,30-40,72-80,B,Range of inhalations per minute,,NCERT Ch 6
SCI_C7_1037,7,Science,Transportation,Anatomy,Easy,MCQ,Blood cells carrying oxygen:,RBC,WBC,Platelets,Plasma,A,Red blood cells containing hemoglobin,,NCERT Ch 7
SCI_C7_1038,7,Science,Electricity,Circuit,Medium,MCQ,Coil of wire in heater is a/an:,Fuse,Element,Switch,Battery,B,Produces heat when current flows,,Curiosity Ch 3
SCI_C7_1039,7,Science,Reproduction,Botany,Medium,MCQ,Seeds of Maple disperse by:,Wind,Water,Animal,Explosion,A,Winged seeds travel in the air,,NCERT Ch 8
SCI_C7_1040,7,Science,Light,Optics,Hard,MCQ,Convex lens is also called _____ lens.,Diverging,Converging,Plane,Opaque,B,Bends light rays toward a central point,,Curiosity Ch 11
SST_C7_1036,7,SST,Kings and Kingdoms,Inscriptions,Medium,MCQ,Who wrote Kalhana's Sanskrit poem?,Kalhana,Akbar,Birbal,Harsha,A,History of the kings of Kashmir,,Our Pasts II Ch 2
SST_C7_1037,7,SST,Delhi Sultans,History,Medium,MCQ,Ibn Battuta was from which country?,China,Morocco,Italy,Persia,B,Traveler who wrote about the Sultanate,,Our Pasts II Ch 3
SST_C7_1038,7,SST,Environment,Ecology,Easy,MCQ,Percentage of nitrogen in air:,21%,78%,1%,0.03%,B,The most abundant atmospheric gas,,NCERT Ch 4
SST_C7_1039,7,SST,Inside Our Earth,Structure,Medium,MCQ,The Sima layer (oceanic crust) is made of:,Silica and Alumina,Silica and Magnesium,Nickel and Iron,Gold,B,Found primarily under the ocean beds,,NCERT Ch 2
SST_C7_1040,7,SST,Air,Meteorology,Easy,MCQ,Which gas causes Greenhouse effect?,Nitrogen,Oxygen,Carbon dioxide,Argon,C,Traps heat in the atmosphere,,NCERT Ch 4
ENG_C7_1036,7,English,Gopal and Hilsa Fish,Plot,Easy,MCQ,King promised Gopal a _____ if he succeeded.,Bag of gold,Palace,Horse,Feast,A,Reward for the difficult wit challenge,,NCERT Ch 3
ENG_C7_1037,7,English,The Shed,Imagery,Medium,MCQ,Speaker is afraid of the ghost's _____ eyes.,Glowing,Staring,Red,Closed,B,Brother's spooky detail from the poem,,NCERT Poem 3
ENG_C7_1038,7,English,The Tiny Teacher,Nature,Easy,MCQ,Commonest ants are red or _____:,Green,Yellow,Black,Blue,C,Standard species of ants found at home,,An Alien Hand Unit 1
ENG_C7_1039,7,English,Golu Grows a Nose,Character,Easy,MCQ,Golu had a bulge as big as a _____.,Boot,Balloon,Mountain,Hat,A,Description of his nose before it became a trunk,,An Alien Hand Unit 3
ENG_C7_1040,7,English,An Alien Hand,Plot,Medium,MCQ,Tilloo father siesta was a/an _____:,Party,Afternoon nap,Meeting,Holiday,B,Opportunity for Tilloo to sneak out,,An Alien Hand Unit 10
MATH_C7_1041,7,Math,Rational Numbers,Operations,Medium,MCQ,Equivalent of 1/3:,2/6,3/9,4/12,All of these,D,Same value after simplification,,NCERT Ch 8
MATH_C7_1042,7,Math,Perimeter and Area,Square,Hard,MCQ,Side of square area 64 sq cm:,4 cm,8 cm,16 cm,32 cm,B,Calculation: $\\sqrt{64} = 8$,,NCERT Ch 9
MATH_C7_1043,7,Math,Algebraic Expressions,Simplification,Medium,MCQ,Value of $x - 5$ if $x = 0$,5,-5,0,-1,B,Simple substitution results in negative five,,NCERT Ch 10
MATH_C7_1044,7,Math,Exponents and Powers,Laws,Medium,MCQ,Value of $0^{10}$:,10,1,0,Infinity,C,Zero raised to any positive power is zero,,NCERT Ch 11
MATH_C7_1045,7,Math,Symmetry,Geometric,Easy,MCQ,Lines of symmetry in a Rectangle:,1,2,4,Infinite,B,Vertical and horizontal center lines,,NCERT Ch 12
SCI_C7_1041,7,Science,Respiration,Biology,Easy,MCQ,Main respiratory organ in humans:,Nose,Throat,Lungs,Mouth,C,Site of gas exchange in the body,,NCERT Ch 6
SCI_C7_1042,7,Science,Transportation,Anatomy,Medium,MCQ,Human heart has _____ chambers.,2,3,4,1,C,Divided into two atria and two ventricles,,NCERT Ch 7
SCI_C7_1043,7,Science,Electricity,Safety,Easy,MCQ,Current flows in a _____ circuit.,Open,Closed,Broken,Large,B,Continuous path is required for flow,,Curiosity Ch 3
SCI_C7_1044,7,Science,Reproduction,Botany,Hard,MCQ,Bryophyllum reproduces through its _____.,Stem,Leaves,Roots,Flowers,B,New plantlets grow on leaf margins,,NCERT Ch 8
SCI_C7_1045,7,Science,Light,Optics,Medium,MCQ,Concave mirror forms _____ image when object is far.,Real and Inverted,Virtual and Upright,Larger,None,A,Focuses light to form projectable image,,Curiosity Ch 11
SST_C7_1041,7,SST,Kings and Kingdoms,Administration,Medium,MCQ,Revenue minister of Akbar:,Birbal,Todar Mal,Man Singh,Abul Fazl,B,Developed the 'Zabt' land revenue system,,Our Pasts II Ch 2
SST_C7_1042,7,SST,Delhi Sultans,History,Medium,MCQ,Bandagan were special _____:,Priests,Slaves for military,Merchants,Farmers,B,Purchased for administrative roles,,Our Pasts II Ch 3
SST_C7_1043,7,SST,Environment,Ecology,Easy,MCQ,World Environment Day is:,05-Jun,22-Mar,15-Aug,01-Jan,A,Annual global celebration for nature,,NCERT Ch 1
SST_C7_1044,7,SST,Inside Our Earth,Structure,Easy,MCQ,Innermost part of core is _____:,Solid,Liquid,Gaseous,Melting,A,Due to extreme pressure it remains solid,,NCERT Ch 2
SST_C7_1045,7,SST,Air,Atmosphere,Medium,MCQ,Stratosphere contains _____ gas layer.,CO2,Ozone,Helium,Neon,B,Protective shield against UV radiation,,NCERT Ch 4
ENG_C7_1041,7,English,Gopal and Hilsa Fish,Vocabulary,Medium,MCQ,Meaning of 'smear' in story:,Eat,Rub over,Throw,Clean,B,He smeared ash on his face to disguise himself,,NCERT Ch 3
ENG_C7_1042,7,English,The Shed,Theme,Easy,MCQ,Hinges of shed door are _____:,Golden,Rusty,Plastic,Broken,B,Makes the door creak in the wind,,NCERT Poem 3
ENG_C7_1043,7,English,The Tiny Teacher,Biology,Easy,MCQ,Young ant is a _____ before cocoon.,Grub,Larva,Puppy,Chick,A,Text-specific terminology for larvae,,An Alien Hand Unit 1
ENG_C7_1044,7,English,Golu Grows a Nose,Plot,Medium,MCQ,Golu's nose became a _____.,Boot,Trunk,Stick,Hat,B,Result of the crocodile pulling it,,An Alien Hand Unit 3
ENG_C7_1045,7,English,An Alien Hand,Plot,Easy,MCQ,Tilloo father had a _____ card.,Debit,Security,Playing,Identity,B,Used to open the forbidden door,,An Alien Hand Unit 10
MATH_C7_1046,7,Math,Rational Numbers,Operations,Medium,MCQ,Sum of 1/4 and 1/4 is:,1/2,2/8,1/8,1,A,Calculation: $2/4 = 1/2$,,NCERT Ch 8
MATH_C7_1047,7,Math,Perimeter and Area,Rectangle,Easy,MCQ,Area of rectangle 10 cm by 5 cm:,50 sq cm,15 cm,30 cm,500 sq cm,A,Calculation: $10 \\times 5 = 50$,,NCERT Ch 9
MATH_C7_1048,7,Math,Algebraic Expressions,Terms,Easy,MCQ,Number of terms in $x + y + z$,1,2,3,0,C,Three variables separated by addition,,NCERT Ch 10
MATH_C7_1049,7,Math,Exponents and Powers,Laws,Hard,MCQ,Value of $2^2 \\times 2^3$:,$2^6$,$2^5$,$4^5$,32,B,Calculation: $4 \\times 8 = 32$ which is $2^5$,,NCERT Ch 11
MATH_C7_1050,7,Math,Symmetry,Geometric,Easy,MCQ,Lines of symmetry in a Square:,1,2,4,Infinite,C,Includes 2 center and 2 diagonal lines,,NCERT Ch 12
SCI_C7_1046,7,Science,Respiration,Biology,Medium,MCQ,Yeast respire _____ to produce alcohol.,Aerobically,Anaerobically,Rapidly,Slowly,B,Breaking down sugar without oxygen,,NCERT Ch 6
SCI_C7_1047,7,Science,Transportation,Anatomy,Easy,MCQ,The pump of the human body is:,Lungs,Brain,Heart,Kidney,C,Forces blood through the circulatory system,,NCERT Ch 7
SCI_C7_1048,7,Science,Electricity,Conductivity,Easy,MCQ,Standard insulators include rubber and _____:,Iron,Plastic,Copper,Gold,B,Prevents electric shock by blocking current,,Curiosity Ch 3
SCI_C7_1049,7,Science,Reproduction,Botany,Medium,MCQ,Fertilization results in a single cell called:,Embryo,Zygote,Seed,Spore,B,Union of male and female gametes,,NCERT Ch 8
SCI_C7_1050,7,Science,Light,Optics,Medium,MCQ,Virtual image is always _____:,Inverted,Upright,Real,Small,B,Fundamental property of virtual reflections,,Curiosity Ch 11
SST_C7_1046,7,SST,Kings and Kingdoms,Dynasties,Medium,MCQ,Chola empire capital was:,Delhi,Thanjavur,Madurai,Mumbai,B,Cultural and administrative hub in the South,,Our Pasts II Ch 2
SST_C7_1047,7,SST,Delhi Sultans,History,Easy,MCQ,Delhi became commercial center under _____:,Mughals,Tomaras and Chauhans,Marathas,British,B,Early medieval transition period,,Our Pasts II Ch 3
SST_C7_1048,7,SST,Environment,Ecology,Medium,MCQ,Abiotic component include:,Plants,Animals,Land,Humans,C,Non-living physical elements,,NCERT Ch 1
SST_C7_1049,7,SST,Inside Our Earth,Structure,Medium,MCQ,Mantle depth is about _____ km:,100,2900,5000,35,B,The thickest solid layer of the planet,,NCERT Ch 2
SST_C7_1050,7,SST,Air,Atmosphere,Easy,MCQ,Percentage of oxygen in air:,78%,21%,1%,0.03%,B,Essential for aerobic respiration,,NCERT Ch 4
ENG_C7_1046,7,English,Gopal and Hilsa Fish,Vocabulary,Medium,MCQ,Opposite of 'guilty' in story:,Innocent,Angry,Sad,Clever,A,Gopal was proved innocent of madness,,NCERT Ch 3
ENG_C7_1047,7,English,The Shed,Theme,Easy,MCQ,Door hinges creak in the _____:,Day,Night,Wind,Rain,C,Audible indicator of an old building,,NCERT Poem 3
ENG_C7_1048,7,English,The Tiny Teacher,Nature,Easy,MCQ,Ants use _____ to greet others.,Legs,Feelers,Wings,Sounds,B,antennas are the primary sensors,,An Alien Hand Unit 1
ENG_C7_1049,7,English,Golu Grows a Nose,Ethics,Medium,MCQ,Who advised Golu to find the crocodile?,Python,Ostrich,Myna bird,Elephant,C,Suggested the journey to the river,,An Alien Hand Unit 3
ENG_C7_1050,7,English,An Alien Hand,Plot,Medium,MCQ,Surface of Mars became hostile due to _____ cooling:,Moon,Sun,Earth,Air,B,Solar changes forced life underground,,An Alien Hand Unit 10
MATH_C7_1051,7,Math,Exponents and Powers,Logic,Medium,MCQ,Value of $(-1)^{99}$ is:,1,-1,99,-99,B,Any negative number to an odd power is negative,,NCERT Ch 11
MATH_C7_1052,7,Math,Perimeter and Area,Square,Hard,MCQ,Perimeter of square area 100 sq cm:,10,40,20,100,B,Side is 10; Perimeter is $10 \\times 4 = 40$,,NCERT Ch 9
MATH_C7_1053,7,Math,Algebraic Expressions,Simplification,Medium,MCQ,Value of $2a + 2b$ if $a=1$ and $b=1$,2,4,0,11,B,Calculation: $2(1) + 2(1) = 4$,,NCERT Ch 10
MATH_C7_1054,7,Math,Rational Numbers,Operations,Easy,MCQ,Negative of -5/2 is:,5/2,-5/2,2/5,1,A,Negating a negative results in a positive,,NCERT Ch 8
MATH_C7_1055,7,Math,Symmetry,Geometric,Easy,MCQ,Order of rotational symmetry of Circle:,1,2,4,Infinite,D,Looks same after any degree of turn,,NCERT Ch 12
SCI_C7_1051,7,Science,Respiration,Biology,Medium,MCQ,Breathing involves exchange of _____ and oxygen.,Nitrogen,Carbon dioxide,Hydrogen,Water,B,Gaseous exchange process in organisms,,NCERT Ch 6
SCI_C7_1052,7,Science,Transportation,Anatomy,Medium,MCQ,Arteries have _____ walls to handle pressure.,Thin,Thick,Plastic,No,B,Muscle walls prevent bursting from heart force,,NCERT Ch 7
SCI_C7_1053,7,Science,Electricity,Circuit,Medium,MCQ,Magnetic effect of current discovered by:,Newton,Oersted,Einstein,Edison,B,Hans Christian Oersted showed current attracts needles,,Curiosity Ch 3
SCI_C7_1054,7,Science,Reproduction,Botany,Medium,MCQ,Smallest unit of life in seed dispersal by wind is _____:,Wing,Parachute,Hairy seed,All of these,D,Structures aiding flight in plants,,NCERT Ch 8
SCI_C7_1055,7,Science,Light,Optics,Hard,MCQ,Sunlight consists of _____ colors.,3,5,7,1,C,VIBGYOR spectrum visible in a prism,,Curiosity Ch 11
SST_C7_1051,7,SST,Kings and Kingdoms,Administration,Medium,MCQ,Palas ruled in which region?,Bengal,Gujarat,South,North,A,Medieval dynasty of the eastern region,,Our Pasts II Ch 2
SST_C7_1052,7,SST,Delhi Sultans,History,Medium,MCQ,Iqtadar was the _____ holder:,Gold,Iqta (Lan,Army,Food,B,System of territorial land revenue,,Our Pasts II Ch 3
SST_C7_1053,7,SST,Environment,Ecology,Medium,MCQ,Biotic component include:,Land,Water,Animals,Air,C,Living organisms of an environment,,NCERT Ch 1
SST_C7_1054,7,SST,Inside Our Earth,Structure,Medium,MCQ,The Nife layer is the _____:,Crust,Mantle,Core,Sial,C,Named after Nickel and Ferrous (Iron),,NCERT Ch 2
SST_C7_1055,7,SST,Air,Atmosphere,Easy,MCQ,Cloudless layer for planes:,Troposphere,Stratosphere,Mesosphere,Exosphere,B,Higher layer where weather is stable,,NCERT Ch 4
ENG_C7_1051,7,English,Gopal and Hilsa Fish,Comprehension,Easy,MCQ,Was Hilsa fish cheap or expensive?,Cheap,Expensive,Free,Not sold,B,King bet Gopal using its rarity and price,,NCERT Ch 3
ENG_C7_1052,7,English,The Shed,Theme,Easy,MCQ,The shed hinges are described as _____:,Shiny,Rusty,Plastic,Broken,B,Makes noise when the wind blows,,NCERT Poem 3
ENG_C7_1053,7,English,The Tiny Teacher,Roles,Easy,MCQ,Soldier ants live in _____:,Homes,Barracks,Storehouses,Shops,B,Specialized quarters for colony defense,,An Alien Hand Unit 1
ENG_C7_1054,7,English,Golu Grows a Nose,Character,Medium,MCQ,Golu had _____ nose before trunk.,Bulgy,Flat,Sharp,No,A,Large like a boot in the beginning,,An Alien Hand Unit 3
ENG_C7_1055,7,English,An Alien Hand,Plot,Medium,MCQ,Viking spacecraft came from planet _____:,Mars,Earth,Venus,Moon,B,Search for extraterrestrial signatures,,An Alien Hand Unit 10
MATH_C7_1056,7,Math,Comparing Quantities,Interest,Hard,MCQ,Simple interest on ₹1000 for 1 year at 5%:,₹50,₹500,₹100,₹5,A,Calculation: $1000 \\times 0.05 \\times 1 = 50$,,NCERT Ch 7
MATH_C7_1057,7,Math,Rational Numbers,Operations,Medium,MCQ,Middle value of 0.4 and 0.6 is:,0.5,1,0.1,0,A,midpoint of consecutive tenths,,NCERT Ch 8
MATH_C7_1058,7,Math,Perimeter and Area,Circle,Easy,MCQ,Radius is half of the _____:,Center,Diameter,Perimeter,Area,B,Fundamental geometry relationship,,NCERT Ch 9
MATH_C7_1059,7,Math,Algebraic Expressions,Simplification,Medium,MCQ,Simplify $5x - 3x + 2x$,$4x$,$x$,$10x$,$6x$,A,Calculation: $(5-3+2)x = 4x$,,NCERT Ch 10
MATH_C7_1060,7,Math,Exponents and Powers,Laws,Medium,MCQ,Value of $2^3 + 2^2$:,$2^5$,12,32,8,B,Calculation: $8 + 4 = 12$,,NCERT Ch 11
SCI_C7_1056,7,Science,Respiration,Biology,Easy,MCQ,Insects breathe through system of _____ tubes.,Nose,Tracheal,Lung,Blood,B,Direct air delivery to tissues,,NCERT Ch 6
SCI_C7_1057,7,Science,Transportation,Anatomy,Easy,MCQ,Veins carry _____ rich blood usually.,Oxygen,Carbon dioxide,Nitrogen,Water,B,Returning blood to heart for re-oxygenation,,NCERT Ch 7
SCI_C7_1058,7,Science,Electricity,Circuit,Medium,MCQ,Compass needle deflects due to _____ effect.,Heating,Magnetic,Chemical,Lighting,B,Electric current generates a force field,,Curiosity Ch 3
SCI_C7_1059,7,Science,Reproduction,Botany,Medium,MCQ,Fungi reproduce via microscopic _____:,Seeds,Spores,Buds,Leaves,B,Can survive harsh conditions for long,,NCERT Ch 8
SCI_C7_1060,7,Science,Light,Optics,Easy,MCQ,Surface causing lateral inversion:,Lens,Plane mirror,Wall,Water,B,Left appears right and vice-versa,,Curiosity Ch 11
SST_C7_1056,7,SST,Kings and Kingdoms,Administration,Hard,MCQ,The Hiranya-garbha ritual means _____ womb:,Silver,Golden,Bronze,Earthly,B,Ritual for rebirth of a ruler as Kshatriya,,Our Pasts II Ch 2
SST_C7_1057,7,SST,Delhi Sultans,History,Medium,MCQ,Garrison town is a _____ settlement:,Merchant,Fortified with soldiers,Farming,Forest,B,Strategic military urban center,,Our Pasts II Ch 3
SST_C7_1058,7,SST,Environment,Ecology,Medium,MCQ,Hydrosphere consists of _____ bodies.,Land,Water,Air,Rock,B,Covers 71% of Earth's surface,,NCERT Ch 1
SST_C7_1059,7,SST,Inside Our Earth,Structure,Easy,MCQ,Outer core is in _____ state:,Solid,Liquid,Gaseous,Frozen,B,Molten iron and nickel flow here,,NCERT Ch 2
SST_C7_1060,7,SST,Air,Atmosphere,Medium,MCQ,Stratosphere is above which layer?,Troposphere,Mesosphere,Thermosphere,Exosphere,A,It follows the lowest atmospheric layer,,NCERT Ch 4
ENG_C7_1056,7,English,Gopal and Hilsa Fish,Vocabulary,Medium,MCQ,Meaning of 'rags' in story:,New clothes,Torn clothes,Bags,Shoes,B,Used by Gopal to look like a beggar,,NCERT Ch 3
ENG_C7_1057,7,English,The Shed,Theme,Easy,MCQ,Speaker thinks there is a ghost in the _____:,Garden,Shed,House,Tree,B,Central mysterious place in the poem,,NCERT Poem 3
ENG_C7_1058,7,English,The Tiny Teacher,Nature,Easy,MCQ,Worker ants carry grubs for _____:,Food,Airing and exercise,Sleep,Storage,B,Taking care of the young ant development,,An Alien Hand Unit 1
ENG_C7_1059,7,English,Golu Grows a Nose,Plot,Medium,MCQ,Python told Golu his nose was _____:,Ugly,Better than before,Too long,Hurting,B,Highlighted the advantages of the trunk,,An Alien Hand Unit 3
ENG_C7_1060,7,English,An Alien Hand,Character,Easy,MCQ,Tilloo mother was _____ when he came back.,Happy,Anxious and angry,Tired,Sleeping,B,Because he entered the restricted zone,,An Alien Hand Unit 10
MATH_C7_1061,7,Math,Rational Numbers,Operations,Medium,MCQ,Value of $2/5 + 1/5$,3/5,3/10,1/5,2/25,A,Calculation with common denominators,,NCERT Ch 8
MATH_C7_1062,7,Math,Perimeter and Area,Circle,Easy,MCQ,Area of circle formula:,$2\\pi r$,$\\pi r^2$,$d^2$,$\\pi d$,B,Calculates the space inside the boundary,,NCERT Ch 9
MATH_C7_1063,7,Math,Algebraic Expressions,Terms,Medium,MCQ,Product of $4a$ and $3b$:,$7ab$,$12ab$,$43ab$,$ab$,B,Multiply coefficients and variables,,NCERT Ch 10
MATH_C7_1064,7,Math,Exponents and Powers,Laws,Medium,MCQ,Value of $(2^2)^3$:,$2^5$,$2^6$,$2^8$,12,B,Power of a power rule: multiply exponents,,NCERT Ch 11
MATH_C7_1065,7,Math,Symmetry,Geometric,Easy,MCQ,Order of rotational symmetry of Square:,1,2,4,8,C,Same look every 90 degrees,,NCERT Ch 12
SCI_C7_1061,7,Science,Respiration,Biology,Medium,MCQ,Smallest units of lungs for exchange:,Alveoli,Bronchi,Nose,Mouth,A,Microscopic air sacs where gases diffuse,,NCERT Ch 6
SCI_C7_1062,7,Science,Transportation,Anatomy,Medium,MCQ,Blood flows to lungs via pulmonary _____:,Artery,Vein,Capillary,Valve,A,The only artery carrying $CO_2$ rich blood,,NCERT Ch 7
SCI_C7_1063,7,Science,Electricity,Safety,Easy,MCQ,Electric cell symbol: short thick line is:,Positive,Negative,Neutral,Earth,B,Represents the low potential end,,Curiosity Ch 3
SCI_C7_1064,7,Science,Reproduction,Botany,Medium,MCQ,Seeds of Drumstick disperse by:,Wind,Water,Animal,Bird,A,Equipped with wings for flight,,NCERT Ch 8
SCI_C7_1065,7,Science,Light,Optics,Medium,MCQ,Image formed by magnifying glass is _____:,Real,Virtual,Inverted,Small,B,Lens is convex; creates enlarged virtual image,,Curiosity Ch 11
SST_C7_1061,7,SST,Kings and Kingdoms,Dynasties,Easy,MCQ,Chahamans ruled over Delhi and _____:,Ajmer,Mumbai,Bengal,South,A,Later known as the Chauhans,,Our Pasts II Ch 2
SST_C7_1062,7,SST,Delhi Sultans,Administration,Medium,MCQ,Scribes introductions in Tawarikh advise on _____:,Peace,Birthright and Gender,Cooking,Farming,B,Advice given to the rulers of the period,,Our Pasts II Ch 3
SST_C7_1063,7,SST,Environment,Ecology,Medium,MCQ,Interaction between organisms and surroundings:,Ecosystem,Atmosphere,Physics,Biology,A,A system formed by biotic-abiotic interplay,,NCERT Ch 1
SST_C7_1064,7,SST,Inside Our Earth,Structure,Medium,MCQ,Core radius is about _____ km:,3500,5000,100,2900,A,Internal central sphere dimensions,,NCERT Ch 2
SST_C7_1065,7,SST,Air,Atmosphere,Easy,MCQ,Which layer contains most oxygen?,Troposphere,Stratosphere,Mesosphere,Exosphere,A,Humans live and breathe in this lowest layer,,NCERT Ch 4
SST_C7_1066,7,SST,Kings and Kingdoms,Governance,Medium,MCQ,Nagabhata was a ruler of which dynasty?,Pratihara,Pala,Chola,Mughal,A,Famous king who resisted Arab invasions,,Our Pasts II Ch 2
SST_C7_1067,7,SST,Delhi Sultans,History,Easy,MCQ,Who was the father of Raziyya Sultan?,Iltutmish,Balban,Alauddin,Babur,A,He nominated her as his successor over his sons,,Our Pasts II Ch 3
SST_C7_1068,7,SST,Environment,Hydrology,Easy,MCQ,Large water bodies called _____:,Rivers,Lakes,Oceans,Ponds,C,Principal water feature of the planet,,NCERT Ch 1
SST_C7_1069,7,SST,Inside Our Earth,Rocks,Medium,MCQ,Primary rocks are _____ rocks:,Sedimentary,Igneous,Metamorphic,Fossils,B,First to form from the cooling of Earth,,NCERT Ch 2
SST_C7_1070,7,SST,Air,Atmosphere,Easy,MCQ,Which gas protects from UV rays?,Ozone,Oxygen,Nitrogen,CO2,A,Layer located in the Stratosphere,,NCERT Ch 4
MATH_C7_1171,7,Math,Number Play,Parity,Medium,MCQ,What is the parity of the product of three odd numbers,Even,Odd,Prime,Zero,B,The product of any number of odd integers is always odd as no factor of 2 is present,,Ganita Prakash Ch 6
MATH_C7_1172,7,Math,A Tale of Three Intersecting Lines,Triangles,Hard,MCQ,If the sides of a triangle are in the ratio 3:4:5 and the perimeter is 36 cm find the longest side,12 cm,15 cm,9 cm,20 cm,B,Sum of parts 12. Unit value 36/12 = 3. Longest side 5 * 3 = 15 cm,,Ganita Prakash Ch 7
MATH_C7_1173,7,Math,Working with Fractions,Brahmagupta Method,Hard,MCQ,According to Brahmagupta multiplying two fractions requires multiplying their numerators and what,Adding denominators,Subtracting denominators,Multiplying denominators,Dividing denominators,C,Brahmagupta's ancient rule for fraction multiplication matches modern rules of multiplying top by top and bottom by bottom,,Ganita Prakash Ch 8
MATH_C7_1174,7,Math,Connecting the Dots,Arithmetic Mean,Medium,MCQ,Find the mean of the first four even numbers,4,5,6,10,B,The numbers are 2 4 6 8. Sum is 20. Mean is 20/4 = 5,,Ganita Prakash Ch 13
MATH_C7_1175,7,Math,Arithmetic Expressions,BODMAS,Hard,MCQ,Simplify 10 - 2 * 3 + 4,28,8,16,12,B,Multiplication before addition and subtraction. 10 - 6 + 4 = 8,,Ganita Prakash Ch 2
MATH_C7_1176,7,Math,Large Numbers Around Us,Estimation,Medium,MCQ,Round the number 54321 to the nearest thousand,54000,55000,50000,54300,A,The hundreds digit 3 is less than 5 so we round down the thousands place,,Ganita Prakash Ch 1
MATH_C7_1177,7,Math,Expressions using Letter-Numbers,Terms,Easy,MCQ,In the algebraic expression 5x - 8 what is the variable,5,x,-8,5x,B,A variable is a symbol representing an unknown value usually a letter,,Ganita Prakash Ch 4
MATH_C7_1178,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,What is the value of 0.12 * 10,0.012,1.2,12,120,B,Multiplying by 10 shifts the decimal point one place to the right,,Ganita Prakash Ch 3
MATH_C7_1179,7,Math,Geometric Twins,Polygons,Easy,MCQ,How many vertices does a regular hexagon have,5,6,8,12,B,A hexagon is a polygon with six sides and six vertices,,Ganita Prakash II Ch 1
MATH_C7_1180,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve for p if 4p = 48,12,44,52,4,A,Divide both sides by 4 to find the value of p as 12,,Ganita Prakash II Ch 7
MATH_C7_1181,7,Math,Connecting the Dots,Coordinate Geometry,Medium,MCQ,A point with coordinates (0 5) lies on which axis,X-axis,Y-axis,Origin,Quadrant I,B,When the x-coordinate is zero the point is located on the vertical Y-axis,,Ganita Prakash Ch 13
MATH_C7_1182,7,Math,Number Play,Computational Thinking,Hard,MCQ,Identify the next term in the sequence 2 4 8 16 32,40,48,64,128,C,Each term is obtained by multiplying the previous term by 2,,Ganita Prakash Ch 6
MATH_C7_1183,7,Math,Working with Fractions,Simplification,Medium,MCQ,The simplest form of 18/24 is,9/12,6/8,3/4,2/3,C,Divide numerator and denominator by their HCF 6 to get 3/4,,Ganita Prakash Ch 8
MATH_C7_1184,7,Math,Operations with Integers,Signs,Medium,MCQ,What is the value of (-25) + (-15),-10,40,-40,10,C,Adding two negative integers results in a more negative sum,,NCERT Ch 1
MATH_C7_1185,7,Math,Perimeter and Area,Square,Hard,MCQ,If the side of a square is increased by 3 cm then its perimeter increases by,3 cm,6 cm,9 cm,12 cm,D,New perimeter is 4 * (s+3) = 4s + 12 which is 12 more than original,,NCERT Ch 9
SCI_C7_1171,7,Science,Adolescence,Endocrinology,Medium,MCQ,Which hormone is secreted by the ovaries in girls during puberty,Testosterone,Estrogen,Adrenaline,Thyroxine,B,Estrogen is responsible for the development of secondary sexual characteristics in girls,,Curiosity Ch 6
SCI_C7_1172,7,Science,Life Processes in Animals,Respiration,Medium,MCQ,Which organ is used by insects like grasshoppers for gas exchange,Gills,Spiracles,Lungs,Skin,B,Spiracles are tiny openings on the sides of an insect's body that lead to air tubes,,Curiosity Ch 9
SCI_C7_1173,7,Science,Exploring Substances,Indicators,Medium,MCQ,Which indicator remains colorless in an acidic solution,Litmus,China Rose,Phenolphthalein,Turmeric,C,Phenolphthalein is a synthetic indicator used to identify bases by turning pink,,Curiosity Ch 2
SCI_C7_1174,7,Science,The World of Metals and Non-metals,Metallurgy,Hard,MCQ,Which chemical process prevents iron from rusting by coating it with zinc,Oxidation,Galvanisation,Neutralisation,Crystallisation,B,Galvanisation provides a protective layer that blocks air and moisture from reaching the iron,,Curiosity Ch 4
SCI_C7_1175,7,Science,Heat Transfer in Nature,Meteorology,Hard,MCQ,During a land breeze air moves from,Sea to land at night,Land to sea at night,Sea to land at day,Land to sea at day,B,At night land cools faster than the sea creating a wind flow from land to water,,Curiosity Ch 7
SCI_C7_1176,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,The rate of change of position of an object is called its,Speed,Mass,Volume,Weight,A,Speed is the distance covered by an object in a specific amount of time,,Curiosity Ch 8
SCI_C7_1177,7,Science,Electricity: Circuits and Components,Circuit Basics,Medium,MCQ,In an electrical circuit a battery is a combination of two or more,Bulbs,Switches,Cells,Wires,C,Cells are linked together to provide more voltage for the circuit,,Curiosity Ch 3
SCI_C7_1178,7,Science,Changes Around Us,Chemical,Medium,MCQ,Which of the following is a result of a chemical reaction,Melting of wax,Breaking of a glass bottle,Formation of curd from milk,Chopping wood,C,Formation of curd involves a permanent change where a new substance is created by bacteria,,Curiosity Ch 5
SCI_C7_1179,7,Science,Wastewater Story,Microbiology,Medium,MCQ,Which type of bacteria is used in the secondary treatment of wastewater,Aerobic,Parasitic,Fungal,Viral,A,Aerobic bacteria break down organic waste in the presence of oxygen pumped into the tank,,Curiosity Ch 13
SCI_C7_1180,7,Science,Life Processes in Plants,Botany,Medium,MCQ,The process of water loss from the surface of leaves is called,Respiration,Photosynthesis,Transpiration,Digestion,C,Transpiration creates a suction pull that helps draw water up from the roots,,Curiosity Ch 10
SCI_C7_1181,7,Science,Light: Shadows and Reflections,Optics,Easy,MCQ,What is a smooth and highly polished reflecting surface called,Lens,Prism,Mirror,Screen,C,Mirrors follow the laws of reflection to form images of objects placed in front of them,,Curiosity Ch 11
SCI_C7_1182,7,Science,Earth Moon and the Sun,Astronomy,Hard,MCQ,A solar eclipse is visible only on the part of Earth that falls under the,Sun's shadow,Moon's shadow,Earth's shadow,Mars's shadow,B,A solar eclipse occurs when the Moon passes between the Sun and Earth,,Curiosity Ch 12
SCI_C7_1183,7,Science,The World of Metals and Non-metals,Biology,Hard,MCQ,Sorter's disease is an occupational hazard associated with which industry,Mining,Wool,Steel,Construction,B,Workers sorting wool can be infected by the bacterium Bacillus anthracis from animal skins,,Curiosity Ch 4
SCI_C7_1184,7,Science,Exploring Substances,Neutralisation,Medium,MCQ,Which substance is used to neutralize an acidic ant sting,Vinegar,Lemon juice,Baking soda,Water,C,Baking soda is a base that counteracts the acid injected during an ant bite,,Curiosity Ch 2
SCI_C7_1185,7,Science,Adolescence,Growth,Easy,MCQ,The phase of life marked by rapid physical and mental growth leading to maturity is,Infancy,Childhood,Adolescence,Senescence,C,Adolescence usually spans from age 10 to 19 and includes the onset of puberty,,Curiosity Ch 6
SST_C7_1171,7,SST,The Rise of Empires,History,Medium,MCQ,Who founded the Mauryan Empire after defeating the Nanda dynasty,Ashoka,Chandragupta Maurya,Bindusara,Samudragupta,B,He established the first great empire with the help of his advisor Chanakya,,Exploring Society Ch 5
SST_C7_1172,7,SST,Understanding the Weather,Atmosphere,Medium,MCQ,Which layer of the atmosphere protects us from harmful ultraviolet rays,Troposphere,Stratosphere,Mesosphere,Exosphere,B,The stratosphere contains the ozone layer which filters out most of the Sun's UV radiation,,Exploring Society Ch 2
SST_C7_1173,7,SST,The Constitution of India,Governance,Hard,MCQ,Who was the Chairman of the Drafting Committee of the Indian Constitution,Jawaharlal Nehru,Dr Rajendra Prasad,Dr B R Ambedkar,Sardar Patel,C,Dr Ambedkar is known as the architect of the Indian Constitution for his leadership in drafting it,,Exploring Society Ch 10
SST_C7_1174,7,SST,New Beginnings: Cities and States,Political Units,Medium,MCQ,Large political units that emerged in ancient India around 600 BCE were called,Janapadas,Mahajanapadas,Ganas,Shrenis,B,Sixteen powerful kingdoms or Mahajanapadas dominated the northern plains during this time,,Exploring Society Ch 4
SST_C7_1176,7,SST,Geographical Diversity of India,Plateaus,Easy,MCQ,The Deccan Plateau is primarily composed of which type of rock,Sedimentary,Volcanic Basalt,Metamorphic,Sandstone,B,The plateau was formed by massive lava flows millions of years ago,,Exploring Society Ch 1
SST_C7_1177,7,SST,From Barter to Money,Economics,Medium,MCQ,Which material was used for the earliest punch-marked coins in India,Gold,Silver,Iron,Bronze,B,Silver punch-marked coins were the primary form of metallic currency in ancient times,,Exploring Society Ch 11
SST_C7_1178,7,SST,Understanding Markets,Trade,Easy,MCQ,A market held on a specific day of the week is known as a,Shopping mall,Neighborhood shop,Weekly market,Wholesale hub,C,Weekly markets serve local needs without permanent shop structures,,Exploring Society Ch 12
SST_C7_1179,7,SST,Exploring Society,Civics,Hard,MCQ,Which Article of the Indian Constitution abolished the practice of Untouchability,Article 14,Article 15,Article 17,Article 21,C,Article 17 was included to ensure social equality and human dignity for all citizens,,Exploring Society Ch 10
SST_C7_1180,7,SST,Climates of India,Monsoon,Medium,MCQ,Which city in India is globally famous for receiving the highest rainfall,Cherrapunji,Mawsynram,Shillong,Kochi,B,Mawsynram in Meghalaya is the wettest inhabited place on Earth due to monsoon trapping,,Exploring Society Ch 3
SST_C7_1181,7,SST,New Beginnings: Cities and States,History,Hard,MCQ,The term Second Urbanisation refers to the rise of cities in which region,Indus Valley,Ganga Plains,Coastal Gujarat,Southern Kerala,B,After the decline of Harappa cities re-emerged in the Ganga valley around the 6th century BCE,,Exploring Society Ch 4
SST_C7_1182,7,SST,The Gupta Era,History,Medium,MCQ,Why is the Gupta period often called the Golden Age of India,Massive gold mines,Constant wars,Progress in arts science and literature,High taxes,C,Achievements in mathematics medicine and Sanskrit literature were peak during this era,,Exploring Society Ch 7
SST_C7_1183,7,SST,The Story of Indian Farming,History,Hard,MCQ,Which ancient Indian text deals with plant science and horticultural recommendations,Arthashastra,Vrikshayurveda,Vedas,Puranas,B,Surapala's Vrikshayurveda provides detailed methods for seed care and soil management,,Exploring Society Ch 1
SST_C7_1184,7,SST,From the Rulers to the Ruled,Civics,Easy,MCQ,In a Democracy the final authority for decision making rests with,The Army,The People,The King,The Police,B,The principle of popular sovereignty means power is derived from the citizens,,Exploring Society Ch 9
SST_C7_1185,7,SST,Understanding the Weather,Instruments,Medium,MCQ,A Rain Gauge is used by meteorologists to measure,Wind speed,Air pressure,Rainfall depth,Humidity,C,A rain gauge collects and measures the amount of liquid precipitation in a set time,,Exploring Society Ch 2
ENG_C7_1171,7,English,Three Questions,Ethics,Medium,MCQ,Who is the author of the story Three Questions,Ruskin Bond,Leo Tolstoy,William Wordsworth,Anne Frank,B,Leo Tolstoy used this parable to teach important moral lessons,,Honeycomb Unit 1
ENG_C7_1172,7,English,Three Questions,Theme,Hard,MCQ,According to the hermit what is the most important affair in life,Gaining wealth,Doing good to the person you are with,Winning a war,Reading many books,B,The story teaches that our purpose on Earth is to perform acts of kindness for others,,Honeycomb Unit 1
ENG_C7_1173,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,The word dauntless used to describe Rani Abbakka means,Fearful,Brave and fearless,Angry,Very old,B,It describes her courageous spirit in defending Ullal from foreign invasion,,Poorvi Unit 5
ENG_C7_1174,7,English,My Dear Soldiers,Theme,Medium,MCQ,What is the central theme of the poem My Dear Soldiers,Nature and weather,Patriotism and sacrifice,Science and innovation,Life in a city,B,The poem honors the dedication of soldiers who protect the nation's borders,,Poorvi Unit 5
ENG_C7_1175,7,English,The Tiny Teacher,Behavior,Easy,MCQ,Ants communicate with each other by touching their,Legs,Feelers,Wings,Eyes,B,antennae or feelers are used to pass messages and recognize colony members,,An Alien Hand Unit 1
ENG_C7_1176,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Who helped Golu pull his nose from the crocodile's grip,The Ostrich,The Python,The Elephant,The Giraffe,B,The python assisted Golu during the dangerous struggle at the riverbank,,An Alien Hand Unit 3
ENG_C7_1177,7,English,The Day the River Spoke,Vocabulary,Medium,MCQ,In the story mimicking refers to,Copying or imitating sounds,Running away from home,Singing a loud song,Building a school,A,Jahnavi would often copy the sounds she heard in nature around the river,,Poorvi Unit 1
ENG_C7_1178,7,English,Try Again,Moral,Easy,MCQ,The poem Try Again encourages students to show,Fear,Perseverance,Anger,Luck,B,The poem teaches that persistence in the face of failure leads to success,,Poorvi Unit 1
ENG_C7_1179,7,English,Three Days to See,Character,Hard,MCQ,Helen Keller's teacher who taught her language was,Florence Nightingale,Annie Sullivan,Sarojini Naidu,Mother Teresa,B,Annie Sullivan used touch to help Helen understand the meaning of words,,Poorvi Unit 1
ENG_C7_1180,7,English,An Alien Hand,Sci-Fi,Medium,MCQ,Where did Tilloo live with his parents,Underground colony,High tower,Forest village,In a boat,A,Surface conditions on Mars were too hostile for life so they lived subsurface,,An Alien Hand Unit 10
ENG_C7_1181,7,English,A Funny Man,Wit,Easy,MCQ,In the poem the funny man offered a _____ instead of a rose,Flower,Currant bun,Book,Hat,B,The man used a bun to create a silly and humorous situation,,Poorvi Unit 2
ENG_C7_1182,7,English,Say the Right Thing,Ethics,Medium,MCQ,Effective communication according to the chapter involves being,Loud and angry,Honest and polite,Fast and quiet,Very secretive,B,Choosing truthful and kind words is vital for good human relations,,Poorvi Unit 2
ENG_C7_1183,7,English,A Gift of Chappals,Plot,Easy,MCQ,The children gave the music master's chappals to the,Teacher,Beggar,Ravi,Postman,B,They felt pity for the beggar whose feet were burning on the hot road,,Honeycomb Unit 2
ENG_C7_1184,7,English,The Rebel,Poetry,Easy,MCQ,When everyone has short hair the rebel lets his hair grow,Short,Long,Curly,Blue,B,The character in the poem always chooses the opposite of the group norm,,Honeycomb Poem 2
ENG_C7_1185,7,English,The Tiny Teacher,Life Cycle,Medium,MCQ,Ant larvae are specifically called,Cubs,Grubs,Larva,Puppies,B,The text uses the term grubs to describe the young ones before they become cocoons,,An Alien Hand Unit 1
MATH_C7_1186,7,Math,Number Play,Computational Thinking,Hard,MCQ,Find the units digit of the product of all odd numbers from 1 to 9,1,5,9,0,B,Any product involving 5 and other odd numbers will always end in 5,,Ganita Prakash Ch 6
MATH_C7_1187,7,Math,Finding the Unknown,Equations,Medium,MCQ,If x - 10 = 25 what is the value of x,15,35,10,5,B,Add 10 to both sides of the equation to find x is 35,,Ganita Prakash Ch 15
MATH_C7_1188,7,Math,A Peek Beyond the Point,Conversions,Easy,MCQ,One meter is equal to how many millimeters,100 mm,10 mm,1000 mm,10000 mm,C,Standard metric conversion shows 1 m equals 100 cm and 1000 mm,,Ganita Prakash Ch 3
MATH_C7_1189,7,Math,Geometric Twins,Triangle Properties,Medium,MCQ,The sum of the interior angles of a triangle is always,90 degrees,180 degrees,360 degrees,270 degrees,B,The Angle Sum Property states that triangle angles always add up to 180,,Ganita Prakash II Ch 1
MATH_C7_1190,7,Math,Operations with Integers,Inverses,Easy,MCQ,What is the additive inverse of 6,-6,0,1,1/6,A,The additive inverse of a number a is -a such that their sum is zero,,NCERT Ch 1
MATH_C7_1191,7,Math,Arithmetic Expressions,Grouping,Medium,MCQ,Evaluate 5 * (10 + 2),52,60,50,12,B,According to order of operations solve parentheses first then multiply,,Ganita Prakash Ch 2
MATH_C7_1192,7,Math,Working with Fractions,Reciprocals,Medium,MCQ,The reciprocal of 2/3 is,3/2,2/3,1/3,1,A,Invert the numerator and denominator to find the reciprocal of a fraction,,Ganita Prakash Ch 8
MATH_C7_1193,7,Math,Connecting the Dots,Statistics,Hard,MCQ,Which measure is affected the most by an extreme outlier,Mean,Median,Mode,Range,A,The mean uses the sum of all values so one large or small value can skew it,,Ganita Prakash Ch 13
MATH_C7_1194,7,Math,Large Numbers Around Us,Place Value,Easy,MCQ,One crore is equal to how many lakhs,10,100,1000,1,B,In the Indian system one hundred lakhs make up the value of one crore,,Ganita Prakash Ch 1
MATH_C7_1195,7,Math,Geometric Twins,Polygons,Easy,MCQ,An equilateral triangle has how many equal sides,1,2,3,0,C,By definition all three sides of an equilateral triangle are equal in length,,Ganita Prakash II Ch 1
SCI_C7_1186,7,Science,Exploring Substances,pH,Medium,MCQ,A solution that turns red litmus blue is,Acidic,Basic,Neutral,Salty,B,Bases have a pH greater than 7 and react with red litmus indicator,,Curiosity Ch 2
SCI_C7_1187,7,Science,Heat Transfer in Nature,Radiation,Easy,MCQ,Heat from the Sun reaches Earth through which mode,Conduction,Convection,Radiation,Insulation,C,Radiation can travel through the vacuum of space without any medium,,Curiosity Ch 7
SCI_C7_1188,7,Science,Electricity: Circuits and Components,Conductivity,Easy,MCQ,Which of the following is an insulator,Copper,Plastic,Aluminum,Iron,B,Insulators are materials that do not allow electric current to pass through,,Curiosity Ch 3
SCI_C7_1189,7,Science,Changes Around Us,Oxidation,Medium,MCQ,Rusting of iron requires oxygen and what else,Nitrogen,Heat,Water vapor,Light,C,Oxidation of iron needs both air and moisture to form iron oxide,,Curiosity Ch 5
SCI_C7_1190,7,Science,Life Processes in Plants,Botany,Medium,MCQ,The green pigment in leaves that traps solar energy is,Hemoglobin,Chlorophyll,Melanin,Anthocyanin,B,Chlorophyll is essential for capturing sunlight during photosynthesis,,Curiosity Ch 10
SCI_C7_1191,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,The S.I. unit of speed is,km/h,m/s,m/min,cm/s,B,Meter per second is the globally accepted base unit for measuring speed,,Curiosity Ch 8
SCI_C7_1192,7,Science,Life Processes in Animals,Digestion,Easy,MCQ,Digestion of food begins in which part of the body,Stomach,Mouth,Small intestine,Esophagus,B,Salivary enzymes start the breakdown of carbohydrates in the mouth,,Curiosity Ch 9
SCI_C7_1193,7,Science,Light: Shadows and Reflections,Shadows,Easy,MCQ,A shadow is formed when light is blocked by which object,Transparent,Translucent,Opaque,Luminous,C,Opaque materials do not let light pass through resulting in a shadow,,Curiosity Ch 11
SCI_C7_1194,7,Science,Wastewater Story,Sanitation,Medium,MCQ,Which byproduct of wastewater treatment is used as fuel,Scum,Biogas,Silt,Chlorine,B,Biogas is produced through the anaerobic decomposition of sludge,,Curiosity Ch 13
SCI_C7_1195,7,Science,Heat Transfer in Nature,Conduction,Medium,MCQ,Which material is the best conductor of heat,Wood,Rubber,Copper,Glass,C,Metals like copper allow efficient transfer of thermal energy,,Curiosity Ch 7
SST_C7_1186,7,SST,Exploring Society,Civics,Easy,MCQ,The right to vote for all adults above 18 is called,Elite vote,Universal Adult Franchise,Public choice,Majority rule,B,This principle ensures democratic equality for all adult citizens,,Exploring Society Ch 10
SST_C7_1187,7,SST,Understanding Markets,Economics,Medium,MCQ,Supply and demand mainly decide what in a market,Shop location,Item color,Price,Shopkeeper name,C,Market forces determine the cost of goods based on availability and need,,Exploring Society Ch 12
SST_C7_1188,7,SST,The Rise of Empires,Strategy,Medium,MCQ,Chanakya was the advisor to which famous emperor,Ashoka,Chandragupta Maurya,Akbar,Shivaji,B,Kautilya or Chanakya wrote the Arthashastra to guide the Mauryas,,Exploring Society Ch 5
SST_C7_1189,7,SST,Geographical Diversity of India,Etymology,Easy,MCQ,The word Himalaya literally means,Land of snow,Abode of snow,High peak,Green valley,B,It is derived from the Sanskrit words hima (snow) and alaya (abode),,Exploring Society Ch 1
SST_C7_1190,7,SST,Constitution of India,Governance,Medium,MCQ,Who led the Drafting Committee of the Constitution,Nehru,B R Ambedkar,Gandhi,Prasad,B,He is honored as the chief architect of the Indian Constitution,,Exploring Society Ch 10
SST_C7_1191,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,The force that holds the atmosphere to Earth is,Magnetic,Gravity,Centrifugal,Friction,B,Earth's gravitational pull prevents air from escaping into space,,Exploring Society Ch 2
SST_C7_1192,7,SST,From Barter to Money,Economics,Easy,MCQ,Barter system means exchanging goods for,Money,Other goods,Gold,Paper,B,This was the earliest form of trade before currency was invented,,Exploring Society Ch 11
SST_C7_1193,7,SST,Understanding Markets,Economics,Easy,MCQ,Shops under one roof in urban areas are found in,Weekly fairs,Shopping malls,Rural villages,Local streets,B,Malls are large enclosed retail spaces typical of cities,,Exploring Society Ch 12
SST_C7_1194,7,SST,Climates of India,Geography,Medium,MCQ,Mawsynram which is the wettest place on Earth is in,Assam,Meghalaya,Nagaland,Mizoram,B,Meghalaya's unique topography causes extreme rainfall in this area,,Exploring Society Ch 3
SST_C7_1195,7,SST,Exploring Society,Civics,Easy,MCQ,MLA stands for Member of,Local Authority,Legislative Assembly,Legal Association,Local Army,B,MLAs are elected by people to represent them in the state legislature,,Exploring Society Ch 12
MATH_C7_1196,7,Math,Finding the Unknown,Equations,Medium,MCQ,What is the value of n if 2n + 1 = 99,49,50,48,51,A,Subtract 1 from 99 to get 98 then divide by 2 to find n is 49,,Ganita Prakash Ch 15
MATH_C7_1197,7,Math,Connecting the Dots,Coordinate Geometry,Medium,MCQ,The y-coordinate is also known as the,Abscissa,Ordinate,Origin,Slope,B,The ordinate represents the vertical position of a point on a graph,,Ganita Prakash Ch 13
MATH_C7_1198,7,Math,A Peek Beyond the Point,Rounding,Hard,MCQ,Round 38769957 to the nearest ten lakh,38000000,39000000,40000000,38800000,B,Since the lakhs digit 7 is greater than 5 we round up the ten lakh place,,Ganita Prakash Ch 1
MATH_C7_1199,7,Math,Arithmetic Expressions,Logic,Medium,MCQ,Expression equal to 5 * (10 + 2) is,5 * 10 + 2,5 * 10 + 5 * 2,5 + 10 * 2,5 * 12 + 10,B,This is an application of the distributive property of multiplication,,Ganita Prakash Ch 2
MATH_C7_1200,7,Math,Connecting the Dots,Probability,Hard,MCQ,A bag has 5 red and 5 blue balls. The probability of red is,1,0.5,0.2,0.1,B,Probability is favorable outcomes 5 divided by total outcomes 10,,NCERT Ch 3
MATH_C7_1201,7,Math,Connecting the Dots,Coordinate Geometry,Medium,MCQ,In which quadrant do both coordinates of a point have positive values,Quadrant I,Quadrant II,Quadrant III,Quadrant IV,A,Quadrant I is the top right region where x and y are both greater than zero,,Ganita Prakash Ch 13
MATH_C7_1202,7,Math,Connecting the Dots,Terminology,Easy,MCQ,The x-coordinate of an ordered pair is also called the,Ordinate,Abscissa,Origin,Vertex,B,Abscissa refers to the horizontal distance of a point from the origin,,Ganita Prakash Ch 13
MATH_C7_1203,7,Math,Connecting the Dots,Coordinate Geometry,Medium,MCQ,If a point is located on the X-axis what is the value of its y-coordinate,One,Zero,Positive,Negative,B,Any point on the horizontal X-axis has a vertical displacement of zero,,Ganita Prakash Ch 13
MATH_C7_1204,7,Math,Connecting the Dots,Statistics,Hard,MCQ,Which measure of central tendency is calculated using the fair-share concept,Median,Mode,Arithmetic Mean,Range,C,The mean represents what each data point would be if the total was shared equally,,Ganita Prakash Ch 13
MATH_C7_1205,7,Math,Connecting the Dots,Data Literacy,Medium,MCQ,Which of the following is a statistical statement rather than a simple fact,New Delhi is the capital,I am ten years old,My pen might last for 2 more weeks,This is a math book,C,Statistical statements involve predictions or summaries based on variable data patterns,,Ganita Prakash Ch 13
MATH_C7_1206,7,Math,Connecting the Dots,Visualisation,Medium,MCQ,Which graph is best for comparing two different data sets side by side,Dot plot,Clustered column graph,Single bar graph,Line graph,B,Clustered column graphs - or double bar graphs - allow for easy visual comparison of two categories,,Ganita Prakash Ch 13
MATH_C7_1207,7,Math,Constructions and Tilings,Geometry,Hard,MCQ,Why can a regular pentagon not tile a plane on its own,It has 5 sides,Its interior angle is 108 degrees which does not divide 360,It is not a regular polygon,It is too small,B,Tessellation requires interior angles to sum exactly to 360 degrees at each vertex,,Ganita Prakash Ch 14
MATH_C7_1208,7,Math,Constructions and Tilings,Geometry,Medium,MCQ,Which regular polygon can tile a plane without gaps or overlaps,Regular Pentagon,Regular Hexagon,Regular Heptagon,Regular Octagon,B,Regular hexagons have 120 degree angles that fit perfectly around a point - 3 * 120 = 360,,Ganita Prakash Ch 14
MATH_C7_1209,7,Math,Constructions and Tilings,Terminology,Easy,MCQ,A pattern of shapes that covers a plane completely without gaps is called a,Symmetry,Tessellation,Construction,Bisector,B,Tessellation - or tiling - is a repetitive arrangement of shapes on a surface,,Ganita Prakash Ch 14
MATH_C7_1210,7,Math,Constructions and Tilings,Geometric Constructions,Medium,MCQ,A line that divides a segment into two equal halves at a 90 degree angle is a,Angle bisector,Perpendicular bisector,Parallel line,Median,B,The perpendicular bisector passes through the midpoint and forms a right angle with the segment,,Ganita Prakash Ch 14
MATH_C7_1211,7,Math,Finding the Unknown,Algebraic Rules,Hard,MCQ,Find the value of x if 5x - 4 = 7,2.2,3,1.5,11,A,Add 4 to get 5x = 11 then divide by 5 to get x = 2.2,,Ganita Prakash Ch 15
MATH_C7_1212,7,Math,Finding the Unknown,Equations,Medium,MCQ,In an equation the expression on the left side of the equals sign is called the,RHS,LHS,Variable,Constant,B,LHS stands for Left Hand Side representing one part of the mathematical balance,,Ganita Prakash Ch 15
MATH_C7_1213,7,Math,Finding the Unknown,Algebraic Patterns,Hard,MCQ,What is the rule for a matchstick pattern where each new position adds 2 sticks starting with 3,n + 2,2n + 1,3n,2n - 1,B,The rule 2n + 1 gives 3 when n=1 and 5 when n=2 following the linear growth,,Ganita Prakash Ch 15
MATH_C7_1214,7,Math,Finding the Unknown,Inverse Operations,Medium,MCQ,Which operation is the inverse of division when solving an equation,Addition,Subtraction,Multiplication,Square root,C,Multiplication is used to undo a division operation on a variable,,Ganita Prakash Ch 15
MATH_C7_1215,7,Math,Finding the Unknown,Equations,Hard,MCQ,If Jasmine uses 99 matchsticks with a rule of 2n + 1 what is the position number n,49,50,98,100,A,Solve 2n + 1 = 99 by subtracting 1 to get 2n = 98 then n = 49,,Ganita Prakash Ch 15
MATH_C7_1216,7,Math,Arithmetic Expressions,Grouping,Medium,MCQ,According to BODMAS which part of the expression 10 - (5 - 2) is solved first,10 - 5,5 - 2,The subtraction outside,Brackets are not needed,B,Operations inside brackets must always be completed before moving to external operations,,Ganita Prakash Ch 2
MATH_C7_1217,7,Math,Working with Fractions,History,Medium,MCQ,Which ancient Indian mathematician provided early rules for multiplying fractions,Aryabhata,Brahmagupta,Varahamihira,Bhaskara,B,Brahmagupta in 628 CE detailed the methods for operating on fractions correctly,,Ganita Prakash Ch 8
MATH_C7_1218,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,What is the decimal representation of thirteen and one-tenth,1.31,13.01,13.1,131,C,Thirteen followed by one-tenth - 0.1 - results in the decimal 13.1,,Ganita Prakash Ch 3
MATH_C7_1219,7,Math,Geometric Twins,Triangles,Medium,MCQ,The sum of the interior angles of any triangle is exactly,90 degrees,180 degrees,360 degrees,270 degrees,B,The Angle Sum Property states that triangle internal angles sum to 180 degrees,,Ganita Prakash II Ch 1
MATH_C7_1220,7,Math,Operations with Integers,Signs,Medium,MCQ,The product of any positive integer and -1 results in its,Reciprocal,Absolute value,Additive inverse,Successor,C,Multiplying a by -1 gives -a which is the value that makes the sum zero,,Ganita Prakash II Ch 2
MATH_C7_1221,7,Math,Number Play,Computational Thinking,Hard,MCQ,Identify the parity of the product 41 multiplied by 39 without calculating,Even,Odd,Zero,Prime,B,The product of two odd numbers is always odd since neither has a factor of 2,,Ganita Prakash Ch 6
MATH_C7_1222,7,Math,Connecting the Dots,Origin,Easy,MCQ,The coordinates of the origin point in a Cartesian plane are,(1 1),(0 0),(1 0),(0 1),B,The origin is the starting point where both axes intersect at zero,,Ganita Prakash Ch 13
MATH_C7_1223,7,Math,Finding Common Ground,Arithmetic Mean,Medium,MCQ,If four students collect a total of 24 guavas what is the mean collection per student,4,6,12,24,B,The mean is total items divided by total people - 24 / 4 = 6,,Ganita Prakash Ch 13
MATH_C7_1224,7,Math,Working with Fractions,Multiplication,Medium,MCQ,What is the result of 1/2 of 1/4,1/2,1/8,1/6,3/4,B,Multiplying numerators - 1 - and denominators - 8 - gives one-eighth,,Ganita Prakash Ch 8
MATH_C7_1225,7,Math,Geometric Twins,Angles,Easy,MCQ,Two angles that sum to 180 degrees are called,Complementary,Supplementary,Adjacent,Linear,B,Supplementary angles are pairs whose measures total 180 degrees,,Ganita Prakash II Ch 1
SCI_C7_1201,7,Science,Life Processes in Animals,Digestion,Medium,MCQ,Which chamber in a cow's stomach is specialized for partially digesting cellulose,Oesophagus,Rumen,Intestine,Gizzard,B,Ruminants use the rumen to break down tough plant material before re-chewing it,,Curiosity Ch 9
SCI_C7_1202,7,Science,Life Processes in Animals,Respiration,Easy,MCQ,The tiny air sacs in human lungs where gas exchange occurs are called,Bronchi,Spiracles,Alveoli,Villi,C,Alveoli are the site where oxygen enters and carbon dioxide leaves the blood,,Curiosity Ch 9
SCI_C7_1203,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Which tissue acts like a pipeline to transport water upwards in plants,Phloem,Xylem,Stomata,Cortex,B,Xylem vessels conduct water and minerals from roots to the leaves,,Curiosity Ch 10
SCI_C7_1204,7,Science,Light: Shadows and Reflections,Optics,Hard,MCQ,What type of image is formed by a plane mirror,Real and upright,Virtual and inverted,Virtual and upright,Real and inverted,C,Plane mirrors create non-projectable images that are upright and laterally inverted,,Curiosity Ch 11
SCI_C7_1205,7,Science,Earth Moon and the Sun,Astronomy,Medium,MCQ,Seasons on Earth are primarily caused by the revolution of Earth and its,Rotation speed,Distance from Moon,Axial tilt,Magnetic field,C,The 23.5 degree tilt causes different regions to receive varying light intensity,,Curiosity Ch 12
SCI_C7_1206,7,Science,Exploring Substances,Indicators,Medium,MCQ,Which natural indicator turns green in a basic solution,Litmus,Turmeric,China Rose,Phenolphthalein,C,China rose indicator turns magenta in acids and green in bases,,Curiosity Ch 2
SCI_C7_1207,7,Science,Changes Around Us,Chemical,Medium,MCQ,Which gas is released when a magnesium ribbon is burned in air,No gas is released,Oxygen is consumed,Carbon dioxide,Nitrogen,B,Burning involves a reaction with oxygen to form magnesium oxide ash,,Curiosity Ch 5
SCI_C7_1208,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,In a distance-time graph what does a straight line represent,Non-uniform motion,Uniform motion,Resting state,Circular motion,B,A straight line indicates that distance increases at a constant rate over time,,Curiosity Ch 8
SCI_C7_1209,7,Science,Wastewater Story,Sanitation,Medium,MCQ,Which organism is used in vermi-processing toilets to treat human waste,Bacteria,Fungi,Earthworms,Viruses,C,Earthworms process waste into high-quality manure known as vermi-cakes,,Curiosity Ch 13
SCI_C7_1210,7,Science,Adolescence,Endocrinology,Medium,MCQ,The male hormone testosterone is produced by which gland,Ovaries,Testes,Pituitary,Thyroid,B,Testes secrete testosterone which triggers physical changes in boys,,Curiosity Ch 6
SCI_C7_1211,7,Science,Heat Transfer in Nature,Physics,Hard,MCQ,Through which mode does heat from the Sun travel across empty space,Conduction,Convection,Radiation,Insulation,C,Radiation uses electromagnetic waves and does not require a material medium,,Curiosity Ch 7
SCI_C7_1212,7,Science,Life Processes in Animals,Digestion,Medium,MCQ,The finger-like projections in the small intestine that aid absorption are,Alveoli,Spiracles,Villi,Guard cells,C,Villi increase the surface area for efficient diffusion of nutrients into blood,,Curiosity Ch 9
SCI_C7_1213,7,Science,Life Processes in Plants,Photosynthesis,Easy,MCQ,The green pigment that helps leaves capture sunlight is,Hemoglobin,Chlorophyll,Melanin,Anthocyanin,B,Chlorophyll is essential for converting light energy into chemical food,,Curiosity Ch 10
SCI_C7_1214,7,Science,Light: Shadows and Reflections,Optics,Medium,MCQ,Which mirror is used by dentists to see an enlarged image of teeth,Convex mirror,Plane mirror,Concave mirror,Parabolic mirror,C,Concave mirrors form enlarged virtual images when the object is very close,,Curiosity Ch 11
SCI_C7_1215,7,Science,Earth Moon and the Sun,Eclipses,Hard,MCQ,A solar eclipse only occurs during which phase of the Moon,Full Moon,New Moon,First Quarter,Waning Crescent,B,The Moon must be between the Sun and Earth - which happens at New Moon,,Curiosity Ch 12
SCI_C7_1216,7,Science,Exploring Substances,pH,Easy,MCQ,What is the nature of a substance that feels soapy and tastes bitter,Acidic,Basic,Neutral,Salty,B,Bases are characterized by their bitter taste and slippery texture,,Curiosity Ch 2
SCI_C7_1217,7,Science,Changes Around Us,Oxidation,Medium,MCQ,The brownish layer formed on iron in the presence of air and moisture is,Zinc,Rust,Copper,Silver,B,Rust is iron oxide formed through a slow chemical reaction with oxygen,,Curiosity Ch 5
SCI_C7_1218,7,Science,Electricity: Circuits and Components,Safety,Medium,MCQ,A device that melts to break a circuit during a power surge is a,Switch,Battery,Fuse,Bulb,C,A fuse is a safety component that prevents electrical fires and damage,,Curiosity Ch 3
SCI_C7_1219,7,Science,Measurement of Time and Motion,Timekeeping,Easy,MCQ,The base S.I. unit for measuring time is the,Minute,Hour,Second,Day,C,The second is the globally accepted standard unit for time intervals,,Curiosity Ch 8
SCI_C7_1220,7,Science,Wastewater Story,Sanitation,Easy,MCQ,World Water Day is celebrated every year on,22-Mar,05-Jun,22-Apr,01-Jan,A,This day raises awareness about the importance of clean freshwater,,Curiosity Ch 13
SCI_C7_1221,7,Science,Life Processes in Animals,Respiration,Medium,MCQ,During exhalation the diaphragm moves in which direction,Downwards,Upwards,Stays flat,To the side,B,The diaphragm relaxes and moves up - pushing air out of the lungs,,Curiosity Ch 9
SCI_C7_1222,7,Science,Light: Shadows and Reflections,Optics,Easy,MCQ,Which material allows only some light to pass through it,Transparent,Translucent,Opaque,Luminous,B,Translucent materials scatter light so objects cannot be seen clearly,,Curiosity Ch 11
SCI_C7_1223,7,Science,Life Processes in Plants,Transport,Hard,MCQ,Which tissue transports glucose from leaves to the rest of the plant,Xylem,Phloem,Stomata,Roots,B,Phloem is the living tissue that carries food produced by photosynthesis,,Curiosity Ch 10
SCI_C7_1224,7,Science,Heat Transfer in Nature,Meteorology,Hard,MCQ,A sea breeze blows during the day because,Water heats faster than land,Land heats faster than water,The Sun is over the ocean,Water is warmer than land,B,Warm air over land rises - drawing in cooler air from the sea,,Curiosity Ch 7
SCI_C7_1225,7,Science,Adolescence,Growth,Easy,MCQ,The visible bulge in the throat of adolescent boys is the,Pharynx,Adam's apple,Tonsil,Epiglottis,B,This is caused by the growth of the larynx - or voice box - during puberty,,Curiosity Ch 6
SST_C7_1201,7,SST,The Rise of Empires,Administration,Hard,MCQ,Who was the chief revenue officer in the Mauryan administration,Samharta,Sannidhata,Senapati,Amatya,A,The Samharta was responsible for tax collection and state budgeting,,Exploring Society Ch 5
SST_C7_1202,7,SST,The Gupta Era,History,Medium,MCQ,Which Chinese traveler recorded a prosperous society during the Gupta age,Xuanzang,Faxian,Ibn Battuta,Megasthenes,B,Faxian visited India in the 5th century CE and wrote about Gupta life,,Exploring Society Ch 7
SST_C7_1203,7,SST,The Age of Reorganisation,Dynasties,Hard,MCQ,The Satavahana dynasty was a major power in which region of India,North,Deccan,Himalayas,Bengal,B,The Satavahanas ruled the central and southern parts of the subcontinent,,Exploring Society Ch 6
SST_C7_1204,7,SST,New Beginnings: Cities and States,Political History,Medium,MCQ,What was the first capital of the Magadha kingdom,Pataliputra,Rajagriha,Vaishali,Taxila,B,Rajagriha was the initial fortified capital before it moved to Pataliputra,,Exploring Society Ch 4
SST_C7_1205,7,SST,Geographical Diversity of India,Hydrology,Medium,MCQ,Which river is famously known as the Dakshin Ganga,Krishna,Kaveri,Godavari,Narmada,C,The Godavari is the longest river in the southern peninsula,,Exploring Society Ch 1
SST_C7_1206,7,SST,Understanding the Weather,Meteorology,Easy,MCQ,Which instrument measures the weight of the air pressing on Earth,Thermometer,Barometer,Rain gauge,Anemometer,B,A barometer is used to determine atmospheric pressure,,Exploring Society Ch 2
SST_C7_1207,7,SST,Climates of India,Geography,Medium,MCQ,Which city in Meghalaya is globally the wettest inhabited place,Cherrapunji,Mawsynram,Shillong,Panaji,B,Mawsynram receives extreme rainfall due to its unique topography,,Exploring Society Ch 3
SST_C7_1208,7,SST,The Rise of Empires,Strategy,Medium,MCQ,Who wrote the Arthashastra - a foundational text on statecraft,Ashoka,Panini,Kautilya,Bindusara,C,Kautilya - or Chanakya - was the advisor to Chandragupta Maurya,,Exploring Society Ch 5
SST_C7_1209,7,SST,The Gupta Era,Metallurgy,Hard,MCQ,The Iron Pillar at Mehrauli demonstrates the skills of ancient Indian,Farmers,Architects,Metallurgists,Scribes,C,The pillar has not rusted for over 1600 years due to advanced science,,Exploring Society Ch 7
SST_C7_1210,7,SST,How the Land Becomes Sacred,Ecology,Medium,MCQ,Areas of forest protected for religious reasons are called,National Parks,Sacred groves,Wildlife sanctuaries,Reserves,B,Sacred groves help conserve biodiversity based on traditional beliefs,,Exploring Society Ch 8
SST_C7_1211,7,SST,The Constitution of India,Governance,Medium,MCQ,The preamble describes India as a Sovereign Socialist Secular Democratic,Monarchy,Republic,Colony,Empire,B,A Republic has an elected head of state rather than a hereditary one,,Exploring Society Ch 10
SST_C7_1212,7,SST,From Barter to Money,Economics,Easy,MCQ,Exchanging goods for other goods without money is the,Credit system,Barter system,Digital pay,Trade bank,B,Barter was the oldest form of exchange before the invention of currency,,Exploring Society Ch 11
SST_C7_1213,7,SST,Understanding Markets,Economics,Easy,MCQ,A trader who buys goods in bulk from a factory is a,Consumer,Retailer,Wholesaler,Farmer,C,Wholesalers act as middlemen between producers and small shops,,Exploring Society Ch 12
SST_C7_1214,7,SST,Exploring Society,Civics,Hard,MCQ,Which Article of the Constitution abolished the practice of Untouchability,Article 14,Article 15,Article 17,Article 21,C,Article 17 ensures social equality by banning discriminatory acts,,Exploring Society Ch 10
SST_C7_1215,7,SST,The Story of Indian Farming,History,Hard,MCQ,Which ancient text provides methods for seed preparation using cow dung,Vedas,Arthashastra,Vrikshayurveda,Ramayana,C,Surapala's Vrikshayurveda is an early Indian text on plant science,,Exploring Society Ch 1
SST_C7_1216,7,SST,Understanding the Weather,Instruments,Easy,MCQ,A Rain Gauge is used by weather stations to measure,Temperature,Rainfall depth,Wind speed,Pressure,B,Rain gauges collect liquid precipitation to calculate its amount,,Exploring Society Ch 2
SST_C7_1217,7,SST,New Beginnings: Cities and States,Social History,Medium,MCQ,The traditional Varna system divided society into how many groups,Two,Three,Four,Five,C,The four groups were Brahmins - Kshatriyas - Vaishyas - and Shudras,,Exploring Society Ch 4
SST_C7_1218,7,SST,The Age of Reorganisation,Dynasties,Medium,MCQ,The Cholas - Cheras - and Pandyas were kingdoms of which region,North India,South India,North-east India,Western India,B,These dynasties are celebrated for their power in ancient Tamilakam,,Exploring Society Ch 6
SST_C7_1219,7,SST,From the Rulers to the Ruled,Civics,Medium,MCQ,In a Democracy the ultimate power is held by the,Army,King,People,Police,C,Democratic power comes from the collective will and voting of citizens,,Exploring Society Ch 9
SST_C7_1220,7,SST,From Barter to Money,History,Medium,MCQ,Standardized silver pieces with symbols used as early coins were,Gold bars,Punch-marked coins,Paper notes,Tokens,B,Punch-marked coins were India's earliest form of standardized currency,,Exploring Society Ch 11
SST_C7_1221,7,SST,Exploring Society,Civics,Easy,MCQ,Universal Adult Franchise gives the right to vote to citizens above,21 years,18 years,25 years,16 years,B,This ensures democratic equality for all adults regardless of background,,Exploring Society Ch 10
SST_C7_1222,7,SST,Geographical Diversity of India,Plateaus,Easy,MCQ,An elevated landform with a flat top is called a,Mountain,Valley,Plateau,Plain,C,Plateaus are also known as tablelands due to their flat high surfaces,,Exploring Society Ch 1
SST_C7_1223,7,SST,Understanding the Weather,Atmosphere,Medium,MCQ,The layer of atmosphere containing the ozone layer is the,Troposphere,Stratosphere,Mesosphere,Exosphere,B,The stratosphere protects Earth from harmful ultraviolet solar rays,,Exploring Society Ch 2
SST_C7_1224,7,SST,Climates of India,Agriculture,Medium,MCQ,Crops sown in the winter season - like wheat - are called,Kharif,Rabi,Zaid,Cash,B,Rabi crops are planted in winter and harvested in spring,,Exploring Society Ch 3
SST_C7_1225,7,SST,The Rise of Empires,Inscriptions,Medium,MCQ,Most of Emperor Ashoka's edicts were written in the language,Sanskrit,Prakrit,Hindi,Persian,B,Ashoka used Prakrit to communicate moral lessons to the common people,,Exploring Society Ch 5
ENG_C7_1201,7,English,My Dear Soldiers,Themes,Medium,MCQ,In the poem soldiers are compared to yogis to emphasize their,Magic powers,Discipline and focus,Orange clothing,Wealth,B,The comparison highlights their steadfast duty in isolated areas,,Poorvi Unit 5
ENG_C7_1202,7,English,Rani Abbakka,History,Medium,MCQ,Rani Abbakka was the courageous queen of,Goa,Ullal,Mangalore,Kochi,B,She is famous for her naval resistance against the Portuguese,,Poorvi Unit 5
ENG_C7_1203,7,English,The Day the River Spoke,Vocabulary,Medium,MCQ,In the story mimicking means,Singing,Copying or imitating,Running,Hiding,B,Jahnavi imitated the natural sounds she heard around the river,,Poorvi Unit 1
ENG_C7_1204,7,English,Try Again,Moral,Easy,MCQ,The primary theme of the poem Try Again is the importance of,Luck,Perseverance,Speed,Money,B,The poem encourages students to keep trying after a failure,,Poorvi Unit 1
ENG_C7_1205,7,English,Three Days to See,Character,Hard,MCQ,Helen Keller's teacher who taught her language through touch was,Florence Nightingale,Annie Sullivan,Mother Teresa,Anne Frank,B,Annie Sullivan opened the world of words to Helen despite her disabilities,,Poorvi Unit 1
ENG_C7_1206,7,English,A Funny Man,Wit,Easy,MCQ,What was unusual about the way the funny man dressed,He wore no clothes,He wore a shoe on his head,He wore a suit,He wore a uniform,B,The poem uses absurd imagery to create humor for the reader,,Poorvi Unit 2
ENG_C7_1207,7,English,Say the Right Thing,Ethics,Medium,MCQ,Effective communication involves being,Loud and fast,Honest and polite,Very quiet,Angry,B,Choosing kind and truthful words is the main lesson of the chapter,,Poorvi Unit 2
ENG_C7_1208,7,English,The Tunnel,Plot,Hard,MCQ,What sound convinced Sunder Singh that a leopard was nearby,A loud roar,A rhythmic sawing sound,Fast footsteps,A whistle,B,The leopard's breathing is described as a characteristic sawing noise,,Poorvi Unit 4
ENG_C7_1209,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants communicate by touching their,Legs,Feelers,Wings,Eyes,B,Ants use their antennae - or feelers - to pass signals and greetings,,An Alien Hand Unit 1
ENG_C7_1210,7,English,An Alien Hand,Sci-Fi,Medium,MCQ,Where did Tilloo and his parents live on their planet,High towers,Underground colony,Forest village,In a boat,B,Martian surface conditions were too hostile to live above ground,,An Alien Hand Unit 10
ENG_C7_1211,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Golu went to the river to find out what the crocodile had for,Breakfast,Dinner,Lunch,Snack,B,His curiosity about the crocodile's habits drives the story,,An Alien Hand Unit 3
ENG_C7_1212,7,English,Three Questions,Theme,Medium,MCQ,According to the hermit the most important time is,Tomorrow,Now,Yesterday,Future,B,The present moment is the only time we have power to act,,Honeycomb Unit 1
ENG_C7_1213,7,English,A Gift of Chappals,Plot,Easy,MCQ,To whom did the children give the master's chappals,Ravi,The beggar,Lalli,The servant,B,They felt pity for the beggar's feet which were burning on the road,,Honeycomb Unit 2
ENG_C7_1214,7,English,Rani Abbakka,Civics,Medium,MCQ,What does the word sovereign mean in the story of Abbakka,Very rich,Independent and free,Very large,Powerful,B,She declared Ullal free from Portuguese control and tribute,,Poorvi Unit 5
ENG_C7_1215,7,English,An Alien Hand,Plot,Hard,MCQ,The spacecraft Tilloo saw was an unmanned probe from,Mars,Earth,Venus,Jupiter,B,Human scientists sent the Viking mission to Mars to search for life,,An Alien Hand Unit 10
ENG_C7_1216,7,English,The Day the River Spoke,Character,Medium,MCQ,Jahnavi's confidant who shared her innermost school dreams was,Her brother,The River,Her teacher,A friend,B,A confidant is a trusted person - or element - one shares secrets with,,Poorvi Unit 1
ENG_C7_1217,7,English,The Rebel,Poetry,Easy,MCQ,The rebel always does the _____ of what the group does,Same,Opposite,More,Better,B,The poem illustrates a character who refuses to follow social norms,,Honeycomb Poem 2
ENG_C7_1218,7,English,Bringing Up Kari,Character,Medium,MCQ,Kari the elephant was most like a,Soldier,Human baby,Wild beast,Giant,B,The narrator describes Kari's naughty and playful baby-like behavior,,An Alien Hand Unit 2
ENG_C7_1219,7,English,My Dear Soldiers,Imagery,Hard,MCQ,Which terrain is NOT mentioned as a guard post in the poem,Valleys,Marshes,Cities,Deserts,C,The poem focuses on soldiers guarding the nation's difficult borders,,Poorvi Unit 5
ENG_C7_1220,7,English,Three Questions,Ethics,Medium,MCQ,According to the hermit the most important affair in life is to,Gain wealth,Do good to the person you are with,Win wars,Read books,B,The parable teaches that kindness is the ultimate purpose of life,,Honeycomb Unit 1
ENG_C7_1221,7,English,Say the Right Thing,Vocabulary,Medium,MCQ,A word part added to the end of a root word is a,Prefix,Suffix,Synonym,Antonym,B,Suffixes change the word's category - like changing happy to happiness,,Poorvi Unit 2
ENG_C7_1222,7,English,The Day the River Spoke,Themes,Medium,MCQ,Jahnavi's story primarily encourages readers to value,Fishing,Nature and education,Big city life,Wealth,B,The narrative focuses on her connection to the environment and school,,Poorvi Unit 1
ENG_C7_1223,7,English,An Alien Hand,Plot,Medium,MCQ,Tilloo was caught in the forbidden passage by,His father,Security cameras,A robot,A friend,B,The colony used electronic surveillance to monitor the restricted zone,,An Alien Hand Unit 10
ENG_C7_1224,7,English,The Tiny Teacher,Life Cycle,Medium,MCQ,What are the young ant larvae called,Cubs,Grubs,Kittens,Chicks,B,Grubs eventually transform into cocoons and then complete ants,,An Alien Hand Unit 1
ENG_C7_1225,7,English,Three Days to See,Theme,Hard,MCQ,On her first day Helen Keller wished to see the,Mountains,Faces of her loved ones,Ocean,Movies,B,She valued human connection above physical landscapes,,Poorvi Unit 1
MATH_C7_1301,7,Math,Connecting the Dots,Coordinate Geometry,Medium,MCQ,What is the abscissa of the point located at (-4; 7) on a Cartesian plane,-4,7,3,-11,A,The abscissa is the x-coordinate of an ordered pair which is the first number -4,,Ganita Prakash Ch 13
MATH_C7_1302,7,Math,Connecting the Dots,Coordinate Geometry,Medium,MCQ,If a point has an ordinate of -5 and lies on the Y-axis what are its coordinates,(-5; 0),(0; -5),(5; -5),(0; 5),B,Points on the Y-axis always have an x-coordinate of zero; the ordinate is the y-value,,Ganita Prakash Ch 13
MATH_C7_1303,7,Math,Connecting the Dots,Data Literacy,Medium,MCQ,Which type of question is 'How many minutes did it take for each student to finish the race',Fixed question,Statistical question,Personal question,Biological question,B,It is statistical because the data collected will show variability among different students,,Ganita Prakash Ch 13
MATH_C7_1304,7,Math,Connecting the Dots,Arithmetic Mean,Hard,MCQ,The mean of 5 observations is 10. If a new observation 16 is added what is the new mean,10,11,13,12,B,Original sum is 5 * 10 = 50. New sum is 50 + 16 = 66. New mean is 66 / 6 = 11,,Ganita Prakash Ch 13
MATH_C7_1305,7,Math,Connecting the Dots,Central Tendency,Hard,MCQ,Which measure is most suitable for representing the 'typical' salary if one person earns a massive bonus,Mean,Range,Median,Total sum,C,The median is a robust measure that is not pulled toward extreme outliers like the mean is,,Ganita Prakash Ch 13
MATH_C7_1306,7,Math,Constructions and Tilings,Geometry,Medium,MCQ,What is the measure of the angle formed by a perpendicular bisector and its segment,45 degrees,60 degrees,90 degrees,180 degrees,C,By definition a perpendicular line meets another at a right angle of 90 degrees,,Ganita Prakash Ch 14
MATH_C7_1307,7,Math,Constructions and Tilings,Tessellations,Hard,MCQ,Which regular polygon has an interior angle of 108 degrees and cannot tile the plane,Square,Regular Pentagon,Regular Hexagon,Equilateral Triangle,B,The interior angle 108 does not divide 360 evenly; leaving gaps in the tiling,,Ganita Prakash Ch 14
MATH_C7_1308,7,Math,Constructions and Tilings,Geometry,Medium,MCQ,How many regular hexagons meet at a single vertex in a standard hexagonal tiling,2,3,4,6,B,Each hexagon angle is 120 degrees; so 3 * 120 = 360 degrees to fill the space,,Ganita Prakash Ch 14
MATH_C7_1309,7,Math,Finding the Unknown,Equations,Medium,MCQ,In the equation 5x - 4 = 11 what is the RHS,5x - 4,5x,11,x,C,RHS stands for Right Hand Side; which is the expression to the right of the equals sign,,Ganita Prakash Ch 15
MATH_C7_1310,7,Math,Finding the Unknown,Inverse Operations,Easy,MCQ,To solve the equation x + 8 = 20 which operation should be applied to both sides,Add 8,Multiply by 8,Subtract 8,Divide by 8,C,Subtraction is the inverse of addition and is used to isolate the variable x,,Ganita Prakash Ch 15
MATH_C7_1311,7,Math,Finding the Unknown,Word Problems,Hard,MCQ,A number doubled and increased by 5 gives 17. Find the number,11,6,12,8,B,Equation: 2x + 5 = 17. Subtract 5: 2x = 12. Divide by 2: x = 6,,Ganita Prakash Ch 15
MATH_C7_1312,7,Math,Arithmetic Expressions,Grouping,Medium,MCQ,Calculate the value of 50 - (10 + 5 * 2) using BODMAS,30,40,20,80,A,Multiply inside brackets first: 5 * 2 = 10. Add: 10 + 10 = 20. Subtract: 50 - 20 = 30,,Ganita Prakash Ch 2
MATH_C7_1313,7,Math,Large Numbers Around Us,Estimation,Medium,MCQ,Which of the following is the nearest thousand for 3;87;69;957,3;87;70;000,3;87;69;000,3;88;00;000,3;87;00;000,A,Since 957 is greater than 500 we round up the thousands place to the next ten thousand,,Ganita Prakash Ch 1
MATH_C7_1314,7,Math,Number Play,Computational Thinking,Hard,MCQ,In the sequence 1; 2; 3; 5; 8; 13... what is the sum of the 7th and 8th terms,34,55,21,45,B,The 7th term is 21 and the 8th is 34. Their sum 21 + 34 is 55,,Ganita Prakash Ch 6
MATH_C7_1315,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,What is the value of 0.25 written as a fraction in simplest form,1/2,1/4,25/10,1/5,B,0.25 is twenty-five hundredths which simplifies to one-fourth,,Ganita Prakash Ch 3
MATH_C7_1316,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Identify the decimal that is 8 hundredths away from 1.09,1.01,1.17,Both a and b,1.9,C,Subtraction: 1.09 - 0.08 = 1.01. Addition: 1.09 + 0.08 = 1.17,,Ganita Prakash Ch 3
MATH_C7_1317,7,Math,Expressions using Letter-Numbers,Logic,Medium,MCQ,If Jasmine has x marbles and gives 5 away; the expression for remaining marbles is,x + 5,5 - x,x - 5,5x,C,Giving away represents subtraction from the original total x,,Ganita Prakash Ch 4
MATH_C7_1318,7,Math,Connecting the Dots,Probability,Medium,MCQ,What is the probability of a coin landing on heads,0,1,0.5,2,C,There is 1 favorable outcome out of 2 total possible outcomes - 1/2 or 0.5,,Ganita Prakash Ch 13
MATH_C7_1319,7,Math,Geometric Twins,Triangles,Easy,MCQ,How many vertices does a triangle have,1,2,3,4,C,A triangle is a three-sided polygon with three corners or vertices,,Ganita Prakash II Ch 1
MATH_C7_1320,7,Math,Operations with Integers,Signs,Medium,MCQ,Find the value of (-2) * (-3) * (-4),24,-24,9,-9,B,An odd number of negative signs in a product always results in a negative value,,Ganita Prakash II Ch 2
MATH_C7_1321,7,Math,Number Play,Computational Thinking,Hard,MCQ,In a 3x3 magic square using numbers 2-10; what is the magic sum,15,18,54,30,B,The total sum is 54. Dividing by 3 rows gives a magic sum of 18,,Ganita Prakash Ch 6
MATH_C7_1322,7,Math,Connecting the Dots,Visualisation,Easy,MCQ,Which graph represents data as dots above a number line,Pie chart,Bar graph,Dot plot,Histogram,C,Dot plots show the frequency of data points along a numerical scale,,Ganita Prakash Ch 13
MATH_C7_1323,7,Math,Working with Fractions,Logic,Medium,MCQ,If you multiply a number by 1/2; the result is _____ the original number,Double,Half,Triple,Same,B,Multiplication by one-half is equivalent to dividing the number by two,,Ganita Prakash Ch 8
MATH_C7_1324,7,Math,Finding Common Ground,Arithmetic Mean,Medium,MCQ,If the total height of 3 trees is 15 meters; what is the average height,3 m,5 m,45 m,10 m,B,Mean height is the total sum divided by the number of objects - 15 / 3 = 5,,Ganita Prakash Ch 13
MATH_C7_1325,7,Math,Constructions and Tilings,Geometry,Hard,MCQ,Which regular polygon can tile a plane alongside regular hexagons and triangles,Octagons,Squares,Pentagons,Decagons,B,Combined vertex angles of different regular polygons must sum to 360 to tile,,Ganita Prakash Ch 14
SCI_C7_1326,7,Science,Life Processes in Animals,Digestion,Medium,MCQ,In which organ are proteins mainly broken down by gastric juices,Small Intestine,Stomach,Mouth,Large Intestine,B,The stomach secretes acidic juices specifically for the digestion of protein,,Curiosity Ch 9
SCI_C7_1327,7,Science,Life Processes in Animals,Anatomy,Easy,MCQ,Which is the largest gland in the human body,Pancreas,Thyroid,Liver,Adrenal,C,The liver is a vital organ and the largest gland; producing bile for fat digestion,,Curiosity Ch 9
SCI_C7_1328,7,Science,Life Processes in Animals,Digestion,Medium,MCQ,Which structure in birds compensates for the lack of teeth to grind food,Beak,Crop,Gizzard,Alveoli,C,The gizzard is a muscular chamber that uses swallowed stones to crush food,,Curiosity Ch 9
SCI_C7_1329,7,Science,Life Processes in Animals,Absorption,Medium,MCQ,Villi are found in the inner walls of which organ,Stomach,Oesophagus,Small Intestine,Heart,C,Villi increase the surface area for the absorption of nutrients into the blood,,Curiosity Ch 9
SCI_C7_1330,7,Science,Life Processes in Animals,Physiology,Hard,MCQ,The movement of the diaphragm during inhalation is,Upwards,Downwards and flat,Side to side,No movement,B,The diaphragm contracts and flattens to expand the chest cavity for air intake,,Curiosity Ch 9
SCI_C7_1331,7,Science,Life Processes in Plants,Photosynthesis,Easy,MCQ,Which of the following are the primary food factories of a plant,Roots,Stems,Leaves,Flowers,C,Leaves capture solar energy using chlorophyll to synthesize food,,Curiosity Ch 10
SCI_C7_1332,7,Science,Life Processes in Plants,Transport,Hard,MCQ,The living tissue that transports glucose from leaves to the roots is,Xylem,Phloem,Stomata,Bark,B,Phloem distributes the sugar produced during photosynthesis to all plant parts,,Curiosity Ch 10
SCI_C7_1333,7,Science,Life Processes in Plants,Botany,Medium,MCQ,What are the specialized cells that control the opening of stomata,Guard cells,Blood cells,Root cells,Nerve cells,A,Guard cells regulate gas exchange and water loss by opening and closing pores,,Curiosity Ch 10
SCI_C7_1334,7,Science,Light: Shadows and Reflections,Optics,Easy,MCQ,A smooth polished surface that reflects light to form an image is a,Lens,Prism,Mirror,Screen,C,Mirrors reflect light rays according to specific laws to create reflections,,Curiosity Ch 11
SCI_C7_1335,7,Science,Light: Shadows and Reflections,Optics,Hard,MCQ,Which type of mirror always forms a virtual and diminished image,Concave,Convex,Plane,Parabolic,B,Convex mirrors provide a wide field of view and make objects look smaller,,Curiosity Ch 11
SCI_C7_1336,7,Science,Light: Shadows and Reflections,Physics,Medium,MCQ,Which instrument uses two mirrors to see objects above the line of sight,Kaleidoscope,Periscope,Microscope,Telescope,B,Periscopes use reflections to allow users to see around or over obstacles,,Curiosity Ch 11
SCI_C7_1337,7,Science,Earth Moon and the Sun,Astronomy,Easy,MCQ,The spinning of the Earth on its own axis is known as,Revolution,Rotation,Orbit,Tiling,B,Rotation takes 24 hours and is the cause of day and night,,Curiosity Ch 12
SCI_C7_1338,7,Science,Earth Moon and the Sun,Eclipses,Medium,MCQ,A solar eclipse occurs when which body passes between the other two,Earth,Sun,Moon,Mars,C,The Moon moves between the Sun and Earth; casting its shadow on Earth,,Curiosity Ch 12
SCI_C7_1339,7,Science,Earth Moon and the Sun,Astronomy,Hard,MCQ,The time taken for the Moon to complete one cycle of phases is about,15 days,29.5 days,365 days,24 hours,B,The synodic month is the interval between two consecutive new moons,,Curiosity Ch 12
SCI_C7_1340,7,Science,Exploring Substances,Chemistry,Medium,MCQ,Which chemical turns dark pink when added to an acidic solution,Litmus,Turmeric,China Rose,Phenolphthalein,C,China rose indicator changes to magenta in acids and green in bases,,Curiosity Ch 2
SCI_C7_1341,7,Science,Exploring Substances,pH,Easy,MCQ,What is the nature of a substance that tastes sour and turns blue litmus red,Base,Acid,Neutral,Metal,B,Acids are defined by their low pH and reaction with blue litmus,,Curiosity Ch 2
SCI_C7_1342,7,Science,Changes Around Us,Chemical,Medium,MCQ,Rusting of iron requires the presence of oxygen and,Nitrogen,Heat,Water vapor,Light,C,Oxidation of iron needs both air and moisture to occur,,Curiosity Ch 5
SCI_C7_1343,7,Science,Changes Around Us,Chemical,Hard,MCQ,Which gas is consumed during the process of combustion or burning,Carbon dioxide,Oxygen,Nitrogen,Hydrogen,B,Burning is a chemical reaction where a substance reacts rapidly with oxygen,,Curiosity Ch 5
SCI_C7_1344,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,What is the standard S.I. unit for measuring speed,km/h,m/min,m/s,cm/s,C,Meter per second is the globally accepted standard unit for speed,,Curiosity Ch 8
SCI_C7_1345,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,If an object covers equal distances in equal intervals of time it is in,Non-uniform motion,Uniform motion,Circular motion,Resting motion,B,Uniform motion results in a straight line on a distance-time graph,,Curiosity Ch 8
SCI_C7_1346,7,Science,Wastewater Story,Sanitation,Medium,MCQ,Which gas produced during sludge decomposition is a renewable fuel,Oxygen,Biogas,Nitrogen,Chlorine,B,Biogas is a mixture of gases produced by anaerobic bacteria in sludge,,Curiosity Ch 13
SCI_C7_1347,7,Science,Wastewater Story,Sanitation,Easy,MCQ,On which day is World Water Day celebrated annually,22-Mar,05-Jun,22-Apr,01-Jan,A,This day aims to raise awareness about the global water crisis,,Curiosity Ch 13
SCI_C7_1348,7,Science,Adolescence,Biology,Medium,MCQ,The visible bulge in the throat of adolescent boys is caused by the,Pharynx,Adam's apple,Tonsils,Epiglottis,B,This bulge results from the growth of the larynx during puberty,,Curiosity Ch 6
SCI_C7_1349,7,Science,Heat Transfer in Nature,Physics,Hard,MCQ,Which mode of heat transfer involves the actual movement of fluid particles,Conduction,Convection,Radiation,Insulation,B,Convection occurs in liquids and gases as warmer portions rise and cooler ones sink,,Curiosity Ch 7
SCI_C7_1350,7,Science,Electricity: Circuits and Components,Safety,Medium,MCQ,Which component breaks the circuit if the electric current becomes too high,Switch,Cell,Fuse,Bulb,C,A fuse protects the circuit from overheating and potential fires,,Curiosity Ch 3
SST_C7_1351,7,SST,The Rise of Empires,Administration,Hard,MCQ,The Mauryan official responsible for guarding the imperial treasury was the,Samharta,Sannidhata,Senapati,Amatya,B,The Sannidhata was the Treasurer-General of the empire according to the Arthashastra,,Exploring Society Ch 5
SST_C7_1352,7,SST,The Rise of Empires,Administration,Hard,MCQ,Which Mauryan official was in charge of collecting tolls on trade,Sitadhyaksha,Sulkadhyaksha,Lohadhyaksha,Navadhyaksha,B,Sulkadhyaksha supervised the toll collections at the city gates,,Exploring Society Ch 5
SST_C7_1353,7,SST,The Gupta Era,Governance,Medium,MCQ,Gupta kings often gave land grants recorded on which material,Palm leaves,Paper,Copper plates,Clay tablets,C,Copper plates were used to formally record the transfer of land to priests or leaders,,Exploring Society Ch 7
SST_C7_1354,7,SST,The Gupta Era,History,Hard,MCQ,Who was the court poet who wrote the Prayaga Prashasti for Samudragupta,Kalidasa,Harisena,Varahamihira,Aryabhata,B,Harisena's inscription on the Allahabad pillar details the king's conquests,,Exploring Society Ch 7
SST_C7_1355,7,SST,The Age of Reorganisation,Dynasties,Medium,MCQ,The Chola Empire was divided into provinces known as,Nadus,Mandalams,Valanadus,Urs,B,Mandalams were the largest administrative units often ruled by princes,,Exploring Society Ch 6
SST_C7_1356,7,SST,The Age of Reorganisation,Civics,Hard,MCQ,In the Chola system the assembly of a Brahmin landholding village was the,Ur,Sabha,Nagaram,Nadu,B,The Sabha was a powerful local body that managed temples and irrigation,,Exploring Society Ch 6
SST_C7_1357,7,SST,How the Land Becomes Sacred,Ecology,Medium,MCQ,A patch of forest protected due to religious beliefs is a,National Park,Sacred grove,Wildlife Sanctuary,Farm,B,Sacred groves are traditional sites for conserving biodiversity in India,,Exploring Society Ch 8
SST_C7_1358,7,SST,From Barter to Money,Economics,Medium,MCQ,Early Indian silver coins with symbols punched on them were called,Dinars,Punch-marked coins,Rupaya,Tokens,B,These were the earliest standardized metallic currency in the subcontinent,,Exploring Society Ch 11
SST_C7_1360,7,SST,From the Rulers to the Ruled,Civics,Easy,MCQ,A government system where power is held by the people through voting is,Monarchy,Dictatorship,Democracy,Oligarchy,C,In a democracy citizens elect their leaders and have fundamental rights,,Exploring Society Ch 9
SST_C7_1361,7,SST,Understanding Markets,Economics,Easy,MCQ,A trader who connects the bulk manufacturer to the local retailer is a,Consumer,Wholesaler,Farmer,Clerk,B,Wholesalers buy in large quantities and distribute to smaller shops,,Exploring Society Ch 12
SST_C7_1362,7,SST,Understanding Markets,Economics,Medium,MCQ,Price in a free market is determined by the balance of supply and,Laws,Demand,Taxes,Weather,B,The interaction between available goods and buyer desire sets the market price,,Exploring Society Ch 12
SST_C7_1363,7,SST,The Story of Indian Farming,Geology,Hard,MCQ,Which soil is formed by the weathering of volcanic rocks and is good for cotton,Alluvial,Black soil,Red soil,Sandy soil,B,Black soil is rich in minerals and holds moisture well for crops like cotton,,Exploring Society Ch 1
SST_C7_1364,7,SST,Geographical Diversity of India,Hydrology,Medium,MCQ,The largest delta in the world located in eastern India is the,Nile Delta,Sundarban Delta,Amazon Delta,Indus Delta,B,The Sundarbans are formed by the Ganga and Brahmaputra rivers,,Exploring Society Ch 1
SST_C7_1365,7,SST,Understanding the Weather,Meteorology,Easy,MCQ,Which instrument is used to measure atmospheric pressure,Thermometer,Barometer,Rain gauge,Anemometer,B,A barometer monitors the weight of air to help predict weather changes,,Exploring Society Ch 2
SST_C7_1366,7,SST,Climates of India,Monsoon,Medium,MCQ,Monsoon winds from the southwest bring rain to India during which months,Dec-Feb,June-Sept,Oct-Nov,March-May,B,The advancing monsoon provides the majority of India's annual rainfall,,Exploring Society Ch 3
SST_C7_1367,7,SST,New Beginnings: Cities and States,History,Medium,MCQ,The traditional social system divided into four broad groups was the,Barter system,Varna system,Guild system,Shreni system,B,The four varnas were Brahmins; Kshatriyas; Vaishyas; and Shudras,,Exploring Society Ch 4
SST_C7_1368,7,SST,The Age of Reorganisation,History,Medium,MCQ,Which dynasty built the famous Kailashanatha Temple at Ellora,Chola,Rashtrakuta,Gupta,Satavahana,B,The temple is a masterpiece of rock-cut architecture in Maharashtra,,Exploring Society Ch 6
SST_C7_1369,7,SST,The Constitution of India,Principles,Medium,MCQ,The word Secular in the Preamble means that the State,Has one religion,Treats all religions equally,Rejects religion,Is ruled by priests,B,Secularism in India ensures freedom of faith for all citizens,,Exploring Society Ch 10
SST_C7_1370,7,SST,Economic Life Around Us,Economics,Easy,MCQ,What is the full form of MSP in government agricultural support,Maximum Sales Price,Minimum Support Price,Many Small Products,Main Seed Project,B,MSP is a guaranteed price to protect farmers from market fluctuations,,Exploring Society Ch 12
SST_C7_1372,7,SST,Understanding the Weather,Atmosphere,Medium,MCQ,Which layer of the atmosphere contains the ozone layer,Troposphere,Stratosphere,Mesosphere,Exosphere,B,The stratosphere filters out harmful UV radiation from the Sun,,Exploring Society Ch 2
SST_C7_1373,7,SST,New Beginnings: Cities and States,History,Medium,MCQ,How many powerful Mahajanapadas existed in India around 600 BCE,8,12,16,20,C,Ancient texts identify sixteen major kingdoms in the north,,Exploring Society Ch 4
SST_C7_1374,7,SST,The Rise of Empires,Strategy,Medium,MCQ,Who was the famous advisor and author of the Arthashastra,Ashoka,Panini,Kautilya,Bindusara,C,Kautilya - also known as Chanakya - guided the Mauryan empire's growth,,Exploring Society Ch 5
ENG_C7_1376,7,English,Three Days to See,Character,Medium,MCQ,Who was the teacher who opened the world of language to Helen Keller,William Wordsworth,Annie Sullivan,Leo Tolstoy,Florence Nightingale,B,Annie Sullivan taught Helen through the sense of touch; opening a new life,,Poorvi Unit 1
ENG_C7_1377,7,English,Three Questions,Theme,Medium,MCQ,According to the hermit when is the most important time for any action,Tomorrow,In the future,Now,Yesterday,C,The present is the only time when we have the power to act effectively,,Honeycomb Unit 1
ENG_C7_1378,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants pass messages to each other by touching their,Legs,Wings,Feelers,Eyes,C,antennae or feelers are the primary tools for signaling in ant colonies,,An Alien Hand Unit 1
ENG_C7_1379,7,English,Rani Abbakka,History,Medium,MCQ,Rani Abbakka was the courageous queen of which coastal principality,Goa,Mangalore,Ullal,Kochi,C,She is celebrated for her naval resistance against the Portuguese,,Poorvi Unit 5
ENG_C7_1381,7,English,Say the Right Thing,Ethics,Medium,MCQ,The main lesson of this chapter is the importance of choosing words that are,Loud and fast,Honest and polite,Long and complex,Angry,B,Kind and truthful communication is vital for healthy relationships,,Poorvi Unit 2
ENG_C7_1382,7,English,A Funny Man,Wit,Easy,MCQ,What did the funny man wear upon his head in the poem,A hat,A shoe,A book,A leaf,B,The absurd imagery of the man is used to create a sense of humor,,Poorvi Unit 2
ENG_C7_1383,7,English,The Tunnel,Plot,Hard,MCQ,What rhythmic sound signaled a leopard presence to Sunder Singh,A loud roar,A rhythmic sawing sound,Footsteps,A whistle,B,The leopard breathing is described as a characteristic sawing noise,,Poorvi Unit 4
ENG_C7_1384,7,English,The Day the River Spoke,Vocabulary,Medium,MCQ,In the story mimicking most nearly means,Singing loudly,Copying or imitating,Running away,Hiding secrets,B,Jahnavi would often imitate the sounds she heard in nature,,Poorvi Unit 1
ENG_C7_1385,7,English,Try Again,Moral,Easy,MCQ,What should you do after a failure according to the poem,Give up,Try again,Cry,Do nothing,B,Perseverance is shown as the essential trait for ultimate success,,Poorvi Unit 1
ENG_C7_1386,7,English,An Alien Hand,Sci-Fi,Medium,MCQ,Tilloo lived with his parents on which planet,Earth,Venus,Mars,Jupiter,C,The Martian civilization lived underground due to hostile surface conditions,,An Alien Hand Unit 10
ENG_C7_1387,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Golu went to the river to find out what the _____ had for dinner,Python,Crocodile,Hippopotamus,Ostrich,B,Golu curiosity about the crocodile's habits drives the story,,An Alien Hand Unit 3
ENG_C7_1391,7,English,Animals Birds and Dr Dolittle,Wit,Medium,MCQ,Dr. Dolittle unique talent was his ability to,Fly,Speak to animals,Move fast,Stop time,B,His talent allowed him to treat animals by understanding their problems,,Poorvi Unit 2
ENG_C7_1392,7,English,Three Days to See,Literary Device,Hard,MCQ,Helen Keller described nature's beauty through which sense primarily,Sight,Touch,Sound,Smell,B,She emphasized the textures and vibrations felt through her fingers,,Poorvi Unit 1
ENG_C7_1393,7,English,An Alien Hand,Plot,Hard,MCQ,The spacecraft Tilloo saw was an unmanned probe from which planet,Mars,Earth,Venus,Jupiter,B,Human scientists sent the Viking mission to Mars to search for life,,An Alien Hand Unit 10
ENG_C7_1394,7,English,My Dear Soldiers,Theme,Hard,MCQ,The phrase prime of your youth in the poem refers to the soldiers,Retirement,Best and most energetic years,Old age,Childhood,B,It signifies the sacrifice of giving one's best years to serve the nation,,Poorvi Unit 5
ENG_C7_1397,7,English,The Day the River Spoke,Character,Medium,MCQ,Who was Jahnavi's confidant in the story,Her brother,The River,Her teacher,A neighbor,B,A confidant is a trusted friend shared secrets with; like the river,,Poorvi Unit 1
ENG_C7_1398,7,English,Try Again,Inspiration,Easy,MCQ,The poem suggests that time will bring you your _____ if you persevere,Money,Reward,Food,Books,B,Success is described as a reward for constant effort and time,,Poorvi Unit 1
ENG_C7_1399,7,English,Rani Abbakka,Civics,Medium,MCQ,The word sovereign in the context of Abbakka kingdom means,Rich,Independent and free,Very large,Weak,B,She declared Ullal free from foreign control and tribute,,Poorvi Unit 5
ENG_C7_1400,7,English,A Homage to Our Brave Soldiers,Values,Easy,MCQ,The National War Memorial is located in which city,Mumbai,Kolkata,New Delhi,Chennai,C,The monument honors Indian Armed Forces personnel who died for the nation,,Poorvi Unit 5
MATH_C7_1401,7,Math,Constructions and Tilings,Geometry,Medium,MCQ,Which tool is used in classical geometric construction to draw arcs of a specific radius,Straightedge,Protractor,Compass,Set square,C,A compass is the primary tool used to create accurate arcs and circles based on geometric relationships,,Ganita Prakash Ch 14
MATH_C7_1402,7,Math,Constructions and Tilings,Geometry,Hard,MCQ,To construct a 30 degree angle which angle must be constructed and then bisected,90 degree angle,45 degree angle,60 degree angle,120 degree angle,C,A 60 degree angle is constructed using an equilateral triangle and its bisection yields 30 degrees,,Ganita Prakash Ch 14
MATH_C7_1403,7,Math,Constructions and Tilings,Tessellations,Medium,MCQ,The interior angle of a regular hexagon is 120 degrees. How many hexagons meet at a vertex to tile a plane,2,3,4,6,B,Three hexagons meet because $3 \\times 120$ equals 360 which is the total angle around a vertex,,Ganita Prakash Ch 14
MATH_C7_1404,7,Math,Constructions and Tilings,Logic,Hard,MCQ,In a checkerboard argument for tiling each $2 \\times 1$ tile must cover,Two white squares,Two black squares,One white and one black square,Any two squares,C,A standard $2 \\times 1$ tile always covers adjacent squares which must be of different colors,,Ganita Prakash Ch 14
MATH_C7_1405,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve for the unknown weight y if the equation is $4 + 2y = 16$,10,6,4,12,B,Subtract 4 from both sides to get $2y = 12$ then divide by 2 to find y is 6,,Ganita Prakash Ch 15
MATH_C7_1406,7,Math,Finding the Unknown,Inverse Operations,Medium,MCQ,What is the inverse operation of multiplication used when solving an equation,Addition,Subtraction,Division,Power,C,Division is used to isolate a variable that is being multiplied by a coefficient,,Ganita Prakash Ch 15
MATH_C7_1407,7,Math,Finding the Unknown,Word Problems,Hard,MCQ,The sum of three consecutive integers is 33. What is the value of the largest integer,10,11,12,13,C,Let integers be $x; x+1; x+2$. $3x + 3 = 33 \\rightarrow 3x = 30 \\rightarrow x = 10$. Largest is $10 + 2 = 12$,,Ganita Prakash Ch 15
MATH_C7_1408,7,Math,Connecting the Dots,Statistics,Hard,MCQ,Which statistical measure is most affected by a single extremely high value in a data set,Median,Mode,Arithmetic Mean,Range,C,The mean uses the sum of all values so an outlier can significantly shift the average upward,,Ganita Prakash Ch 13
MATH_C7_1409,7,Math,Connecting the Dots,Coordinate Geometry,Medium,MCQ,The horizontal axis in a Cartesian plane is known as the,Ordinate,Abscissa,origin,vertex,B,The abscissa or X-axis measures the horizontal displacement of a point from the origin,,Ganita Prakash Ch 13
MATH_C7_1410,7,Math,Connecting the Dots,Coordinate Geometry,Medium,MCQ,A point located at $(0; -3)$ is situated on which axis,X-axis,Y-axis,origin,Quadrant III,B,Any point with an x-coordinate of zero lies on the vertical Y-axis,,Ganita Prakash Ch 13
MATH_C7_1411,7,Math,Arithmetic Expressions,Grouping,Medium,MCQ,Calculate $100 + 200 \\div 10 - 3 \\times 10$ using the correct order of operations,90,120,70,100,A,Perform division and multiplication first then add and subtract from left to right,,Ganita Prakash Ch 2
MATH_C7_1412,7,Math,Working with Fractions,History,Hard,MCQ,Which year did the mathematician Brahmagupta provide rules for fraction operations,321 BCE,628 CE,1000 CE,1500 CE,B,Brahmagupta's work in 628 CE is a key milestone in the history of Indian mathematics,,Ganita Prakash Ch 8
MATH_C7_1413,7,Math,A Peek Beyond the Point,Decimals,Medium,MCQ,Which decimal number is exactly halfway between 0.5 and 0.6,0.51,0.55,0.505,0.59,B,Adding 0.5 and 0.6 gives 1.1 and dividing by 2 results in 0.55,,Ganita Prakash Ch 3
MATH_C7_1414,7,Math,Geometric Twins,Triangles,Medium,MCQ,What is the sum of any two sides of a triangle compared to the third side,Less than,Equal to,Always greater than,Twice as much,C,The triangle inequality theorem states that the sum of any two sides must exceed the third,,Ganita Prakash II Ch 1
MATH_C7_1415,7,Math,Operations with Integers,Signs,Medium,MCQ,What is the result of $(-1)$ raised to the power of 100,-1,1,100,-100,B,Any negative number raised to an even power results in a positive value,,NCERT Ch 11
SCI_C7_1401,7,Science,Life Processes in Animals,Digestion,Medium,MCQ,Which organ in the human body secretes hydrochloric acid to kill bacteria,Liver,Pancreas,Stomach,Mouth,C,The stomach lining produces acid to sanitize food and aid in protein breakdown,,Curiosity Ch 9
SCI_C7_1402,7,Science,Life Processes in Animals,Anatomy,Hard,MCQ,What is the largest gland in the human body,Stomach,Pancreas,Liver,Gallbladder,C,The liver is the body's largest internal organ and is classified as a vital gland,,Curiosity Ch 9
SCI_C7_1403,7,Science,Life Processes in Animals,Physiology,Medium,MCQ,The movement of the diaphragm during exhalation is,Upwards,Downwards,Stays flat,Towards the back,A,The diaphragm relaxes and moves up to push air out of the lungs during exhalation,,Curiosity Ch 9
SCI_C7_1404,7,Science,Life Processes in Animals,Digestion,Medium,MCQ,Which animal uses a muscular gizzard to grind food instead of teeth,Cow,Snake,Bird,Frog,C,Birds swallow stones into the gizzard to mechanically crush their food,,Curiosity Ch 9
SCI_C7_1405,7,Science,Life Processes in Plants,Botany,Easy,MCQ,Which part of the plant is responsible for most of its photosynthesis,Root,Flower,Leaf,Stem,C,Leaves contain the highest concentration of chlorophyll needed to capture light energy,,Curiosity Ch 10
SCI_C7_1406,7,Science,Life Processes in Plants,Transport,Hard,MCQ,Which tissue transports water and minerals from the roots to the leaves,Phloem,Xylem,Stomata,Bark,B,Xylem acts as a unidirectional pipeline carrying soil nutrients to the rest of the plant,,Curiosity Ch 10
SCI_C7_1407,7,Science,Life Processes in Plants,Botany,Medium,MCQ,The tiny pores on the underside of leaves for gas exchange are,Alveoli,Spiracles,Stomata,Villi,C,Stomata allow $CO_2$ to enter and $O_2$ to leave the plant during photosynthesis,,Curiosity Ch 10
SCI_C7_1408,7,Science,Light: Shadows and Reflections,Optics,Medium,MCQ,Which mirror is typically used as a dentist's mirror for enlarged views,Convex,Concave,Plane,Double convex,B,Concave mirrors form magnified virtual images when an object is placed very close,,Curiosity Ch 11
SCI_C7_1409,7,Science,Light: Shadows and Reflections,Optics,Easy,MCQ,Light travels in which type of path,Curved,Straight,Wavy,Random,B,Rectilinear propagation means light moves in straight lines unless obstructed,,Curiosity Ch 11
SCI_C7_1410,7,Science,Light: Shadows and Reflections,Optics,Medium,MCQ,An image that can be obtained on a screen is called a,Virtual image,Real image,False image,Invisible image,B,Real images are formed by converging rays and can be projected onto surfaces,,Curiosity Ch 11
SCI_C7_1411,7,Science,Earth Moon and the Sun,Astronomy,Hard,MCQ,A lunar eclipse occurs during which phase of the Moon,New Moon,First Quarter,Full Moon,Last Quarter,C,Earth must be between the Sun and a Full Moon for a lunar eclipse to happen,,Curiosity Ch 12
SCI_C7_1412,7,Science,Earth Moon and the Sun,Astronomy,Medium,MCQ,Seasons are caused by Earth's revolution and its,Size,Distance from Sun,Axial tilt,Surface water,C,The 23.5 degree tilt causes different sunlight intensity as Earth orbits the Sun,,Curiosity Ch 12
SCI_C7_1413,7,Science,Exploring Substances,Indicators,Medium,MCQ,Which indicator turns reddish-brown in basic solutions like soap,Litmus,Turmeric,China Rose,Phenolphthalein,B,Turmeric is a natural indicator that changes color from yellow to red in base,,Curiosity Ch 2
SCI_C7_1414,7,Science,Changes Around Us,Chemical,Easy,MCQ,The formation of rust on iron is an example of a,Physical change,Chemical change,Biological change,No change,B,Rusting results in a new substance - iron oxide - and is irreversible,,Curiosity Ch 5
SST_C7_1401,7,SST,Rise of Empires,Administration,Hard,MCQ,Which Mauryan official was the superintendent of agriculture,Sitadhyaksha,Lohadhyaksha,Senapati,Samharta,A,The Sitadhyaksha managed crown lands and agricultural production for the empire,,Exploring Society Ch 5
SST_C7_1402,7,SST,Rise of Empires,History,Medium,MCQ,Who was the chief advisor and author of the Arthashastra,Ashoka,Bindusara,Kautilya,Megasthenes,C,Kautilya - or Chanakya - was the strategic architect of the Mauryan state,,Exploring Society Ch 5
SST_C7_1403,7,SST,The Gupta Era,History,Medium,MCQ,The 1600 year old Iron Pillar that does not rust is located in,Patna,Mehrauli,Varanasi,Sarnath,B,The Mehrauli pillar in Delhi showcases ancient Indian metallurgical skills,,Exploring Society Ch 7
SST_C7_1404,7,SST,The Gupta Era,History,Hard,MCQ,Who was the court poet that wrote the Prayaga Prashasti for Samudragupta,Kalidasa,Harisena,Varahamihira,Aryabhata,B,Harisena's pillar inscription celebrates the king's conquests and qualities,,Exploring Society Ch 7
SST_C7_1405,7,SST,The Age of Reorganisation,Administration,Hard,MCQ,In the Chola system the assembly of a common village was called,Sabha,Ur,Nagaram,Mandalam,B,The Ur was the general assembly of local residents in Chola settlements,,Exploring Society Ch 6
SST_C7_1406,7,SST,The Age of Reorganisation,Administration,Medium,MCQ,Chola provinces were known by which technical term,Valanadu,Nadu,Mandalam,Kottam,C,Mandalams were the largest provincial units often governed by princes,,Exploring Society Ch 6
SST_C7_1407,7,SST,How the Land Becomes Sacred,Ecology,Medium,MCQ,The sacred groves in Kerala are traditionally known as,Kovilkadu,Kavu,Devgudi,Shrenis,B,Kavu are community-protected forest patches dedicated to local deities,,Exploring Society Ch 8
SST_C7_1408,7,SST,The Constitution of India,Principles,Medium,MCQ,Which term in the Preamble means that India is an independent nation,Socialist,Secular,Sovereign,Republic,C,Sovereignty implies that India is free from any external control or authority,,Exploring Society Ch 10
SST_C7_1410,7,SST,From Barter to Money,Economics,Easy,MCQ,The system of exchanging goods without using money is called,Banking,Barter system,Retail trade,Credit,B,Barter was the earliest mode of trade before the development of currency,,Exploring Society Ch 11
SST_C7_1411,7,SST,Understanding Markets,Civics,Medium,MCQ,A sequence of markets connecting producers to consumers is a,Trade ring,Market chain,Retail circle,Supply loop,B,The market chain involves factories - wholesalers - and local retailers,,Exploring Society Ch 12
SST_C7_1412,7,SST,Understanding Markets,Economics,Medium,MCQ,The price in a market is determined by the interaction of supply and,Taxes,Demand,Laws,Weather,B,Economic value fluctuates based on availability and buyer interest,,Exploring Society Ch 12
SST_C7_1413,7,SST,Geographical Diversity of India,Hydrology,Medium,MCQ,Which river is famously referred to as the Dakshin Ganga,Krishna,Kaveri,Godavari,Narmada,C,The Godavari is the longest and most significant river in South India,,Exploring Society Ch 1
SST_C7_1414,7,SST,Understanding the Weather,Meteorology,Easy,MCQ,Which instrument measures the weight of the air above us,Thermometer,Barometer,Rain gauge,Anemometer,B,Barometers monitor air pressure which is critical for weather forecasting,,Exploring Society Ch 2
SST_C7_1415,7,SST,Climates of India,Geography,Hard,MCQ,Which city in Meghalaya is the wettest inhabited place on Earth,Cherrapunji,Shillong,Mawsynram,Tura,C,Mawsynram receives the highest annual rainfall due to its geography,,Exploring Society Ch 3
ENG_C7_1402,7,English,Try Again,Poetry,Easy,MCQ,What is the core message of the poem Try Again,Success is luck,Perseverance,Give up,Be afraid,B,The poem encourages students to keep attempting after a failure,,Poorvi Unit 1
ENG_C7_1405,7,English,Say the Right Thing,Ethics,Medium,MCQ,Effective communication involves choosing words that are honest and,Loud,Polite,Fast,Complex,B,The chapter teaches the importance of kind and truthful speech,,Poorvi Unit 2
ENG_C7_1406,7,English,My Brother's Great Invention,Theme,Medium,MCQ,The story highlights the bond between siblings and the power of,Money,Creativity,War,Fear,B,Creative thinking and trial-and-error are the central themes of the story,,Poorvi Unit 3
ENG_C7_1407,7,English,The Tunnel,Plot,Hard,MCQ,What sound convinced Sunder Singh that a leopard was inside the tunnel,A roar,A rhythmic sawing sound,Footsteps,A whistle,B,The leopard breathing is described as a characteristic sawing noise,,Poorvi Unit 4
ENG_C7_1408,7,English,Conquering the Summit,Heroism,Medium,MCQ,Which world-famous mountain is the subject of this adventure story,Mount K2,Mount Everest,Mount Kangchenjunga,Mount Anamudi,B,The story recounts the challenges of scaling the highest peak on Earth,,Poorvi Unit 4
ENG_C7_1409,7,English,A Homage to Our Brave Soldiers,Values,Easy,MCQ,Where is the National War Memorial located in India,Mumbai,Kolkata,New Delhi,Chennai,C,This monument honors the personnel of the Indian Armed Forces,,Poorvi Unit 5
ENG_C7_1412,7,English,Three Questions,Theme,Medium,MCQ,The hermit's final answer for the right time to act was,Tomorrow,Now,Noon,Next week,B,The present moment is the only time we have the power to act,,Honeycomb Unit 1
ENG_C7_1415,7,English,An Alien Hand,Sci-Fi,Medium,MCQ,Where did Tilloo live with his parents on their planet,Underground colony,High tower,Forest village,In a boat,A,Hostile surface conditions forced the Martian society underground,,An Alien Hand Unit 10
MATH_C7_1416,7,Math,Number Play,Computational Thinking,Hard,MCQ,What is the sum of the first ten odd numbers,50,100,110,200,B,The sum of the first n odd numbers is $n^2$ - so $10 \\times 10 = 100$,,Ganita Prakash Ch 6
MATH_C7_1417,7,Math,Parallel and Intersecting Lines,Angles,Medium,MCQ,What is the sum of two co-interior angles in parallel lines,90 degrees,180 degrees,360 degrees,270 degrees,B,Interior angles on the same side of a transversal are supplementary,,Ganita Prakash Ch 5
MATH_C7_1418,7,Math,Finding the Unknown,Equations,Medium,MCQ,Identify which of the following is a balanced equation,$3x + 5$,$5y - 4$,$4z = 20$,$x + y$,C,An equation must have an equals sign showing the balance of values,,Ganita Prakash Ch 15
MATH_C7_1419,7,Math,Geometric Twins,Polygons,Easy,MCQ,A polygon with three equal sides is called a,Isosceles,Equilateral,Scalene,Right,B,Equilateral triangles have all sides and all angles equal,,Ganita Prakash II Ch 1
SCI_C7_1416,7,Science,Exploring Substances,pH,Medium,MCQ,A substance that tastes bitter and feels soapy to touch is a,Acid,Base,Neutral,Metal,B,Bases are characterized by their bitter taste and slippery texture,,Curiosity Ch 2
SCI_C7_1417,7,Science,Heat Transfer in Nature,Physics,Hard,MCQ,Which mode of heat transfer involves the actual movement of particles,Conduction,Convection,Radiation,Insulation,B,Convection occurs in fluids where warmer portions rise and cooler ones sink,,Curiosity Ch 7
SCI_C7_1418,7,Science,Changes Around Us,Oxidation,Medium,MCQ,Depositing a layer of zinc on iron to prevent rusting is called,Crystallization,Neutralization,Galvanization,Oxidation,C,Galvanization provides a protective zinc coating for iron objects,,Curiosity Ch 5
SCI_C7_1419,7,Science,Adolescence,Endocrinology,Medium,MCQ,Chemical messengers secreted by endocrine glands are called,Enzymes,Hormones,Proteins,Vitamins,B,Hormones regulate bodily changes and capabilities during growth,,Curiosity Ch 6
SCI_C7_1420,7,Science,Wastewater Story,Sanitation,Medium,MCQ,Which byproduct of wastewater treatment is used as renewable fuel,Scum,Biogas,Silt,Oxygen,B,Anaerobic bacteria break down sludge to produce methane-rich biogas,,Curiosity Ch 13
SST_C7_1416,7,SST,Exploring Society,Civics,Easy,MCQ,The right to vote for all citizens above 18 is called,Adult vote,Universal Adult Franchise,Public choice,Majority rule,B,This principle ensures democratic equality for all adult citizens,,Exploring Society Ch 10
SST_C7_1417,7,SST,Constitution of India,Governance,Medium,MCQ,The Preamble starts with the words We the,People of India,Land of India,Justice of India,Freedom of India,A,The Preamble represents the collective will of the Indian people,,Exploring Society Ch 10
SST_C7_1418,7,SST,Understanding Markets,Economics,Easy,MCQ,A wholesaler primarily sells goods in bulk to,Consumers,Retailers,Manufacturers,Farmers,B,Wholesalers act as bulk distributors in the market chain,,Exploring Society Ch 12
SST_C7_1419,7,SST,Rise of Empires,History,Easy,MCQ,Which empire unified a large part of India for the first time,Gupta,Maurya,Maratha,Chola,B,The Mauryan Empire was the first pan-regional empire in India,,Exploring Society Ch 5
SST_C7_1420,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Which force holds the atmosphere in place around the Earth,Magnetic,Gravity,Centrifugal,Friction,B,Earth's gravitational pull prevents the gaseous layer from escaping,,Exploring Society Ch 2
ENG_C7_1416,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,The word dauntless means brave and,Afraid,Fearless,Angry,Old,B,Characterizes her bravery in resisting foreign invaders,,Poorvi Unit 5
ENG_C7_1417,7,English,Three Questions,Ethics,Medium,MCQ,The most important person according to the hermit is the,King,Person you are with,Wise man,Soldier,B,Focuses on the importance of the current human relationship,,Honeycomb Unit 1
ENG_C7_1418,7,English,Try Again,Moral,Easy,MCQ,Perseverance in the face of failure leads to,Sadness,Success,Luck,Boredom,B,The poem motivates students to keep attempting after setbacks,,Poorvi Unit 1
ENG_C7_1420,7,English,An Alien Hand,Plot,Medium,MCQ,Tilloo took his father's security card while he was taking a,Siesta,Walk,Meeting,Lesson,A,Tilloo used the opportunity of his father's nap to enter the passage,,An Alien Hand Unit 10
MATH_C7_1421,7,Math,Expressions using Letter-Numbers,Logic,Medium,MCQ,Write the expression for Twice a number n decreased by 10,$10 - 2n$,$2n - 10$,$2(n - 10)$,$n/2 - 10$,B,Twice a number is $2n$ and decreasing it means subtraction,,Ganita Prakash Ch 4
MATH_C7_1422,7,Math,Finding Common Ground,Arithmetic Mean,Medium,MCQ,If 3 trees have a total height of 15m what is the average height,3m,5m,45m,10m,B,Mean is the total sum divided by the number of objects,,Ganita Prakash Ch 13
MATH_C7_1423,7,Math,Working with Fractions,Operations,Medium,MCQ,What is the reciprocal of the fraction 1/10,1,10,0.1,100,B,Inversion of the fraction yields the integer ten,,Ganita Prakash Ch 8
MATH_C7_1424,7,Math,Geometric Twins,Triangles,Medium,MCQ,Sum of interior angles of a triangle is always,90 degrees,180 degrees,360 degrees,270 degrees,B,The Angle Sum Property is a fundamental geometric theorem,,Ganita Prakash II Ch 1
MATH_C7_1425,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,What is the decimal form of nine-tenths,0.09,0.9,9,90,B,Nine-tenths translates to the single decimal place value 0.9,,Ganita Prakash Ch 3
SCI_C7_1421,7,Science,Changes Around Us,Chemical,Easy,MCQ,Burning of wood is classified as which change,Physical,Chemical,Temporary,Reversible,B,New substances like ash and smoke are permanently formed,,Curiosity Ch 5
SCI_C7_1422,7,Science,Exploring Substances,Indicators,Medium,MCQ,China rose indicator turns basic solutions to which color,Pink,Green,Blue,Yellow,B,China rose turns magenta in acids and green in basic environments,,Curiosity Ch 2
SCI_C7_1423,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Heat transfer in solid metals occurs by,Conduction,Convection,Radiation,Evaporation,A,Thermal energy moves through solids via direct molecular contact,,Curiosity Ch 7
SCI_C7_1424,7,Science,Wastewater Story,Treatment,Easy,MCQ,What does the acronym WWTP stand for,Water Works Treatment Project,Wastewater Treatment Plant,World Water Task Plan,Waste Water Tool Part,B,Standard term for sewage and industrial waste processing facilities,,Curiosity Ch 13
SCI_C7_1425,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Which gas is released by plants as a byproduct of photosynthesis,Carbon dioxide,Oxygen,Nitrogen,Hydrogen,B,Oxygen is produced when plants synthesize glucose from sunlight,,Curiosity Ch 10
SST_C7_1421,7,SST,From Barter to Money,Economics,Easy,MCQ,The system of exchanging goods directly for other goods is,Banking,Barter system,Retail,Trade,B,Primary form of exchange before the invention of currency,,Exploring Society Ch 11
SST_C7_1422,7,SST,Understanding Markets,Economics,Easy,MCQ,Where are many shops under one roof in urban areas,Weekly markets,Shopping malls,Fairs,Local streets,B,Malls are large enclosed multi-shop retail complexes,,Exploring Society Ch 12
SST_C7_1423,7,SST,Rise of Empires,History,Medium,MCQ,Who was the chief political strategist for the Mauryan Empire,Ashoka,Kautilya,Megasthenes,Seleucus,B,Chanakya or Kautilya provided the blueprint for Mauryan statecraft,,Exploring Society Ch 5
SST_C7_1424,7,SST,The Constitution of India,Governance,Medium,MCQ,Who is known as the architect of the Indian Constitution,Nehru,B R Ambedkar,Gandhi,Prasad,B,He served as the leader of the constitutional drafting committee,,Exploring Society Ch 10
SST_C7_1425,7,SST,Understanding the Weather,Atmosphere,Easy,MCQ,Which instrument measures the amount of rainfall,Barometer,Thermometer,Rain gauge,Anemometer,C,Meteorological instrument for tracking liquid precipitation depth,,Exploring Society Ch 2
ENG_C7_1421,7,English,Rani Abbakka,History,Medium,MCQ,Rani Abbakka was the courageous queen of which coastal area,Goa,Ullal,Mangalore,Kochi,B,She is a famous naval warrior from the Karnataka coast,,Poorvi Unit 5
ENG_C7_1422,7,English,Try Again,Moral,Easy,MCQ,Success comes after perseverance in which poem,The Rebel,Try Again,The Tunnel,Rani Abbakka,B,The poem motivates students to keep attempting despite setbacks,,Poorvi Unit 1
ENG_C7_1423,7,English,Three Questions,Theme,Medium,MCQ,The right time for action according to the hermit is,Tomorrow,Now,Yesterday,Noon,B,Only the present moment allows for active human control,,Honeycomb Unit 1
ENG_C7_1424,7,English,The Tiny Teacher,Life Cycle,Easy,MCQ,What are the young ones of ants called,Grubs,Larva,Puppies,Kittens,A,The text uses the term grubs specifically for ant larvae,,An Alien Hand Unit 1
ENG_C7_1425,7,English,An Alien Hand,Sci-Fi,Medium,MCQ,On which planet did Tilloo live with his parents,Earth,Mars,Venus,Jupiter,B,Martian society was forced underground due to surface conditions,,An Alien Hand Unit 10
MATH_C7_1426,7,Math,Finding the Unknown,Equations,Medium,MCQ,Find the value of m if $5m = -10$,2,-2,5,-10,B,Division by 5 isolates the variable to find negative two,,Ganita Prakash Ch 7
MATH_C7_1427,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,What is the mean of 2 7 9 4 3,4,5,6,3,B,Sum of 25 divided by the count of 5 values equals 5,,Ganita Prakash Ch 13
MATH_C7_1428,7,Math,Working with Fractions,Operations,Hard,MCQ,Area of a rectangle with sides 15/4 and 48/5 is,36,32,27,40,A,Multiplication of lengths results in 720/20 which simplifies to 36,,Ganita Prakash Ch 8
MATH_C7_1429,7,Math,A Peek Beyond the Point,Measurement,Easy,MCQ,One meter consists of how many millimeters,100,10,1000,1,C,Standard metric conversion shows a factor of 1000 between the two,,Ganita Prakash Ch 3
MATH_C7_1430,7,Math,Large Numbers Around Us,Place Value,Easy,MCQ,One hundred lakhs is equal to how many crores,1 crore,1 million,10 crores,1000,A,In the Indian numbering system 100 lakhs make one crore,,Ganita Prakash Ch 1
SCI_C7_1427,7,Science,Exploring Substances,Indicators,Medium,MCQ,Turmeric turns reddish-brown in solutions that are,Acidic,Basic,Neutral,Salty,B,The color change occurs when yellow turmeric reacts with base,,Curiosity Ch 2
SCI_C7_1428,7,Science,Changes Around Us,Chemical,Medium,MCQ,Rusting of iron is classified as a,Physical change,Chemical change,Reversible change,Temporary change,B,Formation of iron oxide is a permanent chemical transformation,,Curiosity Ch 5
SCI_C7_1429,7,Science,Electricity: Circuits and Components,Switch,Easy,MCQ,What is used to open or close an electrical circuit,Bulb,Switch,Wire,Cell,B,A switch acts as a control mechanism to manage current flow,,Curiosity Ch 3
SCI_C7_1430,7,Science,Life Processes in Animals,Digestion,Easy,MCQ,Where does the process of human digestion begin,Stomach,Mouth,Small intestine,Esophagus,B,Breakdown begins with chewing and salivary action in the mouth,,Curiosity Ch 9
SST_C7_1426,7,SST,Climates of India,Geography,Medium,MCQ,The wettest place on Earth is Mawsynram located in,Assam,Meghalaya,Nagaland,Mizoram,B,Meghalaya state geography traps monsoon winds causing rain,,Exploring Society Ch 3
SST_C7_1427,7,SST,Constitution of India,Rights,Hard,MCQ,Which Article abolished the practice of untouchability,14,15,17,21,C,Article 17 specifically ensures social equality for all citizens,,Exploring Society Ch 10
SST_C7_1428,7,SST,Understanding Markets,Economics,Medium,MCQ,Distributors buy goods from manufacturers and sell them to,Consumers,Retailers,Farmers,Agents,B,They act as the link between big producers and local shops,,Exploring Society Ch 12
SST_C7_1429,7,SST,Rise of Empires,History,Easy,MCQ,Which region became powerful due to iron and fertile land,Magadha,Kalinga,Avanti,Kosala,A,Magadha's resources supported a large army and weaponry,,Exploring Society Ch 5
SST_C7_1430,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,The layer where most weather events occur is the,Troposphere,Stratosphere,Mesosphere,Exosphere,A,This lowest layer contains nearly all air mass and water vapor,,Exploring Society Ch 2
ENG_C7_1426,7,English,Rani Abbakka,History,Medium,MCQ,Rani Abbakka fought against which foreign navy,British,Portuguese,French,Dutch,B,She famously resisted Portuguese control of coastal trade,,Poorvi Unit 5
ENG_C7_1427,7,English,Try Again,Poetry,Easy,MCQ,What is the essential trait for success in the poem,Luck,Perseverance,Giving up,Wealth,B,Core moral lesson of attempting tasks despite setbacks,,Poorvi Unit 1
ENG_C7_1428,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants pass greetings to each other by touching their,Feelers,Legs,Heads,Wings,A,antennae or feelers are used for tactile signaling,,An Alien Hand Unit 1
ENG_C7_1429,7,English,Three Questions,Theme,Medium,MCQ,The king believed three answers would ensure he never,Became poor,Failed in life,Lost a war,Lost his friends,B,Belief system of the ruler seeking perfect governance,,Honeycomb Unit 1
ENG_C7_1430,7,English,The Day the River Spoke,Character,Medium,MCQ,Jahnavi's confidant in the story was the,Father,River,Teacher,Friend,B,She shared her school dreams and feelings with the waterway,,Poorvi Unit 1
MATH_C7_1431,7,Math,Finding the Unknown,Equations,Medium,MCQ,What is x in the equation $x + 10 = 25$,15,35,10,5,A,Standard subtraction of ten from both sides to find 15,,Ganita Prakash Ch 15
MATH_C7_1432,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,What is the mean of 1 2 3 4 5,2,3,4,5,B,The arithmetic average of consecutive natural numbers,,Ganita Prakash Ch 13
MATH_C7_1433,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,What is the value of $0.5 \\times 0.5$,2.5,0.25,0.05,1,B,Standard multiplication of tenths results in hundredths,,Ganita Prakash Ch 3
MATH_C7_1435,7,Math,Geometric Twins,Polygons,Easy,MCQ,A triangle with three equal sides is called,Isosceles,Equilateral,Scalene,Right,B,Regular polygon classification based on side equality,,Ganita Prakash II Ch 1
SCI_C7_1431,7,Science,Changes Around Us,Chemical,Medium,MCQ,Which metal is used as a layer in galvanization,Copper,Zinc,Gold,Lead,B,Prevents iron from rusting by providing a protective coat,,Curiosity Ch 5
SCI_C7_1432,7,Science,Exploring Substances,Indicators,Medium,MCQ,Turmeric indicator turns red in which solution,Acidic,Basic,Neutral,Salty,B,Commonly observed with laundry soap or lime water,,Curiosity Ch 2
SCI_C7_1433,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,The standard S.I. unit for speed is,km/h,m/s,m/min,cm/s,B,Globally accepted base metric unit for speed data,,Curiosity Ch 8
SCI_C7_1434,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Heat radiation travels through which medium,Solids only,Liquids only,Vacuum,Metals,C,Method of transfer requiring no material particles,,Curiosity Ch 7
SCI_C7_1435,7,Science,Life Processes in Plants,Botany,Medium,MCQ,The tiny pores used for gas exchange are,Chlorophyll,Stomata,Vessels,Roots,B,Leaf openings controlled by guard cells for gas flow,,Curiosity Ch 10
SST_C7_1431,7,SST,Exploring Society,Civics,Easy,MCQ,Right to vote for all adults is known as,Elite vote,Universal Adult Franchise,Public choice,Majority rule,B,Ensures democratic equality across all adult populations,,Exploring Society Ch 10
SST_C7_1432,7,SST,Constitution of India,Governance,Medium,MCQ,The leader of the constitutional drafting committee was,Nehru,B R Ambedkar,Gandhi,Prasad,B,Chief architect who finalized the Indian Constitution,,Exploring Society Ch 10
SST_C7_1433,7,SST,Understanding Markets,Economics,Easy,MCQ,Large enclosed areas with many shops are,Weekly markets,Shopping malls,Rural fairs,Local streets,B,Urban multi-retail complexes under one roof,,Exploring Society Ch 12
SST_C7_1434,7,SST,Rise of Empires,History,Medium,MCQ,Who wrote the famous book Arthashastra,Ashoka,Kautilya,Panini,Chandragupta,B,Strategic political and economic manual for Mauryas,,Exploring Society Ch 5
SST_C7_1435,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,A rain gauge is an instrument for measuring,Pressure,Temperature,Rainfall,Wind,C,Meteorological tool for precipitation collection,,Exploring Society Ch 2
ENG_C7_1431,7,English,Rani Abbakka,History,Medium,MCQ,Which kingdom did Rani Abbakka rule,Goa,Ullal,Mangalore,Kochi,B,Coastal principality famous for naval bravery,,Poorvi Unit 5
ENG_C7_1432,7,English,Three Questions,Ethics,Medium,MCQ,Hermit's most important person is the,King,Person you are with,Wise man,Soldier,B,Moral lesson on valuing the present relationship,,Honeycomb Unit 1
ENG_C7_1434,7,English,A Gift of Chappals,Plot,Easy,MCQ,Children gave the master's shoes to the,Ravi,Beggar,Lalli,Servant,B,Compassionate act for feet burning in the heat,,Honeycomb Unit 2
MATH_C7_1437,7,Math,Connecting the Dots,Coordinate Geometry,Medium,MCQ,Point (-3; 5) is in which quadrant,I,II,III,IV,B,Negative horizontal and positive vertical region,,Ganita Prakash Ch 13
MATH_C7_1439,7,Math,Working with Fractions,Simplification,Medium,MCQ,24/56 simplified to its lowest form is,12/28,3/7,6/14,4/8,B,Divide by common factor eight for simplest form,,Ganita Prakash Ch 8
MATH_C7_1440,7,Math,Geometric Twins,Triangles,Medium,MCQ,The internal angles of a triangle sum to,90,180,360,270,B,Angle Sum Property for all triangle types,,Ganita Prakash II Ch 1
SCI_C7_1436,7,Science,Exploring Substances,pH,Medium,MCQ,Indicator turning pink in base solution is,Litmus,Turmeric,Phenolphthalein,China Rose,C,Laboratory synthetic chemical indicator,,Curiosity Ch 2
SCI_C7_1437,7,Science,Changes Around Us,Chemical,Medium,MCQ,Rusting needs oxygen and,Nitrogen,Water,Heat,Light,B,Essential atmospheric conditions for iron oxidation,,Curiosity Ch 5
SCI_C7_1438,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,Cyclist speed 12km in 30min in km/h is,6,12,24,30,C,Distance / Time = $12 / 0.5 = 24 km/h$,,Curiosity Ch 8
SCI_C7_1439,7,Science,Heat Transfer in Nature,Physics,Hard,MCQ,Day air movement sea to land is,Sea breeze,Land breeze,Storm,Cyclone,A,Differential heating result during daytime,,Curiosity Ch 7
SCI_C7_1440,7,Science,Electricity: Circuits and Components,Safety,Easy,MCQ,Safety device preventing electrical fires,Switch,Fuse,Cell,Wire,B,Breaks the circuit path if current is too high,,Curiosity Ch 3
SST_C7_1436,7,SST,From Barter to Money,Economics,Hard,MCQ,Major hurdle of the barter system was,Fast trade,Lack of double coincidence of wants,Use of gold,Digital errors,B,Both parties must desire the other's good,,Exploring Society Ch 11
SST_C7_1437,7,SST,Understanding Markets,Economics,Medium,MCQ,Wholesalers link producers and,Retailers,Consumers,Banks,Schools,A,Sequence of intermediaries in the market chain,,Exploring Society Ch 12
SST_C7_1438,7,SST,Rise of Empires,History,Hard,MCQ,Only active volcano in India is on,Mount Abu,Barren Island,Munnar,Ladakh,B,Located in the Andaman and Nicobar chain,,Exploring Society Ch 1
SST_C7_1439,7,SST,Climates of India,Geography,Medium,MCQ,Wettest place in India is,Mawsynram,Leh,Panaji,Kochi,A,Topographic features cause extreme rainfall here,,Exploring Society Ch 3
SST_C7_1440,7,SST,Constitution of India,Rights,Hard,MCQ,Which Article ensures social dignity,14,15,17,21,C,Ensures equality by abolishing untouchability,,Exploring Society Ch 10
ENG_C7_1436,7,English,The Day the River Spoke,Character,Medium,MCQ,Jahnavi's school dream was encouraged by,Father,River,Teacher,Friend,B,Water confider motivated her to go,,Poorvi Unit 1
ENG_C7_1437,7,English,Rani Abbakka,Civics,Medium,MCQ,Self-governing country is,Sovereign,Colony,Vassal,Subject,A,Independent nation terminology from chapter,,Poorvi Unit 5
ENG_C7_1439,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants pass signals by touching,Legs,Feelers,Wings,Eyes,B,antennae tool for messages,,An Alien Hand Unit 1
ENG_C7_1440,7,English,Three Questions,Ethics,Medium,MCQ,Hermit's right time is,Tomorrow,Now,Yesterday,Noon,B,Present moment focus of lesson,,Honeycomb Unit 1
MATH_C7_1441,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve $4x = 12$,2,3,4,48,B,Standard division on both sides for x,,Ganita Prakash Ch 15
MATH_C7_1442,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Range of data 10 20 30 40 50 is,30,40,50,10,B,Difference between maximum and minimum values,,Ganita Prakash Ch 13
MATH_C7_1443,7,Math,Working with Fractions,Operations,Medium,MCQ,Product of 2/3 and 3/2 is,0,1,6,2/3,B,Numerical result of reciprocal multiplication,,Ganita Prakash Ch 8
MATH_C7_1444,7,Math,Geometric Twins,Triangles,Easy,MCQ,Triangle with one angle $> 90$ is,Acute,Obtuse,Right,Scalene,B,Classification based on angle size,,Ganita Prakash II Ch 1
MATH_C7_1445,7,Math,Arithmetic Expressions,BODMAS,Medium,MCQ,Find $2 \\times (3 + 4)$,10,14,7,24,B,Solve inside parentheses first then multiply,,Ganita Prakash Ch 2
SCI_C7_1441,7,Science,Heat Transfer in Nature,Radiation,Easy,MCQ,Sun heat reaches Earth by which mode,Conduction,Convection,Radiation,Insulation,C,Method requiring no material particles,,Curiosity Ch 7
SCI_C7_1442,7,Science,Exploring Substances,Neutralization,Medium,MCQ,Acid and base react to form,Salt and water,Only gas,Only metal,Alcohol,A,Fundamental products of neutralization,,Curiosity Ch 2
SCI_C7_1443,7,Science,Changes Around Us,Chemical,Medium,MCQ,Chemical name of rust is,Iron oxide,Copper sulphate,Zinc chloride,Sodium oxide,A,Result of iron oxidation reaction,,Curiosity Ch 5
SCI_C7_1444,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,Standard S.I. unit of speed is,km/h,m/s,m/min,cm/s,B,International standard for motion metrics,,Curiosity Ch 8
SCI_C7_1445,7,Science,Life Processes in Plants,Botany,Easy,MCQ,Primary food factory of a plant is,Root,Stem,Leaf,Flower,C,Site of synthesis using chlorophyll,,Curiosity Ch 10
SST_C7_1441,7,SST,Understanding Markets,Economics,Medium,MCQ,Free market price decided by,Governor,Supply and demand,Police,Shopkeeper,B,Economic force interaction result,,Exploring Society Ch 12
SST_C7_1443,7,SST,From Barter to Money,Economics,Easy,MCQ,RBI in India issues,Textbooks,Currency,Visas,Licenses,B,Central bank regulatory role,,Exploring Society Ch 11
SST_C7_1444,7,SST,Constitution of India,Governance,Medium,MCQ,Drafting Committee head was,Nehru,B R Ambedkar,Gandhi,Prasad,B,Chief text FINALIZER of Constitution,,Exploring Society Ch 10
SST_C7_1445,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Rain gauge measures,Pressure,Temperature,Rainfall,Wind,C,Instrument for liquid precipitation,,Exploring Society Ch 2
ENG_C7_1441,7,English,Rani Abbakka,History,Medium,MCQ,Queen who defeated Portuguese navy was,Lakshibai,Abbakka,Chennamma,Raziyya,B,Heroic warrior queen of Ullal,,Poorvi Unit 5
ENG_C7_1442,7,English,Try Again,Moral,Easy,MCQ,Success reward of persistence in poem,Luck,Success,Money,Fear,B,Core theme of the text,,Poorvi Unit 1
ENG_C7_1443,7,English,Three Questions,Ethics,Medium,MCQ,Most important person is the one,You are with,Who is rich,Who is wise,Who is strong,A,Hermit lesson on relationships,,Honeycomb Unit 1
ENG_C7_1444,7,English,The Tiny Teacher,Behavior,Easy,MCQ,Ants signaling by,Legs,Feelers,Wings,Eyes,B,antennae tool for greetings,,An Alien Hand Unit 1
MATH_C7_1446,7,Math,Finding the Unknown,Equations,Easy,MCQ,Solve $x + 10 = 25$,15,35,10,5,A,Subtraction operation for unknown,,Ganita Prakash Ch 15
MATH_C7_1447,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Mean of first five natural numbers is,2,3,4,5,B,Sum 15 divided by count five,,Ganita Prakash Ch 13
MATH_C7_1448,7,Math,Working with Fractions,Reciprocals,Medium,MCQ,Reciprocal of 2/3 is,3/2,2/3,1/3,1/2,A,Inverting fractional components,,Ganita Prakash Ch 8
MATH_C7_1449,7,Math,Geometric Twins,Polygons,Easy,MCQ,Triangle with all sides equal is,Isosceles,Equilateral,Scalene,Right,B,Regular triangle definition,,Ganita Prakash II Ch 1
MATH_C7_1450,7,Math,Operations with Integers,Properties,Easy,MCQ,Neither positive nor negative integer is,1,-1,0,10,C,Zero is the neutral boundary,,NCERT Ch 1
SCI_C7_1446,7,Science,Adolescence,Endocrinology,Medium,MCQ,Gland secretes chemical messengers called,Enzymes,Hormones,Proteins,Vitamins,B,Regulate growth and changes,,Curiosity Ch 6
SCI_C7_1447,7,Science,Exploring Substances,Indicators,Medium,MCQ,Litmus source is which organism,Algae,Fungus,Lichens,Bacteria,C,Natural dye source for pH tests,,Curiosity Ch 2
SCI_C7_1448,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,Car at 15 m/s travels how far in 1 min,15m,90m,900m,150m,C,Speed multiplied by 60 seconds,,Curiosity Ch 8
SCI_C7_1449,7,Science,Heat Transfer in Nature,Physics,Medium,MCQ,Surface absorbing radiant heat best is,White,Shiny,Black,Clear,C,Color impact on thermal absorption,,Curiosity Ch 7
SCI_C7_1450,7,Science,Life Processes in Animals,Respiration,Medium,MCQ,Anaerobic muscle respiration produces,Alcohol,Lactic acid,CO2,Water,B,Result of high physical activity,,Curiosity Ch 9
SST_C7_1446,7,SST,Exploring Society,Geology,Hard,MCQ,Breaking of rocks into soil is,Erosion,Weathering,Volcanism,Faulting,B,Foundational process for soil,,Exploring Society Ch 1
SST_C7_1447,7,SST,Understanding Weather,Instruments,Easy,MCQ,Barometer is used for,Wind,Air pressure,Rainfall,Humidity,B,Standard meteorological tool,,Exploring Society Ch 2
SST_C7_1448,7,SST,New Beginnings: Cities and States,History,Medium,MCQ,Number of Mahajanapadas in north,8,12,16,20,C,Sixteen powerful kingdoms record,,Exploring Society Ch 4
SST_C7_1449,7,SST,From Barter to Money,Economics,Medium,MCQ,Exchange hurdle without money was,Gold,Double coincidence of wants,Credit,Apps,B,Need for matching mutual desires,,Exploring Society Ch 11
SST_C7_1450,7,SST,Constitution of India,Governance,Medium,MCQ,Chairman of Drafting Committee,Nehru,Prasad,B R Ambedkar,Gandhi,C,Finalized the legal framework,,Exploring Society Ch 10
ENG_C7_1446,7,English,The Day the River Spoke,Vocabulary,Medium,MCQ,Mimicking refers to,Shouting,Copying sounds,Running,Hiding,B,Jahnavi imitation of nature,,Poorvi Unit 1
ENG_C7_1447,7,English,Three Days to See,Character,Medium,MCQ,Teacher who used touch for language,Annie Sullivan,Nightingale,Wordsworth,Tolstoy,A,Guide for Helen Keller,,Poorvi Unit 1
ENG_C7_1448,7,English,A Funny Man,Wit,Easy,MCQ,Funny man shoe was on his,Foot,Hand,Head,Arm,C,Humorous detail of mixed-up man,,Poorvi Unit 2
ENG_C7_1449,7,English,The Tunnel,Plot,Hard,MCQ,Tunnel represents to Suraj,Shortcut,Mystery,Trap,Sleep place,B,Theme of curiosity and explore,,Poorvi Unit 4
ENG_C7_1450,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Golu was a baby full of,Food,Anger,Questions,Sleep,C,Theme of natural curiosity,,An Alien Hand Unit 3
MATH_C7_1452,7,Math,Connecting the Dots,Coordinate,Medium,MCQ,Coordinate y is also called,Abscissa,Ordinate,Origin,Slope,B,Vertical position measure name,,Ganita Prakash Ch 13
MATH_C7_1453,7,Math,A Peek Beyond the Point,Rounding,Hard,MCQ,Round 38769957 to nearest ten lakh,38000000,39000000,40000000,38800000,B,Rounding up due to next digit size,,Ganita Prakash Ch 1
MATH_C7_1454,7,Math,Arithmetic Expressions,Grouping,Medium,MCQ,Expression for $5 \\times (10 + 2)$ is,$5 \\times 10 + 2$,$5 \\times 10 + 5 \\times 2$,$5 + 10 \\times 2$,$5 \\times 12 + 10$,B,Application of distributive law,,Ganita Prakash Ch 2
MATH_C7_1455,7,Math,Connecting the Dots,Probability,Hard,MCQ,Bag with 5 red 5 blue balls prob red,1,0.5,0.2,0.1,B,Ratio of favorable to total outcomes,,NCERT Ch 3
SCI_C7_1451,7,Science,Adolescence,Endocrinology,Medium,MCQ,Male hormone produced by testes is,Estrogen,Testosterone,Insulin,Thyroxine,B,Triggers secondary male features,,Curiosity Ch 6
SCI_C7_1452,7,Science,Earth Moon and the Sun,Astronomy,Hard,MCQ,Earth axial tilt is approximately,0 degrees,23.5 degrees,45 degrees,90 degrees,B,Causes the changes in seasons,,Curiosity Ch 12
SCI_C7_1453,7,Science,Exploring Substances,Indicators,Easy,MCQ,Natural indicator from Lichens is,Turmeric,China Rose,Litmus,Red Rose,C,Source of standard pH paper,,Curiosity Ch 2
SCI_C7_1454,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,Distance at 15m/s for 1 min is,15m,90m,900m,150m,C,Speed multiplied by time interval,,Curiosity Ch 8
SCI_C7_1455,7,Science,Life Processes in Animals,Respiration,Medium,MCQ,Diaphragm position during exhalation,Downwards,Upwards,Stays flat,To side,B,Relaxes pushing air from lungs,,Curiosity Ch 9
SST_C7_1451,7,SST,New Beginnings: Cities and States,History,Medium,MCQ,Second Urbanisation center was,Indus,Ganga plains,Rajasthan,Kerala,B,Re-emergence of cities in north,,Exploring Society Ch 4
SST_C7_1452,7,SST,The Gupta Era,History,Medium,MCQ,Classical age of India refers to,Maurya,Gupta,Chola,Mughal,B,Era of peak creativity and science,,Exploring Society Ch 7
SST_C7_1453,7,SST,The Story of Indian Farming,History,Medium,MCQ,Surapala book on plant science,Arthashastra,Vrikshayurveda,Vedas,Puranas,B,Ancient Indian botanical text,,Exploring Society Ch 1
SST_C7_1454,7,SST,Constitution of India,Principles,Medium,MCQ,Free and independent country is,Sovereign,Socialist,Secular,Republic,A,Terminology from Indian Preamble,,Exploring Society Ch 10
SST_C7_1455,7,SST,Climates of India,Monsoon,Medium,MCQ,Monsoon word Mausim meaning is,Rain,Season,Wind,Cloud,B,Arabic root for seasonal winds,,Exploring Society Ch 3
ENG_C7_1451,7,English,Three Questions,Theme,Medium,MCQ,Author of Three Questions parable,Ruskin Bond,Leo Tolstoy,Henry James,Wordsworth,B,Russian writer of ethical tale,,Honeycomb Unit 1
ENG_C7_1452,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Golu went to river to find,Aunt Ostrich,Crocodile,Python,Baboon,B,Curious baby elephant journey,,An Alien Hand Unit 3
ENG_C7_1453,7,English,My Dear Soldiers,Themes,Medium,MCQ,Soldiers are compared to yogis for,Magic,Discipline,Silence,Dress,B,Metaphor for border duty focus,,Poorvi Unit 5
ENG_C7_1454,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,Word tribute in Abbakka story means,Gift,Sign of control,Medal,Prize,B,Payment demanded by Portuguese,,Poorvi Unit 5
ENG_C7_1455,7,English,Three Days to See,Theme,Hard,MCQ,First day Helen wants to see,Museums,Faces of loved ones,Ocean,Movies,B,Human connection prioritized,,Poorvi Unit 1
MATH_C7_1456,7,Math,Finding the Unknown,Equations,Medium,MCQ,If Jasmine uses 99 matchsticks with rule 2n+1 what is n,49,50,98,100,A,Algebraic solution for position,,Ganita Prakash Ch 15
MATH_C7_1457,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Mean of 10 20 30 40 50 is,25,30,35,40,B,Average of the numeric set,,Ganita Prakash Ch 13
MATH_C7_1458,7,Math,Working with Fractions,Operations,Medium,MCQ,Value of $3/4 \\times 12$ is,3,6,9,12,C,Multiplication results in integer 9,,Ganita Prakash Ch 8
MATH_C7_1459,7,Math,Geometric Twins,Polygons,Easy,MCQ,Interior angles of any triangle sum,90,180,360,270,B,Standard Angle Sum Property,,Ganita Prakash II Ch 1
SCI_C7_1456,7,Science,Changes Around Us,Chemical,Easy,MCQ,Melting of ice is classified as,Physical change,Chemical change,Irreversible,Permanent,A,State change that can be reversed,,Curiosity Ch 5
SCI_C7_1457,7,Science,Exploring Substances,Indicators,Medium,MCQ,China rose turns basic solution,Pink,Green,Blue,Yellow,B,Color shift for alkalinity detection,,Curiosity Ch 2
SCI_C7_1458,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Heat transfer in solids occurs by,Conduction,Convection,Radiation,Evaporation,A,Direct molecular contact energy flow,,Curiosity Ch 7
SCI_C7_1459,7,Science,Wastewater Story,Treatment,Easy,MCQ,WWTP abbreviation stands for,Water Works Tool Part,Wastewater Treatment Plant,World Water Task Plan,Waste Water Tool Part,B,Standard sanitation infrastructure term,,Curiosity Ch 13
SCI_C7_1460,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Pores on leaves for gas exchange,Chlorophyll,Stomata,Vessels,Roots,B,Leaf structures for CO2 and O2 flow,,Curiosity Ch 10
SST_C7_1456,7,SST,From Barter to Money,Economics,Easy,MCQ,Exchanging goods for goods is,Banking,Barter system,Retail,Trade,B,Exchange system without currency,,Exploring Society Ch 11
SST_C7_1457,7,SST,Understanding Markets,Economics,Easy,MCQ,Traders buying bulk from factory,Consumer,Wholesaler,Retailer,Farmer,B,Bulk sale intermediary role,,Exploring Society Ch 12
SST_C7_1458,7,SST,Rise of Empires,Strategy,Medium,MCQ,Kautilya was the advisor of,Ashoka,Chandragupta Maurya,Akbar,Shivaji,B,Political strategist of Mauryas,,Exploring Society Ch 5
SST_C7_1459,7,SST,Constitution of India,Governance,Medium,MCQ,Father of the Indian Constitution,Nehru,B R Ambedkar,Gandhi,Prasad,B,Finalized the legal draft,,Exploring Society Ch 10
SST_C7_1460,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Rain gauge instrument measures,Pressure,Temperature,Rainfall depth,Wind,C,Device for precipitation tracking,,Exploring Society Ch 2
ENG_C7_1456,7,English,Rani Abbakka,History,Medium,MCQ,Principality ruled by Abbakka,Goa,Ullal,Mangalore,Kochi,B,Coastal kingdom in Karnataka,,Poorvi Unit 5
ENG_C7_1457,7,English,Try Again,Moral,Easy,MCQ,Perseverance reward in Try Again,Money,Success,Luck,Food,B,Main lesson of the text,,Poorvi Unit 1
ENG_C7_1458,7,English,Three Questions,Ethics,Medium,MCQ,hermits says important time is,Tomorrow,Now,Yesterday,Noon,B,Present moment focus of lesson,,Honeycomb Unit 1
ENG_C7_1459,7,English,The Tiny Teacher,Behavior,Easy,MCQ,Ants greeting method is touching,Feelers,Legs,Heads,Wings,A,Chemical and tactile signals,,An Alien Hand Unit 1
MATH_C7_1461,7,Math,Finding the Unknown,Equations,Easy,MCQ,Subtract 10 from x results in 15 what is x,5,25,10,150,B,Algebraic translation and solution,,Ganita Prakash Ch 15
MATH_C7_1462,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Average of 10 20 30 is,10,20,30,60,B,Calculation of arithmetic mean,,Ganita Prakash Ch 13
MATH_C7_1463,7,Math,Working with Fractions,Operations,Medium,MCQ,Product of a number and its reciprocal is,0,1,Same number,Infinity,B,Fundamental property of reciprocals,,Ganita Prakash Ch 8
MATH_C7_1464,7,Math,Geometric Twins,Triangles,Easy,MCQ,Triangle with all internal angles 60 degrees,Scalene,Isosceles,Equilateral,Right,C,Regular triangle definition,,Ganita Prakash II Ch 1
MATH_C7_1465,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,Value of $0.5 \\times 0.2$ is,1,0.1,0.01,0.52,B,Metric decimal product,,Ganita Prakash Ch 3
SCI_C7_1461,7,Science,Changes Around Us,Chemical,Easy,MCQ,Burning wood classification,Physical,Chemical,Temporary,Reversible,B,Formation of new permanent products,,Curiosity Ch 5
SCI_C7_1462,7,Science,Exploring Substances,Indicators,Medium,MCQ,China rose turns basic solutions,Pink,Green,Blue,Yellow,B,Chemical indicator behavior,,Curiosity Ch 2
SCI_C7_1463,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Direct contact heat flow in solids,Conduction,Convection,Radiation,Evaporation,A,Energy transfer via molecules,,Curiosity Ch 7
SCI_C7_1464,7,Science,Wastewater Story,Treatment,Easy,MCQ,Facility to clean sewage is,Water Works,WWTP,World Water Plan,Waste Tool,B,Sanitation infrastructure acronym,,Curiosity Ch 13
SCI_C7_1465,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Leaf openings for photosynthesis,Chlorophyll,Stomata,Vessels,Roots,B,Essential structures for gas exchange,,Curiosity Ch 10
SST_C7_1461,7,SST,From Barter to Money,Economics,Easy,MCQ,Direct exchange without money,Banking,Barter system,Retail,Trade,B,Early mode of ancient trade,,Exploring Society Ch 11
SST_C7_1462,7,SST,Understanding Markets,Economics,Easy,MCQ,Seller between producer and retailer,Consumer,Wholesaler,Farmer,Agent,B,Trade chain intermediary role,,Exploring Society Ch 12
SST_C7_1463,7,SST,Rise of Empires,Strategy,Medium,MCQ,Advisor who wrote Arthashastra,Ashoka,Kautilya,Panini,Chandragupta,B,Strategic manual for Mauryas,,Exploring Society Ch 5
SST_C7_1464,7,SST,Constitution of India,Governance,Medium,MCQ,Architect of Constitution led committee,Nehru,B R Ambedkar,Gandhi,Prasad,B,Chief text FINALIZER of law,,Exploring Society Ch 10
SST_C7_1465,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Precipitation measurement tool,Barometer,Thermometer,Rain gauge,Anemometer,C,Meteorological rainfall instrument,,Exploring Society Ch 2
ENG_C7_1461,7,English,Rani Abbakka,History,Medium,MCQ,Queen who fought the Portuguese navy,Lakshibai,Abbakka,Chennamma,Raziyya,B,Warrior queen of coastal Ullal,,Poorvi Unit 5
ENG_C7_1462,7,English,Try Again,Poetry,Easy,MCQ,Key to success in the poem,Luck,Persistence,Giving up,Money,B,Core moral lesson of the text,,Poorvi Unit 1
ENG_C7_1463,7,English,Three Questions,Theme,Medium,MCQ,hermit says important person is,King,Person you are with,Wise man,Soldier,B,Focus on present relationship,,Honeycomb Unit 1
ENG_C7_1464,7,English,The Tiny Teacher,Behavior,Easy,MCQ,Ants signaling method,Legs,Feelers,Wings,Eyes,B,antennae signaling in colonies,,An Alien Hand Unit 1
ENG_C7_1465,7,English,An Alien Hand,Plot,Medium,MCQ,Tilloo lived in underground colony on,Earth,Mars,Venus,Moon,B,Martian subsurface society story,,An Alien Hand Unit 10
MATH_C7_1466,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve $2n + 1 = 99$,49,50,48,51,A,Subtract 1 and divide by 2,,Ganita Prakash Ch 15
MATH_C7_1467,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Arithmetic Mean of 1 2 3 4 5,2,3,4,5,B,Middle value average of set,,Ganita Prakash Ch 13
MATH_C7_1469,7,Math,Geometric Twins,Polygons,Easy,MCQ,Triangle with all sides 5cm,Scalene,Isosceles,Equilateral,Right,C,Equality of all side lengths,,Ganita Prakash II Ch 1
MATH_C7_1470,7,Math,Operations with Integers,Signs,Medium,MCQ,Result of $(-1)$ times $(-1)$,1,-1,0,2,A,Product of two negative integers,,NCERT Ch 1
SCI_C7_1466,7,Science,Adolescence,Growth,Medium,MCQ,Enlarged voice box visible bulge is,Pharynx,Adam's apple,Tonsil,Epiglottis,B,Growth during puberty in boys,,Curiosity Ch 6
SCI_C7_1467,7,Science,Exploring Substances,Indicators,Medium,MCQ,Natural dye from Lichens used in,Soap,Litmus paper,Vinegar,Salt,B,Standard chemical indicator source,,Curiosity Ch 2
SCI_C7_1468,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,Distance for 15 m/s in 1 min,15m,90m,900m,150m,C,Speed multiplied by 60 seconds,,Curiosity Ch 8
SCI_C7_1469,7,Science,Heat Transfer in Nature,Meteorology,Hard,MCQ,Day wind sea to land is,Sea breeze,Land breeze,Storm,Monsoon,A,Caused by land heating faster,,Curiosity Ch 7
SCI_C7_1470,7,Science,Electricity: Circuits and Components,Conductivity,Easy,MCQ,Material allowing current flow is,Insulator,Conductor,Opaque,Glass,B,Metals generally have this trait,,Curiosity Ch 3
SST_C7_1466,7,SST,New Beginnings: Cities and States,Political History,Medium,MCQ,Mahajanapadas count in north was,8,12,16,20,C,Sixteen great kingdoms identified,,Exploring Society Ch 4
SST_C7_1467,7,SST,The Gupta Era,Governance,Medium,MCQ,Land grants recorded on metal plates,Gold,Silver,Copper,Bronze,C,System for formal property records,,Exploring Society Ch 7
SST_C7_1468,7,SST,The Age of Reorganisation,Dynasties,Hard,MCQ,Satavahana kingdom region was,Himalayas,Deccan,Bengal,Thar,B,Central and south India rulers,,Exploring Society Ch 6
SST_C7_1469,7,SST,Constitution of India,Governance,Medium,MCQ,Head of the drafting committee,Nehru,B R Ambedkar,Gandhi,Prasad,B,Architect of India's basic laws,,Exploring Society Ch 10
SST_C7_1470,7,SST,Understanding Markets,Trade,Medium,MCQ,Price determined by supply and,Taxes,Demand,Rules,Color,B,Interaction of market forces,,Exploring Society Ch 12
ENG_C7_1466,7,English,Rani Abbakka,History,Medium,MCQ,Abbakka kingdom coastal area name,Goa,Ullal,Mangalore,Kochi,B,Territory of the warrior queen,,Poorvi Unit 5
ENG_C7_1467,7,English,Three Questions,Ethics,Medium,MCQ,hermit says right time is,Tomorrow,Now,Yesterday,Future,B,Present moment focus of parable,,Honeycomb Unit 1
ENG_C7_1468,7,English,Try Again,Poetry,Easy,MCQ,Success reward for perseverance,Luck,Success,Money,Fear,B,Core theme of motivational text,,Poorvi Unit 1
ENG_C7_1469,7,English,The Tiny Teacher,Life Cycle,Easy,MCQ,Young ant before cocoon is,Grub,Larva,Chick,Puppy,A,Specific term from the textbook,,An Alien Hand Unit 1
MATH_C7_1471,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solution for $x - 7 = 0$ is,-7,0,7,1,C,Isolating variable via addition,,Ganita Prakash Ch 15
MATH_C7_1472,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Mean of 5 5 10 10 is,5,7.5,10,30,B,Sum 30 divided by count 4,,Ganita Prakash Ch 13
MATH_C7_1473,7,Math,A Peek Beyond the Point,Measurement,Easy,MCQ,mm count in 1 meter is,100,10,1000,10000,C,Standard metric length conversion,,Ganita Prakash Ch 3
MATH_C7_1474,7,Math,Working with Fractions,Operations,Medium,MCQ,Product of 1/2 and 1/4 is,1/2,1/8,1/6,3/4,B,Multiplication of fraction parts,,Ganita Prakash Ch 8
MATH_C7_1475,7,Math,Geometric Twins,Polygons,Easy,MCQ,Vertices count in a Hexagon is,5,6,8,12,B,Corner count for six-sided shape,,Ganita Prakash II Ch 1
SCI_C7_1471,7,Science,Exploring Substances,pH,Easy,MCQ,Sour taste turns blue litmus red,Base,Acid,Neutral,Metal,B,Defining chemical nature of acids,,Curiosity Ch 2
SCI_C7_1472,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Heat radiation travels through,Solids,Liquids,Empty space,Metals,C,Vacuum capability of thermal waves,,Curiosity Ch 7
SCI_C7_1473,7,Science,Changes Around Us,Chemical,Easy,MCQ,Rusting iron brownish layer name,Zinc,Rust,Copper,Silver,B,Result of slow iron oxidation,,Curiosity Ch 5
SCI_C7_1474,7,Science,Electricity: Circuits and Components,Circuit,Easy,MCQ,Switch is used for circuit,Open/Close,Powering,Wiring,Bulbing,A,Basic functional control of flow,,Curiosity Ch 3
SCI_C7_1475,7,Science,Life Processes in Animals,Digestion,Easy,MCQ,Starch breakdown starts in,Stomach,Mouth,Small intestine,Anus,B,Salivary enzyme action location,,Curiosity Ch 9
SST_C7_1471,7,SST,Climates of India,Geography,Medium,MCQ,Highest rainfall place is,Cherrapunji,Mawsynram,Shillong,Panaji,B,Wettest village in Meghalaya,,Exploring Society Ch 3
SST_C7_1472,7,SST,Constitution of India,Rights,Hard,MCQ,Article 17 abolished,Taxes,Untouchability,Monarchy,Slavery,B,Social reform for equality,,Exploring Society Ch 10
SST_C7_1473,7,SST,Understanding Markets,Economics,Easy,MCQ,Wholesaler sells bulk to,Consumers,Retailers,Farmers,Agents,B,Bulk link in the market chain,,Exploring Society Ch 12
SST_C7_1474,7,SST,Rise of Empires,History,Easy,MCQ,Magadha rose due to iron and,Art,Fertile land,Gold,Sea,B,Military and agriculture power,,Exploring Society Ch 5
SST_C7_1475,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Weather events layer name is,Troposphere,Stratosphere,Mesosphere,Exosphere,A,Lowest air and cloud layer,,Exploring Society Ch 2
ENG_C7_1471,7,English,Rani Abbakka,History,Medium,MCQ,Warrior queen fought naval battle,British,Portuguese,French,Dutch,B,Karnataka resist foreign trade,,Poorvi Unit 5
ENG_C7_1472,7,English,Try Again,Moral,Easy,MCQ,Perseverance success result in poem,Luck,Success,Money,Fear,B,Core message of persistent effort,,Poorvi Unit 1
ENG_C7_1473,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants touch feelers to,Fight,Greet and talk,Run,Sleep,B,Means of signal exchange,,An Alien Hand Unit 1
ENG_C7_1474,7,English,Three Questions,Ethics,Medium,MCQ,Important affairs says hermit is,Gain wealth,Do good,Win wars,Read,B,Moral goal of human existence,,Honeycomb Unit 1
ENG_C7_1475,7,English,An Alien Hand,Plot,Medium,MCQ,Tilloo sneak out using father,Key,Security card,Phone,Boat,B,Instrument for restricted entry,,An Alien Hand Unit 10
MATH_C7_1476,7,Math,Finding the Unknown,Equations,Medium,MCQ,Solve $3x + 1 = 10$,3,9,2,4,A,Subtract one and divide by three,,Ganita Prakash Ch 15
MATH_C7_1477,7,Math,Connecting the Dots,Coordinate,Medium,MCQ,X-coordinate is also called,Abscissa,Ordinate,Origin,Slope,A,Horizontal position measure name,,Ganita Prakash Ch 13
MATH_C7_1478,7,Math,Arithmetic Expressions,Grouping,Hard,MCQ,Evaluate $10 - (5 - 2)$,7,3,5,2,A,Subtract inside brackets first then ten,,Ganita Prakash Ch 2
MATH_C7_1479,7,Math,Working with Fractions,Operations,Medium,MCQ,simplest form of 18/24 is,9/12,6/8,3/4,2/3,C,Divide by highest common factor six,,Ganita Prakash Ch 8
MATH_C7_1480,7,Math,Geometric Twins,Polygons,Medium,MCQ,Triangle sum of angles is,90,180,360,270,B,Angle Sum Property theorem,,Ganita Prakash II Ch 1
SCI_C7_1476,7,Science,Exploring Substances,pH,Medium,MCQ,Phenolphthalein turns base solution,Colorless,Pink,Green,Blue,B,Synthetic indicator for alkalinity,,Curiosity Ch 2
SCI_C7_1477,7,Science,Changes Around Us,Oxidation,Medium,MCQ,Rusting iron needs air and,Nitrogen,Moisture,Light,Heat,B,Essential atmospheric conditions,,Curiosity Ch 5
SCI_C7_1478,7,Science,Measurement of Time and Motion,Physics,Easy,MCQ,SI unit of speed is,km/h,m/s,m/min,cm/s,B,Standard metric unit for motion,,Curiosity Ch 8
SCI_C7_1479,7,Science,Heat Transfer in Nature,Meteorology,Hard,MCQ,Day air from sea to land is,Sea breeze,Land breeze,Monsoon,Cyclone,A,Land heating faster than water,,Curiosity Ch 7
SCI_C7_1480,7,Science,Electricity: Circuits and Components,Safety,Easy,MCQ,Safety fuse breaks circuit if current is,Low,Too high,Zero,One,B,Protective melting point of wire,,Curiosity Ch 3
SST_C7_1476,7,SST,From Barter to Money,Economics,Hard,MCQ,Double coincidence problem was in,Cash trade,Barter system,Credit,Digital pay,B,Hurdle of matching mutual needs,,Exploring Society Ch 11
SST_C7_1477,7,SST,Understanding Markets,Economics,Medium,MCQ,Market chain links producer and,Retailer,Bank,Consumer,Schools,C,Final recipient of the trade sequence,,Exploring Society Ch 12
SST_C7_1478,7,SST,Rise of Empires,History,Hard,MCQ,Barren Island is home to an active,Mountain,Volcano,Desert,River,B,Only active one in Indian territories,,Exploring Society Ch 1
SST_C7_1479,7,SST,Climates of India,Monsoon,Medium,MCQ,Mausim word Mausim means,Rain,Season,Wind,Clouds,B,Arabic root for seasonal changes,,Exploring Society Ch 3
SST_C7_1480,7,SST,Constitution of India,Rights,Hard,MCQ,Article 17 ensures social,Wealth,Dignity,Power,Travel,B,Prevents discrimination via untouchability,,Exploring Society Ch 10
ENG_C7_1476,7,English,The Day the River Spoke,Themes,Medium,MCQ,Jahnavi connection was with,City,Nature,Machines,Books,B,Deep relationship with the river,,Poorvi Unit 1
ENG_C7_1477,7,English,Rani Abbakka,Civics,Medium,MCQ,Independent self-ruling nation is,Sovereign,Colony,Vassal,Subject,A,Independent status from foreign control,,Poorvi Unit 5
ENG_C7_1478,7,English,My Dear Soldiers,Poetry,Medium,MCQ,Soldiers border guard is like,Yogis,Farmers,Merchants,Tourists,A,Metaphor for discipline and focus,,Poorvi Unit 5
ENG_C7_1479,7,English,The Tiny Teacher,Communication,Easy,MCQ,Ants signal by touching their,Legs,Feelers,Eyes,Wings,B,antennae signaling in hills,,An Alien Hand Unit 1
ENG_C7_1480,7,English,Three Questions,Ethics,Medium,MCQ,Hermit says right time to act is,Tomorrow,Now,Yesterday,Later,B,Only present moment allows action,,Honeycomb Unit 1
MATH_C7_1481,7,Math,Finding the Unknown,Equations,Easy,MCQ,If x + 5 = 15 then x is,5,10,20,15,B,Basic balance algebraic subtraction,,Ganita Prakash Ch 15
MATH_C7_1482,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Arithmetic Mean of 2 7 9 4 3 is,4,5,6,3,B,Sum 25 divided by five values,,Ganita Prakash Ch 13
MATH_C7_1484,7,Math,Geometric Twins,Triangles,Medium,MCQ,Triangle sum of internal angles is,90,180,360,270,B,Angle Sum Property of geometry,,Ganita Prakash II Ch 1
MATH_C7_1485,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,Decimal form of three-tenths is,0.03,0.3,3,30,B,Single decimal place value of 3/10,,Ganita Prakash Ch 3
SCI_C7_1481,7,Science,Changes Around Us,Chemical,Easy,MCQ,Formation of new substance is a,Physical change,Chemical change,Temporary,Reversible,B,Permanent molecular restructuring,,Curiosity Ch 5
SCI_C7_1482,7,Science,Exploring Substances,Indicators,Medium,MCQ,China rose turns basic solution to,Pink,Green,Blue,Yellow,B,Indicator color behavior in base,,Curiosity Ch 2
SCI_C7_1483,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Direct molecular contact heat flow is,Conduction,Convection,Radiation,Insulation,A,Flow through solid material molecules,,Curiosity Ch 7
SCI_C7_1484,7,Science,Wastewater Story,Sanitation,Easy,MCQ,Acronym WWTP means,Water Works,Wastewater treatment,World Plan,Waste Tool,B,Facility for cleaning sewage data,,Curiosity Ch 13
SCI_C7_1485,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Leaf pores for gas flow are,Chlorophyll,Stomata,Vessels,Roots,B,Essential for photosynthesis exchange,,Curiosity Ch 10
SST_C7_1481,7,SST,From Barter to Money,Economics,Easy,MCQ,Goods for other goods exchange is,Banking,Barter system,Retail,Trade,B,Direct ancient trade mode,,Exploring Society Ch 11
SST_C7_1482,7,SST,Understanding Markets,Economics,Easy,MCQ,Shop in bulk sell retailers trader is,Consumer,Wholesaler,Farmer,Agent,B,Bulk link in the market chain,,Exploring Society Ch 12
SST_C7_1483,7,SST,Rise of Empires,History,Medium,MCQ,Advisor who strategy Mauryan success,Ashoka,Kautilya,Panini,Chandragupta,B,Political manual author Chanakya,,Exploring Society Ch 5
SST_C7_1484,7,SST,Constitution of India,Governance,Medium,MCQ,Drafting Committee head architect was,Nehru,B R Ambedkar,Gandhi,Prasad,B,Leader finalizing legal draft,,Exploring Society Ch 10
SST_C7_1485,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Atmospheric pressure measure tool is,Barometer,Thermometer,Rain gauge,Anemometer,A,Meteorological tool for weight of air,,Exploring Society Ch 2
ENG_C7_1481,7,English,Rani Abbakka,History,Medium,MCQ,Queen defended Ullal from which navy,British,Portuguese,French,Dutch,B,Karnataka warrior queen history,,Poorvi Unit 5
ENG_C7_1482,7,English,Try Again,Moral,Easy,MCQ,What leads success in Try Again,Luck,Persistence,Giving up,Money,B,Core theme of attempting after failure,,Poorvi Unit 1
ENG_C7_1483,7,English,Three Questions,Theme,Medium,MCQ,Hermit important person is person you,Are with,Work for,Admire,Fear,A,Lesson on current relationship focus,,Honeycomb Unit 1
ENG_C7_1484,7,English,The Tiny Teacher,Behavior,Easy,MCQ,Ants signals by touching their,Legs,Feelers,Wings,Eyes,B,antennae tactile signaling method,,An Alien Hand Unit 1
ENG_C7_1485,7,English,An Alien Hand,Plot,Medium,MCQ,Tilloo lived in Martian colony under,Surface,Sky,Forest,Ocean,A,Hostile environment forced society below,,An Alien Hand Unit 10
MATH_C7_1486,7,Math,Finding the Unknown,Equations,Medium,MCQ,If x - 10 = 25 then x is,15,35,10,5,B,Addition balance result for unknown,,Ganita Prakash Ch 15
MATH_C7_1487,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Arithmetic Mean of 1 2 3 4 5 is,2,3,4,5,B,Middle average of consecutive set,,Ganita Prakash Ch 13
MATH_C7_1488,7,Math,Working with Fractions,Reciprocals,Medium,MCQ,Reciprocal of 2/3 fraction is,3/2,2/3,1/3,1/2,A,Inversion of fractional elements,,Ganita Prakash Ch 8
MATH_C7_1489,7,Math,Geometric Twins,Polygons,Easy,MCQ,Triangle all angles 60 degrees name,Scalene,Isosceles,Equilateral,Right,C,Regular triangle definition based on angles,,Ganita Prakash II Ch 1
MATH_C7_1490,7,Math,Operations with Integers,Signs,Medium,MCQ,Product of -1 and -1 is,1,-1,0,2,A,Positive result from two negatives,,NCERT Ch 1
SCI_C7_1486,7,Science,Adolescence,Growth,Medium,MCQ,Larynx bulge in boys is called,Pharynx,Adam's apple,Tonsil,Epiglottis,B,Physical change during adolescent growth,,Curiosity Ch 6
SCI_C7_1487,7,Science,Exploring Substances,Indicators,Medium,MCQ,Lichens source of indicator name is,Turmeric,China Rose,Litmus,Red Cabbage,C,Natural chemical dye for acid tests,,Curiosity Ch 2
SCI_C7_1488,7,Science,Measurement of Time and Motion,Physics,Hard,MCQ,A car at 15 m/s goes how far in 1 min,15m,90m,900m,150m,C,Speed multiplied by sixty seconds,,Curiosity Ch 8
SCI_C7_1489,7,Science,Heat Transfer in Nature,Meteorology,Hard,MCQ,Sea to land day air movement is,Sea breeze,Land breeze,Storm,Monsoon,A,Caused by land heating faster than water,,Curiosity Ch 7
SCI_C7_1490,7,Science,Electricity: Circuits and Components,Conductivity,Easy,MCQ,Insulator material prevents flow of,Water,Air,Electricity,Sound,C,Non-conductive material blocking current,,Curiosity Ch 3
SST_C7_1486,7,SST,New Beginnings: Cities and States,History,Medium,MCQ,Mahajanapadas in ancient India were,8,12,16,20,C,Sixteen powerful kingdoms recorded,,Exploring Society Ch 4
SST_C7_1487,7,SST,The Gupta Era,History,Medium,MCQ,Golden Age empire was which dynasty,Maurya,Gupta,Chola,Mughal,B,Era of tireless creativity and science,,Exploring Society Ch 7
SST_C7_1488,7,SST,The Story of Indian Farming,History,Medium,MCQ,Ancient plant science text name is,Arthashastra,Vrikshayurveda,Vedas,Puranas,B,Surapala book on horticultural methods,,Exploring Society Ch 1
SST_C7_1489,7,SST,Constitution of India,Principles,Medium,MCQ,Indian nation independent status term,Sovereign,Socialist,Secular,Republic,A,Self-governing from outside powers,,Exploring Society Ch 10
SST_C7_1490,7,SST,Climates of India,Monsoon,Medium,MCQ,Seasonal wind Mausim root means,Rain,Season,Wind,Clouds,B,Arabic origin describing wind shifts,,Exploring Society Ch 3
ENG_C7_1486,7,English,Three Questions,Theme,Medium,MCQ,Author of the parable Three Questions,Ruskin Bond,Leo Tolstoy,Henry James,Wordsworth,B,Russian ethical philosopher story,,Honeycomb Unit 1
ENG_C7_1487,7,English,Golu Grows a Nose,Fable,Medium,MCQ,Baby elephant Golu full of curiosity,Questions,Food,Anger,Sleep,A,Core trait leading to river journey,,An Alien Hand Unit 3
ENG_C7_1488,7,English,My Dear Soldiers,Theme,Medium,MCQ,Soldiers dedication focus compared to,Yogis,Farmers,Merchants,Sailors,A,Metaphor for border duty endurance,,Poorvi Unit 5
ENG_C7_1489,7,English,Rani Abbakka,Vocabulary,Medium,MCQ,Ullal independent nation term was,sovereign,colony,subject,land,A,Free and self-governing status,,Poorvi Unit 5
ENG_C7_1490,7,English,Three Days to See,Theme,Hard,MCQ,Helen wants to see first day what,Museums,Faces of loved ones,Ocean,Movies,B,Human kindness prioritized over sights,,Poorvi Unit 1
MATH_C7_1491,7,Math,Finding the Unknown,Equations,Medium,MCQ,Position n for rule 2n+1 with 99 sticks,49,50,98,100,A,Algebraic solution for pattern match,,Ganita Prakash Ch 15
MATH_C7_1492,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Average of 10 20 30 40 50 is,25,30,35,40,B,Mean value calculation of the set,,Ganita Prakash Ch 13
MATH_C7_1493,7,Math,Working with Fractions,Operations,Medium,MCQ,Result of $3/4 \\times 12$ is,3,6,9,12,C,Multiplication resulting in integer nine,,Ganita Prakash Ch 8
MATH_C7_1494,7,Math,Geometric Twins,Polygons,Easy,MCQ,Interior angles of a triangle total,90,180,360,270,B,Angle Sum Property basic geometry,,Ganita Prakash II Ch 1
MATH_C7_1495,7,Math,A Peek Beyond the Point,Decimals,Easy,MCQ,Decimal product of 0.5 and 0.2,1,0.1,0.01,0.52,B,Standard decimal multiplication result,,Ganita Prakash Ch 3
SCI_C7_1491,7,Science,Changes Around Us,Chemical,Easy,MCQ,Freezing water is which change,Physical change,Chemical change,Irreversible,Permanent,A,State transformation that is reversible,,Curiosity Ch 5
SCI_C7_1492,7,Science,Exploring Substances,Indicators,Medium,MCQ,Base turns China rose solution to,Pink,Green,Blue,Yellow,B,Chromatographic behavior in alkalinity,,Curiosity Ch 2
SCI_C7_1493,7,Science,Heat Transfer in Nature,Physics,Easy,MCQ,Solid metals heat transfer flow is,Conduction,Convection,Radiation,Evaporation,A,Direct molecular contact energy travel,,Curiosity Ch 7
SCI_C7_1494,7,Science,Wastewater Story,Treatment,Easy,MCQ,Sewage cleaning facility name is,Water Works,WWTP,World Plan,Waste Tool,B,Sanitation infrastructure term acronym,,Curiosity Ch 13
SCI_C7_1495,7,Science,Life Processes in Plants,Botany,Medium,MCQ,Underside leaf gas pores name is,Chlorophyll,Stomata,Vessels,Roots,B,Leaf openings for gas exchange,,Curiosity Ch 10
SST_C7_1491,7,SST,From Barter to Money,Economics,Easy,MCQ,Early exchange without using money,Banking,Barter system,Retail,Trade,B,Direct goods ancient trade mode,,Exploring Society Ch 11
SST_C7_1492,7,SST,Understanding Markets,Economics,Easy,MCQ,Trader linking producers and retail,Consumer,Wholesaler,Farmer,Agent,B,Bulk sale intermediary role,,Exploring Society Ch 12
SST_C7_1493,7,SST,Rise of Empires,History,Medium,MCQ,Advisor author of Arthashastra name,Ashoka,Kautilya,Panini,Chandragupta,B,Political strategist of the Mauryas,,Exploring Society Ch 5
SST_C7_1494,7,SST,Constitution of India,Governance,Medium,MCQ,Chairman of drafting legal team,Nehru,B R Ambedkar,Gandhi,Prasad,B,Finalizer architect of basic laws,,Exploring Society Ch 10
SST_C7_1495,7,SST,Understanding Weather,Atmosphere,Easy,MCQ,Atmosphere weight instrument is,Barometer,Thermometer,Rain gauge,Anemometer,A,Meteorological air pressure tool,,Exploring Society Ch 2
ENG_C7_1491,7,English,Rani Abbakka,History,Medium,MCQ,Ullal queen fought which navy force,British,Portuguese,French,Dutch,B,Heroic warrior of Karnataka coast,,Poorvi Unit 5
ENG_C7_1492,7,English,Try Again,Moral,Easy,MCQ,Success comes after effort in poem,Luck,Persistence,Giving up,Money,B,Core moral lesson of attempting,,Poorvi Unit 1
ENG_C7_1493,7,English,Three Questions,Theme,Medium,MCQ,Hermit important person is person,You are with,Who is rich,Who is wise,Who is strong,A,Parable lesson on relationships,,Honeycomb Unit 1
ENG_C7_1494,7,English,The Tiny Teacher,Behavior,Easy,MCQ,Ants signaling by touching,Legs,Feelers,Wings,Eyes,B,antennae sensors for colony communication,,An Alien Hand Unit 1
ENG_C7_1495,7,English,An Alien Hand,Plot,Medium,MCQ,Tilloo lived in underground colony planet,Earth,Mars,Venus,Moon,B,Martian subsurface society story,,An Alien Hand Unit 10
MATH_C7_1496,7,Math,Finding the Unknown,Equations,Medium,MCQ,Subtract 10 from x is 15 so x is,5,25,10,150,B,Algebraic balance subtraction result,,Ganita Prakash Ch 15
MATH_C7_1497,7,Math,Connecting the Dots,Arithmetic,Medium,MCQ,Mean of numeric set 10 20 30 is,10,20,30,60,B,Arithmetic average calculation of data,,Ganita Prakash Ch 13
MATH_C7_1498,7,Math,Working with Fractions,Operations,Medium,MCQ,Reciprocal of proper fraction is always,Proper,Improper,Unit,Mixed,B,Inverting proper fraction results in value $> 1$,,Ganita Prakash Ch 8
MATH_C7_1499,7,Math,Geometric Twins,Polygons,Easy,MCQ,Triangle with all equal sides name,Isosceles,Equilateral,Scalene,Right,B,Regular triangle definition geometry,,Ganita Prakash II Ch 1
MATH_C7_1500,7,Math,Operations with Integers,Signs,Medium,MCQ,Result of -1 multiplied by -1 is,1,-1,0,2,A,Product of two negative integers is positive,,NCERT Ch 1`;

// =====================================================
// SECTION 0: CLASS STATE MANAGEMENT
// =====================================================

const CLASS_STORE_KEY = 'studyBuddy_activeClass';

function getActiveClass() {
  return localStorage.getItem(CLASS_STORE_KEY) || null;
}

function setActiveClass(cls) {
  localStorage.setItem(CLASS_STORE_KEY, String(cls));
  updateClassUI();
}

// Returns all classes available across built-in + CSV banks
// Normalise a filter string for case/space-insensitive matching.
// Used everywhere subject, chapter, topic strings are compared.
function norm(s) { return String(s == null ? '' : s).trim().toLowerCase(); }

function getAllAvailableClasses() {
  const all = [...QUESTION_BANK, ...loadAllCsvBanks().flatMap(b => b.questions)];
  const classes = [...new Set(all.map(q => q.classLevel).filter(Boolean))];
  // Sort numerically then alphabetically
  return classes.sort((a, b) => {
    const na = parseFloat(a), nb = parseFloat(b);
    if (!isNaN(na) && !isNaN(nb)) return na - nb;
    return String(a).localeCompare(String(b));
  });
}

// Wraps getAllQuestions() with active class filter
function getClassFilteredQuestions() {
  const cls = getActiveClass();
  const all = getAllQuestions();
  if (!cls) return all;
    return all.filter(q => {
    if (!q.classLevel) return true;                         // no class tag → show everywhere
    const qc  = String(q.classLevel).trim().replace(/^class\s*/i,'').replace(/[^\d]/g,'');
    const act = String(cls).trim().replace(/^class\s*/i,'').replace(/[^\d]/g,'');
    return qc === '' || qc === act;                         // empty normalises to "any class"
  });
}

// Update all dynamic UI text that references the active class
function updateClassUI() {
  const cls = getActiveClass();
  // Nav dropdown label
  const btnLabel = document.getElementById('class-dropdown-label');
  if (btnLabel) btnLabel.textContent = cls ? `🎓 Class ${cls}` : (typeof t === 'function' ? t('select_class') : '🎓 Select Class');
  // Tutor subtitle
  const tutorSub = document.getElementById('tutor-page-sub');
  if (tutorSub) tutorSub.textContent = `Choose Claude 🟣, ChatGPT 🟢 or Gemini 🔵 — ask anything${cls ? ` about Class ${cls}` : ''}!`;
  // Hero subtitle is handled by updateHomeStats — do not override here
}

// Build and populate the dropdown list
function renderClassDropdown() {
  const list = document.getElementById('class-dropdown-list');
  if (!list) return;
  const classes = getAllAvailableClasses();
  const active  = getActiveClass();
  const all = getAllQuestions();
  const countByClass = {};
  all.forEach(q => {
    const c = q.classLevel || 'General';
    countByClass[c] = (countByClass[c] || 0) + 1;
  });
  const classEmojis = { '1':'🌱','2':'🌿','3':'🌳','4':'🌸','5':'⭐','6':'🚀','7':'🎯','8':'🏆','9':'💡','10':'🎓','11':'🔬','12':'🎪' };

  let html = `<div class="cdrop-item ${!active ? 'cdrop-active' : ''}" onclick="selectClass(null)">
    🌈 All Classes <span class="cdrop-count">${all.length}</span>
  </div>`;

  if (classes.length === 0) {
    html += `<div class="cdrop-empty">Upload a CSV to add classes 📂</div>`;
  } else {
    classes.forEach(cls => {
      const count = countByClass[cls] || 0;
      const emoji = classEmojis[String(cls)] || '📚';
      const isActive = String(active) === String(cls);
      html += `<div class="cdrop-item ${isActive ? 'cdrop-active' : ''}" onclick="selectClass('${cls}')">
        ${emoji} Class ${cls} <span class="cdrop-count">${count}</span>
      </div>`;
    });
  }
  list.innerHTML = html;
}

function toggleClassDropdown() {
  const menu = document.getElementById('class-dropdown-menu');
  if (!menu) return;
  const isOpen = menu.style.display !== 'none';
  if (isOpen) {
    closeClassDropdown();
  } else {
    renderClassDropdown();
    menu.style.display = 'block';
    // Close on outside click
    setTimeout(() => document.addEventListener('click', outsideDropdownClose, { once: true }), 0);
  }
}

function outsideDropdownClose(e) {
  const wrap = document.getElementById('class-dropdown-wrap');
  if (wrap && !wrap.contains(e.target)) closeClassDropdown();
}

function closeClassDropdown() {
  const menu = document.getElementById('class-dropdown-menu');
  if (menu) menu.style.display = 'none';
}

// Kept for backward compatibility (CSV page "Upload your own" link)
function showClassSelector() { toggleClassDropdown(); }

function selectClass(cls) {
  closeClassDropdown();
  if (cls !== null) setActiveClass(cls);
  else {
    localStorage.removeItem(CLASS_STORE_KEY);
    updateClassUI();
  }
  // Reset quiz state so it reloads with new class filter
  const subjects = getAllSubjects();
  selectedSubject = subjects[0] || null;
  selectedChapter = null;
  dailySubjectFilter = '__all__';
  showToast(`✅ ${cls ? `Class ${cls} selected!` : 'Showing all classes'}`);
  showPage('page-home');
}

// =====================================================
// SECTION 1: DATA – Multi-Class Question Bank
// =====================================================

const CHAPTERS = {
  Math: [
    "Integers",
    "Fractions and Decimals",
    "Data Handling",
    "Simple Equations",
    "Lines and Angles",
    "The Triangle",
    "Congruence of Triangles",
    "Comparing Quantities",
    "Rational Numbers",
    "Practical Geometry",
    "Perimeter and Area",
    "Algebraic Expressions"
  ],
  Science: [
    "Nutrition in Plants",
    "Nutrition in Animals",
    "Fibre to Fabric",
    "Heat",
    "Acids Bases and Salts",
    "Physical and Chemical Changes",
    "Weather Climate and Adaptations",
    "Winds Storms and Cyclones",
    "Soil",
    "Respiration in Organisms",
    "Transportation in Animals and Plants",
    "Reproduction in Plants"
  ],
  English: [
    "Grammar – Nouns",
    "Grammar – Verbs and Tenses",
    "Grammar – Adjectives",
    "Grammar – Pronouns",
    "Reading Comprehension",
    "Writing Skills – Letters",
    "Writing Skills – Essays",
    "Poem Appreciation"
  ],
  SST: [
    "Tracing Changes Through Thousand Years",
    "New Kings and Kingdoms",
    "The Sultans of Delhi",
    "The Mughal Empire",
    "Inside Our Earth",
    "Our Changing Earth",
    "Our Environment",
    "Democracy – Equality and Justice",
    "State Government",
    "Markets Around Us"
  ]
};

// =====================================================
// SECTION 2: QUESTION BANK
// =====================================================

/* Each question: { q, opts:[A,B,C,D], ans:0-3, exp, subject, chapter, topic, difficulty, classLevel }
   NOTE: opts are shuffled at render time — ans stores the CORRECT ANSWER TEXT, not an index */

// QUESTION_BANK is intentionally empty.
// All questions must be uploaded via CSV in the 📂 Manage Questions section.
// A ready-to-use starter CSV (class7_questions.csv) is available for download.
const QUESTION_BANK = [];

// SECTION 3: AI TUTOR KNOWLEDGE BASE (rule-based)
// =====================================================

const TUTOR_KB = [
  // Math
  { keys:["integer","negative","positive","number line"], answer:`📐 <b>Integers</b> are all whole numbers: positive (1,2,3…), zero (0), and negative (…-3,-2,-1).<br><br>🔑 Key rules:<br>• (+) × (+) = Positive 😊<br>• (−) × (−) = Positive 😊<br>• (+) × (−) = Negative 😟<br>• To add negatives: add and keep the sign (-3 + -4 = -7)<br><br>Think of the number line like a street – positive is going right, negative is going left! 🚶` },
  { keys:["photosynthesis","plant food","chlorophyll","glucose"], answer:`🌿 <b>Photosynthesis</b> is how plants make their own food!<br><br>📝 Formula:<br><b>Sunlight + Water + CO₂ → Glucose + Oxygen</b><br><br>🔑 Key points:<br>• Happens in the leaves 🍃<br>• Chlorophyll (green pigment) traps sunlight<br>• Takes place in daytime<br>• Releases Oxygen (which we breathe!) 😤<br><br>Remember: Plants are like little solar-powered kitchens! ☀️🍳` },
  { keys:["fraction","numerator","denominator","half","quarter"], answer:`🍕 <b>Fractions</b> represent parts of a whole!<br><br>Structure: <b>Numerator / Denominator</b><br>• Numerator = top number (how many parts you have)<br>• Denominator = bottom number (total parts)<br><br>🔑 Tips:<br>• To add/subtract: make the denominators equal first<br>• To multiply: multiply numerators, then denominators<br>• To divide: flip the second fraction and multiply!<br><br>3/4 means 3 out of 4 equal parts – like 3 slices of a 4-slice pizza! 🍕` },
  { keys:["equation","variable","solve","unknown"], answer:`⚖️ <b>Simple Equations</b> are like balance puzzles!<br><br>🔑 Golden Rule: Whatever you do to one side, do the SAME to the other side!<br><br>Example: 2x + 3 = 11<br>Step 1: Subtract 3 from both sides → 2x = 8<br>Step 2: Divide both by 2 → x = 4 ✅<br><br>Always check your answer by putting it back in the equation! 🎯` },
  { keys:["mean","median","mode","average","data"], answer:`📊 <b>Data Handling</b> – Three important measures:<br><br>📌 <b>Mean (Average)</b>: Add all values ÷ number of values<br>📌 <b>Median</b>: Middle value when data is arranged in order<br>📌 <b>Mode</b>: Most frequently appearing value<br><br>Example: 2, 3, 3, 4, 8<br>• Mean = (2+3+3+4+8)/5 = 20/5 = 4<br>• Median = 3 (middle value)<br>• Mode = 3 (appears most) 🎯` },
  { keys:["acid","base","salt","litmus","ph"], answer:`🧪 <b>Acids, Bases and Salts</b>:<br><br>🔴 <b>Acids</b>: Taste sour, turn blue litmus RED<br>Examples: Lemon juice, vinegar, curd<br><br>🔵 <b>Bases</b>: Taste bitter, turn red litmus BLUE<br>Examples: Baking soda, soap, bleach<br><br>🟢 <b>Salts</b>: Formed when acid + base react (neutralization)<br>Example: Common salt (NaCl)<br><br>🎨 Indicators like litmus, turmeric help us identify them!` },
  { keys:["noun","pronoun","verb","adjective","adverb","grammar"], answer:`📖 <b>Parts of Speech</b>:<br><br>👤 <b>Noun</b>: Names a person, place, thing or idea (Ram, Delhi, book)<br>🔄 <b>Pronoun</b>: Replaces a noun (he, she, it, they)<br>🏃 <b>Verb</b>: Shows action or state (run, is, have)<br>🎨 <b>Adjective</b>: Describes a noun (tall, red, happy)<br>💨 <b>Adverb</b>: Describes a verb/adjective (quickly, very)<br>🔗 <b>Conjunction</b>: Joins words/phrases (and, but, or)<br><br>Every sentence needs a Noun + Verb at minimum! 📝` },
  { keys:["democracy","government","election","vote","citizen"], answer:`🗳️ <b>Democracy</b> means "Rule by the People"!<br><br>🔑 Key ideas:<br>• Citizens above 18 can vote (Universal Adult Franchise)<br>• People elect their representatives<br>• Government is accountable to people<br>• Free and fair elections<br><br>India is the world's LARGEST democracy! 🇮🇳<br><br>Levels of government:<br>• Central (Parliament) → Prime Minister<br>• State (Legislature) → Chief Minister<br>• Local (Panchayat/Municipality)` },
  { keys:["mughal","akbar","babur","shah jahan","taj mahal"], answer:`🏯 <b>The Mughal Empire</b>:<br><br>👑 Important rulers:<br>• <b>Babur</b> (1526): Founded Mughal Empire, won 1st Battle of Panipat<br>• <b>Akbar</b>: Greatest Mughal, policy of religious tolerance (Sul-i-kul)<br>• <b>Jahangir</b>: Known for love of art<br>• <b>Shah Jahan</b>: Built Taj Mahal for wife Mumtaz Mahal 💎<br>• <b>Aurangzeb</b>: Extended empire but later declined<br><br>The Mughals ruled most of India from 1526–1857! 📜` },
  { keys:["heat","temperature","conductor","insulator","thermometer"], answer:`🌡️ <b>Heat</b>:<br><br>🔑 Key concepts:<br>• Heat is a form of energy; Temperature measures how hot something is<br>• Heat always flows from HOT → COLD objects<br>• <b>Conductors</b>: Allow heat to pass easily (metals like iron, copper)<br>• <b>Insulators</b>: Block heat flow (wood, plastic, wool)<br><br>🌬️ Types of wind:<br>• Sea breeze: Sea → Land (during day)<br>• Land breeze: Land → Sea (at night)<br><br>Clinical thermometer measures body temperature (normal = 37°C / 98.6°F)! 🏥` },
  { keys:["triangle","angle","polygon","side","geometry"], answer:`🔺 <b>Triangles</b>:<br><br>📐 Sum of all angles = 180°<br><br>Types by sides:<br>• <b>Equilateral</b>: All 3 sides equal<br>• <b>Isosceles</b>: 2 sides equal<br>• <b>Scalene</b>: No sides equal<br><br>Types by angles:<br>• <b>Acute</b>: All angles < 90°<br>• <b>Right</b>: One angle = 90°<br>• <b>Obtuse</b>: One angle > 90°<br><br>The longest side is opposite the largest angle! 🎯` },
  { keys:["respiration","breathing","oxygen","lungs","energy"], answer:`💨 <b>Respiration in Organisms</b>:<br><br>Respiration = Process of releasing energy from food<br><br>📝 Formula:<br><b>Glucose + Oxygen → Carbon dioxide + Water + Energy</b><br><br>🔑 Types:<br>• <b>Aerobic</b>: With oxygen (in most organisms including humans)<br>• <b>Anaerobic</b>: Without oxygen (in yeast, some bacteria)<br><br>We breathe in Oxygen and breathe out Carbon Dioxide! 😤<br>Our lungs do this work ~20,000 times a day! 🫁` },
  { keys:["soil","erosion","layer","humus","profile"], answer:`🌍 <b>Soil</b>:<br><br>Soil has different layers called <b>horizons</b>:<br>• <b>Topsoil (A)</b>: Rich in humus, dark colour<br>• <b>Subsoil (B)</b>: Less humus, more minerals<br>• <b>C horizon</b>: Broken parent rock<br>• <b>Bedrock</b>: Solid rock at bottom<br><br>🌱 <b>Humus</b>: Decayed plant/animal matter that makes soil fertile<br><br>Soil erosion = removal of topsoil by wind/water. Trees prevent it! 🌳` },
];

// =====================================================
// SECTION 4: MOCK EXAM QUESTIONS (non-MCQ)
// =====================================================

// =====================================================
// SECTION 4b: EXAM QUESTION BANK (Short / Long / Essay)
// =====================================================
// Hardcoded Class 7 defaults — used as sample and as fallback when no bank loaded
const DEFAULT_SHORT_QUESTIONS = [
  { q:"What is the difference between a conductor and an insulator? Give one example of each.", subj:"Science", classLevel:"7" },
  { q:"Define photosynthesis and write its word equation.", subj:"Science", classLevel:"7" },
  { q:"What is Universal Adult Franchise? Why is it important?", subj:"SST", classLevel:"7" },
  { q:"What is the difference between mean and mode? Give an example.", subj:"Math", classLevel:"7" },
  { q:"Write three rules for integers with examples.", subj:"Math", classLevel:"7" },
  { q:"What is the difference between an acid and a base?", subj:"Science", classLevel:"7" },
  { q:"What are proper nouns? Give two examples.", subj:"English", classLevel:"7" },
  { q:"Name the three layers of the Earth.", subj:"SST", classLevel:"7" },
  { q:"What is the role of stomata in plants?", subj:"Science", classLevel:"7" },
  { q:"Explain the difference between a simple equation and an expression.", subj:"Math", classLevel:"7" },
  { q:"What is democracy? Name two features of a democratic country.", subj:"SST", classLevel:"7" },
  { q:"Define a fraction. Give two examples of like fractions.", subj:"Math", classLevel:"7" },
  { q:"What causes thunder and lightning?", subj:"Science", classLevel:"7" },
  { q:"What is an adjective? Give two examples.", subj:"English", classLevel:"7" },
  { q:"Describe two ways in which humans depend on forests.", subj:"SST", classLevel:"7" },
];

const DEFAULT_LONG_QUESTIONS = [
  { q:"Explain how plants prepare their food through photosynthesis. Mention the raw materials needed, conditions required, and the products formed.", subj:"Science", classLevel:"7" },
  { q:"Describe the Mughal Emperor Akbar's religious policy. How was it different from other rulers of his time?", subj:"SST", classLevel:"7" },
  { q:"Explain the water cycle. How does water move through different forms in nature?", subj:"Science", classLevel:"7" },
  { q:"Describe the layers of soil and explain why topsoil is important for farming.", subj:"SST", classLevel:"7" },
  { q:"What are integers? Explain the rules for addition, subtraction and multiplication of integers with examples.", subj:"Math", classLevel:"7" },
  { q:"Explain the process of digestion in the human body from the mouth to the small intestine.", subj:"Science", classLevel:"7" },
  { q:"Describe the major landforms of the Earth. Give one example of each from India.", subj:"SST", classLevel:"7" },
  { q:"Explain fractions with examples. What is the difference between a proper fraction, improper fraction and a mixed fraction?", subj:"Math", classLevel:"7" },
];

const DEFAULT_ESSAY_QUESTIONS = [
  { q:"Write an essay on 'The Importance of Trees and Forests for our Planet'. (Hints: oxygen, habitat, climate, deforestation)", subj:"Science/English", classLevel:"7" },
  { q:"Describe the water cycle in detail. How do human activities affect it?", subj:"Science", classLevel:"7" },
  { q:"Write an essay on 'Democracy and its Importance in Modern Society'.", subj:"SST/English", classLevel:"7" },
  { q:"Explain how the Mughal Empire influenced Indian culture, architecture and administration.", subj:"SST", classLevel:"7" },
  { q:"Write a descriptive essay on 'A Day in the Life of a Farmer in India'.", subj:"English", classLevel:"7" },
  { q:"Discuss the role of science and technology in improving human health and agriculture.", subj:"Science", classLevel:"7" },
  { q:"Write an essay on 'Environmental Pollution — Causes, Effects and Solutions'.", subj:"Science/English", classLevel:"7" },
];

// ---- Exam bank localStorage helpers ----
const EXAM_BANK_KEY = 'studyBuddy_examBanks';

function loadAllExamBanks() {
  try { return JSON.parse(localStorage.getItem(EXAM_BANK_KEY) || '[]'); } catch { return []; }
}
function saveAllExamBanks(banks) {
  try { localStorage.setItem(EXAM_BANK_KEY, JSON.stringify(banks)); } catch(e) { console.error(e); }
}

// Returns questions of a given type from uploaded exam banks (filtered by active class if set)
// Falls back to hardcoded defaults if no uploaded bank has that type
function getExamQuestions(type) {
  const cls   = getActiveClass();
  const banks = loadAllExamBanks();
  let pool = [];
  banks.forEach(bank => {
    bank.questions
      .filter(q => q.type === type)
      .filter(q => !cls || !q.classLevel || String(q.classLevel).replace(/\D/g,'') === String(cls).replace(/\D/g,''))
      .forEach(q => pool.push(q));
  });
  if (pool.length > 0) return pool;
  // Fallback to hardcoded defaults
  const defaults = type === 'short' ? DEFAULT_SHORT_QUESTIONS
                 : type === 'long'  ? DEFAULT_LONG_QUESTIONS
                 :                    DEFAULT_ESSAY_QUESTIONS;
  return cls ? defaults.filter(q => !q.classLevel || q.classLevel === String(cls)) : defaults;
}

// ---- Parse exam CSV ----
function parseExamCSV(text) {
  const lines   = text.trim().split(/\r?\n/);
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g,'').toLowerCase());
  const qIdx    = headers.indexOf('question');
  const tIdx    = headers.indexOf('type');
  if (qIdx === -1 || tIdx === -1) return { questions:[], error:'CSV must have "type" and "question" columns.' };

  const sIdx    = headers.indexOf('subject');
  const clsIdx  = headers.indexOf('class');
  const chapIdx = headers.indexOf('chapter');
  const mIdx    = headers.indexOf('marks');

  const questions = [];
  lines.slice(1).forEach(line => {
    if (!line.trim()) return;
    // Simple CSV parse — handle quoted fields
    const vals = line.match(/(".*?"|[^,]+|(?<=,)(?=,)|(?<=,)$|^(?=,))/g) || line.split(',');
    const clean = v => (v||'').trim().replace(/^"|"$/g,'');
    const type = clean(vals[tIdx])?.toLowerCase();
    const q    = clean(vals[qIdx]);
    if (!q || !['short','long','essay'].includes(type)) return;
    questions.push({
      type,
      q,
      subj:       sIdx  >= 0 ? clean(vals[sIdx])  : '',
      classLevel: clsIdx>= 0 ? clean(vals[clsIdx]): '',
      chapter:    chapIdx>=0 ? clean(vals[chapIdx]): '',
      marks:      mIdx  >= 0 ? clean(vals[mIdx])  : '',
    });
  });
  return { questions, error: null };
}

// ---- Load sample exam bank ----
function loadSampleExamBank() {
  const existing = loadAllExamBanks();
  if (existing.some(b => b.id.startsWith('exambank_sample_'))) {
    showToast('✅ Sample exam bank already loaded!'); return;
  }
  const questions = [
    ...DEFAULT_SHORT_QUESTIONS.map(q => ({ ...q, type:'short' })),
    ...DEFAULT_LONG_QUESTIONS.map(q  => ({ ...q, type:'long'  })),
    ...DEFAULT_ESSAY_QUESTIONS.map(q => ({ ...q, type:'essay' })),
  ];
  const bank = {
    id:       'exambank_sample_' + Date.now(),
    name:     'Class 7 – Sample Exam Questions',
    filename: 'class7_exam_questions.csv',
    addedAt:  Date.now(),
    questions,
    summary:  { short: DEFAULT_SHORT_QUESTIONS.length, long: DEFAULT_LONG_QUESTIONS.length, essay: DEFAULT_ESSAY_QUESTIONS.length }
  };
  saveAllExamBanks([...existing, bank]);
  renderExamBanksList();
  updateSampleExamBankButton();
  showToast(`✅ Sample exam bank loaded — ${questions.length} questions!`);
}

// ---- Download sample exam CSV template ----
function downloadSampleExamCsv() {
  const rows = [
    'type,question,subject,class,chapter,marks',
    ...DEFAULT_SHORT_QUESTIONS.map(q => `short,"${q.q}",${q.subj},7,,2`),
    ...DEFAULT_LONG_QUESTIONS.map(q  => `long,"${q.q}",${q.subj},7,,5`),
    ...DEFAULT_ESSAY_QUESTIONS.map(q => `essay,"${q.q}",${q.subj},7,,`),
  ];
  const blob = new Blob([rows.join('\n')], { type:'text/csv' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'exam_questions_template.csv'; a.click();
  URL.revokeObjectURL(url);
  showToast('📥 Exam CSV template downloaded!');
}

// ---- Handle exam CSV file upload ----
function examCsvDrop(e) {
  e.preventDefault();
  const file = e.dataTransfer?.files?.[0];
  if (file) handleExamCsvFile({ target:{ files:[file] } });
}

function handleExamCsvFile(e) {
  const file = e.target?.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const { questions, error } = parseExamCSV(ev.target.result);
    if (error) { showToast('⚠️ ' + error); return; }
    if (!questions.length) { showToast('⚠️ No valid questions found. Check type column is short/long/essay.'); return; }
    window._pendingExamQuestions = questions;
    showExamCsvPreview(file.name, questions);
  };
  reader.readAsText(file);
  e.target.value = '';
}

function showExamCsvPreview(filename, questions) {
  const area = document.getElementById('exam-csv-preview-area');
  if (!area) return;
  const counts = { short:0, long:0, essay:0 };
  questions.forEach(q => { if (counts[q.type] !== undefined) counts[q.type]++; });
  const preview = questions.slice(0, 6).map((q,i) => `
    <tr><td>${i+1}</td><td><span class="exam-type-pill exam-type-${q.type}">${q.type}</span></td>
    <td>${q.q.slice(0,70)}${q.q.length>70?'…':''}</td>
    <td>${q.subj||'—'}</td><td>${q.classLevel||'—'}</td></tr>`).join('');

  area.innerHTML = `
    <div class="csv-preview-card" style="margin-top:16px;">
      <div class="csv-preview-header">
        <span>📄 ${filename}</span>
        <span style="color:var(--clr-green)">✅ ${questions.length} questions found</span>
        <span>✍️ ${counts.short} short &nbsp;📝 ${counts.long} long &nbsp;📃 ${counts.essay} essay</span>
      </div>
      <div class="csv-format-table-wrap"><table class="csv-format-table">
        <thead><tr><th>#</th><th>Type</th><th>Question</th><th>Subject</th><th>Class</th></tr></thead>
        <tbody>${preview}</tbody>
      </table></div>
      <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;align-items:center;">
        <span style="font-size:14px;font-weight:700;color:var(--clr-text)">Bank name:</span>
        <input id="exam-bank-name-input" class="bank-name-input" value="${filename.replace('.csv','')}" placeholder="e.g. Class 7 Exam Questions" />
        <button class="big-btn btn-green" style="padding:8px 18px;font-size:14px;" onclick="saveExamCsvBank('${filename}')">💾 Save Exam Bank</button>
        <button class="key-change-btn" onclick="document.getElementById('exam-csv-preview-area').innerHTML=''">✕ Cancel</button>
      </div>
    </div>`;
  area.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

function saveExamCsvBank(filename) {
  const area = document.getElementById('exam-csv-preview-area');
  // Re-read the file by re-triggering — can't re-parse from DOM, so stash in window
  const questions = window._pendingExamQuestions;
  if (!questions) { showToast('⚠️ No questions to save.'); return; }
  const nameEl = document.getElementById('exam-bank-name-input');
  const name   = nameEl?.value?.trim() || filename;
  const banks  = loadAllExamBanks();
  const counts = { short:0, long:0, essay:0 };
  questions.forEach(q => { if (counts[q.type] !== undefined) counts[q.type]++; });
  const bank = {
    id:       'exambank_' + Date.now(),
    name,
    filename,
    addedAt:  Date.now(),
    questions,
    summary:  counts
  };
  saveAllExamBanks([...banks, bank]);
  window._pendingExamQuestions = null;
  if (area) area.innerHTML = '';
  renderExamBanksList();
  showToast(`✅ "${name}" saved — ${questions.length} exam questions!`);
}

// ---- Render exam banks list ----
function renderExamBanksList() {
  const container = document.getElementById('exam-banks-list');
  if (!container) return;
  const banks = loadAllExamBanks();
  if (!banks.length) {
    container.innerHTML = `<div class="csv-empty">No exam banks uploaded yet. Load the sample or upload your own CSV above! ✍️</div>`;
    return;
  }
  container.innerHTML = banks.map(bank => {
    const s   = bank.summary || {};
    const date = bank.addedAt ? new Date(bank.addedAt).toLocaleDateString('en-IN') : '—';
    return `
      <div class="csv-bank-item" id="examcard-${bank.id}">
        <div class="csv-bank-info">
          <div class="csv-bank-name">✍️ ${bank.name}</div>
          <div class="csv-bank-meta">
            <span>📄 ${bank.filename}</span>
            <span>✅ ${bank.questions.length} questions</span>
            ${s.short  ? `<span>📝 ${s.short} short</span>`  : ''}
            ${s.long   ? `<span>📋 ${s.long} long</span>`    : ''}
            ${s.essay  ? `<span>📃 ${s.essay} essay</span>`  : ''}
            <span>🗓️ ${date}</span>
          </div>
        </div>
        <div class="csv-bank-actions">
          <button class="key-change-btn danger" onclick="deleteExamBank('${bank.id}')">🗑️ Delete</button>
        </div>
      </div>`;
  }).join('');
}

function deleteExamBank(id) {
  if (!confirm('Delete this exam bank?')) return;
  saveAllExamBanks(loadAllExamBanks().filter(b => b.id !== id));
  renderExamBanksList();
  updateSampleExamBankButton();
  showToast('🗑️ Exam bank deleted.');
}

function updateSampleExamBankButton() {
  const btn = document.getElementById('load-sample-exam-btn');
  if (!btn) return;
  const already = loadAllExamBanks().some(b => b.id.startsWith('exambank_sample_'));
  btn.disabled    = already;
  btn.textContent = already ? '✅ Sample Exam Bank Loaded' : '📦 Load Sample Exam Questions (Class 7)';
}

// =====================================================
// SECTION 5: PROGRESS TRACKING (localStorage)
// =====================================================

let progress = JSON.parse(localStorage.getItem('studyBuddyProgress') || 'null') || {
  totalAttempts: 0,
  correct: 0,
  streak: 0,
  bestStreak: 0,
  subjectStats: { Math:{ a:0, c:0 }, Science:{ a:0, c:0 }, English:{ a:0, c:0 }, SST:{ a:0, c:0 } },
  achievements: [],
  history: []
};

function saveProgress() {
  localStorage.setItem('studyBuddyProgress', JSON.stringify(progress));
  updateNavScore();
  updateHomeStats();
}

function updateProgress(subject, isCorrect) {
  progress.totalAttempts++;
  if (isCorrect) {
    progress.correct++;
    progress.streak++;
    if (progress.streak > progress.bestStreak) progress.bestStreak = progress.streak;
  } else {
    progress.streak = 0;
  }
  // Guard: subject may be undefined/null from incomplete CSV rows
  const subj = (subject || 'General').trim() || 'General';
  if (!progress.subjectStats[subj]) {
    progress.subjectStats[subj] = { a: 0, c: 0 };
  }
  progress.subjectStats[subj].a++;
  if (isCorrect) progress.subjectStats[subj].c++;
  checkAchievements();
  saveProgress();
}

function checkAchievements() {
  const achs = [
    { id:"first", title:"First Step 🌟", cond: () => progress.totalAttempts >= 1 },
    { id:"ten",   title:"10 Questions 🎯", cond: () => progress.totalAttempts >= 10 },
    { id:"fifty", title:"50 Questions 💪", cond: () => progress.totalAttempts >= 50 },
    { id:"streak5", title:"5 Streak 🔥", cond: () => progress.bestStreak >= 5 },
    { id:"streak10", title:"10 Streak 🚀", cond: () => progress.bestStreak >= 10 },
    { id:"perfect", title:"Perfect Score 🏆", cond: () => progress.correct > 0 && progress.correct === progress.totalAttempts },
    { id:"math5",    title:"Math Explorer ➕", cond: () => progress.subjectStats.Math.a >= 5 },
    { id:"science5", title:"Science Star 🔬",  cond: () => progress.subjectStats.Science.a >= 5 },
    { id:"english5", title:"Word Wizard 📖",   cond: () => progress.subjectStats.English.a >= 5 },
    { id:"sst5",     title:"History Hero 🌍",  cond: () => progress.subjectStats.SST.a >= 5 },
  ];
  achs.forEach(a => {
    if (!progress.achievements.includes(a.id) && a.cond()) {
      progress.achievements.push(a.id);
      showToast("Achievement Unlocked: " + a.title);
    }
  });
}

function updateNavScore() {
  document.getElementById('nav-score').textContent = progress.correct;
  document.getElementById('nav-streak').textContent = progress.streak;
}

function updateHomeStats() {
  document.getElementById('hs-attempts').textContent = progress.totalAttempts;
  document.getElementById('hs-correct').textContent = progress.correct;
  const acc = progress.totalAttempts > 0 ? Math.round((progress.correct/progress.totalAttempts)*100) : 0;
  document.getElementById('hs-score').textContent = acc + '%';
  const qcount = getActiveQuestions().length;
  const el = document.getElementById('hs-questions');
  if (el) el.textContent = qcount;

  // Show/hide nudge
  const nudge = document.getElementById('home-upload-nudge');
  if (nudge) nudge.style.display = qcount === 0 ? 'block' : 'none';

  // Update stat labels via i18n
  if (typeof t === 'function') {
    document.querySelectorAll('[data-i18n="stat_questions"]').forEach(e => e.textContent = t('stat_questions'));
    document.querySelectorAll('[data-i18n="stat_attempts"]').forEach(e  => e.textContent = t('stat_attempts'));
    document.querySelectorAll('[data-i18n="stat_correct"]').forEach(e   => e.textContent = t('stat_correct'));
    document.querySelectorAll('[data-i18n="stat_accuracy"]').forEach(e  => e.textContent = t('stat_accuracy'));
  }

  // Update hero subtitle via i18n + class state
  const sub = document.getElementById('hero-sub-text');
  if (sub && typeof t === 'function') {
    const cls = getActiveClass();
    if (cls && qcount > 0) {
      sub.innerHTML = t('home_sub_loaded', { cls }) ;
    } else if (qcount > 0) {
      sub.textContent = t('home_sub_noclass');
    } else {
      sub.textContent = t('home_sub_default');
    }
  }
}

// Show a friendly prompt when no questions are loaded yet
function showNoQuestionsState(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.querySelectorAll('.no-questions-state').forEach(n => n.remove());
  const div = document.createElement('div');
  div.className = 'no-questions-state';
  div.innerHTML = `
    <div class="nqs-icon">📂</div>
    <h3>No Questions Loaded Yet</h3>
    <p>Load the built-in sample bank instantly, or upload your own CSV.</p>
    <div class="nqs-actions">
      <button class="nqs-btn-primary" onclick="loadSampleBank(); showPage('page-quiz')">📦 Load Sample Bank</button>
      <button class="nqs-btn-secondary" onclick="showPage('page-csv')">➕ Upload Your Own CSV</button>
    </div>
    <p class="nqs-hint">Sample bank has 2368 questions across Math, Science, English &amp; SST for Class 7. You can delete it any time from <b>📂 Question Bank</b>.</p>
  `;
  el.appendChild(div);
}

// =====================================================
// SECTION 6: PAGE NAVIGATION
// =====================================================

// =====================================================
// SECTION 7: AI TUTOR – Multi-Provider (Claude / ChatGPT / Gemini)
// =====================================================

// Conversation memory per provider
let chatHistory = [];

// ---- Provider config ----
const AI_PROVIDERS = {
  claude: {
    name: 'Claude',
    logo: '🟣',
    placeholder: 'sk-ant-…',
    validate: k => k.startsWith('sk-ant'),
    hint: 'console.anthropic.com → API Keys',
    hintUrl: 'https://console.anthropic.com',
    color: '#7c3aed'
  },
  openai: {
    name: 'ChatGPT',
    logo: '🟢',
    placeholder: 'sk-…',
    validate: k => k.startsWith('sk-'),
    hint: 'platform.openai.com → API Keys',
    hintUrl: 'https://platform.openai.com/api-keys',
    color: '#10a37f'
  },
  gemini: {
    name: 'Gemini',
    logo: '🔵',
    placeholder: 'AIza…',
    validate: k => k.startsWith('AIza') || k.length > 20,
    hint: 'aistudio.google.com → Get API Key',
    hintUrl: 'https://aistudio.google.com/app/apikey',
    color: '#4285f4'
  }
};

// ---- Storage helpers ----
function getProvider()    { return localStorage.getItem('studyBuddyProvider') || 'claude'; }
function setProvider(p)   { localStorage.setItem('studyBuddyProvider', p); }
function getApiKey(p)     { return localStorage.getItem('studyBuddyKey_' + (p || getProvider())) || ''; }
function setApiKey(p, k)  { localStorage.setItem('studyBuddyKey_' + p, k.trim()); }
function clearApiKey(p)   { localStorage.removeItem('studyBuddyKey_' + (p || getProvider())); }

// ---- Shared system prompt (dynamic based on active class) ----
function getSystemPrompt() {
  const cls = getActiveClass();
  const classDesc = cls ? `Class ${cls} CBSE` : 'school';
  const ageDesc   = cls ? (() => {
    const n = parseInt(cls);
    if (!isNaN(n)) return `(age ${n + 5}–${n + 6})`;
    return '';
  })() : '';
  const subjects = getAllSubjects();
  const subjectList = subjects.length
    ? subjects.join(', ')
    : 'Mathematics, Science, English, Social Science';
  return `You are "Study Buddy", a friendly and encouraging AI tutor for ${classDesc} students ${ageDesc} in India.

Your job:
- Explain concepts clearly in very simple, kid-friendly language
- Use emojis to make answers fun and engaging 🌟
- Keep answers concise but complete (100-200 words max)
- Use bullet points or numbered steps when explaining processes
- Always relate to NCERT ${classDesc} syllabus topics
- Be encouraging and positive — say things like "Great question!" or "You've got this! 💪"
- Use relevant Indian examples when possible (e.g., rupees for maths, Indian history for SST)
- If the question is off-topic or inappropriate, gently redirect to studies

Subjects: ${subjectList}
Format: readable HTML only — use <b> for bold, <br> for line breaks. No markdown.`;
}

// ---- Show setup panel ----
function checkApiKeyBanner() {
  document.getElementById('api-key-banner')?.remove();
  const provider = getProvider();
  const cfg = AI_PROVIDERS[provider];

  const banner = document.createElement('div');
  banner.id = 'api-key-banner';

  // Provider selector tabs
  const tabs = Object.entries(AI_PROVIDERS).map(([id, c]) => `
    <button class="provider-tab ${id === provider ? 'active' : ''}"
            onclick="switchProvider('${id}')"
            style="--pcol:${c.color}">
      ${c.logo} ${c.name}
    </button>`).join('');

  const hasKey = !!getApiKey(provider);

  banner.innerHTML = `
    <div class="api-banner">
      <div class="api-banner-icon">🤖</div>
      <div class="api-banner-body">
        <b>Choose your AI provider:</b>
        <div class="provider-tabs">${tabs}</div>
        ${hasKey
          ? `<div class="key-saved-row">
               ✅ <b>${cfg.name} key saved</b> — AI is active!
               <button class="key-change-btn" onclick="showKeyInput('${provider}')">Change Key</button>
               <button class="key-change-btn danger" onclick="removeProviderKey('${provider}')">Remove</button>
             </div>`
          : `<div id="key-input-area-${provider}">
               <small>Get a free key at <a href="${cfg.hintUrl}" target="_blank">${cfg.hint}</a></small>
               <div class="api-key-row">
                 <input type="password" id="api-key-input" placeholder="${cfg.placeholder}" autocomplete="off"/>
                 <button class="send-btn" onclick="submitApiKey('${provider}')">Save 🔑</button>
               </div>
               <small style="color:#6b7280">Saved only in your browser. Never shared. 🔒</small>
             </div>`
        }
      </div>
    </div>`;

  const container = document.querySelector('.tutor-container');
  if (container) container.insertBefore(banner, container.firstChild);
}

function showKeyInput(provider) {
  // Force show input even if key exists (for changing key)
  clearApiKey(provider);
  checkApiKeyBanner();
}

function removeProviderKey(provider) {
  if (confirm(`Remove your ${AI_PROVIDERS[provider].name} API key?`)) {
    clearApiKey(provider);
    checkApiKeyBanner();
    renderKeyBadge();
    showToast(`🔑 ${AI_PROVIDERS[provider].name} key removed.`);
  }
}

function switchProvider(provider) {
  setProvider(provider);
  chatHistory = []; // clear chat history on provider switch
  checkApiKeyBanner();
  renderKeyBadge();
  const cfg = AI_PROVIDERS[provider];
  addChatMsg(`Switched to <b>${cfg.logo} ${cfg.name}</b>! ${getApiKey(provider) ? 'Ready to answer your questions 🚀' : 'Please add your API key above to activate it.'}`, 'bot');
}

function submitApiKey(provider) {
  const val = document.getElementById('api-key-input')?.value?.trim();
  const cfg = AI_PROVIDERS[provider];
  if (!val || !cfg.validate(val)) {
    showToast(`⚠️ Please enter a valid ${cfg.name} API key (${cfg.placeholder})`);
    return;
  }
  setApiKey(provider, val);
  setProvider(provider);
  checkApiKeyBanner();
  renderKeyBadge();
  showToast(`✅ ${cfg.name} key saved! AI is now active 🤖`);
  addChatMsg(`🎉 <b>${cfg.logo} ${cfg.name}</b> is now active! Ask me anything about your ${getActiveClass() ? `Class ${getActiveClass()}` : ''} subjects! 📚`, 'bot');
}

// ---- Main ask dispatcher ----
async function askTutor() {
  const inp = document.getElementById('tutor-input');
  const q = inp.value.trim();
  if (!q) return;

  addChatMsg(q, 'user');
  inp.value = '';
  showTyping();

  const provider = getProvider();
  const apiKey   = getApiKey(provider);

  if (!apiKey) {
    await new Promise(r => setTimeout(r, 600));
    removeTyping();
    const ans = getRuleBasedAnswer(q);
    addChatMsg(ans + `<br><br><small style="color:#6b7280">💡 <i>Add an API key above for real AI answers!</i></small>`, 'bot');
    return;
  }

  if (provider === 'claude')  await askClaude(q, apiKey);
  if (provider === 'openai')  await askOpenAI(q, apiKey);
  if (provider === 'gemini')  await askGemini(q, apiKey);
}

// ---- Generic error handler ----
function handleApiError(err, provider) {
  removeTyping();
  console.error(`${provider} API error:`, err);
  const msg = err.message || '';
  if (msg.includes('401') || msg.includes('invalid') || msg.includes('auth') || msg.includes('API key')) {
    addChatMsg(`❌ Your ${AI_PROVIDERS[provider].name} API key seems wrong or expired. Please update it above! 🔑`, 'bot');
    clearApiKey(provider);
    checkApiKeyBanner();
    renderKeyBadge();
  } else if (msg.includes('429') || msg.includes('rate')) {
    addChatMsg('⏳ Too many requests! Please wait a moment and try again. 😊', 'bot');
  } else if (msg.includes('fetch') || msg.includes('network') || msg.includes('Failed')) {
    const offline = getRuleBasedAnswer(chatHistory.at(-2)?.content || '');
    addChatMsg(offline + '<br><br><small style="color:#e67e22">⚠️ <i>Network issue — showing offline answer.</i></small>', 'bot');
  } else {
    addChatMsg(`😕 Something went wrong: <i>${msg}</i><br>Please try again!`, 'bot');
  }
}

// ---- Claude (Anthropic) ----
async function askClaude(question, apiKey) {
  chatHistory.push({ role: 'user', content: question });
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 600,
        system: getSystemPrompt(),
        messages: chatHistory.slice(-10)
      })
    });
    if (!res.ok) { const e = await res.json().catch(()=>({})); throw new Error(e?.error?.message || `HTTP ${res.status}`); }
    const data  = await res.json();
    const reply = data.content?.[0]?.text || "I couldn't get an answer. Try again! 😊";
    chatHistory.push({ role: 'assistant', content: reply });
    removeTyping();
    addChatMsg(`<small style="color:#7c3aed;font-weight:800">🟣 Claude</small><br>${reply}`, 'bot');
  } catch(err) { handleApiError(err, 'claude'); }
}

// ---- OpenAI (ChatGPT) ----
async function askOpenAI(question, apiKey) {
  chatHistory.push({ role: 'user', content: question });
  const messages = [
    { role: 'system', content: getSystemPrompt() },
    ...chatHistory.slice(-10)
  ];
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',   // cost-efficient, free-tier friendly
        max_tokens: 600,
        messages
      })
    });
    if (!res.ok) { const e = await res.json().catch(()=>({})); throw new Error(e?.error?.message || `HTTP ${res.status}`); }
    const data  = await res.json();
    const reply = data.choices?.[0]?.message?.content || "I couldn't get an answer. Try again! 😊";
    chatHistory.push({ role: 'assistant', content: reply });
    removeTyping();
    addChatMsg(`<small style="color:#10a37f;font-weight:800">🟢 ChatGPT</small><br>${reply}`, 'bot');
  } catch(err) { handleApiError(err, 'openai'); }
}

// ---- Google Gemini ----
async function askGemini(question, apiKey) {
  // Build Gemini-format history (user/model alternating, no system role)
  const geminiHistory = chatHistory.slice(-10).map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));
  // Prepend system prompt as first user turn if history is empty or first message
  const contents = geminiHistory.length
    ? [...geminiHistory, { role: 'user', parts: [{ text: question }] }]
    : [
        { role: 'user',  parts: [{ text: getSystemPrompt() + '\n\nNow answer this question: ' + question }] }
      ];

  chatHistory.push({ role: 'user', content: question });

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents, generationConfig: { maxOutputTokens: 600 } })
      }
    );
    if (!res.ok) { const e = await res.json().catch(()=>({})); throw new Error(e?.error?.message || `HTTP ${res.status}`); }
    const data  = await res.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't get an answer. Try again! 😊";
    chatHistory.push({ role: 'assistant', content: reply });
    removeTyping();
    // Convert basic markdown bold (**text**) Gemini sometimes returns
    const cleaned = reply.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
    addChatMsg(`<small style="color:#4285f4;font-weight:800">🔵 Gemini</small><br>${cleaned}`, 'bot');
  } catch(err) { handleApiError(err, 'gemini'); }
}

function quickAsk(q) {
  document.getElementById('tutor-input').value = q;
  askTutor();
}

// Rule-based fallback (offline mode)
function getRuleBasedAnswer(q) {
  const lower = q.toLowerCase();
  for (const item of TUTOR_KB) {
    if (item.keys.some(k => lower.includes(k))) return item.answer;
  }
  const match = QUESTION_BANK.find(qb =>
    lower.split(' ').some(w => w.length > 4 && qb.q.toLowerCase().includes(w))
  );
  if (match) {
    return `📚 Here's what I know about that:<br><br><b>Q: ${match.q}</b><br><br>✅ Answer: <b>${match.opts[match.ans]}</b><br><br>💡 ${match.exp}`;
  }
  return `🤔 Great question! Add an AI key above to get a full explanation of this topic! 📚`;
}

function addChatMsg(text, type) {
  const box = document.getElementById('chat-box');
  const div = document.createElement('div');
  div.className = `chat-msg ${type}`;
  div.innerHTML = `
    <span class="chat-avatar">${type==='bot'?'🤖':'😊'}</span>
    <div class="chat-bubble">${text}</div>
  `;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function showTyping() {
  const box = document.getElementById('chat-box');
  const div = document.createElement('div');
  div.className = 'chat-msg bot'; div.id = 'typing-indicator';
  div.innerHTML = `<span class="chat-avatar">🤖</span><div class="chat-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing-indicator');
  if (t) t.remove();
}

// =====================================================
// SECTION 8: COMBINED QUESTION BANK (built-in + CSV)
// =====================================================

// Returns full question pool: built-in QUESTION_BANK + all saved CSV banks
function getAllQuestions() {
  // Returns ALL question objects: built-in bank + every CSV bank.
  // NO cross-bank deduplication by text — a question from a CSV bank
  // is always included even if its text matches a built-in question.
  // Deduplication for randomisation is handled separately via _id in
  // the seen-set (pickQuestions), so there is no risk of true repetition
  // within a single quiz session.
  //
  // Objects are returned BY REFERENCE so _id fields set by
  // assignDefaultIds() / assignCsvIds() are preserved.
  const csvBanks     = loadAllCsvBanks();
  const csvQuestions = csvBanks.flatMap(b => b.questions);
  return [...QUESTION_BANK, ...csvQuestions];
}

// Returns class-filtered question pool (the one used by quiz/daily/mock)
function getActiveQuestions() {
  return getClassFilteredQuestions();
}

// Returns sorted unique list of subjects across active-class questions
function getAllSubjects() {
  const all = getActiveQuestions();
  const subjects = [...new Set(all.map(q => q.subject).filter(Boolean))];
  const preferred = ['Math','Science','English','SST'];
  return [
    ...preferred.filter(s => subjects.includes(s)),
    ...subjects.filter(s => !preferred.includes(s)).sort()
  ];
}

// Returns chapters for a given subject from active-class questions
function getChaptersForSubject(subject) {
  if (subject === '__all__') return ['All Chapters'];
  const all = getActiveQuestions();
  const chapters = [...new Set(all.filter(q => norm(q.subject) === norm(subject)).map(q => q.chapter).filter(Boolean))];
  return chapters.length ? chapters : ['General'];
}

// Subject emoji map (built-in + fallback)
const SUBJECT_EMOJI = { Math:'➕', Science:'🔬', English:'📖', SST:'🌍' };
function subjectEmoji(s) { return SUBJECT_EMOJI[s] || '📚'; }

// =====================================================
// SECTION 9: QUIZ SETUP
// =====================================================

let selectedSubject = 'Math';
let selectedChapter = null;
let currentQuizQuestions = [];
let currentQIndex = 0;
let quizScore = 0;
let lastQuizLog = [];    // stores {q, chose, correct, isCorrect} for review
let lastDailyLog = [];
let quizMode = 'chapter';
let dailySubjectFilter = '__all__';

// Render subject tab bar into any container element
// includeAll: whether to show an "All Subjects" tab
// activeSubject: which subject is currently active
// onSelectFn: string name of JS function to call on click
function renderSubjectTabs(containerId, activeSubject, onSelectFn, includeAll = true) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const subjects = getAllSubjects();
  const tabs = [];
  if (includeAll) {
    tabs.push(`<button class="stab ${activeSubject === '__all__' ? 'active' : ''}"
      onclick="${onSelectFn}('__all__', this)">🌈 All Subjects</button>`);
  }
  subjects.forEach(s => {
    tabs.push(`<button class="stab ${activeSubject === s ? 'active' : ''}"
      onclick="${onSelectFn}('${s.replace(/'/g,"\\'")}', this)">${subjectEmoji(s)} ${s}</button>`);
  });
  container.innerHTML = tabs.join('');
}

// Quiz page: subject selected
function selectSubject(subj, btn) {
  selectedSubject = subj;
  selectedChapter = null;
  document.querySelectorAll('#quiz-subject-tabs .stab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  // Hide filters & start row first — renderQuizChapters will re-show them if needed
  document.getElementById('quiz-filters').style.display = 'none';
  document.getElementById('quiz-start-row').style.display = 'none';
  renderQuizChapters();
}

function renderQuizChapters() {
  const grid = document.getElementById('chapter-grid');

  if (selectedSubject === '__all__') {
    // Auto-select "All Chapters" and show everything immediately
    selectedChapter = '__all__';
    grid.innerHTML = `<button class="chap-btn selected" style="cursor:default">🌈 All Chapters</button>`;
    document.getElementById('selected-info').textContent = '📚 All Subjects — Mixed Questions';
    populateFilterDropdowns();
    document.getElementById('quiz-filters').style.display = 'block';
    document.getElementById('quiz-start-row').style.display = 'block';
    updateFilterCountBadge();
    return;
  }

  // Specific subject: render its chapters for the student to pick
  const chapters = getChaptersForSubject(selectedSubject);

  // If subject only has one chapter, auto-select it
  if (chapters.length === 1) {
    selectedChapter = chapters[0];
    grid.innerHTML = `<button class="chap-btn selected" style="cursor:default">${chapters[0]}</button>`;
    document.getElementById('selected-info').textContent = `📚 ${selectedSubject} › ${chapters[0]}`;
    populateFilterDropdowns();
    document.getElementById('quiz-filters').style.display = 'block';
    document.getElementById('quiz-start-row').style.display = 'block';
    updateFilterCountBadge();
    return;
  }

  // Multiple chapters: render buttons, add an "All Chapters" option at the top
  grid.innerHTML =
    `<button class="chap-btn" onclick="selectChapter('All Chapters', this)">📚 All Chapters</button>` +
    chapters.map(ch =>
      `<button class="chap-btn" onclick="selectChapter('${ch.replace(/'/g,"\\'")}', this)">${ch}</button>`
    ).join('');
}

function selectChapter(ch, btn) {
  selectedChapter = ch;
  document.querySelectorAll('.chap-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  const isAll = ch === '__all__' || ch === 'All Chapters';
  const label = isAll
    ? `📚 ${selectedSubject} — All Chapters`
    : `📚 ${selectedSubject} › ${ch}`;
  document.getElementById('selected-info').textContent = label;
  populateFilterDropdowns();
  document.getElementById('quiz-filters').style.display = 'block';
  document.getElementById('quiz-start-row').style.display = 'block';
  updateFilterCountBadge();
}

// Populate the four filter <select> dropdowns based on subject+chapter pool
function populateFilterDropdowns() {
  const allQ = getActiveQuestions();
  let pool = allQ;
  if (selectedSubject !== '__all__') pool = pool.filter(q => norm(q.subject) === norm(selectedSubject));
  const isAllChap = !selectedChapter || selectedChapter === '__all__' || selectedChapter === 'All Chapters';
  if (!isAllChap) pool = pool.filter(q => norm(q.chapter) === norm(selectedChapter));

  // Topics
  const topics = [...new Set(pool.map(q => q.topic).filter(Boolean))].sort();
  const topicSel = document.getElementById('filter-topic');
  if (topicSel) {
    topicSel.innerHTML = `<option value="">All Topics</option>` +
      topics.map(t => `<option value="${t}">${t}</option>`).join('');
    topicSel.onchange = updateFilterCountBadge;
  }

  // Classes — only show if no active class is set (multi-class mode)
  const classFilterGroup = document.getElementById('filter-class-group');
  const activeClass = getActiveClass();
  if (classFilterGroup) classFilterGroup.style.display = activeClass ? 'none' : '';
  if (!activeClass) {
    const classes = [...new Set(pool.map(q => q.classLevel).filter(Boolean))].sort();
    const classSel = document.getElementById('filter-class');
    if (classSel) {
      classSel.innerHTML = `<option value="">All Classes</option>` +
        classes.map(c => `<option value="${c}">Class ${c}</option>`).join('');
      classSel.onchange = updateFilterCountBadge;
    }
  }

  // Question types
  const types = [...new Set(pool.map(q => q.questionType).filter(Boolean))].sort();
  const typeSel = document.getElementById('filter-type');
  if (typeSel) {
    typeSel.innerHTML = `<option value="">All Types</option>` +
      types.map(t => `<option value="${t}">${t}</option>`).join('');
    typeSel.onchange = updateFilterCountBadge;
  }

  // Difficulty onchange
  const diffSel = document.getElementById('filter-difficulty');
  if (diffSel) diffSel.onchange = updateFilterCountBadge;
}

// Get filtered pool using the four <select> dropdowns
function getFilteredPool() {
  let pool = getActiveQuestions();

  // Subject filter (norm = case+space insensitive)
  if (selectedSubject !== '__all__') pool = pool.filter(q => norm(q.subject) === norm(selectedSubject));

  // Chapter filter — skip if "All Chapters" or no chapter selected
  const isAllChap = !selectedChapter || selectedChapter === '__all__' || selectedChapter === 'All Chapters';
  if (!isAllChap) pool = pool.filter(q => norm(q.chapter) === norm(selectedChapter));

  // Dropdown filters
  const topic      = document.getElementById('filter-topic')?.value      || '';
  const difficulty = document.getElementById('filter-difficulty')?.value || '';
  const classLevel = document.getElementById('filter-class')?.value      || '';
  const qtype      = document.getElementById('filter-type')?.value       || '';
  if (topic)      pool = pool.filter(q => norm(q.topic) === norm(topic));
  if (difficulty) pool = pool.filter(q => norm(q.difficulty) === norm(difficulty));
  if (classLevel) pool = pool.filter(q => q.classLevel === classLevel);
  if (qtype)      pool = pool.filter(q => norm(q.questionType) === norm(qtype));
  return pool;
}

// Show live count of matching questions
function updateFilterCountBadge() {
  const pool  = getFilteredPool();
  const badge = document.getElementById('filter-count-badge');
  if (!badge) return;
  if (!pool.length) {
    badge.innerHTML = `<span class="filter-badge-zero">⚠️ No questions match these filters — try different options</span>`;
    return;
  }
  const easy   = pool.filter(q => q.difficulty?.toLowerCase() === 'easy').length;
  const medium = pool.filter(q => q.difficulty?.toLowerCase() === 'medium').length;
  const hard   = pool.filter(q => q.difficulty?.toLowerCase() === 'hard').length;
  const pills  = [
    easy   ? `<span class="diff-pill easy">🟢 ${easy} Easy</span>`     : '',
    medium ? `<span class="diff-pill medium">🟡 ${medium} Medium</span>` : '',
    hard   ? `<span class="diff-pill hard">🔴 ${hard} Hard</span>`       : ''
  ].filter(Boolean).join('');
  badge.innerHTML = `<span class="filter-badge-ok">✅ <b>${pool.length}</b> questions available ${pills}</span>`;
}

// Helper: count occurrences by key function
function countBy(arr, fn) {
  return arr.reduce((acc, item) => {
    const key = fn(item) || 'unknown';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

// =====================================================
// SECTION 10: GENERATE QUIZ
// =====================================================

function generateQuiz() {
  quizMode = 'chapter';
  const count      = parseInt(document.getElementById('quiz-count-select')?.value || '10');
  const strictPool = getFilteredPool();

  if (!strictPool.length) {
    showToast('⚠️ No questions match your filters! Try a broader selection.');
    return;
  }

  let finalPool  = [];
  let padded     = false;
  let paddedFrom = '';

  // Scope key includes ALL four filter dimensions so each unique filter combo
  // has its own independent rotation queue — no bleed-over between filters.
  const { topic: fTopic, difficulty: fDiff, qtype: fQtype } = getActiveFilterValues();
  const quizScopeKey = makeScopeKey(selectedSubject, selectedChapter, fTopic, fDiff, fQtype);

  if (strictPool.length >= count) {
    finalPool = pickQuestions(strictPool, count, quizScopeKey);
  } else {
    // Not enough in strict pool — use all of them + pad from wider pool
    const allQ      = getActiveQuestions();
    const isAllChap = !selectedChapter || selectedChapter === '__all__' || selectedChapter === 'All Chapters';
    const isAllSubj = selectedSubject === '__all__';

    let padPool = [];
    if (!isAllSubj && !isAllChap) {
      padPool = allQ.filter(q => norm(q.subject) === norm(selectedSubject) && norm(q.chapter) !== norm(selectedChapter) && !strictPool.includes(q));
      paddedFrom = `other ${selectedSubject} chapters`;
    } else if (!isAllSubj) {
      padPool = allQ.filter(q => norm(q.subject) === norm(selectedSubject) && !strictPool.includes(q));
      paddedFrom = `other ${selectedSubject} questions`;
    }
    if (!padPool.length) {
      padPool = allQ.filter(q => !strictPool.includes(q));
      paddedFrom = 'other subjects';
    }

    const needed = count - strictPool.length;
    // Pad scope: same subject, no chapter/topic/diff/type restriction
    const padScopeKey = makeScopeKey(selectedSubject, '__all__', '', '', '');
    finalPool = shuffle([...pickQuestions(strictPool, strictPool.length, quizScopeKey), ...pickQuestions(padPool, needed, padScopeKey)]);
    padded    = true;
  }

  // Strip any cached render state from previous runs
  finalPool.forEach(q => { delete q._shuffled; delete q._correctText; });

  currentQuizQuestions = finalPool;
  currentQIndex = 0;
  quizScore     = 0;
  lastQuizLog   = [];

  document.getElementById('quiz-setup').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-play').style.display   = 'block';

  if (padded) {
    const notice = document.createElement('div');
    notice.className = 'quiz-pad-notice';
    notice.innerHTML = `💡 Only <b>${strictPool.length}</b> questions matched — added from ${paddedFrom} to reach <b>${finalPool.length}</b>.`;
    const playEl = document.getElementById('quiz-play');
    const existing = playEl.querySelector('.quiz-pad-notice');
    if (existing) existing.remove();
    playEl.insertBefore(notice, playEl.firstChild);
  } else {
    document.querySelector('#quiz-play .quiz-pad-notice')?.remove();
  }

  renderQuestion();
}

// Daily practice: subject filter changed
function selectDailySubject(subj, btn) {
  dailySubjectFilter = subj;
  document.querySelectorAll('#daily-subject-tabs .stab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  generateDailyPractice();
}

function generateDailyPractice() {
  quizMode = 'daily';
  const allQ = getActiveQuestions();
  let pool = dailySubjectFilter === '__all__'
    ? allQ
    : allQ.filter(q => norm(q.subject) === norm(dailySubjectFilter));

  if (pool.length === 0) {
    showToast('⚠️ No questions for this subject yet!');
    return;
  }

  const dailyScopeKey = makeScopeKey(dailySubjectFilter, '__all__', '', '', '');
  const picked = pickQuestions(pool, Math.min(20, pool.length), dailyScopeKey);
  picked.forEach(q => { delete q._shuffled; delete q._correctText; });

  currentQuizQuestions = picked;
  currentQIndex = 0;
  quizScore = 0;
  dailyScore = 0;
  dailyIndex = 0;
  lastDailyLog = [];

  // Reset UI
  document.getElementById('daily-result').style.display = 'none';
  document.getElementById('daily-feedback').style.display = 'none';
  document.getElementById('daily-next-btn').style.display = 'none';
  renderDailyQuestion();
}

function startDaily() {
  showPage('page-daily');
  renderSubjectTabs('daily-subject-tabs', dailySubjectFilter, 'selectDailySubject', true);
  generateDailyPractice();
}

// =====================================================
// SECTION 10: RENDER QUIZ QUESTION
// =====================================================

// Shared meta-pill builder used by all question renders
function buildMetaPills(q) {
  return [
    q.classLevel  ? `<span class="q-meta-pill pill-class">🎓 Class ${q.classLevel}</span>` : '',
    q.subject     ? `<span class="q-meta-pill pill-subject">📚 ${q.subject}</span>` : '',
    q.chapter     ? `<span class="q-meta-pill pill-chapter">📖 ${q.chapter}</span>` : '',
    q.topic       ? `<span class="q-meta-pill pill-topic">🔖 ${q.topic}</span>` : '',
    q.difficulty  ? `<span class="q-meta-pill" style="background:${DIFF_COLOR[q.difficulty.toLowerCase()]||'#6b7280'}22;color:${DIFF_COLOR[q.difficulty.toLowerCase()]||'#6b7280'};border-color:${DIFF_COLOR[q.difficulty.toLowerCase()]||'#6b7280'}40">${DIFF_EMOJI[q.difficulty.toLowerCase()]||'⚪'} ${q.difficulty}</span>` : '',
    q.questionType && q.questionType !== 'MCQ' ? `<span class="q-meta-pill pill-type">${QTYPE_EMOJI[q.questionType?.toLowerCase()]||'📋'} ${q.questionType}</span>` : ''
  ].filter(Boolean).join('');
}

function renderQuestion() {
  const q     = currentQuizQuestions[currentQIndex];
  const total = currentQuizQuestions.length;
  const pct   = (currentQIndex / total) * 100;

  document.getElementById('qpf').style.width = pct + '%';
  document.getElementById('quiz-counter').textContent = `Question ${currentQIndex+1} of ${total}`;
  document.getElementById('quiz-feedback').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';

  document.getElementById('question-card').innerHTML = `
    <div class="q-meta-row">${buildMetaPills(q)}</div>
    <div class="q-text">${q.q}</div>
  `;

  // Shuffle options, track correct answer by text
  const shuffled = shuffle([...q.opts]);
  q._shuffled = shuffled;
  q._correctText = typeof q.ans === 'string' ? q.ans : q.opts[q.ans]; // support both formats

  const labels = ['A','B','C','D'];
  document.getElementById('options-grid').innerHTML = shuffled.map((opt, i) =>
    `<button class="option-btn" onclick="checkAnswer(${i})" id="opt-${i}">
      <span class="opt-label">${labels[i]}</span> ${opt}
    </button>`
  ).join('');
}

function checkAnswer(chosen) {
  const q           = currentQuizQuestions[currentQIndex];
  const correctText = q._correctText;
  const chosenText  = q._shuffled[chosen];
  const correctIdx  = q._shuffled.indexOf(correctText);
  const isCorrect   = chosenText === correctText;
  lastQuizLog[currentQIndex] = { q, chose: chosenText, correct: correctText, isCorrect };

  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIdx)            btn.classList.add('correct');
    if (i === chosen && !isCorrect)  btn.classList.add('wrong');
  });

  const fb = document.getElementById('quiz-feedback');
  fb.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');

  const extraInfo = [
    q.exp               ? `<div class="fb-exp">💡 ${q.exp}</div>` : '',
    q.learningObjective ? `<div class="fb-meta">🎯 <b>Learning Objective:</b> ${q.learningObjective}</div>` : '',
    q.ncertReference    ? `<div class="fb-meta">📘 <b>NCERT Ref:</b> ${q.ncertReference}</div>` : ''
  ].filter(Boolean).join('');

  if (isCorrect) {
    quizScore++;
    fb.innerHTML = `<div class="fb-result">✅ Correct! Great job! 🌟</div>${extraInfo}`;
    showToast(getEncouragement(true));
  } else {
    fb.innerHTML = `<div class="fb-result">❌ The answer was <b>${correctText}</b></div>${extraInfo}`;
    showToast(getEncouragement(false));
  }
  fb.style.display = 'block';
  document.getElementById('next-btn').style.display = 'block';
  updateProgress(q.subject, isCorrect);
}

function nextQuestion() {
  currentQIndex++;
  if (currentQIndex < currentQuizQuestions.length) {
    renderQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  document.getElementById('quiz-play').style.display = 'none';
  const total = currentQuizQuestions.length;
  const pct = Math.round((quizScore/total)*100);
  const emoji = pct === 100 ? '🏆' : pct >= 80 ? '⭐' : pct >= 60 ? '😊' : '💪';
  const msg   = pct === 100 ? 'Perfect score! You\'re a genius! 🎉' :
                pct >= 80   ? 'Amazing work! Keep it up! 🌟' :
                pct >= 60   ? 'Good effort! A little more practice and you\'ll nail it! 😊' :
                              'Keep going! Every attempt makes you smarter! 💪';
  const res = document.getElementById('quiz-result');
  res.style.display = 'block';
  res.innerHTML = `
    <div class="result-card">
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">Quiz Complete!</div>
      <div class="result-score">${quizScore}/${total}</div>
      <div class="result-msg">${msg}</div>
      <div class="result-actions">
        <button class="big-btn btn-green" onclick="generateQuiz()">Try Again 🔄</button>
        <button class="big-btn btn-blue"  onclick="resetQuizSetup()">New Chapter 📚</button>
        <button class="big-btn btn-orange" onclick="showPage('page-home')">Home 🏠</button>
      </div>
    </div>
    ${buildAnswerReview(lastQuizLog)}
  `;
}

function resetQuizSetup() {
  document.getElementById('quiz-setup').style.display = 'block';
  document.getElementById('quiz-play').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
}

// =====================================================
// SECTION 11: DAILY PRACTICE
// =====================================================

let dailyScore = 0;
let dailyIndex = 0;

function renderDailyQuestion() {
  const q     = currentQuizQuestions[dailyIndex];
  const total = currentQuizQuestions.length;
  const pct   = (dailyIndex / total) * 100;

  document.getElementById('dpf').style.width = pct + '%';
  document.getElementById('daily-counter').textContent = `Question ${dailyIndex+1} of ${total}`;
  document.getElementById('daily-feedback').style.display = 'none';
  document.getElementById('daily-next-btn').style.display = 'none';
  document.getElementById('daily-result').style.display = 'none';

  document.getElementById('daily-question-card').innerHTML = `
    <div class="q-meta-row">${buildMetaPills(q)}</div>
    <div class="q-text">${q.q}</div>
  `;

  // Shuffle options, track correct answer by text
  const shuffled = shuffle([...q.opts]);
  q._shuffled = shuffled;
  q._correctText = typeof q.ans === 'string' ? q.ans : q.opts[q.ans];

  const labels = ['A','B','C','D'];
  document.getElementById('daily-options-grid').innerHTML = shuffled.map((opt, i) =>
    `<button class="option-btn" onclick="checkDailyAnswer(${i})" id="dopt-${i}">
      <span class="opt-label">${labels[i]}</span> ${opt}
    </button>`
  ).join('');
}

function checkDailyAnswer(chosen) {
  const q           = currentQuizQuestions[dailyIndex];
  const correctText = q._correctText;
  const chosenText  = q._shuffled[chosen];
  const correctIdx  = q._shuffled.indexOf(correctText);
  const isCorrect   = chosenText === correctText;
  lastDailyLog[dailyIndex] = { q, chose: chosenText, correct: correctText, isCorrect };

  document.querySelectorAll('#daily-options-grid .option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIdx)           btn.classList.add('correct');
    if (i === chosen && !isCorrect) btn.classList.add('wrong');
  });

  const fb = document.getElementById('daily-feedback');
  fb.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');

  const extraInfo = [
    q.exp               ? `<div class="fb-exp">💡 ${q.exp}</div>` : '',
    q.learningObjective ? `<div class="fb-meta">🎯 <b>Learning Objective:</b> ${q.learningObjective}</div>` : '',
    q.ncertReference    ? `<div class="fb-meta">📘 <b>NCERT Ref:</b> ${q.ncertReference}</div>` : ''
  ].filter(Boolean).join('');

  // Log for answer review
  lastDailyLog[dailyIndex] = { q, chose: chosenText, correct: correctText, isCorrect };

  if (isCorrect) {
    dailyScore++;
    fb.innerHTML = `<div class="fb-result">✅ Correct! 🌟</div>${extraInfo}`;
  } else {
    fb.innerHTML = `<div class="fb-result">❌ Answer: <b>${correctText}</b></div>${extraInfo}`;
  }
  fb.style.display = 'block';
  document.getElementById('daily-next-btn').style.display = 'block';
  updateProgress(q.subject, isCorrect);
  showToast(getEncouragement(isCorrect));
}

function nextDailyQuestion() {
  dailyIndex++;
  if (dailyIndex < currentQuizQuestions.length) {
    renderDailyQuestion();
  } else {
    showDailyResult();
  }
}

function showDailyResult() {
  document.getElementById('daily-options-grid').innerHTML = '';
  document.getElementById('daily-question-card').innerHTML = '';
  document.getElementById('daily-feedback').style.display = 'none';
  document.getElementById('daily-next-btn').style.display = 'none';
  const total = currentQuizQuestions.length;
  const pct = Math.round((dailyScore/total)*100);
  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '⭐' : '💪';
  document.getElementById('daily-result').style.display = 'block';
  document.getElementById('daily-result').innerHTML = `
    <div class="result-card">
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">Daily Practice Done!</div>
      <div class="result-score">${dailyScore}/${total}</div>
      <div class="result-msg">${pct>=80?'Awesome day of practice! 🌟':'Great effort! Come back tomorrow! 💪'}</div>
      <div class="result-actions">
        <button class="big-btn btn-green" onclick="startDaily()">Practice Again 🔄</button>
        <button class="big-btn btn-orange" onclick="showPage('page-home')">Home 🏠</button>
      </div>
    </div>
    ${buildAnswerReview(lastDailyLog)}
  `;
}


// =====================================================
// SECTION 12b: TERM & ANNUAL EXAM ENGINE
// =====================================================

const EXAM_CONFIG = {
  term: {
    label: 'Term Exam',
    emoji: '📋',
    totalMarks: 50,
    timeMinutes: 90,
    sections: [
      { id:'mcq',   title:'Section A – Multiple Choice Questions', type:'mcq',   count:20, marksEach:1, note:'(20 × 1 = 20 Marks)' },
      { id:'short', title:'Section B – Short Answer Questions',    type:'short', count:5,  marksEach:2, note:'(5 × 2 = 10 Marks)' },
      { id:'long',  title:'Section C – Long Answer Questions',     type:'long',  count:3,  marksEach:5, note:'(3 × 5 = 15 Marks)' },
      { id:'essay', title:'Section D – Essay Question',            type:'essay', count:1,  marksEach:5, note:'(1 × 5 = 5 Marks)' }
    ]
  },
  annual: {
    label: 'Annual Exam',
    emoji: '🏅',
    totalMarks: 80,
    timeMinutes: 180,
    sections: [
      { id:'mcq',   title:'Section A – Multiple Choice Questions', type:'mcq',   count:30, marksEach:1,  note:'(30 × 1 = 30 Marks)' },
      { id:'short', title:'Section B – Short Answer Questions',    type:'short', count:6,  marksEach:2,  note:'(6 × 2 = 12 Marks)' },
      { id:'long',  title:'Section C – Long Answer Questions',     type:'long',  count:4,  marksEach:5,  note:'(4 × 5 = 20 Marks)' },
      { id:'essay', title:'Section D – Essay / Value-Based',       type:'essay', count:2,  marksEach:9,  note:'(2 × 9 = 18 Marks)' }
    ]
  }
};


let examType = null;
let examConfig = null;
let examQuestions = {};   // { sectionId: [questions] }
let examAnswers = {};     // { 'mcq-0': 2, 'short-0': 'text', ... }
let examTimer = null;
let examSecondsLeft = 0;
let examSubmitted = false;

function startExam(type) {
  examType = type;
  examConfig = EXAM_CONFIG[type];
  examSubmitted = false;
  examAnswers = {};
  examQuestions = {};

  // Clear any running timer
  if (examTimer) clearInterval(examTimer);

  showPage('page-exam');
  document.getElementById('exam-page-title').textContent = examConfig.emoji + ' ' + examConfig.label;
  document.getElementById('exam-page-sub').textContent = examConfig.totalMarks + ' Marks · ' + examConfig.timeMinutes + ' Minutes';

  // Info banner
  document.getElementById('exam-header-banner').innerHTML = `
    <div class="exam-info-banner">
      <span class="exam-info-pill">📋 ${examConfig.label}</span>
      <span class="exam-info-pill">⭐ ${examConfig.totalMarks} Marks</span>
      <span class="exam-info-pill">⏱ ${examConfig.timeMinutes} mins</span>
      <span class="exam-info-pill">📚 ${getActiveClass() ? 'Class ' + getActiveClass() : 'All Classes'}</span>
      <button class="exam-pdf-btn" onclick="downloadExamPDF()" style="padding:5px 14px;font-size:12px;">📄 Download Paper PDF</button>
    </div>`;

  generateExamContent();
  startExamTimer();
}

function generateExamContent() {
  const allQ = getActiveQuestions();
  const cfg  = examConfig;
  let html   = '';

  cfg.sections.forEach(sec => {
    let pool, sectionHTML = '';

    if (sec.type === 'mcq') {
      pool = pickQuestions(allQ, sec.count, makeScopeKey('__all__', '__all__') + '::exam::' + sec.id);
      examQuestions[sec.id] = pool;
      sectionHTML = pool.map((q, i) => {
        const labels = ['A','B','C','D'];
        const opts   = shuffle([...q.opts]);
        q._examShuffled = opts;
        q._examCorrect  = typeof q.ans === 'string' ? q.ans : q.opts[q.ans];
        return `
          <div class="exam-q-block">
            <div class="exam-q-num">Q${i+1}. <span class="exam-q-marks">${sec.marksEach} mark</span></div>
            <div class="exam-q-text">${q.q}</div>
            <div class="exam-opt-list">
              ${opts.map((opt,oi) => `
                <label class="exam-opt" id="exam-opt-${sec.id}-${i}-${oi}">
                  <input type="radio" name="exam-${sec.id}-${i}" value="${oi}"
                    onchange="recordExamAnswer('${sec.id}',${i},${oi},this.closest('label').closest('.exam-opt-list'))">
                  <span><b>${labels[oi]}.</b> ${opt}</span>
                </label>`).join('')}
            </div>
          </div>`;
      }).join('');

    } else if (sec.type === 'short') {
      pool = shuffle([...getExamQuestions('short')]).slice(0, sec.count);
      examQuestions[sec.id] = pool;
      sectionHTML = pool.map((q,i) => `
        <div class="exam-q-block">
          <div class="exam-q-num">Q${i+1}. <span class="exam-q-marks">${sec.marksEach} marks</span> <small style="color:var(--clr-muted)">(${q.subj||''})</small></div>
          <div class="exam-q-text">${q.q}</div>
          <textarea class="exam-textarea" rows="3" placeholder="Write your answer here…"
            id="exam-short-${i}" oninput="recordExamText('${sec.id}',${i},this.value)"></textarea>
        </div>`).join('');

    } else if (sec.type === 'long') {
      pool = shuffle([...getExamQuestions('long')]).slice(0, sec.count);
      examQuestions[sec.id] = pool;
      sectionHTML = pool.map((q,i) => `
        <div class="exam-q-block">
          <div class="exam-q-num">Q${i+1}. <span class="exam-q-marks">${sec.marksEach} marks</span> <small style="color:var(--clr-muted)">(${q.subj||''})</small></div>
          <div class="exam-q-text">${q.q}</div>
          <textarea class="exam-textarea" rows="5" placeholder="Write your detailed answer here… 📝"
            id="exam-long-${i}" oninput="recordExamText('${sec.id}',${i},this.value)"></textarea>
        </div>`).join('');

    } else if (sec.type === 'essay') {
      pool = shuffle([...getExamQuestions('essay')]).slice(0, sec.count);
      examQuestions[sec.id] = pool;
      sectionHTML = pool.map((q,i) => `
        <div class="exam-q-block">
          <div class="exam-q-num">Q${i+1}. <span class="exam-q-marks">${sec.marksEach} marks</span> <small style="color:var(--clr-muted)">(${q.subj||''})</small></div>
          <div class="exam-q-text">${q.q}</div>
          <textarea class="exam-textarea" rows="7" placeholder="Write your essay here… ✍️"
            id="exam-essay-${i}" oninput="recordExamText('${sec.id}',${i},this.value)"></textarea>
        </div>`).join('');
    }

    html += `
      <div class="exam-section">
        <div class="exam-section-title">${sec.title} <span style="font-size:13px;font-weight:600;color:var(--clr-muted)">${sec.note}</span></div>
        ${sectionHTML}
      </div>`;
  });

  html += `
    <div class="exam-submit-row">
      <button class="big-btn btn-purple" onclick="submitExam()">Submit Exam ✅</button>
      <button class="exam-pdf-btn" onclick="downloadExamPDF()">📄 Download Paper PDF</button>
    </div>`;

  document.getElementById('exam-content').innerHTML = html;
  document.getElementById('exam-result').style.display = 'none';
}

function recordExamAnswer(secId, qi, optIdx, optList) {
  examAnswers[secId + '-' + qi] = optIdx;
  optList.querySelectorAll('.exam-opt').forEach((el,i) => {
    el.classList.toggle('selected', i === optIdx);
  });
}

function recordExamText(secId, qi, val) {
  examAnswers[secId + '-' + qi] = val;
}

function startExamTimer() {
  examSecondsLeft = examConfig.timeMinutes * 60;
  const bar     = document.getElementById('exam-timer-bar');
  const display = document.getElementById('exam-timer-display');
  const warning = document.getElementById('exam-timer-warning');
  bar.style.display = 'flex';

  function tick() {
    if (examSubmitted) return;
    const m = Math.floor(examSecondsLeft / 60);
    const s = examSecondsLeft % 60;
    display.textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    warning.style.display = examSecondsLeft <= 300 ? 'inline' : 'none';
    if (examSecondsLeft <= 0) {
      clearInterval(examTimer);
      showToast('⏰ Time up! Auto-submitting…');
      submitExam();
      return;
    }
    examSecondsLeft--;
  }
  tick();
  examTimer = setInterval(tick, 1000);
}

function submitExam() {
  if (examSubmitted) return;
  examSubmitted = true;
  if (examTimer) clearInterval(examTimer);

  const cfg = examConfig;
  let totalScore = 0, totalMax = 0;
  const breakdown = [];
  const answersLog = [];  // for persistence and teacher review

  cfg.sections.forEach(sec => {
    let secScore = 0, secMax = sec.count * sec.marksEach;
    totalMax += secMax;

    if (sec.type === 'mcq') {
      const qs = examQuestions[sec.id] || [];
      qs.forEach((q,i) => {
        const chosen = examAnswers[sec.id + '-' + i];
        const correct = q._examCorrect;
        const chosenText = (q._examShuffled || q.opts)[chosen];
        const isCorrect = chosenText === correct;
        if (isCorrect) { secScore += sec.marksEach; updateProgress(q.subject, true); }
        else if (chosen !== undefined) updateProgress(q.subject, false);
        answersLog.push({ type:'mcq', question_id: q._id, q: q.q,
          chosen: chosenText, correct, isCorrect: isCorrect ? 1 : 0, marks: sec.marksEach });
      });
    } else {
      const qs = examQuestions[sec.id] || [];
      qs.forEach((q,i) => {
        const ans = (examAnswers[sec.id + '-' + i] || '').trim();
        const minLen = sec.type === 'essay' ? 150 : sec.type === 'long' ? 80 : 30;
        let earned = 0;
        if (ans.length >= minLen) earned = sec.marksEach;
        else if (ans.length >= minLen * 0.4) earned = Math.round(sec.marksEach * 0.5);
        secScore += earned;
        answersLog.push({ type: sec.type, q: q.q, studentAnswer: ans,
          marks: sec.marksEach, estimated_marks: earned, teacher_marks_set: false });
      });
    }
    totalScore += secScore;
    breakdown.push({ label: sec.title.replace('Section ',''), score: secScore, max: secMax });
  });

  const pct   = Math.round((totalScore / totalMax) * 100);
  const grade = pct >= 90 ? 'A+' : pct >= 75 ? 'A' : pct >= 60 ? 'B' : pct >= 45 ? 'C' : 'D';
  const emoji  = pct >= 75 ? '🏆' : pct >= 50 ? '⭐' : '💪';

  // Persist result (offline-first + sync)
  const studentInfo = (typeof getStudentInfo === 'function') ? (getStudentInfo() || {}) : {};
  if (typeof persistExamResult === 'function') {
    persistExamResult({
      exam_type:        examType,
      student_name:     studentInfo.name || '',
      student_section:  studentInfo.section || '',
      class_level:      getActiveClass() || '',
      mcq_score:        breakdown.find(b => b.label.includes('A'))?.score || 0,
      mcq_total:        breakdown.find(b => b.label.includes('A'))?.max  || 0,
      answers_log:      answersLog,
      taken_at:         new Date().toISOString(),
    });
  }

  document.getElementById('exam-content').style.display = 'none';
  document.getElementById('exam-timer-bar').style.display = 'none';

  const bdHTML = breakdown.map(b =>
    `<div>📌 <b>${b.label}:</b> ${b.score} / ${b.max}</div>`).join('');

  const studentLine = studentInfo.name
    ? `<div style="font-size:14px;color:var(--clr-muted);margin-bottom:6px;">👤 ${studentInfo.name}${studentInfo.section ? ' · ' + studentInfo.section : ''}</div>`
    : '';

  const res = document.getElementById('exam-result');
  res.style.display = 'block';
  res.innerHTML = `
    <div class="result-card">
      ${studentLine}
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">${cfg.label} Complete!</div>
      <div class="result-score">${totalScore} / ${totalMax}</div>
      <div style="font-size:28px;font-weight:900;color:var(--clr-green);margin:6px 0">Grade: ${grade}</div>
      <div class="exam-result-breakdown">${bdHTML}
        <div style="margin-top:8px;font-size:12px;color:var(--clr-muted)">
          ✍️ Written answers scored by length estimate. Ask your teacher for exact marks!
        </div>
      </div>
      <div class="result-actions" style="flex-wrap:wrap;">
        <button class="big-btn btn-green"  onclick="startExamWithModal('${examType}')">Try Again 🔄</button>
        <button class="exam-pdf-btn"       onclick="downloadExamPDF()">📄 Download Paper</button>
        <button class="big-btn btn-orange" onclick="showPage('page-home')">Home 🏠</button>
      </div>
    </div>`;
}

// ── PDF Generation ─────────────────────────────────────────────────────────
function downloadExamPDF() {
  const { jsPDF } = window.jspdf;
  if (!jsPDF) { showToast('PDF library not loaded yet. Try again in a moment.'); return; }

  const cfg    = examConfig;
  const cls    = getActiveClass() ? 'Class ' + getActiveClass() : 'All Classes';
  const today  = new Date().toLocaleDateString('en-IN', { day:'2-digit', month:'long', year:'numeric' });
  const student = (typeof getStudentInfo === 'function') ? (getStudentInfo() || {}) : {};
  const doc    = new jsPDF({ unit:'mm', format:'a4' });
  const W      = doc.internal.pageSize.getWidth();
  const margin = 15;
  const usable = W - margin * 2;
  let y = 20;

  const safeText = (t) => (t || '').replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"').replace(/[^\x00-\x7F]/g, (c) => {
    const map = {'\u2013':'-','\u2014':'--','\u2026':'...','\u00A0':' '};
    return map[c] || '?';
  });

  function checkPage(needed = 8) {
    if (y + needed > 275) { doc.addPage(); y = 20; }
  }
  function hline(yy) {
    doc.setDrawColor(180); doc.setLineWidth(0.3);
    doc.line(margin, yy, W - margin, yy);
  }

  // ── Branded header (uses institute branding if configured) ──
  const brand = window.BRAND;
  if (brand && typeof addBrandedPdfHeader === 'function') {
    const extraLines = [
      safeText(cfg.label + ' Examination  ·  ' + cls + '  ·  ' + today),
      student.name ? 'Student: ' + safeText(student.name) + (student.section ? '  ·  ' + safeText(student.section) : '') : '',
      'Total Marks: ' + cfg.totalMarks + '  ·  Time Allowed: ' + cfg.timeMinutes + ' minutes',
    ].filter(Boolean);
    y = addBrandedPdfHeader(doc, extraLines);
  } else {
    // Default header (no branding configured)
    const primaryRGB = [79, 70, 229];
    doc.setFillColor(...primaryRGB);
    doc.rect(0, 0, W, 18, 'F');
    doc.setFont('helvetica','bold'); doc.setFontSize(13); doc.setTextColor(255,255,255);
    doc.text('AI STUDY BUDDY — ' + safeText(cfg.label.toUpperCase()), W/2, 11, {align:'center'});

    y = 26;
    doc.setTextColor(30,27,75); doc.setFont('helvetica','bold'); doc.setFontSize(11);
    doc.text(safeText(cfg.label + ' Examination Paper'), W/2, y, {align:'center'}); y += 7;
    doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(100,100,120);
    doc.text('Date: ' + today + '     ' + cls + '     Total Marks: ' + cfg.totalMarks + '     Time: ' + cfg.timeMinutes + ' mins', W/2, y, {align:'center'}); y += 5;
    if (student.name) {
      doc.setFontSize(9); doc.setTextColor(60,60,80);
      doc.text('Student: ' + safeText(student.name) + (student.section ? '   Section: ' + safeText(student.section) : ''), W/2, y, {align:'center'}); y += 5;
    }
    hline(y); y += 6;
  }

  // General instructions
  doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(60,60,80);
  doc.text('General Instructions:', margin, y); y += 5;
  doc.setFont('helvetica','normal'); doc.setFontSize(8.5); doc.setTextColor(80,80,100);
  const instrs = [
    '1. All questions are compulsory unless stated otherwise.',
    '2. Write clearly and neatly. Marks will be deducted for illegible answers.',
    '3. For MCQ, choose the best option. Marks are not deducted for wrong answers.',
    '4. Short answer questions require 2-3 sentences. Long answers require a paragraph.',
  ];
  instrs.forEach(instr => { doc.text(safeText(instr), margin + 2, y); y += 4.5; });
  hline(y); y += 6;

  // ── Sections ──
  const labels = ['A','B','C','D'];

  cfg.sections.forEach(sec => {
    checkPage(14);
    doc.setFillColor(238, 242, 255);
    doc.roundedRect(margin, y - 4, usable, 12, 2, 2, 'F');
    doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(79,70,229);
    doc.text(safeText(sec.title + '  ' + sec.note), margin + 4, y + 3); y += 13;

    const qs = examQuestions[sec.id] || [];
    qs.forEach((q, qi) => {
      checkPage(16);
      const qnum = 'Q' + (qi + 1) + '.';
      doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(50,50,70);
      doc.text(qnum + ' [' + sec.marksEach + (sec.marksEach > 1 ? ' marks' : ' mark') + ']', margin, y); y += 5;

      doc.setFont('helvetica','normal'); doc.setFontSize(9.5); doc.setTextColor(30,30,50);
      const qLines = doc.splitTextToSize(safeText(q.q), usable - 4);
      qLines.forEach(line => { checkPage(6); doc.text(line, margin + 4, y); y += 5; });

      if (sec.type === 'mcq') {
        const opts = q._examShuffled || q.opts || [];
        opts.forEach((opt, oi) => {
          checkPage(6);
          doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(60,60,80);
          const optLine = doc.splitTextToSize(safeText('(' + labels[oi] + ') ' + opt), (usable/2) - 4);
          const xOff = (oi % 2 === 0) ? margin + 6 : margin + 6 + usable / 2;
          if (oi % 2 === 0 && oi > 0) y += 5;
          optLine.forEach((line, li) => { if (li === 0) doc.text(line, xOff, y); });
          if (oi % 2 === 1 || oi === opts.length - 1) y += 5;
        });
        y += 2;
      } else {
        // Answer lines for written questions
        const lineCount = sec.type === 'essay' ? 8 : sec.type === 'long' ? 5 : 3;
        for (let l = 0; l < lineCount; l++) {
          checkPage(6);
          doc.setDrawColor(200); doc.setLineWidth(0.2);
          doc.line(margin + 4, y, W - margin - 4, y); y += 6;
        }
        // Pending review note for written sections
        if (qi === qs.length - 1) {
          checkPage(8);
          doc.setFontSize(8); doc.setTextColor(150,100,50);
          doc.text('* Written answers will be reviewed and marked by your teacher.', margin + 4, y); y += 6;
        }
        y += 2;
      }
    });
    y += 4;
  });

  // Footer — branded if available, default otherwise
  if (!brand || typeof addBrandedPdfHeader !== 'function') {
    const pageCount = doc.internal.getNumberOfPages();
    for (let p = 1; p <= pageCount; p++) {
      doc.setPage(p);
      doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(150,150,170);
      hline(285);
      doc.text('AI Study Buddy  |  ' + safeText(cfg.label) + '  |  ' + cls, margin, 290);
      doc.text('Page ' + p + ' of ' + pageCount, W - margin, 290, { align:'right' });
    }
  } else {
    // addBrandedPdfHeader handles footer for all pages
    addBrandedPdfHeader(doc, []);
  }

  const fname = safeText(cfg.label.replace(/\s+/g,'-')) + '-' + cls.replace(/\s+/g,'-') + '-' + new Date().getFullYear() + '.pdf';
  doc.save(fname);
  showToast('📄 Exam paper downloaded!');
}

// =====================================================
// SECTION 12: MOCK EXAM
// =====================================================

let mockMCQQuestions = [];
let mockAnswers = {};
let mockShortQs = [];
let mockLongQs = [];

function startMock() {
  showPage('page-mock');
  generateMockExam();
}

function generateMockExam() {
  mockMCQQuestions = shuffle([...QUESTION_BANK]).slice(0, 5);
  mockShortQs = shuffle([...getExamQuestions('short')]).slice(0, 3);
  mockLongQs  = shuffle([...getExamQuestions('long')]).slice(0, 2);
  mockAnswers  = {};

  const labels = ['A','B','C','D'];

  // Build MCQ HTML
  const mcqHTML = mockMCQQuestions.map((q, qi) => `
    <div class="mock-mcq-item">
      <div class="mock-q-text">Q${qi+1}. ${q.q} <small style="color:#6b7280">(${q.subject})</small></div>
      <div class="mock-options">
        ${q.opts.map((opt, oi) => `
          <label class="mock-opt" id="mock-opt-${qi}-${oi}">
            <input type="radio" name="mock-q-${qi}" value="${oi}" onchange="selectMockOpt(${qi},${oi})">
            <span><b>${labels[oi]}.</b> ${opt}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');

  const shortHTML = mockShortQs.map((q, i) => `
    <div class="mock-short-item">
      <div class="mock-q-text">Q${i+1}. ${q.q} <small style="color:#6b7280">(${q.subj})</small></div>
      <textarea rows="3" placeholder="Write your answer here…" id="short-ans-${i}"></textarea>
    </div>
  `).join('');

  const longHTML = mockLongQs.map((q, i) => `
    <div class="mock-long-item">
      <div class="mock-q-text">Q${i+1}. ${q.q} <small style="color:#6b7280">(${q.subj})</small></div>
      <textarea rows="6" placeholder="Write your detailed answer here… 📝" id="long-ans-${i}"></textarea>
    </div>
  `).join('');

  document.getElementById('mock-content').innerHTML = `
    <div class="mock-section">
      <h3>📝 Section A – Multiple Choice Questions (5 × 1 = 5 marks)</h3>
      ${mcqHTML}
    </div>
    <div class="mock-section">
      <h3>✍️ Section B – Short Answer Questions (3 × 2 = 6 marks)</h3>
      ${shortHTML}
    </div>
    <div class="mock-section">
      <h3>📄 Section C – Long Answer Questions (2 × 4 = 8 marks)</h3>
      ${longHTML}
    </div>
    <div class="mock-submit-row">
      <button class="big-btn btn-purple" onclick="submitMock()">Submit Exam 🎓</button>
    </div>
  `;
  document.getElementById('mock-result').style.display = 'none';
}

function selectMockOpt(qi, oi) {
  // Highlight selected
  for (let x = 0; x < 4; x++) {
    const el = document.getElementById(`mock-opt-${qi}-${x}`);
    if (el) el.classList.remove('selected');
  }
  const sel = document.getElementById(`mock-opt-${qi}-${oi}`);
  if (sel) sel.classList.add('selected');
  mockAnswers[qi] = oi;
}

function submitMock() {
  let mcqScore = 0;
  mockMCQQuestions.forEach((q, i) => {
    // mockAnswers[i] is the selected option INDEX (0-3)
    // q.ans is the correct answer TEXT — must find its index in q.opts to compare
    const correctIdx = q.opts.indexOf(q.ans);
    const isCorrect  = mockAnswers[i] !== undefined && mockAnswers[i] === correctIdx;
    if (isCorrect) { mcqScore++; updateProgress(q.subject, true); }
    else           { updateProgress(q.subject, false); }
  });

  const shortAnswered = mockShortQs.filter((_, i) => (document.getElementById(`short-ans-${i}`)?.value||'').trim().length > 10).length;
  const longAnswered  = mockLongQs.filter((_,  i) => (document.getElementById(`long-ans-${i}`)?.value||'').trim().length > 30).length;
  const estShort = shortAnswered * 1.5;
  const estLong  = longAnswered  * 3;
  const totalEst = mcqScore + estShort + estLong;
  const maxMarks = 19;
  const pct = Math.round((totalEst / maxMarks) * 100);
  const grade = pct >= 90 ? 'A+' : pct >= 75 ? 'A' : pct >= 60 ? 'B' : pct >= 45 ? 'C' : 'D';
  const emoji = pct >= 75 ? '🏆' : pct >= 60 ? '⭐' : '💪';

  document.getElementById('mock-content').style.display = 'none';
  const res = document.getElementById('mock-result');
  res.style.display = 'block';
  res.innerHTML = `
    <div class="result-card">
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">Mock Exam Submitted! 🎓</div>
      <div class="result-score">~${Math.round(totalEst)}/${maxMarks}</div>
      <div style="font-size:32px;font-weight:900;color:var(--clr-green);margin:8px 0">Grade: ${grade}</div>
      <div class="result-msg">
        MCQ: ${mcqScore}/5 correct ✅<br>
        Short Answers: ${shortAnswered}/3 attempted ✍️<br>
        Long Answers: ${longAnswered}/2 attempted 📄<br><br>
        <i>Note: Written answer scores are estimated based on length. Have your teacher check them! 😊</i>
      </div>
      <div class="result-actions">
        <button class="big-btn btn-purple" onclick="retryMock()">Try Again 🔄</button>
        <button class="big-btn btn-orange" onclick="showPage('page-home')">Home 🏠</button>
      </div>
    </div>
  `;
}

function retryMock() {
  document.getElementById('mock-content').style.display = 'block';
  generateMockExam();
}

// =====================================================
// SECTION 13: PROGRESS PAGE
// =====================================================

function renderProgress() {
  const acc = progress.totalAttempts > 0 ? Math.round((progress.correct/progress.totalAttempts)*100) : 0;
  document.getElementById('prog-total').textContent    = progress.totalAttempts;
  document.getElementById('prog-correct').textContent  = progress.correct;
  document.getElementById('prog-accuracy').textContent = acc + '%';
  document.getElementById('prog-streak').textContent   = progress.bestStreak;

  // Subject bars
  const colors = { Math:'#4f46e5', Science:'#10b981', English:'#f59e0b', SST:'#ec4899' };
  const emojis = { Math:'➕', Science:'🔬', English:'📖', SST:'🌍' };
  const barsHTML = Object.entries(progress.subjectStats).map(([subj, stats]) => {
    const pct = stats.a > 0 ? Math.round((stats.c/stats.a)*100) : 0;
    return `
      <div class="subj-bar-row">
        <div class="subj-bar-label">
          <span>${emojis[subj]} ${subj}</span>
          <span>${stats.c}/${stats.a} (${pct}%)</span>
        </div>
        <div class="subj-bar-track">
          <div class="subj-bar-fill" style="width:${pct}%;background:${colors[subj]}"></div>
        </div>
      </div>
    `;
  }).join('');
  document.getElementById('subject-bars').innerHTML = barsHTML || '<p style="color:#6b7280">No data yet. Start practising! 🚀</p>';

  // Achievements
  const allAchs = [
    { id:"first",    title:"First Step",     emoji:"🌟", desc:"Complete first question" },
    { id:"ten",      title:"10 Questions",   emoji:"🎯", desc:"Answer 10 questions" },
    { id:"fifty",    title:"50 Questions",   emoji:"💪", desc:"Answer 50 questions" },
    { id:"streak5",  title:"5 Streak",       emoji:"🔥", desc:"Get 5 correct in a row" },
    { id:"streak10", title:"10 Streak",      emoji:"🚀", desc:"Get 10 correct in a row" },
    { id:"perfect",  title:"Perfect Score",  emoji:"🏆", desc:"100% accuracy" },
    { id:"math5",    title:"Math Explorer",  emoji:"➕", desc:"Answer 5 Math questions" },
    { id:"science5", title:"Science Star",   emoji:"🔬", desc:"Answer 5 Science questions" },
    { id:"english5", title:"Word Wizard",    emoji:"📖", desc:"Answer 5 English questions" },
    { id:"sst5",     title:"History Hero",   emoji:"🌍", desc:"Answer 5 SST questions" },
  ];
  const achHTML = allAchs.map(a => {
    const earned = progress.achievements.includes(a.id);
    return `
      <div class="achievement ${earned?'earned':'locked'}">
        <span class="achievement-icon">${a.emoji}</span>
        <div>
          <div style="font-weight:800;font-size:13px">${a.title}</div>
          <div style="font-size:11px;color:#6b7280">${a.desc}</div>
        </div>
        ${earned?'<span style="margin-left:auto;color:#f59e0b;font-weight:900">✓</span>':''}
      </div>
    `;
  }).join('');
  document.getElementById('achievements-grid').innerHTML = achHTML;
}

function resetProgress() {
  if (confirm('Are you sure you want to reset all your progress? 😟')) {
    progress = {
      totalAttempts:0, correct:0, streak:0, bestStreak:0,
      subjectStats:{ Math:{a:0,c:0}, Science:{a:0,c:0}, English:{a:0,c:0}, SST:{a:0,c:0} },
      achievements:[], history:[]
    };
    saveProgress();
    renderProgress();
    showToast("Progress reset! Fresh start! 🌟");
  }
}

// =====================================================
// SECTION 14: RANDOMISATION & HELPERS
// =====================================================

// Pure Fisher-Yates shuffle — new array, never mutates input
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Stable question IDs ──────────────────────────────────────────────────────
// Every question object gets a _id assigned exactly once.
// Default bank questions: "D-{index}"
// CSV bank questions:     "C-{bankId}-{index}"  (or re-uses questionId if present)
// This is the source of truth for dedup — never use q.q (text can collide,
// is unstable across CSV edits, and is slow to compare for large banks).

function assignDefaultIds() {
  QUESTION_BANK.forEach((q, i) => {
    if (!q._id) q._id = 'D-' + i;
  });
}

function assignCsvIds(questions, bankId) {
  questions.forEach((q, i) => {
    if (!q._id) {
      // Prefer questionId from CSV if unique-looking, else generate one
      q._id = q.questionId ? ('C-' + bankId + '-' + q.questionId) : ('C-' + bankId + '-' + i);
    }
  });
}

// ── Queue-based rotation (scoped to ALL active filters) ──────────────────────
//
// ROOT CAUSE of repeat-question bug:
//   makeScopeKey only used subject+chapter. The topic/difficulty/type filters
//   also narrow the pool, but used the SAME scope key as unfiltered quizzes.
//   When a narrow-filtered pool (e.g. 89 questions) was compared against a
//   _seen set built from a wide pool (3050 questions), most IDs in _seen were
//   NOT in the narrow pool → candidates.length < n triggered a full reset
//   EVERY TIME → the seen-set never actually rotated → same questions repeated.
//
// FIX: scope key includes ALL four active filter dimensions.
//   Different filter combo → different key → independent queue → no bleed-over.
//   Within the same filter combo → questions rotate through the full pool
//   before any question repeats.
//
// ALGORITHM: shuffled-queue per scope
//   1. On first call for a scope: shuffle the pool, store as queue.
//   2. Pop n from front of queue and return them.
//   3. When queue empties (or is too small), refill from current pool (re-shuffled).
//   This guarantees no repeats until every question in the filtered pool
//   has been seen at least once.
//
const _queues = {};  // { scopeKey: _id[] }  — remaining unseen IDs, in shuffled order

// Build a stable scope key from ALL currently-active filter dimensions.
// Call this immediately before pickQuestions so it reflects the live UI state.
function makeScopeKey(subject, chapter, topic, difficulty, qtype) {
  const s  = subject    || '__all__';
  const c  = (!chapter  || chapter  === 'All Chapters' || chapter  === '__all__') ? '__all__' : chapter;
  const t  = topic      || '__all__';
  const d  = difficulty || '__all__';
  const qt = qtype      || '__all__';
  return [s, c, t, d, qt].join('::');
}

// Read the current dropdown filter values for use in scope keys / daily.
function getActiveFilterValues() {
  return {
    topic:      (document.getElementById('filter-topic')?.value      || ''),
    difficulty: (document.getElementById('filter-difficulty')?.value || ''),
    qtype:      (document.getElementById('filter-type')?.value       || ''),
  };
}

// Pick n unique questions from pool, never repeating within a full rotation.
// scopeKey MUST be built with makeScopeKey(...) by the caller.
function pickQuestions(pool, n, scopeKey) {
  if (!pool.length) return [];
  n = Math.min(n, pool.length);

  // Safety: ensure every question has a stable _id
  pool.forEach((q, i) => {
    if (!q._id) q._id = 'U-' + i + '-' + (q.q || '').slice(0, 20).replace(/\s+/g, '_');
  });

  // Fallback key: stable fingerprint of pool contents (used by exam sections
  // that build their own scope keys and don't go through makeScopeKey)
  if (!scopeKey) {
    scopeKey = 'auto::' + pool.map(q => q._id).sort().slice(0, 8).join('|');
  }

  // Build the queue for this scope if it doesn't exist or is stale
  // (stale = queue contains IDs that are no longer in the current pool)
  const poolIds = new Set(pool.map(q => q._id));

  if (!_queues[scopeKey]) {
    // First call for this scope: create a full shuffled queue
    _queues[scopeKey] = shuffle(pool.map(q => q._id));
  } else {
    // Filter out any IDs that are no longer in pool (e.g. after CSV delete)
    _queues[scopeKey] = _queues[scopeKey].filter(id => poolIds.has(id));
  }

  // If queue is too small to satisfy request, append a fresh shuffled batch
  // (excluding IDs already in the remaining queue to avoid immediate repeats)
  if (_queues[scopeKey].length < n) {
    const inQueue = new Set(_queues[scopeKey]);
    const fresh   = shuffle(pool.map(q => q._id).filter(id => !inQueue.has(id)));
    _queues[scopeKey] = [..._queues[scopeKey], ...fresh];
    // If still not enough (can happen when pool.length < n, capped above), just use pool
    if (_queues[scopeKey].length < n) {
      _queues[scopeKey] = shuffle(pool.map(q => q._id));
    }
  }

  // Pop n IDs from the front of the queue
  const pickedIds = _queues[scopeKey].splice(0, n);
  const idToQ     = Object.fromEntries(pool.map(q => [q._id, q]));
  return pickedIds.map(id => idToQ[id]).filter(Boolean);
}

// Wipe all queues. Call after CSV is added or removed.
function clearSeenCache() {
  Object.keys(_queues).forEach(k => delete _queues[k]);
}


// ── Answer Review Builder ────────────────────────────────────────────────────
function buildAnswerReview(log) {
  if (!log || !log.length) return '';
  const items = log.map((entry, i) => {
    if (!entry) return '';
    const { q, chose, correct, isCorrect } = entry;
    const cls  = isCorrect ? 'rv-correct' : 'rv-wrong';
    const badge = isCorrect
      ? '<span class="review-badge rv-badge-correct">✅ Correct</span>'
      : '<span class="review-badge rv-badge-wrong">❌ Wrong</span>';
    const yourAns  = chose   ? `<span style="color:#991b1b">Your answer: <b>${chose}</b></span>` : '';
    const rightAns = !isCorrect ? `<span style="color:#065f46"> · Correct: <b>${correct}</b></span>` : '';
    const exp = q.exp ? `<div style="margin-top:4px;font-size:12px;opacity:.8">💡 ${q.exp}</div>` : '';
    return `
      <div class="review-item ${cls}">
        <div class="review-q">${badge} Q${i+1}. ${q.q}</div>
        <div class="review-ans">${yourAns}${rightAns}${exp}</div>
      </div>`;
  }).join('');

  const correct = log.filter(e=>e&&e.isCorrect).length;
  const total   = log.filter(Boolean).length;

  return `
    <div class="review-section">
      <div class="review-title" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">
        <span>📋 View Answers (${correct}/${total} correct)</span>
        <span style="font-size:18px">▾</span>
      </div>
      <div style="display:none">${items}</div>
    </div>`;
}

function getEncouragement(correct) {
  const pos = ["Great job! 🌟","Awesome! 🎉","Nailed it! 🎯","You're brilliant! 💡","Keep it up! 🚀","Superstar! ⭐"];
  const neg = ["Don't give up! 💪","You're learning! 📚","Next one's yours! 😊","Keep trying! 🌈","Almost there! 🎯"];
  const arr = correct ? pos : neg;
  return arr[Math.floor(Math.random()*arr.length)];
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// =====================================================
// SECTION 14b: CSV QUESTION BANK MANAGER
// =====================================================

const CSV_STORAGE_KEY = 'studyBuddy_csvBanks';

// Full column spec — all supported fields from the extended schema
const CSV_COLUMNS = {
  required: ['question','option_a','option_b','option_c','option_d','correct_answer'],
  optional: ['question_id','class','subject','chapter','topic','difficulty',
             'question_type','explanation','learning_objective','ncert_reference']
};

// Difficulty display helpers
const DIFF_COLOR  = { easy:'#10b981', medium:'#f59e0b', hard:'#ef4444' };
const DIFF_EMOJI  = { easy:'🟢', medium:'🟡', hard:'🔴' };
const QTYPE_EMOJI = { mcq:'📝', 'true/false':'✅', fillblank:'✏️', short:'📄' };

function diffBadge(d) {
  if (!d) return '';
  const key = d.toLowerCase();
  const col = DIFF_COLOR[key] || '#6b7280';
  const em  = DIFF_EMOJI[key] || '⚪';
  return `<span class="meta-badge" style="background:${col}20;color:${col};border-color:${col}40">${em} ${d}</span>`;
}
function typeBadge(t) {
  if (!t) return '';
  const em = QTYPE_EMOJI[t.toLowerCase()] || '📋';
  return `<span class="meta-badge meta-type">${em} ${t}</span>`;
}

// ---- Storage ----
function loadAllCsvBanks() {
  try { return JSON.parse(localStorage.getItem(CSV_STORAGE_KEY) || '[]'); }
  catch { return []; }
}
function saveAllCsvBanks(banks) {
  try { localStorage.setItem(CSV_STORAGE_KEY, JSON.stringify(banks)); }
  catch { showToast('⚠️ Storage full! Remove an older bank first.'); }
}

// ---- Drag / Drop / File ----
function csvDragOver(e) {
  e.preventDefault();
  document.getElementById('csv-drop-zone').style.borderColor = '#4f46e5';
}
function csvDrop(e) {
  e.preventDefault();
  document.getElementById('csv-drop-zone').style.borderColor = '';
  const file = e.dataTransfer?.files?.[0];
  if (file) processCsvFile(file);
}
function handleCsvFile(e) {
  const file = e.target.files?.[0];
  if (file) processCsvFile(file);
  e.target.value = '';
}

function processCsvFile(file) {
  if (!file.name.endsWith('.csv')) { showToast('⚠️ Please upload a .csv file!'); return; }
  const reader = new FileReader();
  reader.onload = e => {
    const result = parseCSV(e.target.result);
    if (result.errors.length && result.questions.length === 0) { showCsvError(result.errors); return; }
    showCsvPreview(file.name, result);
  };
  reader.readAsText(file);
}

// ---- CSV Parser (extended schema) ----
function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return { questions:[], errors:['CSV is empty or has no data rows.'] };

  const headers = parseCsvRow(lines[0]).map(h => h.toLowerCase().trim().replace(/[\s-]+/g,'_'));
  const missing  = CSV_COLUMNS.required.filter(r => !headers.includes(r));
  if (missing.length) return { questions:[], errors:[`Missing required columns: ${missing.join(', ')}`] };

  const questions = [], errors = [];
  const ansMap = { a:0, b:1, c:2, d:3 };

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const cols = parseCsvRow(lines[i]);
    const row  = {};
    headers.forEach((h, idx) => row[h] = (cols[idx] || '').trim());

    if (!row.question) { errors.push(`Row ${i+1}: empty question — skipped.`); continue; }
    // correct_answer can be: a letter (A/B/C/D), or the full answer text
    const rawAns = row.correct_answer.trim();
    const ansKey = rawAns.toLowerCase().replace(/[^a-d]/g, '');
    let   ansValue;
    if (ansKey in ansMap) {
      // Letter format (A/B/C/D): store the option text so it matches builtin format
      ansValue = [row.option_a, row.option_b, row.option_c, row.option_d][ansMap[ansKey]] || rawAns;
    } else if (rawAns) {
      // Full text format: use directly (must match one of the options)
      const opts = [row.option_a, row.option_b, row.option_c, row.option_d];
      const matchIdx = opts.findIndex(o => o.trim().toLowerCase() === rawAns.toLowerCase());
      if (matchIdx === -1) {
        errors.push(`Row ${i+1}: correct_answer "${rawAns}" doesn't match any option (A-D or full text).`);
        continue;
      }
      ansValue = opts[matchIdx];
    } else {
      errors.push(`Row ${i+1}: correct_answer is empty.`);
      continue;
    }

    questions.push({
      // Core quiz fields
      q:          row.question,
      opts:       [row.option_a, row.option_b, row.option_c, row.option_d],
      ans:        ansValue,   // always stored as text string (matches builtin format)
      exp:        row.explanation || '💡 See your textbook for more details.',
      subject:    (row.subject    || 'Custom').trim(),
      chapter:    (row.chapter    || 'General').trim(),
      // Extended metadata fields — stored as-is for display & filtering
      questionId: row.question_id       || '',
      classLevel: row.class             || '',
      topic:      (row.topic             || '').trim(),
      difficulty: row.difficulty        || '',
      questionType: row.question_type   || 'MCQ',
      learningObjective: row.learning_objective || '',
      ncertReference:    row.ncert_reference    || ''
    });
  }
  return { questions, errors };
}

// Minimal quoted-CSV row parser
function parseCsvRow(line) {
  const result = [];
  let cur = '', inQuote = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') { inQuote = !inQuote; }
    else if (ch === ',' && !inQuote) { result.push(cur); cur = ''; }
    else { cur += ch; }
  }
  result.push(cur);
  return result;
}

// ---- Preview ----
function showCsvPreview(filename, result) {
  const area = document.getElementById('csv-preview-area');
  const { questions, errors } = result;

  // Summary stats
  const subjects    = [...new Set(questions.map(q => q.subject))];
  const classes     = [...new Set(questions.map(q => q.classLevel).filter(Boolean))];
  const diffs       = [...new Set(questions.map(q => q.difficulty).filter(Boolean))];
  const easy   = questions.filter(q => q.difficulty?.toLowerCase() === 'easy').length;
  const medium = questions.filter(q => q.difficulty?.toLowerCase() === 'medium').length;
  const hard   = questions.filter(q => q.difficulty?.toLowerCase() === 'hard').length;

  // Warn if active class is set and none of the CSV questions match it
  const _activeClass = getActiveClass();
  const _csvClasses  = [...new Set(questions.map(q => q.classLevel).filter(Boolean))];
  const _noMatch     = _activeClass && _csvClasses.length > 0
    && questions.filter(q => !q.classLevel || String(q.classLevel).trim() === String(_activeClass).trim()).length === 0;
  const classMismatchHtml = _noMatch
    ? `<div class="csv-warn">⚠️ <b>Class mismatch:</b> These questions are for Class ${_csvClasses.join('/')} but you have Class ${_activeClass} selected. They will still be saved — switch class to use them in quizzes.</div>` : '';

  const errHtml = errors.length
    ? `<div class="csv-warn">⚠️ ${errors.length} row(s) skipped:<br><small>${errors.slice(0,5).join('<br>')}${errors.length>5?`<br>…and ${errors.length-5} more`:''}` +
      `</small></div>` : '';

  const previewRows = questions.slice(0, 8).map((q, i) => `
    <tr>
      <td>${q.questionId || i+1}</td>
      <td title="${q.q}">${q.q.slice(0,55)}${q.q.length>55?'…':''}</td>
      <td>${typeof q.ans === "string" ? q.ans : (q.opts[q.ans] || q.ans)}</td>
      <td><span class="subj-tag">${q.subject}</span></td>
      <td>${q.chapter}</td>
      <td>${q.topic || '—'}</td>
      <td>${diffBadge(q.difficulty) || '—'}</td>
      <td>${typeBadge(q.questionType) || '—'}</td>
    </tr>`).join('');

  area.innerHTML = `
    <div class="csv-preview-card">
      <div class="csv-preview-header">
        <span>📄 <b>${filename}</b></span>
        <span class="csv-stat">✅ ${questions.length} questions</span>
        <span class="csv-stat">📚 ${subjects.join(', ')}</span>
        ${classes.length ? `<span class="csv-stat">🎓 Class ${classes.join(', ')}</span>` : ''}
        ${easy   ? `<span class="csv-stat" style="color:#10b981">🟢 ${easy} Easy</span>`   : ''}
        ${medium ? `<span class="csv-stat" style="color:#f59e0b">🟡 ${medium} Medium</span>` : ''}
        ${hard   ? `<span class="csv-stat" style="color:#ef4444">🔴 ${hard} Hard</span>`   : ''}
      </div>
      ${classMismatchHtml}
      ${errHtml}
      <div class="csv-table-wrap">
        <table class="csv-preview-table">
          <thead><tr><th>ID</th><th>Question</th><th>Answer</th><th>Subject</th><th>Chapter</th><th>Topic</th><th>Difficulty</th><th>Type</th></tr></thead>
          <tbody>${previewRows}</tbody>
        </table>
        ${questions.length > 8 ? `<div class="csv-more">…and ${questions.length - 8} more questions</div>` : ''}
      </div>
      ${questions.length > 0 ? `
        <div class="csv-preview-actions">
          <input type="text" id="csv-bank-name" placeholder="Name this bank (e.g. Science Term 1)" class="csv-name-input"
                 value="${filename.replace('.csv','')}" />
          <button class="big-btn btn-green" onclick="saveCsvBank('${filename}')">💾 Save to Question Bank</button>
          <button class="big-btn btn-red"   onclick="document.getElementById('csv-preview-area').innerHTML=''">✕ Discard</button>
        </div>` : ''}
    </div>`;

  window._pendingCsvData = questions;
}

function showCsvError(errors) {
  document.getElementById('csv-preview-area').innerHTML = `
    <div class="csv-preview-card">
      <div class="csv-preview-header"><span>❌ Could not parse CSV</span></div>
      <div class="csv-warn">${errors.join('<br>')}</div>
      <p style="font-size:13px;color:#6b7280;margin-top:8px">
        Required columns: <b>question, option_a, option_b, option_c, option_d, correct_answer</b>
      </p>
    </div>`;
}

// ---- Save ----
function saveCsvBank(filename) {
  const questions = window._pendingCsvData;
  if (!questions?.length) return;
  const name  = document.getElementById('csv-bank-name')?.value?.trim() || filename;
  const banks = loadAllCsvBanks();
  const id    = 'bank_' + Date.now();
  // Store a summary alongside the questions for quick display
  const summary = {
    subjects:    [...new Set(questions.map(q => q.subject))],
    classes:     [...new Set(questions.map(q => q.classLevel).filter(Boolean))],
    easy:   questions.filter(q => q.difficulty?.toLowerCase()==='easy').length,
    medium: questions.filter(q => q.difficulty?.toLowerCase()==='medium').length,
    hard:   questions.filter(q => q.difficulty?.toLowerCase()==='hard').length,
    types:  [...new Set(questions.map(q => q.questionType).filter(Boolean))]
  };
  // Assign stable IDs to new CSV questions immediately so rotation tracking
  // works correctly from the first quiz after this bank is loaded.
  assignCsvIds(questions, id);
  // Wipe the seen-cache so any active rotation restarts cleanly with the
  // enlarged pool (avoids stale keys referencing the pre-merge pool).
  clearSeenCache();
  banks.push({ id, name, filename, questions, summary, addedAt: new Date().toISOString() });
  saveAllCsvBanks(banks);
  window._pendingCsvData = null;
  document.getElementById('csv-preview-area').innerHTML = '';

  // ── Figure out how many new questions are actually accessible right now ──
  const activeClass   = getActiveClass();
  const csvClasses    = [...new Set(questions.map(q => q.classLevel).filter(Boolean))];
  const visibleNow    = activeClass
    ? questions.filter(q => !q.classLevel || String(q.classLevel) === String(activeClass)).length
    : questions.length;

  let toastMsg = `✅ "${name}" saved! ${questions.length} question${questions.length!==1?'s':''} added.`;

  if (activeClass && visibleNow === 0 && csvClasses.length > 0) {
    // All CSV questions belong to a different class — warn clearly
    toastMsg = `✅ Saved! But these questions are for Class ${csvClasses.join('/')} — switch class to use them.`;
    showToast(toastMsg);
    // Show a persistent banner so the user doesn't miss it
    const area = document.getElementById('csv-preview-area');
    area.innerHTML = `<div class="csv-warn" style="margin-top:12px">
      ℹ️ <b>${questions.length} questions</b> saved to bank "<b>${name}</b>" for
      Class ${csvClasses.join(' / ')}.
      You are currently on Class ${activeClass}.
      <br><br>
      <button class="big-btn btn-blue" style="font-size:13px;padding:8px 16px;"
        onclick="selectClass('${csvClasses[0]}');showPage('page-quiz');document.getElementById('csv-preview-area').innerHTML=''">
        Switch to Class ${csvClasses[0]} and go to Quiz →
      </button>
    </div>`;
  } else {
    showToast(toastMsg);
  }

  // ── Refresh all UI that shows question counts ──
  renderCsvBanksList();
  renderClassDropdown();

  // If the CSV introduced subjects not previously in the active pool,
  // switch to "All Subjects" so the user immediately sees all questions.
  const newSubjects = [...new Set(questions.map(q => q.subject).filter(Boolean))];
  const existingSubjects = getAllSubjects();
  const hasNewSubject = newSubjects.some(s => !existingSubjects.includes(s)) ||
                        newSubjects.some(s => s !== selectedSubject);
  if (hasNewSubject || newSubjects.length > 0) {
    selectedSubject = '__all__';
    selectedChapter = '__all__';
  }

  renderSubjectTabs('quiz-subject-tabs', selectedSubject, 'selectSubject', true);
  const quizPage = document.getElementById('page-quiz');
  if (quizPage && quizPage.style.display !== 'none') {
    renderQuizChapters();
    updateFilterCountBadge();
  }
  updateHomeStats();
}

// ---- Banks List ----
function renderCsvBanksList() {
  const banks     = loadAllCsvBanks();
  const container = document.getElementById('csv-banks-list');
  if (!container) return;

  if (!banks.length) {
    container.innerHTML = `<div class="csv-empty">No question banks uploaded yet. Upload a CSV above to get started! 📂</div>`;
    return;
  }

  container.innerHTML = banks.map(bank => {
    const s   = bank.summary || {};
    const subj = s.subjects?.join(', ') || [...new Set(bank.questions.map(q=>q.subject))].join(', ');
    const date = new Date(bank.addedAt).toLocaleDateString('en-IN');
    const diffPills = [
      s.easy   ? `<span style="color:#10b981;font-weight:800">🟢 ${s.easy}</span>`   : '',
      s.medium ? `<span style="color:#f59e0b;font-weight:800">🟡 ${s.medium}</span>` : '',
      s.hard   ? `<span style="color:#ef4444;font-weight:800">🔴 ${s.hard}</span>`   : ''
    ].filter(Boolean).join(' ');

    return `
      <div class="csv-bank-item" id="bankcard-${bank.id}">
        <div class="csv-bank-info">
          <div class="csv-bank-name">📚 ${bank.name}</div>
          <div class="csv-bank-meta">
            <span>📄 ${bank.filename}</span>
            <span>✅ ${bank.questions.length} questions</span>
            <span>📘 ${subj}</span>
            ${s.classes?.length ? `<span>🎓 Class ${s.classes.join(', ')}</span>` : ''}
            ${diffPills ? `<span>${diffPills}</span>` : ''}
            <span>🗓️ ${date}</span>
          </div>
        </div>
        <div class="csv-bank-actions">
          <button class="key-change-btn" onclick="previewBankQuestions('${bank.id}')">👁️ Preview</button>
          <button class="key-change-btn danger" onclick="deleteCsvBank('${bank.id}')">🗑️ Delete</button>
        </div>
      </div>`;
  }).join('');
}

function previewBankQuestions(bankId) {
  const bank = loadAllCsvBanks().find(b => b.id === bankId);
  if (!bank) return;

  const rows = bank.questions.slice(0, 12).map((q, i) => `
    <tr>
      <td>${q.questionId || i+1}</td>
      <td title="${q.q}">${q.q.slice(0,55)}${q.q.length>55?'…':''}</td>
      <td>${typeof q.ans === "string" ? q.ans : (q.opts[q.ans] || q.ans)}</td>
      <td><span class="subj-tag">${q.subject}</span></td>
      <td>${q.chapter}</td>
      <td>${q.topic||'—'}</td>
      <td>${diffBadge(q.difficulty)||'—'}</td>
      <td>${typeBadge(q.questionType)||'—'}</td>
      <td style="font-size:11px;color:#6b7280">${q.ncertReference||'—'}</td>
    </tr>`).join('');

  const el = document.getElementById('csv-preview-area');
  el.innerHTML = `
    <div class="csv-preview-card">
      <div class="csv-preview-header">
        <b>👁️ Preview: ${bank.name}</b>
        <span class="csv-stat">✅ ${bank.questions.length} total</span>
        <button class="key-change-btn" onclick="document.getElementById('csv-preview-area').innerHTML=''">✕ Close</button>
      </div>
      <div class="csv-table-wrap">
        <table class="csv-preview-table">
          <thead><tr><th>ID</th><th>Question</th><th>Answer</th><th>Subject</th><th>Chapter</th><th>Topic</th><th>Difficulty</th><th>Type</th><th>NCERT Ref</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
        ${bank.questions.length > 12 ? `<div class="csv-more">…and ${bank.questions.length - 12} more</div>` : ''}
      </div>
    </div>`;
  el.scrollIntoView({ behavior: 'smooth' });
}

// Auto-clear the active class from localStorage if it no longer has any questions.
// Called after any bank deletion so the nav label stays in sync with reality.
function reconcileActiveClass() {
  const cls = getActiveClass();
  if (!cls) return;                          // nothing selected — nothing to reconcile
  const available = getAllAvailableClasses();
  if (!available.includes(String(cls))) {
    localStorage.removeItem(CLASS_STORE_KEY); // class gone — clear it
    updateClassUI();
    renderClassDropdown();
  }
}

function deleteCsvBank(bankId) {
  const bank = loadAllCsvBanks().find(b => b.id === bankId);
  if (!bank) return;
  if (!confirm(`Delete "${bank.name}"? This removes ${bank.questions.length} questions.`)) return;
  saveAllCsvBanks(loadAllCsvBanks().filter(b => b.id !== bankId));
  clearSeenCache(); // pool shrinks — wipe stale rotation state
  reconcileActiveClass();   // clear active class if it no longer has questions
  renderCsvBanksList();
  renderClassDropdown();
  renderSubjectTabs('quiz-subject-tabs', selectedSubject, 'selectSubject', true);
  updateHomeStats();
  showToast(`🗑️ "${bank.name}" deleted.`);
}

// ---- Sample CSV download (full schema) ----
function downloadSampleCsv() { downloadStarterCsv(); }

function downloadBulkStudentTemplate() {
  const csv = [
    'name,email,class_level,section',
    'Aarav Sharma,aarav@example.com,7,A',
    'Priya Patel,priya@example.com,7,B',
    'Rohan Mehta,rohan@example.com,8,A',
  ].join('\n');
  const blob = new Blob([csv], { type:'text/csv' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'students_import_template.csv'; a.click();
  URL.revokeObjectURL(url);
  showToast('📥 Student import template downloaded!');
}

// Downloads full 152-question starter CSV (all ex-hardcoded Class 7 questions)
function downloadStarterCsv() {
  // The CSV is embedded in the app and always available offline
  // correct_answer column uses the FULL TEXT of the answer (not A/B/C/D)
  // so it loads correctly via the CSV parser
  const csv = window._starterCsv;
  if (!csv) { showToast('⚠️ Starter CSV not available'); return; }
  const blob = new Blob([csv], {type:'text/csv'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'class7_starter_questions.csv'; a.click();
  URL.revokeObjectURL(url);
  showToast('📥 Class 7 Starter CSV (2368 questions) downloaded!');
}


function showPage(id) {
  // Stop exam timer if navigating away
  if (id !== 'page-exam' && examTimer) { clearInterval(examTimer); examTimer = null; }
  document.querySelectorAll('.hero, .page').forEach(el => el.style.display = 'none');
  const el = document.getElementById(id);
  if (el) el.style.display = 'block';
  if (id === 'page-progress') renderProgress();
  if (id === 'page-tutor')    { checkApiKeyBanner(); renderKeyBadge(); injectClassBanner('page-tutor'); }
  if (id === 'page-quiz') {
    document.getElementById('quiz-setup').style.display = 'block';
    document.getElementById('quiz-play').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-filters').style.display = 'none';
    document.getElementById('quiz-start-row').style.display = 'none';
    injectClassBanner('page-quiz');
    if (getAllQuestions().length === 0) { showNoQuestionsState('quiz-setup'); return; }
    renderSubjectTabs('quiz-subject-tabs', selectedSubject, 'selectSubject', true);
    renderQuizChapters();
  }
  if (id === 'page-daily')    injectClassBanner('page-daily');
  if (id === 'page-mock')     injectClassBanner('page-mock');
  if (id === 'page-exam')     injectClassBanner('page-exam');
  if (id === 'page-csv')     { renderCsvBanksList(); renderExamBanksList(); updateSampleBankButton(); updateSampleExamBankButton(); }
  if (id === 'page-admin')   { if (typeof renderAdminPage   === 'function') renderAdminPage(); }
  if (id === 'page-review')  { if (typeof renderReviewPage  === 'function') renderReviewPage(); }
  if (id === 'page-reports') { if (typeof renderReportsPage === 'function') renderReportsPage(); }
  if (id === 'page-tests')   { /* test runner triggered manually */ }
  if (id === 'page-auth')    { /* nothing extra */ }
  // Re-apply translations whenever we navigate
  if (typeof applyTranslations === 'function') applyTranslations();
  window.scrollTo(0, 0);
}

// Inject a small "Active: Class X" banner at top of content pages
function injectClassBanner(pageId) {
  const page = document.getElementById(pageId);
  if (!page) return;
  const existing = page.querySelector('.active-class-banner');
  if (existing) existing.remove();
  const cls = getActiveClass();
  const banner = document.createElement('div');
  banner.className = 'active-class-banner';
  banner.innerHTML = cls
    ? `🎓 Active: <span class="acb-tag">Class ${cls}</span>
       <button class="acb-change" onclick="toggleClassDropdown()">Switch ▾</button>`
    : `🌈 All classes — <button class="acb-change" onclick="toggleClassDropdown()">Select class ▾</button>`;
  const header = page.querySelector('.page-header');
  if (header) header.after(banner);
  else page.insertBefore(banner, page.firstChild);
}

// Load the embedded 2368-question starter bank into localStorage as a named bank entry.
// Called only when user explicitly clicks "Load Sample Bank" button.
// The bank appears in the Saved Banks list and can be deleted like any uploaded CSV.
function loadSampleBank() {
  if (!window._starterCsv) { showToast('⚠️ Sample data not available.'); return; }

  // Don't load twice — check if a sample bank is already present
  const existing = loadAllCsvBanks();
  if (existing.some(b => b.id.startsWith('bank_sample_'))) {
    showToast('✅ Sample bank is already loaded!');
    return;
  }

  const { questions, errors } = parseCSV(window._starterCsv);
  if (!questions || questions.length === 0) {
    showToast('⚠️ Could not parse sample data. Try downloading and uploading the CSV instead.');
    return;
  }

  const id   = 'bank_sample_' + Date.now();
  const bank = {
    id,
    name:     'Class 7 – Sample Question Bank',
    filename: 'class7_questions.csv',
    addedAt:  Date.now(),
    questions,
    summary: {
      subjects: [...new Set(questions.map(q => q.subject).filter(Boolean))],
      classes:  [...new Set(questions.map(q => q.classLevel).filter(Boolean))],
      easy:     questions.filter(q => q.difficulty?.toLowerCase() === 'easy').length,
      medium:   questions.filter(q => q.difficulty?.toLowerCase() === 'medium').length,
      hard:     questions.filter(q => q.difficulty?.toLowerCase() === 'hard').length,
    }
  };
  assignCsvIds(bank.questions, bank.id);
  saveAllCsvBanks([...existing, bank]);
  clearSeenCache();

  // Refresh everything
  renderCsvBanksList();
  renderClassDropdown();
  updateHomeStats();
  renderSubjectTabs('quiz-subject-tabs', selectedSubject, 'selectSubject', true);
  updateSampleBankButton();   // grey out the button now it's loaded
  showToast(`✅ Sample bank loaded — ${questions.length} questions ready!`);
}

// Update the "Load Sample Bank" button state based on whether it's already loaded
function updateSampleBankButton() {
  const btn = document.getElementById('load-sample-btn');
  if (!btn) return;
  const already = loadAllCsvBanks().some(b => b.id.startsWith('bank_sample_'));
  btn.disabled    = already;
  btn.textContent = already ? '✅ Sample Bank Loaded' : '📦 Load Sample Bank (2368 questions)';
  btn.title       = already ? 'Delete it from the list below to reload' : 'Loads all Class 7 sample questions instantly';
}

const LANDING_SEEN_KEY    = 'studyBuddy_landingSeen';
const STUDENT_NAME_KEY    = 'studyBuddy_studentName'; // persists across sessions for school links

function showLandingModal() {
  const modal        = document.getElementById('landing-modal');
  const params       = new URLSearchParams(window.location.search);
  const hasInstitute = !!params.get('institute');
  const isAuthFlow   = params.get('setup') === '1' || window.location.hash.includes('access_token');

  // On a school link (?institute=) — show student name prompt instead of register modal
  if (hasInstitute && !isAuthFlow) {
    showStudentWelcome();
    return;
  }

  // Individual use — show register/individual modal on first ever visit
  if (!modal) return;
  const alreadySeen = localStorage.getItem(LANDING_SEEN_KEY);
  if (alreadySeen || hasInstitute) return;
  modal.style.display = 'flex';
}

function dismissLandingModal() {
  localStorage.setItem(LANDING_SEEN_KEY, '1');
  const modal = document.getElementById('landing-modal');
  if (modal) modal.style.display = 'none';
}

// Shown when a student opens a school URL for the first time.
// Stores name in localStorage so it persists across sessions (unlike sessionStorage).
function showStudentWelcome() {
  // If we already have a name stored, skip — don't ask every visit
  const savedName = localStorage.getItem(STUDENT_NAME_KEY);
  if (savedName) {
    // Silently pre-fill sessionStorage so exams pick it up
    if (typeof setStudentInfo === 'function') {
      setStudentInfo({ name: savedName, section: localStorage.getItem('studyBuddy_studentSection') || '' });
    }
    return;
  }

  // Remove any existing welcome overlay
  document.getElementById('student-welcome-modal')?.remove();

  const brand = (typeof getBrandCache === 'function' && getBrandCache()) || {};
  const schoolName = brand.name || 'your school';

  const overlay = document.createElement('div');
  overlay.id = 'student-welcome-modal';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9990;background:rgba(15,10,40,.75);display:flex;align-items:center;justify-content:center;padding:16px;';
  overlay.innerHTML = `
    <div style="background:#fff;border-radius:20px;padding:32px 26px;max-width:420px;width:100%;box-shadow:0 8px 40px rgba(79,70,229,.3);text-align:center;">
      <div style="font-size:48px;margin-bottom:10px;">🎓</div>
      <h2 style="font-family:'Baloo 2',cursive;font-size:22px;font-weight:800;color:var(--clr-primary);margin-bottom:6px;">
        Welcome to ${schoolName}!
      </h2>
      <p style="font-size:13px;color:#6b7280;margin-bottom:20px;line-height:1.6;">
        Enter your name to get started. It will appear on your results and exam PDFs.
      </p>
      <div style="text-align:left;margin-bottom:14px;">
        <label style="font-size:12px;font-weight:700;color:#374151;display:block;margin-bottom:4px;">
          Your Name <span style="color:#ef4444;">*</span>
        </label>
        <input id="welcome-name-input" type="text" placeholder="e.g. Aarav Sharma"
          style="width:100%;border:1.5px solid #c7d2fe;border-radius:10px;padding:10px 13px;font-size:15px;font-family:inherit;outline:none;box-sizing:border-box;"
          onkeydown="if(event.key==='Enter')submitStudentWelcome()" />
      </div>
      <div style="text-align:left;margin-bottom:20px;">
        <label style="font-size:12px;font-weight:700;color:#374151;display:block;margin-bottom:4px;">
          Class / Section <span style="font-weight:400;color:#9ca3af;">(optional)</span>
        </label>
        <input id="welcome-section-input" type="text" placeholder="e.g. 7-A"
          style="width:100%;border:1.5px solid #c7d2fe;border-radius:10px;padding:10px 13px;font-size:14px;font-family:inherit;outline:none;box-sizing:border-box;"
          onkeydown="if(event.key==='Enter')submitStudentWelcome()" />
      </div>
      <div id="welcome-error" style="display:none;background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:8px 12px;color:#b91c1c;font-size:13px;margin-bottom:12px;text-align:left;">
        ⚠️ Please enter your name to continue.
      </div>
      <button onclick="submitStudentWelcome()"
        style="width:100%;background:linear-gradient(135deg,var(--clr-primary),var(--clr-secondary));color:#fff;border:none;border-radius:12px;padding:13px;font-size:16px;font-weight:800;cursor:pointer;font-family:inherit;">
        Let's Go! 🚀
      </button>
    </div>`;
  document.body.appendChild(overlay);

  // Auto-focus name input
  setTimeout(() => document.getElementById('welcome-name-input')?.focus(), 100);
}

function submitStudentWelcome() {
  const nameEl    = document.getElementById('welcome-name-input');
  const sectionEl = document.getElementById('welcome-section-input');
  const errEl     = document.getElementById('welcome-error');
  const name      = nameEl?.value?.trim() || '';
  const section   = sectionEl?.value?.trim() || '';

  // Name is mandatory — shake input and show error, do not close modal
  if (!name) {
    if (errEl) errEl.style.display = 'block';
    if (nameEl) {
      nameEl.style.borderColor = '#ef4444';
      nameEl.style.animation = 'shake 0.35s ease';
      nameEl.focus();
      setTimeout(() => { nameEl.style.animation = ''; }, 400);
    }
    return; // block — user cannot proceed
  }

  // Hide error if previously shown
  if (errEl) errEl.style.display = 'none';

  // Save to localStorage so it persists across sessions on this device
  localStorage.setItem(STUDENT_NAME_KEY, name);
  localStorage.setItem('studyBuddy_studentSection', section);

  // Pre-fill sessionStorage for exam modals
  if (typeof setStudentInfo === 'function') {
    setStudentInfo({ name, section });
  }

  document.getElementById('student-welcome-modal')?.remove();
  showToast(`Welcome, ${name}! 👋`);
}

window.submitStudentWelcome = submitStudentWelcome;

function init() {
  assignDefaultIds();
  if (typeof applyTranslations === 'function') applyTranslations();
  if (typeof initSupabase === 'function') initSupabase();
  if (typeof renderAdminCards === 'function') renderAdminCards(); // runs immediately — shows test card for ?dev=1
  updateClassUI();
  updateNavScore();
  updateHomeStats();
  const subjects = getAllSubjects();
  selectedSubject = subjects[0] || 'Math';
  renderClassDropdown();
  highlightLangBtn();
  showLandingModal();
}

function highlightLangBtn() {
  ['en','hi','gu'].forEach(l => {
    const btn = document.getElementById('lang-' + l);
    if (btn) btn.classList.toggle('lang-btn-active', l === currentLang);
  });
}

// Wrapper: shows student name modal then starts exam
function startExamWithModal(type) {
  if (typeof showStudentNameModal === 'function') {
    showStudentNameModal(() => startExam(type));
  } else {
    startExam(type);
  }
}

window.addEventListener('DOMContentLoaded', init);
