/**
 * Event invokes render
 */
const enum Event {
  /**
   * Nothing
   */
  None = 0,

  /**
   * Resize event
   */
  Resize = 1,

  /**
   * Scroll event
   */
  Scroll = 2,
}

/**
 * Defines `viewport` direction.
 */
const enum Direction {
  None = 0,
  Down = 1,
  Up = 2,
}

/**
 * The element coordinates.
 */
type TypeElementCoords = {
  left: number;
  top: number;
};

/**
 * Strategy.
 */
const enum Strategy {
  /**
   * Nothing do.
   */
  None = 0,

  /**
   * Sticky both sides by Y-axis.
   */
  Both = 1,

  /**
   * Sticky only top side.
   */
  Top = 2,
}

/**
 * @ enum {number} Position variant of target {@link Prop.ContainerInner|ContainerInner}.
 */
const enum State {
  /**
   * Default {@link Prop.ContainerInner|ContainerInner} behavior.
   */
  None = 0,

  /**
   * {@link Prop.ContainerInner|ContainerInner} affixed at the bottom of the {@link Prop.Container|Container}.
   */
  ContainerBottom = 1,

  /**
   * {@link Prop.ContainerInner|ContainerInner} fixed at the top of the window viewport area (including {@link Prop.SpaceTop|SpaceTop}).
   */
  ColliderTop = 2,

  /**
   * {@link Prop.ContainerInner|ContainerInner} fixed at the bottom of the window viewport area (including {@link Prop.SpaceBottom|SpaceBottom}).
   */
  ColliderBottom = 3,

  /**
   * The {@link Prop.ContainerInner|ContainerInner} is offset along the Y axis relative to the {@link Prop.Container|Container}.
   */
  TranslateY = 4,

  /**
   * Indicates that rendering should be skipped until the state changes.
   */
  Rest = 5,
}

type Rules = Pick<CSSStyleDeclaration, 'left' | 'top' | 'position' | 'width' | 'transform'>;

/**
 * This callback is called **before** the `ContainerInner` changes, such as resizing, scrolling, or other layout changes.
 *
 * @param {number} state - The {@link State} of {@link Prop.ContainerInner|ContainerInner}. Represents a behavior indicator of `ContainerInner` that helps determine its positioning.
 * @param {number} direction - The `viewport` {@link Direction}. Defines the direction of movement of the viewport.
 * @param {number} strategy - The {@link Strategy} that determines the positioning behaviour, based on the sizes of both `Container` and `ContainerInner`.
 */
type Callback = (state: State, direction: Direction, strategy: Strategy) => void;

/**
 * Properties
 */
