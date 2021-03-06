'use strict';

// crude Arcana enum
var Fool = 0,
	Magician =1,
	Priestess =2,
	Empress =3,
	Emperor =4,
	Hierophant =5,
	Lovers =6,
	Chariot =7,
	Justice =8,
	Hermit =9,
	Fortune =10,
	Strength =11,
	HangedMan =12,
	Death =13,
	Temperance =14,
	Devil =15,
	Tower =16,
	Star =17,
	Moon =18,
	Sun =19,
	Judgement =20,
	Jester =21,
	Aeon =22,
	World = 23;

var NumArcana = World + 1;

function InitializeSpread() {
	var result = new Array(NumArcana);
	for( var i = 0; i < NumArcana; ++i ) {
		result[i] = new Array(NumArcana);
	}
	return result;
}

function GetResult( spread, first, second ) {
	var result = spread[first][second];
	// do commutative search if we came up short
	if( result === undefined || result === null )
		result = spread[second][first];
	return result;
}

var NormalSpread = InitializeSpread();
var TriangleSpread = InitializeSpread();


function AddSpread( spread, first, second, result, commutative ) {
	spread[first][second] = result;
	if( commutative ) {
		spread[second][first] = result;
	}
}

function AddNormalSpread( first, second, result ) {
	AddSpread(NormalSpread, first, second, result, false);
}

function AddTriangleSpread( first, second, result ) {
	AddSpread(TriangleSpread, first, second, result, true);
}

function AddSpreads() {
	var args = Array.prototype.slice.call(arguments);
	var spread = args.shift();
	var srcArcana = args.shift();

	AddSpread(spread, srcArcana, srcArcana, srcArcana);
	for (var i = 0; i < args.length; i+=2) {
		AddSpread(spread, srcArcana, args[i], args[i+1]);
	};

}

function AddNormalSpreads() {
	var args = Array.prototype.slice.call(arguments);
	args.unshift(NormalSpread);
	AddSpreads.apply(null,args);
}

function AddTriangleSpreads() {
	var args = Array.prototype.slice.call(arguments);
	args.unshift(TriangleSpread);
	AddSpreads.apply(null,args);
}

AddNormalSpreads( Fool,
	Magician, Temperance,
	Priestess, Death,
	Empress, Moon,
	Emperor, Death,
	Hierophant, Chariot,
	Lovers, Empress,
	Chariot, Sun,
	Justice, Magician,
	Hermit, Strength,
	Fortune, Magician,
	Strength, Magician,
	HangedMan, Strength,
	Death, Hermit,
	Temperance, Hierophant,
	Devil, Temperance,
	Tower, Star,
	Star, Empress,
	Moon, Emperor,
	Sun, Devil,
	Judgement, HangedMan,
	Jester, Priestess,
	Aeon, Death
);

AddNormalSpreads( Magician,
	Priestess, Moon,
	Empress, Justice,
	Emperor, Strength,
	Hierophant, Devil,
	Lovers, Death,
	Chariot, Temperance,
	Justice, Strength,
	Hermit, Empress,
	Fortune, Lovers,
	Strength, Justice,
	HangedMan, Sun,
	Death, Emperor,
	Temperance, Strength,
	Devil, Sun,
	Tower, HangedMan,
	Star, null,
	Moon, Star,
	Sun, Chariot,
	Judgement, Lovers,
	Jester, Hierophant,
	Aeon, Emperor
);

AddNormalSpreads( Priestess,
	Empress, Hermit,
	Emperor, Empress,
	Hierophant, Sun,
	Lovers, Emperor,
	Chariot, Hierophant,
	Justice, Hermit,
	Hermit, Death,
	Fortune, HangedMan,
	Strength, Justice,
	HangedMan, Moon,
	Death, Magician,
	Temperance, Hierophant,
	Devil, Justice,
	Tower, Magician,
	Star, Emperor,
	Moon, Star,
	Sun, Devil,
	Judgement, Sun,
	Jester, Devil,
	Aeon, Sun
);

AddNormalSpreads( Empress,
	Emperor, Moon,
	Hierophant, Death,
	Lovers, Justice,
	Chariot, Justice,
	Justice, Magician,
	Hermit, Magician,
	Fortune, Star,
	Strength, Hierophant,
	HangedMan, Temperance,
	Death, Chariot,
	Temperance, Devil,
	Devil, Priestess,
	Tower, Hermit,
	Star, Chariot,
	Moon, Temperance,
	Sun, Priestess,
	Judgement, Priestess,
	Jester, Strength,
	Aeon, Temperance
);

