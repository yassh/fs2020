const PATTERN_TOELOOP = "((1|2|3|4)T(<|<<)?)"
const PATTERN_SALCHOW = "((1|2|3|4)S(<|<<)?)"
const PATTERN_LOOP = "((1|2|3|4)Lo(<|<<)?)"
const PATTERN_FLIP = "((1|2|3|4)Fe?(<|<<)?)"
const PATTERN_LUTZ = "((1|2|3|4)Lze?(<|<<)?)"
const PATTERN_AXEL = "((1|2|3|4)A(<|<<)?)"
const PATTERN_EULER = "(1Eu)"
const PATTERN_SOLO_JUMP = `(${PATTERN_TOELOOP}|${PATTERN_SALCHOW}|${PATTERN_LOOP}|${PATTERN_FLIP}|${PATTERN_LUTZ}|${PATTERN_AXEL}|${PATTERN_EULER})`
const PATTERN_JUMP_COMBINATION = `(${PATTERN_SOLO_JUMP}[+]${PATTERN_SOLO_JUMP}([+]${PATTERN_SOLO_JUMP})?)`
const PATTERN_JUMP_SEQUENCE = `(${PATTERN_SOLO_JUMP}[+]${PATTERN_SOLO_JUMP}[+]SEQ)`
const PATTERN_REPEATED_JUMP = `(${PATTERN_SOLO_JUMP}[+]REP)`
const PATTERN_JUMP = `(${PATTERN_SOLO_JUMP}|${PATTERN_JUMP_COMBINATION}|${PATTERN_JUMP_SEQUENCE}|${PATTERN_REPEATED_JUMP})`
const REGEX_JUMP = new RegExp(`^${PATTERN_JUMP}$`)

export const isJump = (abbr: string): boolean => REGEX_JUMP.test(abbr)