const enum Prop {
  /**
   *
   */
  Callback = 'a',

  /**
   * Height of the {@link https://socs.binus.ac.id/2017/03/09/collision-detection-in-2d-part-2/|collider}.
   */
  ColliderHeight = 'b',

  /**
   * Top coordinate of the {@link https://socs.binus.ac.id/2017/03/09/collision-detection-in-2d-part-2/|collider}.
   */
  ColliderTop = 'c',

  /**
   * Parent element of {@link ContainerInner}.
   */
  Container = 'd',

  /**
   * Bottom coordinate of the {@link Container}.
   */
  ContainerBottom = 'e',

  /**
   * Height of the {@link Container}.
   */
  ContainerHeight = 'f',

  /**
   * Target element with sticky and scroll abilities.
   */
  ContainerInner = 'g',

  /**
   * Coordinate by X-axis of the {@link Container}.
   */
  ContainerLeft = 'h',

  /**
   * Coordinate by Y-axis of the {@link Container}.
   */
  ContainerTop = 'i',

  /**
   * Width of the {@link Container}.
   */
  ContainerWidth = 'j',

  /**
   * Triggered Event.
   */
  Event = 'k',

  /**
   * Indicates that a render request has already been initiated.
   * @default false
   */
  IsRunningRequest = 'l',

  /**
   * List of available CSS properties. Also is used as default values for rules.
   */
  ListOfRules = 'o',

  /**
   * The maximum allowable coordinate for {@link ColliderBottom} along the Y-axis in the downward {@link Direction}.
   */
  MaxBottomWithTranslateY = 'p',

  /**
   * The maximum allowable coordinate for {@link ColliderTop} along the Y-axis in the upward {@link Direction}.
   */
  MaxTopWithTranslateY = 'q',

  /**
   * The maximum allowed Y-axis coordinates for {@link ContainerInner} relative to the {@link Container}.
   */
  MaxTranslateY = 'r',

  /**
   * Previous top coordinate of the {@link https://socs.binus.ac.id/2017/03/09/collision-detection-in-2d-part-2/|collider}.
   */
  PrevColliderTop = 's',

  /**
   * Previous coordinate by X-axis of the {@link Container}.
   */
  PrevContainerLeft = 't',

  /**
   * Previous coordinate by Y-axis of the {@link Container}.
   */
  PrevContainerTop = 'u',

  /**
   * Previous width of the {@link Container}.
   */
  PrevContainerWidth = 'v',

  /**
   * Previous {@link ContainerInner} height.
   */
  PrevElementHeight = 'w',

  /**
   * Previous space bottom. See also {@link SpaceBottom}.
   * @default 0
   */
  PrevSpaceBottom = 'x',

  /**
   * Previous space top. See also {@link SpaceTop}.
   * @default 0
   */
  PrevSpaceTop = 'y',

  /**
   * Previous {@link State}.
   * @default State.None
   */
  PrevState = 'z',

  /**
   * Previous strategy. See also {@link Strategy}.
   * @default Strategy.None
   */
  PrevStrategy = 'A',

  /**
   * Previous coordinate by X-axis of the {@link https://developer.mozilla.org/en-US/docs/Glossary/Viewport|viewport}.
   */
  PrevViewportScrollX = 'B',

  /**
   * Previous coordinate by Y-axis of the {@link https://developer.mozilla.org/en-US/docs/Glossary/Viewport|viewport}.
   */
  PrevViewportScrollY = 'C',

  /**
   *  Resize observer.
   */
  ResizeObserver = 'D',

  /**
   * Space bottom.
   * @default 0
   */
  SpaceBottom = 'E',

  /**
   * Space top.
   * @default 0
   */
  SpaceTop = 'F',

  /**
   * Current {@link Strategy}. Helps to detect {@link Prop.ContainerInner|ContainerInner} behaviour.
   * @default Strategy.None
   */
  Strategy = 'G',

  /**
   * The Current Y-axis coordinates relative to the {@link Prop.Container|Container}.
   */
  TranslateY = 'H',
}

/**
 * Properties
 */
const enum Method {
  /**
   * Add required event listeners. See {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener|addEventListener} and {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver|ResizeObserver}.
   */
  AddListeners = 'I',

  /**
   * Calculate {@link https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements|dimensions}.
   */
  CalcDims = 'J',

  /**
   * Calculate {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems|coordinates}.
   */
  CalcScroll = 'K',

  /**
   * Get coordinates for passed element.
   */
  GetCoords = 'L',

  /**
   * Get the scroll direction. `None` for horizontal scrolling or no scrolling.
   */
  GetDirection = 'M',

  /**
   * Get state of {@link Prop.ContainerInner|ContainerInner}.
   */
  GetState = 'N',

  /**
   * Get a {@link Prop.Strategy} that determines the further behavior of the {@link Prop.ContainerInner|ContainerInner}.
   */
  GetStrategy = 'O',

  /**
   * Initialize(or reset) properties to default values.
   */
  Init = 'P',

  /**
   * Observe {@link https://developer.mozilla.org/en-US/docs/Web/API/Node|nodes} from {@link Prop.ContainerInner|ContainerInner} to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/body|document body} with help the {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver|ResizeObserver}.
   */
  ObserveTreeNodesFromCurrentToBody = 'Q',

  /**
   * Remove all event listeners. See {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener|removeEventListener} and {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver|ResizeObserver}.
   */
  RemoveListeners = 'R',

  /**
   * Update styles in {@link Prop.ContainerInner|ContainerInner} and {@link Prop.Container|Container}.
   */
  Render = 'S',

  /**
   * Helps apply DOM manipulation and synchronize processing with rendering. See {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame|requestAnimationFrame}.
   */
  Request = 'T',

  /**
   * Resize listener.
   */
  ResizeListener = 'U',

  /**
   * Scroll listener.
   */
  ScrollListener = 'V',
}

