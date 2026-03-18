/**
 * Defines `viewport` direction.
 */
declare const enum Direction {
    None = 0,
    Down = 1,
    Up = 2
}
/**
 * Strategy.
 */
declare const enum Strategy {
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
    Top = 2
}
/**
 * @ enum {number} Position variant of target {@link Prop.ContainerInner|ContainerInner}.
 */
declare const enum State {
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
    Rest = 5
}
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
declare const enum Prop {
    /**
     *
     */
    Callback = "a",
    /**
     * Height of the {@link https://socs.binus.ac.id/2017/03/09/collision-detection-in-2d-part-2/|collider}.
     */
    ColliderHeight = "b",
    /**
     * Top coordinate of the {@link https://socs.binus.ac.id/2017/03/09/collision-detection-in-2d-part-2/|collider}.
     */
    ColliderTop = "c",
    /**
     * Parent element of {@link ContainerInner}.
     */
    Container = "d",
    /**
     * Bottom coordinate of the {@link Container}.
     */
    ContainerBottom = "e",
    /**
     * Height of the {@link Container}.
     */
    ContainerHeight = "f",
    /**
     * Target element with sticky and scroll abilities.
     */
    ContainerInner = "g",
    /**
     * Coordinate by X-axis of the {@link Container}.
     */
    ContainerLeft = "h",
    /**
     * Coordinate by Y-axis of the {@link Container}.
     */
    ContainerTop = "i",
    /**
     * Width of the {@link Container}.
     */
    ContainerWidth = "j",
    /**
     * Triggered Event.
     */
    Event = "k",
    /**
     * Indicates that a render request has already been initiated.
     * @default false
     */
    IsRunningRequest = "l",
    /**
     * List of available CSS properties. Also is used as default values for rules.
     */
    ListOfRules = "o",
    /**
     * The maximum allowable coordinate for {@link ColliderBottom} along the Y-axis in the downward {@link Direction}.
     */
    MaxBottomWithTranslateY = "p",
    /**
     * The maximum allowable coordinate for {@link ColliderTop} along the Y-axis in the upward {@link Direction}.
     */
    MaxTopWithTranslateY = "q",
    /**
     * The maximum allowed Y-axis coordinates for {@link ContainerInner} relative to the {@link Container}.
     */
    MaxTranslateY = "r",
    /**
     * Previous top coordinate of the {@link https://socs.binus.ac.id/2017/03/09/collision-detection-in-2d-part-2/|collider}.
     */
    PrevColliderTop = "s",
    /**
     * Previous coordinate by X-axis of the {@link Container}.
     */
    PrevContainerLeft = "t",
    /**
     * Previous coordinate by Y-axis of the {@link Container}.
     */
    PrevContainerTop = "u",
    /**
     * Previous width of the {@link Container}.
     */
    PrevContainerWidth = "v",
    /**
     * Previous {@link ContainerInner} height.
     */
    PrevElementHeight = "w",
    /**
     * Previous space bottom. See also {@link SpaceBottom}.
     * @default 0
     */
    PrevSpaceBottom = "x",
    /**
     * Previous space top. See also {@link SpaceTop}.
     * @default 0
     */
    PrevSpaceTop = "y",
    /**
     * Previous {@link State}.
     * @default State.None
     */
    PrevState = "z",
    /**
     * Previous strategy. See also {@link Strategy}.
     * @default Strategy.None
     */
    PrevStrategy = "A",
    /**
     * Previous coordinate by X-axis of the {@link https://developer.mozilla.org/en-US/docs/Glossary/Viewport|viewport}.
     */
    PrevViewportScrollX = "B",
    /**
     * Previous coordinate by Y-axis of the {@link https://developer.mozilla.org/en-US/docs/Glossary/Viewport|viewport}.
     */
    PrevViewportScrollY = "C",
    /**
     *  Resize observer.
     */
    ResizeObserver = "D",
    /**
     * Space bottom.
     * @default 0
     */
    SpaceBottom = "E",
    /**
     * Space top.
     * @default 0
     */
    SpaceTop = "F",
    /**
     * Current {@link Strategy}. Helps to detect {@link Prop.ContainerInner|ContainerInner} behaviour.
     * @default Strategy.None
     */
    Strategy = "G",
    /**
     * The Current Y-axis coordinates relative to the {@link Prop.Container|Container}.
     */
    TranslateY = "H"
}
/**
 * Properties
 */
