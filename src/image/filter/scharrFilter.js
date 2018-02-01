import { SCHARR_X, SCHARR_Y } from '../../util/kernels';

import gradientFilter from './gradientFilter';

/**
 * @memberof Image
 * @instance
 * @param {object} [options]
 * @param {GradientDirection} [options.direction]
 * @param {string} [options.border='copy']
 * @param {*} [options.channels]
 * @param {number} [options.bitDepth=this.bitDepth] Specify the bitDepth of the resulting image
 * @return {Image}
 */
export default function scharrFilter(options) {
  return gradientFilter.call(this, Object.assign({}, options, {
    kernelX: SCHARR_X,
    kernelY: SCHARR_Y
  }));
}