/**
 * Sidebarius
 * @version 1.0.2
 * @link https://github.com/phenomenonus/sidebarius
 * @author Mikhail Prugov
 * @copyright 2026
 * @license The MIT License (MIT)
 */
export default class Sidebarius {
  private [Prop.Callback]!: Callback;
  private [Prop.ColliderHeight]!: number;
  private [Prop.ColliderTop]!: number;
  private [Prop.Container]!: HTMLElement;
  private [Prop.ContainerBottom]!: number;
  private [Prop.ContainerHeight]!: number;
  private [Prop.ContainerInner]!: HTMLElement;
  private [Prop.ContainerLeft]!: number;
  private [Prop.ContainerTop]!: number;
  private [Prop.ContainerWidth]!: number;
  private [Prop.Event]!: Event;
  private [Prop.IsRunningRequest]!: number;
  private [Prop.ListOfRules]!: Rules;
  private [Prop.MaxBottomWithTranslateY]!: number;
  private [Prop.MaxTopWithTranslateY]!: number;
  private [Prop.MaxTranslateY]!: number;
  private [Prop.PrevColliderTop]!: number;
  private [Prop.PrevContainerLeft]!: number;
  private [Prop.PrevContainerTop]!: number;
  private [Prop.PrevContainerWidth]!: number;
  private [Prop.PrevElementHeight]!: number;
  private [Prop.PrevSpaceBottom]!: number;
  private [Prop.PrevSpaceTop]!: number;
  private [Prop.PrevState]!: State;
  private [Prop.PrevStrategy]!: Strategy;
  private [Prop.PrevViewportScrollX]!: number;
  private [Prop.PrevViewportScrollY]!: number;
  private [Prop.ResizeObserver]!: ResizeObserver;
  private [Prop.SpaceBottom]!: number;
  private [Prop.SpaceTop]!: number;
  private [Prop.Strategy]!: Strategy;
  private [Prop.TranslateY]!: number;

  /**
   * @param container - The {@link Prop.Container|Container} element (parent) that holds the sticky element.
   * @param containerInner - The {@link Prop.ContainerInner|ContainerInner} element that will be endowed with stickiness and scrolling abilities relative to its parent (container).
   * @param spaceBottom - The space between the bottom of the {@link https://developer.mozilla.org/en-US/docs/Glossary/Viewport|viewport} and the bottom of the `visible area` or `collider`. Default is 0.
   * @param spaceTop - The space between the top of the {@link https://developer.mozilla.org/en-US/docs/Glossary/Viewport|viewport} and the top of the `visible area` or `collider`. Default is 0.
   * @param {Callback} callback - This callback is called **before** the {@link Prop.ContainerInner|ContainerInner} changes, such as resizing, scrolling, or other layout changes.
   */
  constructor(
    container: HTMLElement,
    containerInner: HTMLElement,
    spaceBottom: number = 0,
    spaceTop: number = 0,
    callback: Callback = () => {},
  ) {
    var t = this;

    t[Prop.Container] = container;
    t[Prop.ContainerInner] = containerInner;
    t[Prop.ListOfRules] = { left: '', top: '', position: '', width: '', transform: '' };
    t[Prop.PrevSpaceBottom] = t[Prop.SpaceBottom] = spaceBottom;
    t[Prop.PrevSpaceTop] = t[Prop.SpaceTop] = spaceTop;
    t[Prop.Callback] = callback;

    t[Method.Init]();
    t[Method.CalcDims] = t[Method.CalcDims].bind(t);
    t[Method.CalcScroll] = t[Method.CalcScroll].bind(t);
    t[Method.ResizeListener] = t[Method.ResizeListener].bind(t);
    t[Method.ScrollListener] = t[Method.ScrollListener].bind(t);
    t[Prop.ResizeObserver] = new ResizeObserver(t[Method.ResizeListener]);
  }