declare const enum Method {
    /**
     * Add required event listeners. See {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener|addEventListener} and {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver|ResizeObserver}.
     */
    AddListeners = "I",
    /**
     * Calculate {@link https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements|dimensions}.
     */
    CalcDims = "J",
    /**
     * Calculate {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems|coordinates}.
     */
    CalcScroll = "K",
    /**
     * Get coordinates for passed element.
     */
    GetCoords = "L",
    /**
     * Get the scroll direction. `None` for horizontal scrolling or no scrolling.
     */
    GetDirection = "M",
    /**
     * Get state of {@link Prop.ContainerInner|ContainerInner}.
     */
    GetState = "N",
    /**
     * Get a {@link Prop.Strategy} that determines the further behavior of the {@link Prop.ContainerInner|ContainerInner}.
     */
    GetStrategy = "O",
    /**
     * Initialize(or reset) properties to default values.
     */
    Init = "P",
    /**
     * Observe {@link https://developer.mozilla.org/en-US/docs/Web/API/Node|nodes} from {@link Prop.ContainerInner|ContainerInner} to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/body|document body} with help the {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver|ResizeObserver}.
     */
    ObserveTreeNodesFromCurrentToBody = "Q",
    /**
     * Remove all event listeners. See {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener|removeEventListener} and {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver|ResizeObserver}.
     */
    RemoveListeners = "R",
    /**
     * Update styles in {@link Prop.ContainerInner|ContainerInner} and {@link Prop.Container|Container}.
     */
    Render = "S",
    /**
     * Helps apply DOM manipulation and synchronize processing with rendering. See {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame|requestAnimationFrame}.
     */
    Request = "T",
    /**
     * Resize listener.
     */
    ResizeListener = "U",
    /**
     * Scroll listener.
     */
    ScrollListener = "V"
}
/**
 * Sidebarius
 * @version 1.0.1
 * @link https://github.com/phenomenonus/sidebarius
 * @author Mikhail Prugov
 * @copyright 2026
 * @license The MIT License (MIT)
 */
declare class Sidebarius {
    private [Prop.Callback];
    private [Prop.ColliderHeight];
    private [Prop.ColliderTop];
    private [Prop.Container];
    private [Prop.ContainerBottom];
    private [Prop.ContainerHeight];
    private [Prop.ContainerInner];
    private [Prop.ContainerLeft];
    private [Prop.ContainerTop];
    private [Prop.ContainerWidth];
    private [Prop.Event];
    private [Prop.IsRunningRequest];
    private [Prop.ListOfRules];
    private [Prop.MaxBottomWithTranslateY];
    private [Prop.MaxTopWithTranslateY];
    private [Prop.MaxTranslateY];
    private [Prop.PrevColliderTop];
    private [Prop.PrevContainerLeft];
    private [Prop.PrevContainerTop];
    private [Prop.PrevContainerWidth];
    private [Prop.PrevElementHeight];
    private [Prop.PrevSpaceBottom];
    private [Prop.PrevSpaceTop];
    private [Prop.PrevState];
    private [Prop.PrevStrategy];
    private [Prop.PrevViewportScrollX];
    private [Prop.PrevViewportScrollY];
    private [Prop.ResizeObserver];
    private [Prop.SpaceBottom];
    private [Prop.SpaceTop];
    private [Prop.Strategy];
    private [Prop.TranslateY];
    /**
     * @param container - The {@link Prop.Container|Container} element (parent) that holds the sticky element.
     * @param containerInner - The {@link Prop.ContainerInner|ContainerInner} element that will be endowed with stickiness and scrolling abilities relative to its parent (container).
     * @param spaceBottom - The space between the bottom of the {@link https://developer.mozilla.org/en-US/docs/Glossary/Viewport|viewport} and the bottom of the `visible area` or `collider`. Default is 0.
     * @param spaceTop - The space between the top of the {@link https://developer.mozilla.org/en-US/docs/Glossary/Viewport|viewport} and the top of the `visible area` or `collider`. Default is 0.
     * @param {Callback} callback - This callback is called **before** the {@link Prop.ContainerInner|ContainerInner} changes, such as resizing, scrolling, or other layout changes.
     */
    constructor(container: HTMLElement, containerInner: HTMLElement, spaceBottom?: number, spaceTop?: number, callback?: Callback);
    /**
     * Start sticky scrolling behavior. Use {@link stop} method to stop sticky scrolling behavior.
     */
    start(): void;
    /**
     * Stop sticky scrolling behavior. Use {@link start} method to start sticky scrolling behavior again.
     */
    stop(): void;
    /**
     * Set the distance to the collider. It triggers re-rendering.
     *
     * @param {number} bottomSpace - The {@link Prop.SpaceBottom|SpaceBottom}.
     * @param {number} spaceTop - The {@link Prop.SpaceTop|SpaceTop}.
     */
    setSpaces(bottomSpace: number, spaceTop: number): void;
    private [Method.Init];
    private [Method.ResizeListener];
    private [Method.ScrollListener];
    private [Method.GetCoords];
    private [Method.Render];
    private [Method.GetDirection];
    private [Method.GetState];
    private [Method.GetStrategy];
    private [Method.CalcDims];
    private [Method.CalcScroll];
    private [Method.Request];
    private [Method.ObserveTreeNodesFromCurrentToBody];
    private [Method.AddListeners];
    private [Method.RemoveListeners];
}

export { Sidebarius as default };