AddNormalSpreads( Emperor,
	Hierophant, Empress,
	Lovers, Justice,
	Chariot, Temperance,
	Justice, Devil,
	Hermit, Priestess,
	Fortune, Lovers,
	Strength, Hermit,
	HangedMan, Empress,
	Death, Moon,
	Temperance, Sun,
	Devil, Moon,
	Tower, Star,
	Star, Death,
	Moon, Magician, 
	Sun, Chariot,
	Judgement, Lovers,
	Jester, Justice,
	Aeon, HangedMan
);

AddNormalSpreads( Hierophant,
	Lovers, Death,
	Chariot, Sun,
	Justice, Temperance,
	Hermit, Justice,
	Fortune, Priestess,
	Strength, Sun,
	HangedMan, Death,
	Death, Devil, 
	Temperance, Magician,
	Devil, Empress,
	Tower, HangedMan,
	Star, Moon,
	Moon, Empress,
	Sun, Strength,
	Judgement, Chariot,
	Jester, Magician,
	Aeon, Moon
);

AddNormalSpreads( Lovers,
	Aeon, Justice,
	Jester, Sun,
	Judgement, Strength,
	Sun, Devil,
	Moon, HangedMan,
	Star, Hermit, 
	Tower, Star,
	Devil, Hierophant,
	Temperance, Hierophant,
	Death, Star,
	HangedMan, Moon,
	Strength, Emperor,
	Fortune, Star, 
	Hermit, Magician, 
	Justice, Priestess,
	Chariot, Hierophant
);

AddNormalSpreads( Chariot,
	Justice, Temperance,
	Hermit, Justice,
	Fortune, Devil,
	Strength, Magician,
	HangedMan, Death,
	Death, Hermit,
	Temperance, Magician,
	Devil, Moon,
	Tower, HangedMan,
	Star, Hierophant,
	Moon, Sun, 
	Sun, Strength,
	Judgement, Temperance,
	Jester, Chariot,
	Aeon, Strength
);

AddNormalSpreads( Justice,
	Hermit, Strength,
	Fortune, Lovers,
	Strength, Temperance,
	HangedMan, Priestess,
	Death, Strength,
	Temperance, Hermit,
	Devil, Magician,
	Tower, Lovers,
	Star, Moon,
	Moon, Strength,
	Sun, Temperance,
	Judgement, Lovers,
	Jester, Emperor,
	Aeon, Lovers
);

AddNormalSpreads( Hermit,
	Fortune, Empress,
	Strength, Hierophant,
	HangedMan, Moon,
	Death, Sun,
	Temperance, Magician,
	Devil, Justice,
	Tower, Death,
	Star, Justice,
	Moon, Emperor,
	Sun, Temperance,
	Judgement, Star,
	Jester, Moon,
	Aeon, Magician
);

AddNormalSpreads( Fortune,
	Strength, Star,
	HangedMan, Death,
	Death, Hermit,
	Temperance, Devil,
	Devil, Emperor,
	Tower, Chariot,
	Star, Star,
	Moon, Lovers,
	Sun, Priestess,
	Judgement, HangedMan,
	Jester, Devil,
	Aeon, Priestess
);

AddNormalSpreads( Strength,
	HangedMan, Hierophant,
	Death, HangedMan,
	Temperance, Sun,
	Devil, Hermit,
	Tower, HangedMan,
	Star, Emperor,
	Moon, Justice,
	Sun, Temperance,
	Judgement, null,
	Jester, Empress,
	Aeon, Chariot
);

AddNormalSpreads( HangedMan,
	Death, Priestess,
	Temperance, Death,
	Devil, Justice,
	Tower, Hermit,
	Star, Empress,
	Moon, Priestess,
	Sun, Devil,
	Judgement, Empress,
	Jester, Priestess,
	Aeon, Death
);

AddNormalSpreads( Death,
	Temperance, Chariot,
	Devil, Star,
	Tower, Lovers,
	Star, Lovers,
	Moon, Priestess,
	Sun, Empress,
	Judgement, null,
	Jester, Temperance,
	Aeon, HangedMan
);

AddNormalSpreads( Temperance,
	Devil, Hermit,
	Tower, Star,
	Star, Hierophant,
	Moon, HangedMan,
	Sun, Hermit,
	Judgement, null,
	Jester, Death,
	Aeon, Empress
);