  /**
   * Start sticky scrolling behavior. Use {@link stop} method to stop sticky scrolling behavior.
   */
  public start(): void {
    this[Method.AddListeners](); // calls _calcDims method by default, cause is used ResizeObserver
  }

  /**
   * Stop sticky scrolling behavior. Use {@link start} method to start sticky scrolling behavior again.
   */
  public stop(): void {
    var t = this;
    t[Method.RemoveListeners]();
    t[Method.Init]();
    t[Method.Render](State.None);
  }

  /**
   * Set the distance to the collider. It triggers re-rendering.
   *
   * @param {number} bottomSpace - The {@link Prop.SpaceBottom|SpaceBottom}.
   * @param {number} spaceTop - The {@link Prop.SpaceTop|SpaceTop}.
   */
  public setSpaces(bottomSpace: number, spaceTop: number): void {
    var s = this;
    s[Prop.SpaceBottom] = bottomSpace;
    s[Prop.SpaceTop] = spaceTop;
    s[Method.Init]();
    s[Method.ResizeListener]();
  }

  private [Method.Init](): void {
    var t = this;
    t[Prop.ColliderHeight] =
      t[Prop.ColliderTop] =
      t[Prop.ContainerBottom] =
      t[Prop.ContainerHeight] =
      t[Prop.ContainerLeft] =
      t[Prop.ContainerTop] =
      t[Prop.ContainerWidth] =
      t[Prop.Event] =
      t[Prop.IsRunningRequest] =
      t[Prop.MaxBottomWithTranslateY] =
      t[Prop.MaxTopWithTranslateY] =
      t[Prop.MaxTranslateY] =
      t[Prop.PrevColliderTop] =
      t[Prop.PrevContainerLeft] =
      t[Prop.PrevContainerTop] =
      t[Prop.PrevContainerWidth] =
      t[Prop.PrevElementHeight] =
      t[Prop.PrevState] =
      t[Prop.PrevStrategy] =
      t[Prop.PrevViewportScrollX] =
      t[Prop.PrevViewportScrollY] =
      t[Prop.Strategy] =
      t[Prop.TranslateY] =
        0;
  }

  private [Method.ResizeListener](): void {
    this[Prop.Event] = Event.Resize;
    this[Method.Request]();
  }

  private [Method.ScrollListener](): void {
    if (this[Prop.Event] === Event.None) this[Prop.Event] = Event.Scroll;
    this[Method.Request]();
  }

  private [Method.GetCoords](element: HTMLElement): TypeElementCoords {
    const coords = { left: element.offsetLeft, top: element.offsetTop };
    let i = 0;
    while (((element as unknown) = 'BODY' === element.tagName ? element.parentElement : element.offsetParent)) {
      coords.top += element.offsetTop;
      coords.left += element.offsetLeft;
      i++;
    }
    return coords;
  }

