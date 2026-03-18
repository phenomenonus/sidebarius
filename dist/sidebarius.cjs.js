'use strict';

/**
 * Sidebarius
 * @version 1.0.1
 * @link https://github.com/phenomenonus/sidebarius
 * @author Mikhail Prugov
 * @copyright 2026
 * @license The MIT License (MIT)
 */
class Sidebarius {
    /**
     * @param container - The {@link Prop.Container|Container} element (parent) that holds the sticky element.
     * @param containerInner - The {@link Prop.ContainerInner|ContainerInner} element that will be endowed with stickiness and scrolling abilities relative to its parent (container).
     * @param spaceBottom - The space between the bottom of the {@link https://developer.mozilla.org/en-US/docs/Glossary/Viewport|viewport} and the bottom of the `visible area` or `collider`. Default is 0.
     * @param spaceTop - The space between the top of the {@link https://developer.mozilla.org/en-US/docs/Glossary/Viewport|viewport} and the top of the `visible area` or `collider`. Default is 0.
     * @param {Callback} callback - This callback is called **before** the {@link Prop.ContainerInner|ContainerInner} changes, such as resizing, scrolling, or other layout changes.
     */
    constructor(container, containerInner, spaceBottom = 0, spaceTop = 0, callback = () => { }) {
        var t = this;
        t["d" /* Prop.Container */] = container;
        t["g" /* Prop.ContainerInner */] = containerInner;
        t["o" /* Prop.ListOfRules */] = { left: '', top: '', position: '', width: '', transform: '' };
        t["x" /* Prop.PrevSpaceBottom */] = t["E" /* Prop.SpaceBottom */] = spaceBottom;
        t["y" /* Prop.PrevSpaceTop */] = t["F" /* Prop.SpaceTop */] = spaceTop;
        t["a" /* Prop.Callback */] = callback;
        t["P" /* Method.Init */]();
        t["J" /* Method.CalcDims */] = t["J" /* Method.CalcDims */].bind(t);
        t["K" /* Method.CalcScroll */] = t["K" /* Method.CalcScroll */].bind(t);
        t["U" /* Method.ResizeListener */] = t["U" /* Method.ResizeListener */].bind(t);
        t["V" /* Method.ScrollListener */] = t["V" /* Method.ScrollListener */].bind(t);
        t["D" /* Prop.ResizeObserver */] = new ResizeObserver(t["U" /* Method.ResizeListener */]);
    }
    /**
     * Start sticky scrolling behavior. Use {@link stop} method to stop sticky scrolling behavior.
     */
    start() {
        this["I" /* Method.AddListeners */](); // calls _calcDims method by default, cause is used ResizeObserver
    }
    /**
     * Stop sticky scrolling behavior. Use {@link start} method to start sticky scrolling behavior again.
     */
    stop() {
        var t = this;
        t["R" /* Method.RemoveListeners */]();
        t["P" /* Method.Init */]();
        t["S" /* Method.Render */](0 /* State.None */);
    }
    /**
     * Set the distance to the collider. It triggers re-rendering.
     *
     * @param {number} bottomSpace - The {@link Prop.SpaceBottom|SpaceBottom}.
     * @param {number} spaceTop - The {@link Prop.SpaceTop|SpaceTop}.
     */
    setSpaces(bottomSpace, spaceTop) {
        var s = this;
        s["E" /* Prop.SpaceBottom */] = bottomSpace;
        s["F" /* Prop.SpaceTop */] = spaceTop;
        s["P" /* Method.Init */]();
        s["U" /* Method.ResizeListener */]();
    }
    [("P" /* Method.Init */)]() {
        var t = this;
        t["b" /* Prop.ColliderHeight */] =
            t["c" /* Prop.ColliderTop */] =
                t["e" /* Prop.ContainerBottom */] =
                    t["f" /* Prop.ContainerHeight */] =
                        t["h" /* Prop.ContainerLeft */] =
                            t["i" /* Prop.ContainerTop */] =
                                t["j" /* Prop.ContainerWidth */] =
                                    t["k" /* Prop.Event */] =
                                        t["l" /* Prop.IsRunningRequest */] =
                                            t["p" /* Prop.MaxBottomWithTranslateY */] =
                                                t["q" /* Prop.MaxTopWithTranslateY */] =
                                                    t["r" /* Prop.MaxTranslateY */] =
                                                        t["s" /* Prop.PrevColliderTop */] =
                                                            t["t" /* Prop.PrevContainerLeft */] =
                                                                t["u" /* Prop.PrevContainerTop */] =
                                                                    t["v" /* Prop.PrevContainerWidth */] =
                                                                        t["w" /* Prop.PrevElementHeight */] =
                                                                            t["z" /* Prop.PrevState */] =
                                                                                t["A" /* Prop.PrevStrategy */] =
                                                                                    t["B" /* Prop.PrevViewportScrollX */] =
                                                                                        t["C" /* Prop.PrevViewportScrollY */] =
                                                                                            t["G" /* Prop.Strategy */] =
                                                                                                t["H" /* Prop.TranslateY */] =
                                                                                                    0;
    }
    ["U" /* Method.ResizeListener */]() {
        this["k" /* Prop.Event */] = 1 /* Event.Resize */;
        this["T" /* Method.Request */]();
    }
    ["V" /* Method.ScrollListener */]() {
        if (this["k" /* Prop.Event */] === 0 /* Event.None */)
            this["k" /* Prop.Event */] = 2 /* Event.Scroll */;
        this["T" /* Method.Request */]();
    }
    ["L" /* Method.GetCoords */](element) {
        const coords = { left: element.offsetLeft, top: element.offsetTop };
        while ((element = 'BODY' === element.tagName ? element.parentElement : element.offsetParent)) {
            coords.top += element.offsetTop;
            coords.left += element.offsetLeft;
        }
        return coords;
    }
    ["S" /* Method.Render */](state) {
        var t = this;
        let r = {};
        if (state === 1 /* State.ContainerBottom */) {
            t["H" /* Prop.TranslateY */] = t["r" /* Prop.MaxTranslateY */];
            r = {
                position: 'relative',
                transform: `translate3d(0px, ${t["H" /* Prop.TranslateY */]}px, 0px)`,
            };
        }
        else if (state === 3 /* State.ColliderBottom */) {
            t["H" /* Prop.TranslateY */] = 0;
            r = {
                top: t["b" /* Prop.ColliderHeight */] + t["F" /* Prop.SpaceTop */] - t["g" /* Prop.ContainerInner */].offsetHeight + 'px',
                left: t["h" /* Prop.ContainerLeft */] - window.scrollX + 'px',
                position: 'fixed',
                width: t["j" /* Prop.ContainerWidth */] + 'px',
            };
        }
        else if (state === 2 /* State.ColliderTop */) {
            t["H" /* Prop.TranslateY */] = 0;
            r = {
                left: t["h" /* Prop.ContainerLeft */] - window.scrollX + 'px',
                top: t["F" /* Prop.SpaceTop */] + 'px',
                position: 'fixed',
                width: t["j" /* Prop.ContainerWidth */] + 'px',
            };
        }
        else if (state === 0 /* State.None */) {
            t["H" /* Prop.TranslateY */] = 0;
        }
        else if (state === 4 /* State.TranslateY */) {
            if (t["z" /* Prop.PrevState */] === 2 /* State.ColliderTop */) {
                t["H" /* Prop.TranslateY */] = t["s" /* Prop.PrevColliderTop */] - t["i" /* Prop.ContainerTop */];
            }
            else if (t["z" /* Prop.PrevState */] === 3 /* State.ColliderBottom */) {
                t["H" /* Prop.TranslateY */] =
                    t["s" /* Prop.PrevColliderTop */] + t["b" /* Prop.ColliderHeight */] - t["i" /* Prop.ContainerTop */] - t["w" /* Prop.PrevElementHeight */];
            }
            else if (t["z" /* Prop.PrevState */] === 1 /* State.ContainerBottom */) {
                t["H" /* Prop.TranslateY */] = t["r" /* Prop.MaxTranslateY */];
            }
            r = {
                position: 'relative',
                transform: `translate3d(0px, ${t["H" /* Prop.TranslateY */]}px, 0px)`,
            };
        }
        for (const key in t["o" /* Prop.ListOfRules */]) {
            t["g" /* Prop.ContainerInner */].style[key] =
                r[key] ?? t["o" /* Prop.ListOfRules */][key];
        }
    }
    ["M" /* Method.GetDirection */]() {
        if (this["C" /* Prop.PrevViewportScrollY */] === window.scrollY)
            return 0 /* Direction.None */;
        return this["C" /* Prop.PrevViewportScrollY */] < window.scrollY ? 1 /* Direction.Down */ : 2 /* Direction.Up */;
    }
    ["N" /* Method.GetState */](direction) {
        var t = this;
        if (t["z" /* Prop.PrevState */] === 2 /* State.ColliderTop */) {
            if (t["c" /* Prop.ColliderTop */] <= t["i" /* Prop.ContainerTop */]) {
                return 0 /* State.None */;
            }
            if (t["c" /* Prop.ColliderTop */] + t["g" /* Prop.ContainerInner */].offsetHeight >= t["e" /* Prop.ContainerBottom */]) {
                return 1 /* State.ContainerBottom */;
            }
            if (t["A" /* Prop.PrevStrategy */] === 2 /* Strategy.Top */ && t["g" /* Prop.ContainerInner */].offsetHeight > t["b" /* Prop.ColliderHeight */]) {
                t["A" /* Prop.PrevStrategy */] = t["G" /* Prop.Strategy */];
                return 4 /* State.TranslateY */;
            }
            if (t["G" /* Prop.Strategy */] === 1 /* Strategy.Both */ && direction === 1 /* Direction.Down */) {
                return 4 /* State.TranslateY */;
            }
            // If the parent container block changes its position and etc.
            if (t["B" /* Prop.PrevViewportScrollX */] !== window.scrollX ||
                t["t" /* Prop.PrevContainerLeft */] !== t["h" /* Prop.ContainerLeft */] ||
                t["v" /* Prop.PrevContainerWidth */] !== t["j" /* Prop.ContainerWidth */] ||
                t["u" /* Prop.PrevContainerTop */] !== t["i" /* Prop.ContainerTop */] ||
                t["x" /* Prop.PrevSpaceBottom */] !== t["E" /* Prop.SpaceBottom */] ||
                t["y" /* Prop.PrevSpaceTop */] !== t["F" /* Prop.SpaceTop */]) {
                return 2 /* State.ColliderTop */;
            }
        }
        else if (t["z" /* Prop.PrevState */] === 3 /* State.ColliderBottom */) {
            if (t["c" /* Prop.ColliderTop */] <= t["i" /* Prop.ContainerTop */]) {
                return 0 /* State.None */;
            }
            if (t["c" /* Prop.ColliderTop */] + t["b" /* Prop.ColliderHeight */] >= t["e" /* Prop.ContainerBottom */]) {
                return 1 /* State.ContainerBottom */;
            }
            if (t["g" /* Prop.ContainerInner */].offsetHeight <= t["b" /* Prop.ColliderHeight */]) {
                return 2 /* State.ColliderTop */;
            }
            if (direction === 2 /* Direction.Up */ || t["w" /* Prop.PrevElementHeight */] !== t["g" /* Prop.ContainerInner */].offsetHeight) {
                return 4 /* State.TranslateY */;
            }
            // If the parent container block changes its position and etc.
            if (t["B" /* Prop.PrevViewportScrollX */] !== window.scrollX ||
                t["t" /* Prop.PrevContainerLeft */] !== t["h" /* Prop.ContainerLeft */] ||
                t["v" /* Prop.PrevContainerWidth */] !== t["j" /* Prop.ContainerWidth */] ||
                t["u" /* Prop.PrevContainerTop */] !== t["i" /* Prop.ContainerTop */] ||
                t["x" /* Prop.PrevSpaceBottom */] !== t["E" /* Prop.SpaceBottom */] ||
                t["y" /* Prop.PrevSpaceTop */] !== t["F" /* Prop.SpaceTop */]) {
                return 3 /* State.ColliderBottom */;
            }
        }
        else if (t["z" /* Prop.PrevState */] === 1 /* State.ContainerBottom */) {
            if (t["c" /* Prop.ColliderTop */] <= t["i" /* Prop.ContainerTop */]) {
                return 0 /* State.None */;
            }
            if (direction === 2 /* Direction.Up */ && t["c" /* Prop.ColliderTop */] <= t["q" /* Prop.MaxTopWithTranslateY */]) {
                return 2 /* State.ColliderTop */;
            }
            if (t["g" /* Prop.ContainerInner */].offsetHeight < t["e" /* Prop.ContainerBottom */] - t["c" /* Prop.ColliderTop */]) {
                return 2 /* State.ColliderTop */;
            }
            if (t["v" /* Prop.PrevContainerWidth */] !== t["j" /* Prop.ContainerWidth */] ||
                t["w" /* Prop.PrevElementHeight */] !== t["g" /* Prop.ContainerInner */].offsetHeight) {
                return 1 /* State.ContainerBottom */;
            }
        }
        else if (t["z" /* Prop.PrevState */] === 0 /* State.None */) {
            // If the page loads with the scroll position below the bottom of the container
            if (t["c" /* Prop.ColliderTop */] >= t["e" /* Prop.ContainerBottom */] ||
                (t["c" /* Prop.ColliderTop */] + t["b" /* Prop.ColliderHeight */] >= t["e" /* Prop.ContainerBottom */] && t["G" /* Prop.Strategy */] !== 2 /* Strategy.Top */)) {
                return 1 /* State.ContainerBottom */;
            }
            if (t["g" /* Prop.ContainerInner */].offsetHeight < t["b" /* Prop.ColliderHeight */] && t["c" /* Prop.ColliderTop */] >= t["i" /* Prop.ContainerTop */]) {
                return 2 /* State.ColliderTop */;
            }
            if (t["G" /* Prop.Strategy */] === 1 /* Strategy.Both */ &&
                t["c" /* Prop.ColliderTop */] + t["b" /* Prop.ColliderHeight */] >= t["p" /* Prop.MaxBottomWithTranslateY */]) {
                return 3 /* State.ColliderBottom */;
            }
        }
        else if (t["z" /* Prop.PrevState */] === 4 /* State.TranslateY */) {
            if (t["f" /* Prop.ContainerHeight */] - t["H" /* Prop.TranslateY */] < t["g" /* Prop.ContainerInner */].offsetHeight) {
                return 1 /* State.ContainerBottom */;
            }
            if (t["g" /* Prop.ContainerInner */].offsetHeight < t["b" /* Prop.ColliderHeight */] ||
                t["c" /* Prop.ColliderTop */] <= t["i" /* Prop.ContainerTop */] + t["H" /* Prop.TranslateY */]) {
                return 2 /* State.ColliderTop */;
            }
            if (t["H" /* Prop.TranslateY */] < t["r" /* Prop.MaxTranslateY */] &&
                t["c" /* Prop.ColliderTop */] + t["b" /* Prop.ColliderHeight */] > t["p" /* Prop.MaxBottomWithTranslateY */] + t["H" /* Prop.TranslateY */]) {
                return 3 /* State.ColliderBottom */;
            }
        }
        return 5 /* State.Rest */;
    }
    ["O" /* Method.GetStrategy */]() {
        var t = this;
        if (t["f" /* Prop.ContainerHeight */] <= t["g" /* Prop.ContainerInner */].offsetHeight)
            return 0 /* Strategy.None */;
        if (t["b" /* Prop.ColliderHeight */] < t["g" /* Prop.ContainerInner */].offsetHeight)
            return 1 /* Strategy.Both */;
        return 2 /* Strategy.Top */;
    }
    ["J" /* Method.CalcDims */]() {
        var t = this;
        const containerCoords = t["L" /* Method.GetCoords */](t["d" /* Prop.Container */]);
        t["h" /* Prop.ContainerLeft */] = containerCoords.left;
        t["i" /* Prop.ContainerTop */] = containerCoords.top;
        t["f" /* Prop.ContainerHeight */] = t["d" /* Prop.Container */].clientHeight;
        t["e" /* Prop.ContainerBottom */] = t["i" /* Prop.ContainerTop */] + t["f" /* Prop.ContainerHeight */];
        t["j" /* Prop.ContainerWidth */] = t["d" /* Prop.Container */].clientWidth;
        t["b" /* Prop.ColliderHeight */] = window.innerHeight - t["F" /* Prop.SpaceTop */] - t["E" /* Prop.SpaceBottom */];
        t["r" /* Prop.MaxTranslateY */] = t["d" /* Prop.Container */].clientHeight - t["g" /* Prop.ContainerInner */].offsetHeight;
        t["p" /* Prop.MaxBottomWithTranslateY */] = t["i" /* Prop.ContainerTop */] + t["g" /* Prop.ContainerInner */].offsetHeight;
        t["q" /* Prop.MaxTopWithTranslateY */] = t["i" /* Prop.ContainerTop */] + t["r" /* Prop.MaxTranslateY */];
        t["G" /* Prop.Strategy */] = t["O" /* Method.GetStrategy */]();
        if (t["G" /* Prop.Strategy */] === 0 /* Strategy.None */) {
            if (t["A" /* Prop.PrevStrategy */] !== t["G" /* Prop.Strategy */])
                t["S" /* Method.Render */](0 /* State.None */);
        }
        else {
            t["K" /* Method.CalcScroll */]();
        }
        t["v" /* Prop.PrevContainerWidth */] = t["j" /* Prop.ContainerWidth */];
        t["t" /* Prop.PrevContainerLeft */] = t["h" /* Prop.ContainerLeft */];
        t["u" /* Prop.PrevContainerTop */] = t["i" /* Prop.ContainerTop */];
        t["w" /* Prop.PrevElementHeight */] = t["g" /* Prop.ContainerInner */].offsetHeight;
        t["A" /* Prop.PrevStrategy */] = t["G" /* Prop.Strategy */];
        t["x" /* Prop.PrevSpaceBottom */] = t["E" /* Prop.SpaceBottom */];
        t["y" /* Prop.PrevSpaceTop */] = t["F" /* Prop.SpaceTop */];
    }
    ["K" /* Method.CalcScroll */]() {
        var t = this;
        if (t["G" /* Prop.Strategy */] === 0 /* Strategy.None */)
            return;
        t["c" /* Prop.ColliderTop */] = window.scrollY + t["F" /* Prop.SpaceTop */];
        const direction = t["M" /* Method.GetDirection */]();
        const state = t["N" /* Method.GetState */](direction);
        if (state !== 5 /* State.Rest */) {
            t["a" /* Prop.Callback */](state, direction, t["G" /* Prop.Strategy */]);
            t["S" /* Method.Render */](state);
            t["z" /* Prop.PrevState */] = state;
        }
        else if (t["A" /* Prop.PrevStrategy */] !== t["G" /* Prop.Strategy */]) {
            t["a" /* Prop.Callback */](state, direction, t["G" /* Prop.Strategy */]);
        }
        t["s" /* Prop.PrevColliderTop */] = t["c" /* Prop.ColliderTop */];
        t["B" /* Prop.PrevViewportScrollX */] = window.scrollX;
        t["C" /* Prop.PrevViewportScrollY */] = window.scrollY;
    }
    ["T" /* Method.Request */]() {
        var t = this;
        if (t["l" /* Prop.IsRunningRequest */] === 1)
            return;
        t["l" /* Prop.IsRunningRequest */] = 1;
        window.requestAnimationFrame(() => {
            (t["k" /* Prop.Event */] === 1 /* Event.Resize */ && t["J" /* Method.CalcDims */]()) ||
                (t["k" /* Prop.Event */] === 2 /* Event.Scroll */ && t["K" /* Method.CalcScroll */]());
            t["k" /* Prop.Event */] = 0 /* Event.None */;
            t["l" /* Prop.IsRunningRequest */] = 0;
        });
    }
    ["Q" /* Method.ObserveTreeNodesFromCurrentToBody */](containerInner) {
        while (containerInner) {
            this["D" /* Prop.ResizeObserver */].observe(containerInner);
            if (containerInner.tagName === 'BODY')
                break;
            containerInner = containerInner.parentElement;
        }
    }
    ["I" /* Method.AddListeners */]() {
        window.addEventListener('scroll', this["V" /* Method.ScrollListener */], {
            capture: false,
            passive: true,
        });
        this["Q" /* Method.ObserveTreeNodesFromCurrentToBody */](this["g" /* Prop.ContainerInner */]);
    }
    ["R" /* Method.RemoveListeners */]() {
        window.removeEventListener('scroll', this["V" /* Method.ScrollListener */], {
            capture: false,
        });
        this["D" /* Prop.ResizeObserver */].disconnect();
    }
}

module.exports = Sidebarius;
//# sourceMappingURL=sidebarius.cjs.js.map