AddNormalSpreads( Devil,
	Tower, Emperor,
	Star, Emperor,
	Moon, Empress,
	Sun, Hierophant,
	Judgement, null,
	Jester, Chariot,
	Aeon, Magician
);

AddNormalSpreads( Tower,
	Star, HangedMan,
	Moon, Priestess,
	Sun, Chariot,
	Judgement, null,
	Jester, Hermit,
	Aeon, Emperor
);

AddNormalSpreads( Star,
	Moon, Emperor,
	Sun, Moon,
	Judgement, null,
	Jester, Empress,
	Aeon, Chariot
);	

AddNormalSpreads( Moon,
	Sun, Strength,
	Judgement, null,
	Jester, Hermit,
	Aeon, Hierophant
);	

AddNormalSpreads( Sun,
	Judgement, null,
	Jester, Lovers,
	Aeon, Priestess
);	

AddNormalSpreads( Judgement,
	Jester, Chariot,
	Aeon, HangedMan
);	

AddNormalSpreads( Jester,
	Aeon, Devil
);	

AddNormalSpreads(Aeon);

AddTriangleSpreads( Aeon,
	Fool, Jester,
	Magician, Empress,
	Priestess, Fool,
	Empress, Star,
	Emperor, Sun,
	Hierophant, Sun,
	Lovers, Judgement,
	Chariot, Justice,
	Justice, Temperance,
	Hermit, Moon,
	Fortune, Fool,
	Strength, Hermit,
	HangedMan, Jester,
	Death, Strength,
	Temperance, Judgement,
	Devil, Lovers,
	Tower, Fortune,
	Star, Tower,
	Moon, Tower,
	Sun, Hierophant,
	Judgement, Sun,
	Jester, Judgement
);

AddTriangleSpreads( Jester,
	Fool, Priestess,
	Magician, Star,
	Priestess, Moon,
	Empress, Devil,
	Emperor, Chariot,
	Hierophant, Fortune,
	Lovers, Tower,
	Chariot, Strength,
	Justice, Hermit,
	Hermit, Aeon,
	Fortune, Emperor,
	Strength, Magician,
	HangedMan, Moon,
	Death, Fortune,
	Temperance, Priestess,
	Devil, Aeon,
	Tower, Judgement,
	Star, Death,
	Moon, HangedMan,
	Sun, Lovers,
	Judgement, Death
);

AddTriangleSpreads( Judgement,
	Fool, Temperance,
	Magician, Sun,
	Priestess, Temperance,
	Empress, Star,
	Emperor, HangedMan,
	Hierophant, Fool,
	Lovers, Emperor,
	Chariot, Tower,
	Justice, Sun,
	Hermit, Temperance,
	Fortune, Fool,
	Strength, Temperance,
	HangedMan, Fool,
	Death, Strength,
	Temperance, Chariot,
	Devil, Death,
	Tower, Aeon,
	Star, Lovers,
	Moon, Hermit,
	Sun, Chariot
);

AddTriangleSpreads( Sun,
	Fool, Empress,
	Magician, Fortune,
	Priestess, Aeon,
	Empress, Lovers,
	Emperor, Devil,
	Hierophant, Magician,
	Lovers, Jester,
	Chariot, Priestess,
	Justice, Judgement,
	Hermit, Tower,
	Fortune, Chariot,
	Strength, Tower,
	HangedMan, Empress,
	Death, Empress,
	Temperance, Fortune,
	Devil, Lovers,
	Tower, Death,
	Star, Chariot,
	Moon, Death
);

AddTriangleSpreads( Moon,
	Fool, Empress,
	Magician, Sun,
	Priestess, Empress,
	Empress, Moon,
	Emperor, Strength,
	Hierophant, Aeon,
	Lovers, HangedMan,
	Chariot, Fool,
	Justice, Star,
	Hermit, Jester,
	Fortune, Strength,
	Strength, Hierophant,
	HangedMan, Magician,
	Death, HangedMan,
	Temperance, HangedMan,
	Devil, Death,
	Tower, HangedMan,
	Star, Death
);

AddTriangleSpreads( Star,
	Fool, Hermit,
	Magician, Hierophant,
	Priestess, Empress,
	Empress, Jester,
	Emperor, Sun,
	Hierophant, Lovers,
	Lovers, Hierophant,
	Chariot, Aeon,
	Justice, Sun,
	Hermit, Death,
	Fortune, Magician,
	Strength, Devil,
	HangedMan, Sun,
	Death, Fortune,
	Temperance, Hierophant,
	Devil, Fortune,
	Tower, Hermit
);