  private [Method.Render](state: State): void {
    var t = this;
    let r: Partial<Rules> = {};

    if (state === State.ContainerBottom) {
      t[Prop.TranslateY] = t[Prop.MaxTranslateY];
      r = {
        position: 'relative',
        transform: `translate3d(0px, ${t[Prop.TranslateY]}px, 0px)`,
      };
    } else if (state === State.ColliderBottom) {
      t[Prop.TranslateY] = 0;
      r = {
        top: t[Prop.ColliderHeight] + t[Prop.SpaceTop] - t[Prop.ContainerInner].offsetHeight + 'px',
        left: t[Prop.ContainerLeft] - window.scrollX + 'px',
        position: 'fixed',
        width: t[Prop.ContainerWidth] + 'px',
      };
    } else if (state === State.ColliderTop) {
      t[Prop.TranslateY] = 0;
      r = {
        left: t[Prop.ContainerLeft] - window.scrollX + 'px',
        top: t[Prop.SpaceTop] + 'px',
        position: 'fixed',
        width: t[Prop.ContainerWidth] + 'px',
      };
    } else if (state === State.None) {
      t[Prop.TranslateY] = 0;
    } else if (state === State.TranslateY) {
      if (t[Prop.PrevState] === State.ColliderTop) {
        t[Prop.TranslateY] = t[Prop.PrevColliderTop] - t[Prop.ContainerTop];
      } else if (t[Prop.PrevState] === State.ColliderBottom) {
        t[Prop.TranslateY] =
          t[Prop.PrevColliderTop] + t[Prop.ColliderHeight] - t[Prop.ContainerTop] - t[Prop.PrevElementHeight];
      } else if (t[Prop.PrevState] === State.ContainerBottom) {
        t[Prop.TranslateY] = t[Prop.MaxTranslateY];
      }
      r = {
        position: 'relative',
        transform: `translate3d(0px, ${t[Prop.TranslateY]}px, 0px)`,
      };
    }

    for (const key in t[Prop.ListOfRules]) {
      t[Prop.ContainerInner].style[key as keyof Rules] =
        r[key as unknown as keyof Rules] ?? t[Prop.ListOfRules][key as unknown as keyof Rules];
    }
  }

  private [Method.GetDirection](): Direction {
    if (this[Prop.PrevViewportScrollY] === window.scrollY) return Direction.None;
    return this[Prop.PrevViewportScrollY] < window.scrollY ? Direction.Down : Direction.Up;
  }

