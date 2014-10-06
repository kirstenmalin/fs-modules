/**
 * Output a couple relationship.
 * @param {object} husband - Husband of the relationship.
 * @property {string} [husband.gender]
 * @property {string} [husband.lifeSpan]
 * @property {string} [husband.fullLifeSpan]
 * @property {string} [husband.id]
 * @property {string} [husband.birthPlace]
 *
 * @param {object} wife - Wife of the relationship.
 * @property {string} [wife.gender]
 * @property {string} [wife.lifeSpan]
 * @property {string} [wife.fullLifeSpan]
 * @property {string} [wife.id]
 * @property {string} [wife.birthPlace]
 *
 * @param {object} options - How to render the couple.
 * @property {string}  [options.iconSize=medium] - Size of the gender icon (small,medium).
 * @property {boolean} [options.hideGender=false] - Hide the gender icon.
 * @property {boolean} [options.hideLifeSpan=false] - Hide the lifespan.
 * @property {string}  [options.lifeSpan=short] - Show the short or the full lifeSpan (short,long).
 * @property {boolean} [options.hideId=false] - Hide the person id.
 * @property {boolean} [options.openPersonCard=false] - Add a link to open the person card when the name is clicked.
 * @property {boolean} [options.showBirthPlace=false] - Show the birthplace.
 *
 * @returns {DOMElement}
 *
 * @since 1.1.0
 */
fsModules.registerDirective('fsCouplePortrait', ['husband', 'wife', 'options', function(husband, wife, options) {
  var scope = fsCouplePortraitViewModel({husband: husband, wife: wife, options: options});
  // convert the angular template
  var templateStr = templateList.fsCouplePortrait;
  var template = this.parseTemplate(templateStr, scope);

  return template;
}], {restrict: 'E', replace: true});