AddTriangleSpreads( Tower,
	Fool, Fortune,
	Magician, Emperor,
	Priestess, Moon,
	Empress, Judgement,
	Emperor, Priestess,
	Hierophant, Emperor,
	Lovers, Judgement,
	Chariot, Hierophant,
	Justice, Chariot,
	Hermit, Jester,
	Fortune, Magician,
	Strength, Devil,
	HangedMan, Fortune,
	Death, Justice,
	Temperance, Judgement,
	Devil, Star
);

AddTriangleSpreads( Devil,
	Fool, Lovers,
	Magician, Chariot,
	Priestess, Hermit,
	Empress, Fool,
	Emperor, Death,
	Hierophant, Moon,
	Lovers, Tower,
	Chariot, Emperor,
	Justice, Priestess,
	Hermit, Death,
	Fortune, Tower,
	Strength, Lovers,
	HangedMan, Justice,
	Death, Lovers,
	Temperance, Justice
);

AddTriangleSpreads( Temperance,
	Fool, Justice,
	Magician, Sun,
	Priestess, Lovers,
	Empress, Aeon,
	Emperor, Devil,
	Hierophant, Emperor,
	Lovers, Fortune,
	Chariot, Moon,
	Justice, Magician,
	Hermit, Devil,
	Fortune, Tower,
	Strength, Emperor,
	HangedMan, Justice,
	Death, Jester
);	

AddTriangleSpreads( Death,
	Fool, Star,
	Magician, Fool,
	Priestess, Chariot,
	Empress, Hierophant,
	Emperor, Strength,
	Hierophant, Magician,
	Lovers, HangedMan,
	Chariot, Devil,
	Justice, Devil,
	Hermit, Magician,
	Fortune, Moon,
	Strength, Empress,
	HangedMan, Devil
);	

AddTriangleSpreads( HangedMan,
	Fool, Star,
	Magician, Fortune,
	Priestess, Chariot,
	Empress, Sun,
	Emperor, Hierophant,
	Hierophant, Star,
	Lovers, Justice,
	Chariot, Devil,
	Justice, Star,
	Hermit, Strength,
	Fortune, Fool,
	Strength, Star
);

AddTriangleSpreads( Strength,
	Fool, Empress,
	Magician, Tower,
	Priestess, Empress,
	Empress, Jester,
	Emperor, Hermit,
	Hierophant, Moon,
	Lovers, Fool,
	Chariot, Aeon,
	Justice, Hermit,
	Hermit, Justice,
	Fortune, Priestess
);	

AddTriangleSpreads( Fortune,
	Fool, Judgement,
	Magician, Strength,
	Priestess, Aeon,
	Empress, Strength,
	Emperor, Priestess,
	Hierophant, HangedMan,
	Lovers, HangedMan,
	Chariot, Temperance,
	Justice, Priestess,
	Hermit, Judgement
);		

AddTriangleSpreads( Hermit,
	Fool, Strength,
	Magician, Empress,
	Priestess, Magician,
	Empress, Fool,
	Emperor, Moon,
	Hierophant, Lovers,
	Lovers, Hierophant,
	Chariot, Priestess,
	Justice, Emperor
);	

AddTriangleSpreads( Justice,
	Fool, Chariot,
	Magician, Chariot,
	Priestess, Hermit,
	Empress, Death,
	Emperor, Jester,
	Hierophant, Magician,
	Lovers, Aeon,
	Chariot, Temperance
);		

AddTriangleSpreads( Chariot,
	Fool, Lovers,
	Magician, Emperor,
	Priestess, Magician,
	Empress, Emperor,
	Emperor, Tower,
	Hierophant, Judgement,
	Lovers, Hierophant
);	

AddTriangleSpreads( Lovers,
	Fool, Devil,
	Magician, Temperance,
	Priestess, HangedMan,
	Empress, Fool,
	Emperor, Devil,
	Hierophant, HangedMan
);	

AddTriangleSpreads( Hierophant,
	Fool, Tower,
	Magician, Jester,
	Priestess, Empress,
	Empress, Priestess,
	Emperor, Chariot
);

AddTriangleSpreads( Emperor,
	Fool, Hermit,
	Magician, Death,
	Priestess, Justice,
	Empress, Fool
);