  private [Method.GetState](direction: Direction): State {
    var t = this;

    if (t[Prop.PrevState] === State.ColliderTop) {
      if (t[Prop.ColliderTop] <= t[Prop.ContainerTop]) {
        return State.None;
      }
      if (t[Prop.ColliderTop] + t[Prop.ContainerInner].offsetHeight >= t[Prop.ContainerBottom]) {
        return State.ContainerBottom;
      }
      if (t[Prop.PrevStrategy] === Strategy.Top && t[Prop.ContainerInner].offsetHeight > t[Prop.ColliderHeight]) {
        t[Prop.PrevStrategy] = t[Prop.Strategy];
        return State.TranslateY;
      }
      if (t[Prop.Strategy] === Strategy.Both && direction === Direction.Down) {
        return State.TranslateY;
      }
      // If the parent container block changes its position and etc.
      if (
        t[Prop.PrevViewportScrollX] !== window.scrollX ||
        t[Prop.PrevContainerLeft] !== t[Prop.ContainerLeft] ||
        t[Prop.PrevContainerWidth] !== t[Prop.ContainerWidth] ||
        t[Prop.PrevContainerTop] !== t[Prop.ContainerTop] ||
        t[Prop.PrevSpaceBottom] !== t[Prop.SpaceBottom] ||
        t[Prop.PrevSpaceTop] !== t[Prop.SpaceTop]
      ) {
        return State.ColliderTop;
      }
    } else if (t[Prop.PrevState] === State.ColliderBottom) {
      if (t[Prop.ColliderTop] <= t[Prop.ContainerTop]) {
        return State.None;
      }
      if (t[Prop.ColliderTop] + t[Prop.ColliderHeight] >= t[Prop.ContainerBottom]) {
        return State.ContainerBottom;
      }
      if (t[Prop.ContainerInner].offsetHeight <= t[Prop.ColliderHeight]) {
        return State.ColliderTop;
      }
      if (direction === Direction.Up || t[Prop.PrevElementHeight] !== t[Prop.ContainerInner].offsetHeight) {
        return State.TranslateY;
      }
      // If the parent container block changes its position and etc.
      if (
        t[Prop.PrevViewportScrollX] !== window.scrollX ||
        t[Prop.PrevContainerLeft] !== t[Prop.ContainerLeft] ||
        t[Prop.PrevContainerWidth] !== t[Prop.ContainerWidth] ||
        t[Prop.PrevContainerTop] !== t[Prop.ContainerTop] ||
        t[Prop.PrevSpaceBottom] !== t[Prop.SpaceBottom] ||
        t[Prop.PrevSpaceTop] !== t[Prop.SpaceTop]
      ) {
        return State.ColliderBottom;
      }
    } else if (t[Prop.PrevState] === State.ContainerBottom) {
      if (t[Prop.ColliderTop] <= t[Prop.ContainerTop]) {
        return State.None;
      }
      if (direction === Direction.Up && t[Prop.ColliderTop] <= t[Prop.MaxTopWithTranslateY]) {
        return State.ColliderTop;
      }
      if (t[Prop.ContainerInner].offsetHeight < t[Prop.ContainerBottom] - t[Prop.ColliderTop]) {
        return State.ColliderTop;
      }
      if (
        t[Prop.PrevContainerWidth] !== t[Prop.ContainerWidth] ||
        t[Prop.PrevElementHeight] !== t[Prop.ContainerInner].offsetHeight
      ) {
        return State.ContainerBottom;
      }
    } else if (t[Prop.PrevState] === State.None) {
      // If the page loads with the scroll position below the bottom of the container
      if (
        t[Prop.ColliderTop] >= t[Prop.ContainerBottom] ||
        (t[Prop.ColliderTop] + t[Prop.ColliderHeight] >= t[Prop.ContainerBottom] && t[Prop.Strategy] !== Strategy.Top)
      ) {
        return State.ContainerBottom;
      }
      if (t[Prop.ContainerInner].offsetHeight < t[Prop.ColliderHeight] && t[Prop.ColliderTop] >= t[Prop.ContainerTop]) {
        return State.ColliderTop;
      }
      if (
        t[Prop.Strategy] === Strategy.Both &&
        t[Prop.ColliderTop] + t[Prop.ColliderHeight] >= t[Prop.MaxBottomWithTranslateY]
      ) {
        return State.ColliderBottom;
      }
    } else if (t[Prop.PrevState] === State.TranslateY) {
      if (t[Prop.ContainerHeight] - t[Prop.TranslateY] < t[Prop.ContainerInner].offsetHeight) {
        return State.ContainerBottom;
      }
      if (
        t[Prop.ContainerInner].offsetHeight < t[Prop.ColliderHeight] ||
        t[Prop.ColliderTop] <= t[Prop.ContainerTop] + t[Prop.TranslateY]
      ) {
        return State.ColliderTop;
      }
      if (
        t[Prop.TranslateY] < t[Prop.MaxTranslateY] &&
        t[Prop.ColliderTop] + t[Prop.ColliderHeight] > t[Prop.MaxBottomWithTranslateY] + t[Prop.TranslateY]
      ) {
        return State.ColliderBottom;
      }
    }

    return State.Rest;
  }

  private [Method.GetStrategy](): Strategy {
    var t = this;
    if (t[Prop.ContainerHeight] <= t[Prop.ContainerInner].offsetHeight) return Strategy.None;
    if (t[Prop.ColliderHeight] < t[Prop.ContainerInner].offsetHeight) return Strategy.Both;
    return Strategy.Top;
  }