AddTriangleSpreads( Empress,
	Fool, Judgement,
	Magician, Sun,
	Priestess, Temperance
);	

AddTriangleSpreads( Priestess,
	Fool, Lovers,
	Magician, Fortune
);		

AddTriangleSpreads( Magician,
	Fool, Fortune
);			

AddTriangleSpreads(Fool);


function GetNormalResult( first, second ) {
	if( first == second )
		return null;
	
	return GetResult(NormalSpread, first, second);
}

function GetTriangleResult( first, second, third ) {
	if( first == second || second == third || first == third )
		return null;

	var firstResult = GetNormalResult(first, second);
	if( firstResult !== null && firstResult !== undefined )
		return GetResult( TriangleSpread, firstResult, third );
	return null;
}

function BackCalc(spread,target){
	var result = [];
	for (var i = 0; i < spread.length; i++) {
		var arcanaResults = spread[i];
		for (var j = 0; j < arcanaResults.length; j++) {
			if( arcanaResults[j] === target ) {
				result.push([i,j]);
			}
		};
	};
	return result;
}

function BackCalcNormal( target ) {
	return BackCalc(NormalSpread,target);
}

function BackCalcTriangle( target ) {
//	return BackCalc(TriangleSpread,target);

	var result = [];

	for (var firstArcana = 0; firstArcana < TriangleSpread.length; firstArcana++) {
		var arcanaResults = TriangleSpread[firstArcana];

		for (var secondArcana = 0; secondArcana < arcanaResults.length; secondArcana++) {
			if( arcanaResults[secondArcana] === target ) {
				var firstPredicates = BackCalcNormal( firstArcana );
				for (var i = 0; i < firstPredicates.length; i++) {
					var pair = firstPredicates[i];
					result.push( [pair[0], pair[1], secondArcana] );
				};
			}
		}
	}

	return result;
}

function ToString( arcana ) {
	if( arcana === Fool ) return "Fool";
	if( arcana === Magician ) return "Magician";
	if( arcana === Priestess ) return "Priestess";
	if( arcana === Empress ) return "Empress";
	if( arcana === Emperor ) return "Emperor";
	if( arcana === Hierophant ) return "Hierophant";
	if( arcana === Lovers ) return "Lovers";
	if( arcana === Chariot ) return "Chariot";
	if( arcana === Justice ) return "Justice";
	if( arcana === Hermit ) return "Hermit";
	if( arcana === Fortune ) return "Fortune";
	if( arcana === Strength ) return "Strength";
	if( arcana === HangedMan ) return "HangedMan";
	if( arcana === Death ) return "Death";
	if( arcana === Temperance ) return "Temperance";
	if( arcana === Devil ) return "Devil";
	if( arcana === Tower ) return "Tower";
	if( arcana === Star ) return "Star";
	if( arcana === Moon ) return "Moon";
	if( arcana === Sun ) return "Sun";
	if( arcana === Judgement ) return "Judgement";
	if( arcana === Jester ) return "Jester";
	if( arcana === Aeon ) return "Aeon";
	if( arcana === World ) return "World";
	return "[[BAD]]";
}

module.exports = {
	// poor man's enum
	Fool: Fool,
	Magician: Magician,
	Priestess: Priestess,
	Empress: Empress,
	Emperor: Emperor,
	Hierophant: Hierophant,
	Lovers: Lovers,
	Chariot: Chariot,
	Justice: Justice,
	Hermit: Hermit,
	Fortune: Fortune,
	Strength: Strength,
	HangedMan: HangedMan,
	Death: Death,
	Temperance: Temperance,
	Devil: Devil,
	Tower: Tower,
	Star: Star,
	Moon: Moon,
	Sun: Sun,
	Judgement: Judgement,
	Jester: Jester,
	Aeon: Aeon,
	World: World,

	// ordered version, for sorting!
	Ordered: [ Fool, Magician, Priestess, Empress, Emperor, Hierophant, Lovers, Chariot, Justice, Hermit, Fortune, Strength, HangedMan, Death, Temperance, Devil, Tower, Star, Moon, Sun, Judgement, Jester, Aeon, World ],

	Count: NumArcana,

	// "static" methods
	GetNormalResult: GetNormalResult,
	GetTriangleResult: GetTriangleResult,
	BackCalcNormal: BackCalcNormal,
	BackCalcTriangle: BackCalcTriangle,
	ToString: ToString
}