  private [Method.CalcDims](): void {
    var t = this;
    const containerCoords = t[Method.GetCoords](t[Prop.Container]);
    t[Prop.ContainerLeft] = containerCoords.left;
    t[Prop.ContainerTop] = containerCoords.top;
    t[Prop.ContainerHeight] = t[Prop.Container].clientHeight;
    t[Prop.ContainerBottom] = t[Prop.ContainerTop] + t[Prop.ContainerHeight];
    t[Prop.ContainerWidth] = t[Prop.Container].clientWidth;
    t[Prop.ColliderHeight] = window.innerHeight - t[Prop.SpaceTop] - t[Prop.SpaceBottom];
    t[Prop.MaxTranslateY] = t[Prop.Container].clientHeight - t[Prop.ContainerInner].offsetHeight;
    t[Prop.MaxBottomWithTranslateY] = t[Prop.ContainerTop] + t[Prop.ContainerInner].offsetHeight;
    t[Prop.MaxTopWithTranslateY] = t[Prop.ContainerTop] + t[Prop.MaxTranslateY];

    t[Prop.Strategy] = t[Method.GetStrategy]();

    if (t[Prop.Strategy] === Strategy.None) {
      if (t[Prop.PrevStrategy] !== t[Prop.Strategy]) t[Method.Render](State.None);
    } else {
      t[Method.CalcScroll]();
    }

    t[Prop.PrevContainerWidth] = t[Prop.ContainerWidth];
    t[Prop.PrevContainerLeft] = t[Prop.ContainerLeft];
    t[Prop.PrevContainerTop] = t[Prop.ContainerTop];
    t[Prop.PrevElementHeight] = t[Prop.ContainerInner].offsetHeight;
    t[Prop.PrevStrategy] = t[Prop.Strategy];
    t[Prop.PrevSpaceBottom] = t[Prop.SpaceBottom];
    t[Prop.PrevSpaceTop] = t[Prop.SpaceTop];
  }

  private [Method.CalcScroll](): void {
    var t = this;
    if (t[Prop.Strategy] === Strategy.None) return;

    t[Prop.ColliderTop] = window.scrollY + t[Prop.SpaceTop];

    const direction = t[Method.GetDirection]();
    const state = t[Method.GetState](direction);

    if (state !== State.Rest) {
      t[Prop.Callback](state, direction, t[Prop.Strategy]);
      t[Method.Render](state);
      t[Prop.PrevState] = state;
    } else if (t[Prop.PrevStrategy] !== t[Prop.Strategy]) {
      t[Prop.Callback](state, direction, t[Prop.Strategy]);
    }

    t[Prop.PrevColliderTop] = t[Prop.ColliderTop];
    t[Prop.PrevViewportScrollX] = window.scrollX;
    t[Prop.PrevViewportScrollY] = window.scrollY;
  }

  private [Method.Request](): void {
    var t = this;
    if (t[Prop.IsRunningRequest] === 1) return;
    t[Prop.IsRunningRequest] = 1;
    window.requestAnimationFrame(() => {
      (t[Prop.Event] === Event.Resize && t[Method.CalcDims]()) ||
        (t[Prop.Event] === Event.Scroll && t[Method.CalcScroll]());
      t[Prop.Event] = Event.None;
      t[Prop.IsRunningRequest] = 0;
    });
  }

  private [Method.ObserveTreeNodesFromCurrentToBody](containerInner: HTMLElement): void {
    while (containerInner) {
      this[Prop.ResizeObserver].observe(containerInner);
      if (containerInner.tagName === 'BODY') break;
      (containerInner as unknown) = containerInner.parentElement;
    }
  }

  private [Method.AddListeners](): void {
    window.addEventListener('scroll', this[Method.ScrollListener], {
      capture: false,
      passive: true,
    });
    this[Method.ObserveTreeNodesFromCurrentToBody](this[Prop.ContainerInner]);
  }

  private [Method.RemoveListeners](): void {
    window.removeEventListener('scroll', this[Method.ScrollListener], {
      capture: false,
    });
    this[Prop.ResizeObserver].disconnect();
  }
}
