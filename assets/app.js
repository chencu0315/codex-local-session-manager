const THEME_STORAGE_KEY = "codex-session-console-theme";
const LOCALE_STORAGE_KEY = "codex-session-console-locale";
const COMMENTARY_VISIBILITY_STORAGE_KEY = "codex-session-console-show-commentary";
const TOP_PANELS_COLLAPSED_STORAGE_KEY = "codex-session-console-top-panels-collapsed";
const TOP_PANEL_KEYS = ["status", "filter", "metrics"];
const HANDLE_DB_NAME = "codex-session-console";
const HANDLE_DB_VERSION = 1;
const HANDLE_STORE_NAME = "handles";
const ROOT_HANDLE_STORAGE_KEY = "root-directory";
const REPOSITORY_URL = "https://github.com/zhengshuyun-com/codex-local-session-manager";
const RESUME_COMMAND_RESET_DELAY = 1800;

const I18N = {
  "zh-CN": {
    meta: {
      title: "Codex 本地会话管理工具",
      heroTitle: "Codex 本地会话管理工具",
      heroDescription: "数据仅在浏览器本地处理, 不会发送到任何第三方或后端",
    },
    app: {
      codex: {
        title: "Codex 本地会话管理工具",
        heroDescription: "数据仅在浏览器本地处理, 不会发送到任何第三方或后端",
      },
      claude: {
        title: "Claude Code 本地会话管理工具",
        heroDescription: "已识别 Claude Code 会话目录. 数据仅在浏览器本地处理, 不会发送到任何第三方或后端",
      },
    },
    support: {
      unsupported: "请使用最新版 Chrome 或 Edge.",
    },
    section: {
      status: "状态",
      filter: "筛选",
      metrics: "统计",
      list: "会话列表",
      detail: "详情",
      questions: "问题目录",
      conversation: "完整对话",
    },
    labels: {
      directory: "目录",
      scanned: "扫描",
      search: "搜索",
      searchPlaceholder: "标题 / 摘要 / ID",
      age: "时间",
      sort: "排序",
      staleOnly: "只看脏索引",
      totalSessions: "会话总数",
      filteredResults: "筛选结果",
      totalSize: "总大小",
      staleIndexes: "脏索引",
      selected: "已选中",
      pageSize: "每页显示",
      sessionId: "会话 ID",
      fileSize: "文件大小",
      updatedAt: "最后更新",
      status: "状态",
    },
    filter: {
      all: "全部",
      last7d: "近 7 天",
      last30d: "近 30 天",
      older: "30 天前",
      updatedDesc: "最近更新",
      sizeDesc: "文件大小",
      titleAsc: "标题 A-Z",
    },
    buttons: {
      repository: "查看仓库",
      pickDirectory: "选择目录",
      continuePickDirectory: "继续选择目录",
      requestPermission: "授权扫描",
      reload: "重新扫描",
      deleteSelected: "删除选中",
      deleteAll: "删除全部",
      cleanupStale: "清理脏索引",
      selectPage: "全选当前页",
      unselectPage: "取消全选",
      prevPage: "上一页",
      nextPage: "下一页",
      download: "下载",
      copyResume: "复制 resume",
      resumeCopied: "已复制",
      deleteCurrent: "删除当前",
      delete: "删除",
      cancel: "取消",
      confirmDelete: "确认删除",
      confirmCleanup: "确认清理",
      localeIndicator: "EN",
    },
    badge: {
      disconnected: "未连接",
      connected: "已连接",
      loading: "扫描中",
      error: "异常",
    },
    statusText: {
      unselectedDir: "未选择目录",
      connectedCount: "{{count}} 条会话",
      savedDirectoryNeedsPermission: "已记住 {{name}}, 点击“授权扫描”恢复访问.",
      currentSession: "当前会话",
    },
    list: {
      unscanned: "未扫描",
      noResults: "没有匹配的会话.",
      pageEmpty: "当前页没有内容.",
      zeroResults: "0 条结果",
      showing: "当前显示 {{start}}-{{end}} / {{total}} 条会话",
    },
    detail: {
      unselectedCaption: "未选择会话",
      unselectedTitle: "未选择会话",
      noContent: "暂无会话内容.",
      noQuestions: "暂无用户提问.",
      noRenderableContent: "没有可展示的会话内容.",
      loading: "加载中.",
      statusNormal: "正常",
      statusStale: "脏索引",
      showCommentary: "显示过程消息",
    },
    modal: {
      titleAll: "确认删除全部会话",
      titleSingle: "确认删除当前会话",
      titleSelected: "确认删除选中会话",
      titleCleanupStale: "确认清理脏索引",
      titleDirectoryHelp: "请选择 .codex 目录",
      subtitle: "危险操作",
      subtitleDirectoryHelp: "目录选择提示",
      summaryHead: "即将执行",
      summaryHeadDirectoryHelp: "常见路径",
      warningAll: "高风险: 该操作会移除当前目录下全部可删除的会话文件. 请先关闭 Codex, 再继续. 删除后无法恢复, 倒计时结束后才允许确认.",
      warningDelete: "高风险: 请先关闭 Codex, 再执行删除. 删除后无法恢复, 倒计时结束后才允许确认.",
      warningCleanupStale: "该操作会改写 session_index.jsonl 和 history.jsonl, 移除失效索引记录. 倒计时结束后才允许确认.",
      pathMacos: "macOS",
      pathWindows: "Windows",
      pathLinux: "Linux",
      pathMacosValue: "~/.codex",
      pathWindowsValue: "%USERPROFILE%\\\\.codex",
      pathLinuxValue: "~/.codex",
      pathClaudeMacos: "Claude · macOS",
      pathClaudeWindows: "Claude · Windows",
      pathClaudeLinux: "Claude · Linux",
      pathClaudeMacosValue: "~/.claude",
      pathClaudeWindowsValue: "%USERPROFILE%\\\\.claude",
      pathClaudeLinuxValue: "~/.claude",
      pathContains:
        "Codex: sessions/, session_index.jsonl, history.jsonl  ·  Claude Code: projects/<encoded-cwd>/<sessionId>.jsonl",
      descAll: "即将删除 {{count}} 个会话文件, 共 {{size}}.",
      descSingle: "即将删除当前会话「{{title}}」, 共 {{size}}.",
      descSelected: "即将删除 {{count}} 个已选会话, 共 {{size}}.",
      descCleanupStale: "即将清理 {{count}} 条脏索引记录, 并同步移除对应历史摘要.",
      descDirectoryHelp: "继续后会打开系统目录选择器. 选择 .codex 根目录或 .claude 根目录均可.",
      confirmCountdown: "{{seconds}}s 后可确认",
    },
    pagination: {
      summary: "{{start}}-{{end}} / {{total}}",
      summaryEmpty: "0 / 0",
      page: "第 {{current}} / {{total}} 页",
      pageEmpty: "第 0 / 0 页",
    },
    timeline: {
      user: "用户",
      assistant: "Codex",
      assistantClaude: "Claude",
      commentary: "过程消息",
      toolCall: "工具调用",
      toolOutput: "工具输出",
      historyInput: "历史输入 #{{index}}",
    },
    summary: {
      staleMissing: "索引存在, 原始会话文件不存在.",
      none: "没有摘要.",
    },
    locale: {
      switchTo: "切换到英文",
    },
    theme: {
      switchToLight: "切换到浅色模式",
      switchToDark: "切换到深色模式",
    },
    panel: {
      collapseAll: "折叠状态/筛选/统计 (Ctrl/⌘ + \\)",
      expandAll: "展开状态/筛选/统计 (Ctrl/⌘ + \\)",
    },
    errors: {
      selectCodexRoot: "请先选择 .codex 或 .claude 根目录.",
      unsupportedRoot: "未识别的目录, 请选择 .codex (含 sessions/) 或 .claude (含 projects/) 根目录.",
      unknown: "发生未知错误",
    },
  },
  en: {
    meta: {
      title: "Codex Local Session Manager",
      heroTitle: "Codex Local Session Manager",
      heroDescription: "Data is processed locally in the browser and is not sent to any third party or backend.",
    },
    app: {
      codex: {
        title: "Codex Local Session Manager",
        heroDescription: "Data is processed locally in the browser and is not sent to any third party or backend.",
      },
      claude: {
        title: "Claude Code Local Session Manager",
        heroDescription: "Detected Claude Code session directory. Data is processed locally in the browser and is not sent to any third party or backend.",
      },
    },
    support: {
      unsupported: "Please use the latest Chrome or Edge.",
    },
    section: {
      status: "Status",
      filter: "Filters",
      metrics: "Stats",
      list: "Sessions",
      detail: "Details",
      questions: "Question Outline",
      conversation: "Conversation",
    },
    labels: {
      directory: "Directory",
      scanned: "Scanned",
      search: "Search",
      searchPlaceholder: "Title / summary / ID",
      age: "Age",
      sort: "Sort",
      staleOnly: "Stale only",
      totalSessions: "Sessions",
      filteredResults: "Filtered",
      totalSize: "Size",
      staleIndexes: "Stale",
      selected: "Selected",
      pageSize: "Per page",
      sessionId: "Session ID",
      fileSize: "File size",
      updatedAt: "Updated",
      status: "Status",
    },
    filter: {
      all: "All",
      last7d: "Last 7 days",
      last30d: "Last 30 days",
      older: "Older than 30 days",
      updatedDesc: "Recently updated",
      sizeDesc: "File size",
      titleAsc: "Title A-Z",
    },
    buttons: {
      repository: "View repository",
      pickDirectory: "Pick directory",
      continuePickDirectory: "Continue to picker",
      requestPermission: "Authorize scan",
      reload: "Rescan",
      deleteSelected: "Delete selected",
      deleteAll: "Delete all",
      cleanupStale: "Clean stale",
      selectPage: "Select page",
      unselectPage: "Unselect page",
      prevPage: "Prev",
      nextPage: "Next",
      download: "Download",
      copyResume: "Copy resume",
      resumeCopied: "Copied",
      deleteCurrent: "Delete current",
      delete: "Delete",
      cancel: "Cancel",
      confirmDelete: "Confirm delete",
      confirmCleanup: "Confirm cleanup",
      localeIndicator: "中文",
    },
    badge: {
      disconnected: "Offline",
      connected: "Connected",
      loading: "Scanning",
      error: "Error",
    },
    statusText: {
      unselectedDir: "No directory selected",
      connectedCount: "{{count}} sessions",
      savedDirectoryNeedsPermission: "{{name}} is remembered. Click \"Authorize scan\" to restore access.",
      currentSession: "Current session",
    },
    list: {
      unscanned: "Not scanned",
      noResults: "No matching sessions.",
      pageEmpty: "This page is empty.",
      zeroResults: "0 results",
      showing: "Showing {{start}}-{{end}} / {{total}} sessions",
    },
    detail: {
      unselectedCaption: "No session selected",
      unselectedTitle: "No session selected",
      noContent: "No session content yet.",
      noQuestions: "No user questions yet.",
      noRenderableContent: "No conversation content available.",
      loading: "Loading.",
      statusNormal: "Normal",
      statusStale: "Stale index",
      showCommentary: "Show progress updates",
    },
    modal: {
      titleAll: "Confirm delete all sessions",
      titleSingle: "Confirm delete current session",
      titleSelected: "Confirm delete selected sessions",
      titleCleanupStale: "Confirm cleanup stale indexes",
      titleDirectoryHelp: "Select your .codex directory",
      subtitle: "Destructive action",
      subtitleDirectoryHelp: "Directory picker guide",
      summaryHead: "Pending action",
      summaryHeadDirectoryHelp: "Common paths",
      warningAll: "High risk: this will remove every deletable session file in the current directory. Close Codex before continuing. This action cannot be undone, and confirmation is locked until the countdown ends.",
      warningDelete: "High risk: close Codex before deleting. This action cannot be undone, and confirmation is locked until the countdown ends.",
      warningCleanupStale: "This will rewrite session_index.jsonl and history.jsonl to remove stale index records. Confirmation is locked until the countdown ends.",
      pathMacos: "macOS",
      pathWindows: "Windows",
      pathLinux: "Linux",
      pathMacosValue: "~/.codex",
      pathWindowsValue: "%USERPROFILE%\\\\.codex",
      pathLinuxValue: "~/.codex",
      pathClaudeMacos: "Claude · macOS",
      pathClaudeWindows: "Claude · Windows",
      pathClaudeLinux: "Claude · Linux",
      pathClaudeMacosValue: "~/.claude",
      pathClaudeWindowsValue: "%USERPROFILE%\\\\.claude",
      pathClaudeLinuxValue: "~/.claude",
      pathContains:
        "Codex: sessions/, session_index.jsonl, history.jsonl  ·  Claude Code: projects/<encoded-cwd>/<sessionId>.jsonl",
      descAll: "You are about to delete {{count}} session files, total {{size}}.",
      descSingle: "You are about to delete the current session \"{{title}}\", total {{size}}.",
      descSelected: "You are about to delete {{count}} selected sessions, total {{size}}.",
      descCleanupStale: "You are about to remove {{count}} stale index records and their history summaries.",
      descDirectoryHelp:
        "Continuing will open the system directory picker. Pick either a .codex root or a .claude root directory.",
      confirmCountdown: "{{seconds}}s to confirm",
    },
    pagination: {
      summary: "{{start}}-{{end}} / {{total}}",
      summaryEmpty: "0 / 0",
      page: "Page {{current}} / {{total}}",
      pageEmpty: "Page 0 / 0",
    },
    timeline: {
      user: "User",
      assistant: "Codex",
      assistantClaude: "Claude",
      commentary: "Progress",
      toolCall: "Tool call",
      toolOutput: "Tool output",
      historyInput: "History input #{{index}}",
    },
    summary: {
      staleMissing: "Index exists, but the source session file is missing.",
      none: "No summary.",
    },
    locale: {
      switchTo: "Switch to Chinese",
    },
    theme: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
    panel: {
      collapseAll: "Collapse status / filters / stats (Ctrl/⌘ + \\)",
      expandAll: "Expand status / filters / stats (Ctrl/⌘ + \\)",
    },
    errors: {
      selectCodexRoot: "Please select a .codex or .claude root directory.",
      unsupportedRoot: "Unrecognized directory. Please pick a .codex root (with sessions/) or a .claude root (with projects/).",
      unknown: "An unknown error occurred",
    },
  },
};

const state = {
  rootHandle: null,
  sessionsDirHandle: null,
  adapter: null,
  sessionRecords: new Map(),
  historyRecords: new Map(),
  timelineCache: new Map(),
  sessions: [],
  filteredSessions: [],
  selectedIds: new Set(),
  activeSessionId: null,
  lastScannedAt: null,
  currentPage: 1,
  pageSize: 10,
  locale: "zh-CN",
  themeMode: "light",
  showCommentary: false,
  topPanelsCollapsed: false,
  modalKind: null,
  pendingActionMode: null,
  countdownRemaining: 0,
  countdownTimer: null,
  previewRequestId: 0,
  activeHighlightTimer: null,
  rememberedRootHandle: null,
  isRestorePending: false,
  resumeButtonResetTimer: null,
};

const elements = {
  pickDirectoryButton: document.querySelector("#pick-directory-button"),
  reloadButton: document.querySelector("#reload-button"),
  deleteSelectedButton: document.querySelector("#delete-selected-button"),
  deleteAllButton: document.querySelector("#delete-all-button"),
  cleanupStaleButton: document.querySelector("#cleanup-stale-button"),
  searchInput: document.querySelector("#search-input"),
  ageFilter: document.querySelector("#age-filter"),
  sortSelect: document.querySelector("#sort-select"),
  staleOnlyCheckbox: document.querySelector("#stale-only-checkbox"),
  selectPageButton: document.querySelector("#select-page-button"),
  pageSizeSelect: document.querySelector("#page-size-select"),
  prevPageButton: document.querySelector("#prev-page-button"),
  nextPageButton: document.querySelector("#next-page-button"),
  supportHint: document.querySelector("#support-hint"),
  statusBadge: document.querySelector("#status-badge"),
  statusText: document.querySelector("#status-text"),
  statusDirectory: document.querySelector("#status-directory"),
  statusScannedAt: document.querySelector("#status-scanned-at"),
  metricTotal: queryAny(["#metric-group-total", "#metric-total"]),
  metricFiltered: queryAny(["#metric-session-total"]),
  metricSize: queryAny(["#metric-total-size", "#metric-size"]),
  metricStale: queryAny(["#metric-stale-count", "#metric-stale"]),
  metricSelected: queryAny(["#metric-selected-count", "#metric-selected"]),
  listCaption: document.querySelector("#list-caption"),
  pageIndicator: document.querySelector("#page-indicator"),
  sessionList: document.querySelector("#session-list"),
  detailCaption: document.querySelector("#detail-caption"),
  detailOverview: document.querySelector("#detail-overview"),
  detailOutlineTitle: document.querySelector("#detail-outline-title"),
  detailOutline: document.querySelector("#detail-outline"),
  detailOutlineCount: document.querySelector("#detail-outline-count"),
  detailPreviewTitle: document.querySelector("#detail-preview-title"),
  detailPreview: document.querySelector("#detail-preview"),
  detailMessageCount: document.querySelector("#detail-message-count"),
  commentaryToggle: document.querySelector("#commentary-toggle"),
  commentaryToggleLabel: document.querySelector("#commentary-toggle-label"),
  downloadCurrentButton: document.querySelector("#download-current-button"),
  copyResumeButton: document.querySelector("#copy-resume-button"),
  deleteCurrentButton: document.querySelector("#delete-current-button"),
  repoLink: document.querySelector("#repo-link"),
  template: queryAny(["#session-item-template", "#group-item-template"]),
  localeToggleButton: document.querySelector("#locale-toggle-button"),
  themeToggleButton: document.querySelector("#theme-toggle-button"),
  modal: document.querySelector("#confirm-modal"),
  modalBackdrop: document.querySelector("#modal-backdrop"),
  modalIcon: document.querySelector("#modal-icon"),
  modalTitle: document.querySelector("#modal-title"),
  modalSubtitle: document.querySelector("#modal-subtitle"),
  modalSummaryHead: document.querySelector("#modal-summary-head"),
  modalDescription: document.querySelector("#modal-description"),
  modalWarning: document.querySelector("#modal-warning"),
  modalCancelButton: document.querySelector("#modal-cancel-button"),
  modalConfirmButton: document.querySelector("#modal-confirm-button"),
};

initialize();

function initialize() {
  const isSupported = "showDirectoryPicker" in window;

  elements.pickDirectoryButton.disabled = !isSupported;
  elements.pageSizeSelect.value = String(state.pageSize);
  elements.repoLink.href = REPOSITORY_URL;

  elements.pickDirectoryButton.addEventListener("click", () => {
    if (state.isRestorePending) {
      requestRememberedDirectoryAccess().catch(handleError);
      return;
    }

    openDirectoryHelpDialog();
  });
  elements.reloadButton.addEventListener("click", () => scanSessions().catch(handleError));
  elements.deleteSelectedButton.addEventListener("click", () => openConfirmDialog("selected"));
  elements.deleteAllButton.addEventListener("click", () => openConfirmDialog("all"));
  elements.cleanupStaleButton.addEventListener("click", () => openConfirmDialog("stale"));
  elements.searchInput.addEventListener("input", handleFilterChange);
  elements.ageFilter.addEventListener("change", handleFilterChange);
  elements.sortSelect.addEventListener("change", handleFilterChange);
  elements.staleOnlyCheckbox.addEventListener("change", handleFilterChange);
  elements.selectPageButton.addEventListener("click", handleSelectCurrentPage);
  elements.pageSizeSelect.addEventListener("change", handlePageSizeChange);
  elements.prevPageButton.addEventListener("click", () => changePage(-1));
  elements.nextPageButton.addEventListener("click", () => changePage(1));
  elements.detailOutline.addEventListener("click", handleOutlineJump);
  elements.commentaryToggle.addEventListener("change", handleCommentaryToggleChange);
  elements.downloadCurrentButton.addEventListener("click", () => downloadCurrentSession().catch(handleError));
  elements.copyResumeButton.addEventListener("click", () => copyResumeCommand().catch(handleError));
  elements.deleteCurrentButton.addEventListener("click", () => openConfirmDialog("single"));
  elements.modalBackdrop.addEventListener("click", handleModalDismiss);
  elements.modalCancelButton.addEventListener("click", handleModalDismiss);
  elements.modalConfirmButton.addEventListener("click", () => handleModalConfirm().catch(handleError));
  elements.localeToggleButton.addEventListener("click", cycleLocale);
  elements.themeToggleButton.addEventListener("click", cycleTheme);

  applyLocale(getInitialLocale());
  applyTheme(getInitialThemeMode());
  applyCommentaryVisibility(getInitialCommentaryVisibility(), { rerender: false });
  initTopPanelCollapse();
  renderEmptyList(t("list.unscanned"));
  renderDetails(null);
  updateStatus();

  if (isSupported) {
    restorePersistedDirectory().catch((error) => {
      console.warn("Failed to restore previously selected directory.", error);
    });
  }
}

function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("IndexedDB request failed."));
  });
}

function transactionDone(transaction) {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onabort = () => reject(transaction.error || new Error("IndexedDB transaction aborted."));
    transaction.onerror = () => reject(transaction.error || new Error("IndexedDB transaction failed."));
  });
}

async function openHandleDatabase() {
  if (typeof indexedDB === "undefined") {
    return null;
  }

  const request = indexedDB.open(HANDLE_DB_NAME, HANDLE_DB_VERSION);
  request.onupgradeneeded = () => {
    const database = request.result;

    if (!database.objectStoreNames.contains(HANDLE_STORE_NAME)) {
      database.createObjectStore(HANDLE_STORE_NAME);
    }
  };

  return requestToPromise(request);
}

function isDirectoryHandle(handle) {
  return Boolean(handle && handle.kind === "directory" && typeof handle.getDirectoryHandle === "function");
}

async function getPersistedRootHandle() {
  const database = await openHandleDatabase();

  if (!database) {
    return null;
  }

  try {
    const transaction = database.transaction(HANDLE_STORE_NAME, "readonly");
    const request = transaction.objectStore(HANDLE_STORE_NAME).get(ROOT_HANDLE_STORAGE_KEY);
    const [handle] = await Promise.all([requestToPromise(request), transactionDone(transaction)]);
    return isDirectoryHandle(handle) ? handle : null;
  } finally {
    database.close();
  }
}

async function persistRootHandle(handle) {
  if (!isDirectoryHandle(handle)) {
    return;
  }

  const database = await openHandleDatabase();

  if (!database) {
    return;
  }

  try {
    const transaction = database.transaction(HANDLE_STORE_NAME, "readwrite");
    transaction.objectStore(HANDLE_STORE_NAME).put(handle, ROOT_HANDLE_STORAGE_KEY);
    await transactionDone(transaction);
  } finally {
    database.close();
  }
}

async function clearPersistedRootHandle() {
  const database = await openHandleDatabase();

  if (!database) {
    return;
  }

  try {
    const transaction = database.transaction(HANDLE_STORE_NAME, "readwrite");
    transaction.objectStore(HANDLE_STORE_NAME).delete(ROOT_HANDLE_STORAGE_KEY);
    await transactionDone(transaction);
  } finally {
    database.close();
  }
}

async function queryHandlePermission(handle, mode = "read") {
  if (!handle || typeof handle.queryPermission !== "function") {
    return "prompt";
  }

  try {
    return await handle.queryPermission({ mode });
  } catch {
    return "prompt";
  }
}

async function requestHandlePermission(handle, mode = "readwrite") {
  if (!handle || typeof handle.requestPermission !== "function") {
    return "prompt";
  }

  try {
    return await handle.requestPermission({ mode });
  } catch {
    return "prompt";
  }
}

async function restorePersistedDirectory() {
  const rootHandle = await getPersistedRootHandle();

  if (!rootHandle) {
    return false;
  }

  state.rememberedRootHandle = rootHandle;

  if ((await queryHandlePermission(rootHandle, "readwrite")) !== "granted") {
    state.isRestorePending = true;
    updateStatus();
    return false;
  }

  return activateRootHandle(rootHandle);
}

async function requestRememberedDirectoryAccess() {
  const rootHandle = state.rememberedRootHandle || (await getPersistedRootHandle());

  if (!rootHandle) {
    openDirectoryHelpDialog();
    return false;
  }

  state.rememberedRootHandle = rootHandle;
  const permission = await requestHandlePermission(rootHandle, "readwrite");

  if (permission !== "granted") {
    state.isRestorePending = true;
    updateStatus();
    return false;
  }

  return activateRootHandle(rootHandle);
}

async function activateRootHandle(rootHandle) {
  try {
    const adapter = await detectAdapter(rootHandle);

    if (!adapter) {
      state.rememberedRootHandle = null;
      state.isRestorePending = false;
      await clearPersistedRootHandle();
      throw new Error(t("errors.unsupportedRoot"));
    }

    state.adapter = adapter;
    state.rootHandle = rootHandle;
    state.sessionsDirHandle = adapter.kind === "codex" ? await rootHandle.getDirectoryHandle("sessions") : null;
    state.rememberedRootHandle = rootHandle;
    state.isRestorePending = false;
    elements.reloadButton.disabled = false;
    refreshAdapterDependentUi();
    await scanSessions();
    return true;
  } catch (error) {
    if (error?.name === "NotFoundError") {
      state.rememberedRootHandle = null;
      state.isRestorePending = false;
      await clearPersistedRootHandle();
      updateStatus();
      return false;
    }

    throw error;
  }
}

async function detectAdapter(rootHandle) {
  for (const adapter of [codexAdapter, claudeAdapter]) {
    try {
      if (await adapter.detect(rootHandle)) {
        return adapter;
      }
    } catch {
      // try the next adapter
    }
  }

  return null;
}

async function pickDirectoryFromSystem() {
  try {
    const rootHandle = await window.showDirectoryPicker({ mode: "readwrite" });
    state.rememberedRootHandle = rootHandle;
    try {
      await persistRootHandle(rootHandle);
    } catch (error) {
      console.warn("Failed to persist selected directory.", error);
    }

    await activateRootHandle(rootHandle);
  } catch (error) {
    if (error?.name === "AbortError") {
      return;
    }

    throw error;
  }
}

async function scanSessions() {
  ensureRootSelected();
  setLoadingState(t("badge.loading"));

  const result = await state.adapter.scan(state.rootHandle);

  state.sessionRecords = result.sessionRecords || new Map();
  state.historyRecords = result.historyRecords || new Map();
  state.timelineCache.clear();
  state.sessions = result.sessions || [];

  state.lastScannedAt = new Date();
  state.currentPage = 1;

  pruneSelection();

  if (!state.activeSessionId || !state.sessions.some((session) => session.id === state.activeSessionId)) {
    state.activeSessionId = state.sessions[0]?.id || null;
  }

  applyFilters();
}

async function readSessionIndex(rootHandle) {
  try {
    const fileHandle = await rootHandle.getFileHandle("session_index.jsonl");
    const text = await (await fileHandle.getFile()).text();
    const records = new Map();

    for (const line of splitJsonLines(text)) {
      const parsed = safeJsonParse(line);

      if (!parsed?.id) {
        continue;
      }

      const previous = records.get(parsed.id);

      if (!previous || new Date(parsed.updated_at || 0) >= new Date(previous.updated_at || 0)) {
        records.set(parsed.id, parsed);
      }
    }

    return records;
  } catch (error) {
    if (error?.name === "NotFoundError") {
      return new Map();
    }

    throw error;
  }
}

async function readHistoryIndex(rootHandle) {
  try {
    const fileHandle = await rootHandle.getFileHandle("history.jsonl");
    const text = await (await fileHandle.getFile()).text();
    const records = new Map();

    for (const line of splitJsonLines(text)) {
      const parsed = safeJsonParse(line);
      const cleanedText = sanitizeConversationBody(parsed?.text, "user");

      if (!parsed?.session_id || !cleanedText) {
        continue;
      }

      const list = records.get(parsed.session_id) || [];

      if (list.length < 3) {
        list.push(cleanedText);
        records.set(parsed.session_id, list);
      }
    }

    return records;
  } catch (error) {
    if (error?.name === "NotFoundError") {
      return new Map();
    }

    throw error;
  }
}

async function readSessionFiles(directoryHandle) {
  const sessions = [];

  for await (const entry of walkDirectory(directoryHandle, ["sessions"])) {
    if (entry.kind !== "file" || !entry.name.endsWith(".jsonl")) {
      continue;
    }

    const file = await entry.handle.getFile();
    const sessionId = extractSessionId(entry.name);

    if (!sessionId) {
      continue;
    }

    sessions.push({
      id: sessionId,
      size: file.size,
      updatedAt: file.lastModified ? new Date(file.lastModified).toISOString() : null,
      relativePath: entry.path.join("/"),
      fileHandle: entry.handle,
      parentHandle: entry.parentHandle,
      fileName: entry.name,
      lastModified: file.lastModified,
      stale: false,
    });
  }

  return sessions;
}

async function* walkDirectory(directoryHandle, path = []) {
  for await (const [name, handle] of directoryHandle.entries()) {
    const nextPath = [...path, name];

    if (handle.kind === "directory") {
      yield* walkDirectory(handle, nextPath);
      continue;
    }

    yield {
      kind: handle.kind,
      name,
      handle,
      parentHandle: directoryHandle,
      path: nextPath,
    };
  }
}

function handleFilterChange() {
  state.currentPage = 1;
  applyFilters();
}

function handlePageSizeChange() {
  state.pageSize = Number(elements.pageSizeSelect.value) || 10;
  state.currentPage = 1;
  renderList();
  renderDetails(getActiveSession());
  updateStatus();
}

function changePage(offset) {
  const totalPages = getTotalPages();

  if (!totalPages) {
    return;
  }

  state.currentPage = Math.min(Math.max(1, state.currentPage + offset), totalPages);
  renderList();
  renderDetails(getActiveSession());
  updateStatus();
}

function handleCommentaryToggleChange() {
  applyCommentaryVisibility(elements.commentaryToggle.checked);
}

function applyCommentaryVisibility(visible, { rerender = true } = {}) {
  state.showCommentary = Boolean(visible);
  localStorage.setItem(COMMENTARY_VISIBILITY_STORAGE_KEY, state.showCommentary ? "1" : "0");
  elements.commentaryToggle.checked = state.showCommentary;

  if (!rerender) {
    return;
  }

  const activeSession = getActiveSession();

  if (!activeSession) {
    renderDetails(null);
    return;
  }

  renderTimelinePanels(activeSession).catch(handleError);
}

function getInitialCommentaryVisibility() {
  return localStorage.getItem(COMMENTARY_VISIBILITY_STORAGE_KEY) === "1";
}

function getInitialTopPanelsCollapsed() {
  return localStorage.getItem(TOP_PANELS_COLLAPSED_STORAGE_KEY) === "1";
}

function persistTopPanelsCollapsed(collapsed) {
  try {
    localStorage.setItem(TOP_PANELS_COLLAPSED_STORAGE_KEY, collapsed ? "1" : "0");
  } catch {
    /* ignore quota/access errors */
  }
}

function applyTopPanelsCollapsed(collapsed) {
  state.topPanelsCollapsed = Boolean(collapsed);

  TOP_PANEL_KEYS.forEach((key) => {
    const section = document.querySelector(`[data-panel="${key}"]`);
    if (section) {
      section.dataset.collapsed = state.topPanelsCollapsed ? "true" : "false";
    }
  });

  const toggle = document.querySelector("#panel-collapse-toggle");
  if (toggle) {
    toggle.setAttribute("aria-pressed", state.topPanelsCollapsed ? "true" : "false");
    refreshPanelCollapseToggleLabel();
  }
}

function refreshPanelCollapseToggleLabel() {
  const toggle = document.querySelector("#panel-collapse-toggle");
  if (!toggle) return;
  const label = t(state.topPanelsCollapsed ? "panel.expandAll" : "panel.collapseAll");
  toggle.setAttribute("aria-label", label);
  toggle.setAttribute("title", label);
}

function toggleTopPanels() {
  const next = !state.topPanelsCollapsed;
  applyTopPanelsCollapsed(next);
  persistTopPanelsCollapsed(next);
}

function isEditableTarget(target) {
  if (!target) return false;
  if (target.isContentEditable) return true;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
}

function initTopPanelCollapse() {
  applyTopPanelsCollapsed(getInitialTopPanelsCollapsed());

  const toggle = document.querySelector("#panel-collapse-toggle");
  if (toggle) {
    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      toggleTopPanels();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key !== "\\" || event.shiftKey || event.altKey) return;
    if (!(event.ctrlKey || event.metaKey)) return;
    if (isEditableTarget(event.target)) return;
    event.preventDefault();
    toggleTopPanels();
  });
}

function applyFilters() {
  const query = elements.searchInput.value.trim().toLowerCase();
  const age = elements.ageFilter.value;
  const sort = elements.sortSelect.value;
  const staleOnly = elements.staleOnlyCheckbox.checked;
  const now = Date.now();

  state.filteredSessions = state.sessions.filter((session) => {
    if (staleOnly && !session.stale) {
      return false;
    }

    if (query) {
      const haystack = [
        session.title,
        session.id,
        session.relativePath,
        session.previewSummary,
        ...session.historyPreview,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      if (!haystack.includes(query)) {
        return false;
      }
    }

    if (age !== "all") {
      const updatedTime = new Date(session.updatedAt || session.lastModified || 0).getTime();

      if (!updatedTime) {
        return age === "older";
      }

      const diff = now - updatedTime;

      if (age === "7d" && diff > 7 * 24 * 60 * 60 * 1000) {
        return false;
      }

      if (age === "30d" && diff > 30 * 24 * 60 * 60 * 1000) {
        return false;
      }

      if (age === "older" && diff <= 30 * 24 * 60 * 60 * 1000) {
        return false;
      }
    }

    return true;
  });

  state.filteredSessions.sort((left, right) => {
    if (sort === "size-desc") {
      return right.size - left.size;
    }

    if (sort === "title-asc") {
      return left.title.localeCompare(right.title, state.locale === "zh-CN" ? "zh-CN" : "en");
    }

    return compareTimeDesc(left.updatedAt || left.lastModified, right.updatedAt || right.lastModified);
  });

  const totalPages = getTotalPages();
  state.currentPage = totalPages ? Math.min(state.currentPage, totalPages) : 1;

  if (!state.filteredSessions.some((session) => session.id === state.activeSessionId)) {
    state.activeSessionId = state.filteredSessions[0]?.id || null;
  }

  renderList();
  renderDetails(getActiveSession());
  updateStatus();
}

function renderList() {
  elements.sessionList.innerHTML = "";

  const sessionsOnPage = getPagedSessions();

  if (!sessionsOnPage.length) {
    renderEmptyList(state.filteredSessions.length ? t("list.pageEmpty") : t("list.noResults"));
    return;
  }

  const fragment = document.createDocumentFragment();

  for (const session of sessionsOnPage) {
    const node = createListItemNode();
    const checkbox = node.querySelector(".session-checkbox");
    const button = node.querySelector(".session-main");
    const title = node.querySelector(".session-title");
    const size = node.querySelector(".session-size");
    const id = node.querySelector(".session-id");
    const updated = node.querySelector(".session-updated");
    const summary = node.querySelector(".session-summary");
    const count = node.querySelector(".group-count");

    title.textContent = session.stale ? `${session.title} · ${t("detail.statusStale")}` : session.title;
    size.textContent = formatBytes(session.size);
    id.textContent = abbreviateId(session.id);
    updated.textContent = formatDateTime(session.updatedAt);
    summary.textContent = buildSessionSummary(session);
    checkbox.checked = state.selectedIds.has(session.id);
    checkbox.disabled = !isSessionDeletable(session);

    if (count) {
      count.hidden = true;
      count.textContent = "";
    }

    if (session.id === state.activeSessionId) {
      node.classList.add("is-active");
    }

    checkbox.addEventListener("change", (event) => {
      toggleSelection(session.id, event.target.checked);
    });

    button.addEventListener("click", () => {
      state.activeSessionId = session.id;
      renderList();
      renderDetails(session);
      updateStatus();
    });

    fragment.appendChild(node);
  }

  elements.sessionList.appendChild(fragment);
}

function handleOutlineJump(event) {
  const button = event.target.closest("[data-anchor-id]");

  if (!button) {
    return;
  }

  jumpToTimelineAnchor(button.dataset.anchorId || "");
}

function jumpToTimelineAnchor(anchorId) {
  if (!anchorId) {
    return;
  }

  const target = document.getElementById(anchorId);

  if (!target || !elements.detailPreview.contains(target)) {
    return;
  }

  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "center",
    inline: "nearest",
  });

  clearActiveConversationTarget();
  target.classList.add("is-targeted");
  state.activeHighlightTimer = window.setTimeout(() => {
    target.classList.remove("is-targeted");
    state.activeHighlightTimer = null;
  }, 1800);
}

function clearActiveConversationTarget() {
  if (state.activeHighlightTimer) {
    window.clearTimeout(state.activeHighlightTimer);
    state.activeHighlightTimer = null;
  }

  elements.detailPreview.querySelector(".conversation-item.is-targeted")?.classList.remove("is-targeted");
}

function createListItemNode() {
  const templateNode = elements.template?.content?.firstElementChild;

  if (templateNode) {
    return templateNode.cloneNode(true);
  }

  const wrapper = document.createElement("article");
  wrapper.className = "session-item";
  wrapper.innerHTML = `
    <label class="session-select">
      <input type="checkbox" class="session-checkbox" />
      <span></span>
    </label>
    <button class="session-main" type="button">
      <div class="session-row">
        <strong class="session-title"></strong>
        <span class="session-size"></span>
      </div>
      <div class="session-row meta">
        <span class="session-id"></span>
        <span class="session-updated"></span>
      </div>
      <div class="session-summary"></div>
    </button>
  `;

  return wrapper;
}

function renderDetails(session) {
  state.previewRequestId += 1;
  clearActiveConversationTarget();

  if (!session) {
    elements.detailCaption.textContent = t("detail.unselectedCaption");
    elements.detailOverview.innerHTML = [
      makeOverviewItem(t("labels.sessionId"), "-"),
      makeOverviewItem(t("labels.fileSize"), "-"),
      makeOverviewItem(t("labels.updatedAt"), "-"),
      makeOverviewItem(t("labels.status"), "-"),
    ].join("");
    elements.detailOutlineTitle.textContent = t("section.questions");
    setBadgeText(elements.detailOutlineCount, "0");
    elements.detailOutline.innerHTML = `<p class="empty-state">${escapeHtml(t("detail.noQuestions"))}</p>`;
    elements.detailPreviewTitle.textContent = t("section.conversation");
    setBadgeText(elements.detailMessageCount, "0");
    elements.detailPreview.innerHTML = `<p class="empty-state">${escapeHtml(t("detail.noContent"))}</p>`;
    elements.commentaryToggle.disabled = true;
    elements.downloadCurrentButton.disabled = true;
    elements.downloadCurrentButton.textContent = t("buttons.download");
    resetCopyResumeButton();
    elements.copyResumeButton.disabled = true;
    elements.deleteCurrentButton.disabled = true;
    elements.deleteCurrentButton.textContent = t("buttons.delete");
    return;
  }

  elements.detailCaption.textContent = session.relativePath || t("statusText.currentSession");
  elements.detailOverview.innerHTML = [
    makeOverviewItem(t("labels.sessionId"), session.id),
    makeOverviewItem(t("labels.fileSize"), formatBytes(session.size)),
    makeOverviewItem(t("labels.updatedAt"), formatDateTime(session.updatedAt)),
    makeOverviewItem(t("labels.status"), session.stale ? t("detail.statusStale") : t("detail.statusNormal")),
  ].join("");
  elements.detailOutlineTitle.textContent = t("section.questions");
  elements.detailPreviewTitle.textContent = t("section.conversation");
  elements.commentaryToggle.disabled = false;
  elements.downloadCurrentButton.disabled = !isSessionDownloadable(session);
  elements.downloadCurrentButton.textContent = t("buttons.download");
  resetCopyResumeButton();
  elements.copyResumeButton.disabled = false;
  elements.deleteCurrentButton.disabled = !isSessionDeletable(session);
  elements.deleteCurrentButton.textContent = t("buttons.delete");

  renderTimelinePanels(session).catch(handleError);
}

async function downloadCurrentSession() {
  const session = getActiveSession();

  if (!session || !isSessionDownloadable(session)) {
    return;
  }

  const file = await session.fileHandle.getFile();
  const url = URL.createObjectURL(file);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = session.fileName || `${session.id}.jsonl`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  window.setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 0);
}

async function copyResumeCommand() {
  const session = getActiveSession();

  if (!session) {
    return;
  }

  const command = buildResumeCommand(session);
  await writeClipboardText(command);
  elements.copyResumeButton.textContent = t("buttons.resumeCopied");
  elements.copyResumeButton.disabled = true;

  if (state.resumeButtonResetTimer) {
    window.clearTimeout(state.resumeButtonResetTimer);
  }

  state.resumeButtonResetTimer = window.setTimeout(() => {
    state.resumeButtonResetTimer = null;
    const activeSession = getActiveSession();
    resetCopyResumeButton();
    elements.copyResumeButton.disabled = !activeSession;
  }, RESUME_COMMAND_RESET_DELAY);
}

function resetCopyResumeButton() {
  if (state.resumeButtonResetTimer) {
    window.clearTimeout(state.resumeButtonResetTimer);
    state.resumeButtonResetTimer = null;
  }

  elements.copyResumeButton.textContent = t("buttons.copyResume");
}

function buildResumeCommand(session) {
  if (state.adapter?.buildResume) {
    return state.adapter.buildResume(session);
  }

  return `codex resume ${session.id}`;
}

async function writeClipboardText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.inset = "0 auto auto 0";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

async function renderTimelinePanels(session) {
  const requestId = ++state.previewRequestId;
  clearActiveConversationTarget();
  elements.detailOutline.innerHTML = `<p class="empty-state">${escapeHtml(t("detail.loading"))}</p>`;
  elements.detailPreview.innerHTML = `<p class="empty-state">${escapeHtml(t("detail.loading"))}</p>`;

  const timeline = await getSessionTimeline(session);

  if (requestId !== state.previewRequestId) {
    return;
  }

  renderQuestionOutline(timeline);

  const visibleTimeline = getVisibleTimelineItems(timeline);
  setBadgeText(elements.detailMessageCount, String(visibleTimeline.length));

  if (!visibleTimeline.length) {
    elements.detailPreview.innerHTML = `<p class="empty-state">${escapeHtml(t("detail.noRenderableContent"))}</p>`;
    return;
  }

  elements.detailPreview.innerHTML = visibleTimeline.map(renderConversationItem).join("");
}

async function getSessionTimeline(session) {
  if (!session.fileHandle || session.stale) {
    return buildFallbackTimeline(session);
  }

  if (state.timelineCache.has(session.id)) {
    return state.timelineCache.get(session.id);
  }

  const loader = state.adapter?.loadTimeline || loadCodexTimeline;
  const timeline = await loader(session);
  state.timelineCache.set(session.id, timeline);
  return timeline;
}

async function loadCodexTimeline(session) {
  const text = await (await session.fileHandle.getFile()).text();
  const items = [];

  for (const line of splitJsonLines(text)) {
    const parsed = safeJsonParse(line);

    if (!parsed) {
      continue;
    }

    if (parsed.type === "response_item") {
      const extractedItems = extractResponseItems(parsed).map((item) => ({
        ...item,
        source: "response",
      }));

      if (extractedItems.length) {
        items.push(...extractedItems);
      }

      continue;
    }

    if (parsed.type === "event_msg") {
      const extractedItems = extractEventMessageItems(parsed).map((item) => ({
        ...item,
        source: "event",
      }));

      if (extractedItems.length) {
        items.push(...extractedItems);
      }
    }
  }

  return finalizeTimeline(
    (items.length ? dedupePreviewTimeline(items).map(stripTimelineMeta) : buildFallbackTimeline(session)).filter(
      isRenderableTimelineItem,
    ),
  );
}

function dedupePreviewTimeline(items) {
  const pendingByKey = new Map();
  const suppressedIndexes = new Set();

  items.forEach((item, index) => {
    const key = getTimelineDedupeKey(item);

    if (!key) {
      return;
    }

    const queues = getTimelineDedupeQueues(pendingByKey, key);
    const oppositeSource = item.source === "event" ? "response" : "event";
    const oppositeQueue = queues[oppositeSource];
    const matchQueueIndex = oppositeQueue.findIndex((candidateIndex) =>
      canDedupeTimelinePair(items[candidateIndex], item)
    );

    if (matchQueueIndex === -1) {
      queues[item.source].push(index);
      return;
    }

    const matchedIndex = oppositeQueue.splice(matchQueueIndex, 1)[0];

    if (item.source === "response") {
      suppressedIndexes.add(matchedIndex);
      return;
    }

    suppressedIndexes.add(index);
  });

  return items.filter((_, index) => !suppressedIndexes.has(index));
}

function getTimelineDedupeKey(item) {
  if (item.source !== "event" && item.source !== "response") {
    return "";
  }

  if (!["user", "assistant", "commentary"].includes(item.kind)) {
    return "";
  }

  const normalizedBody = normalizeTimelineBody(item.body);

  if (!normalizedBody) {
    return "";
  }

  return `${item.kind}\u0000${normalizedBody}`;
}

function getTimelineDedupeQueues(pendingByKey, key) {
  if (!pendingByKey.has(key)) {
    pendingByKey.set(key, {
      event: [],
      response: [],
    });
  }

  return pendingByKey.get(key);
}

function canDedupeTimelinePair(left, right) {
  if (left.source === right.source) {
    return false;
  }

  if (left.kind !== right.kind) {
    return false;
  }

  if (normalizeTimelineBody(left.body) !== normalizeTimelineBody(right.body)) {
    return false;
  }

  return hasCloseTimelineTimestamps(left.timestamp, right.timestamp);
}

function normalizeTimelineBody(body) {
  return String(body || "")
    .replace(/\s+/g, " ")
    .trim();
}

function hasCloseTimelineTimestamps(left, right) {
  const leftTime = parseTimelineTimestamp(left);
  const rightTime = parseTimelineTimestamp(right);

  if (leftTime === null || rightTime === null) {
    return false;
  }

  return Math.abs(leftTime - rightTime) <= 2000;
}

function parseTimelineTimestamp(value) {
  if (!value) {
    return null;
  }

  const timestamp = new Date(value).getTime();
  return Number.isNaN(timestamp) ? null : timestamp;
}

function stripTimelineMeta(item) {
  return {
    kind: item.kind,
    roleLabel: item.roleLabel,
    timestamp: item.timestamp,
    body: item.body,
  };
}

function getAssistantTimelineKind(phase) {
  return phase === "commentary" ? "commentary" : "assistant";
}

function getTimelineRoleLabel(kind) {
  if (kind === "user") {
    return t("timeline.user");
  }

  if (kind === "commentary") {
    return t("timeline.commentary");
  }

  if (state.adapter?.kind === "claude-code") {
    return t("timeline.assistantClaude");
  }

  return t("timeline.assistant");
}

function extractEventMessageItems(record) {
  const payload = record.payload || {};
  const eventType = payload.type;
  const timestamp = record.timestamp || payload.timestamp || null;

  if (eventType === "user_message" && payload.message) {
    const body = sanitizeConversationBody(payload.message, "user");

    if (!body) {
      return [];
    }

    return [
      {
        kind: "user",
        roleLabel: t("timeline.user"),
        timestamp,
        body,
      },
    ];
  }

  if (eventType === "agent_message" && payload.message) {
    const kind = getAssistantTimelineKind(payload.phase);
    const body = sanitizeConversationBody(payload.message, "assistant");

    if (!body) {
      return [];
    }

    return [
      {
        kind,
        roleLabel: getTimelineRoleLabel(kind),
        timestamp,
        body,
      },
    ];
  }

  return [];
}

function extractResponseItems(record) {
  const payload = record.payload || {};
  const timestamp = record.timestamp || payload.timestamp || null;

  if (payload.type === "message" && (payload.role === "user" || payload.role === "assistant")) {
    const body = extractMessageContent(payload.content, payload.role);

    if (!body) {
      return [];
    }

    const kind = payload.role === "user" ? "user" : getAssistantTimelineKind(payload.phase);

    return [
      {
        kind,
        roleLabel: getTimelineRoleLabel(kind),
        timestamp,
        body,
      },
    ];
  }

  return [];
}

function extractMessageContent(content, role = "") {
  if (!Array.isArray(content)) {
    return "";
  }

  const text = content
    .map((item) => {
      if (item.type === "input_text" || item.type === "output_text") {
        return item.text || "";
      }

      if (item.type === "text") {
        return item.text || "";
      }

      return "";
    })
    .map((text) => text.trim())
    .filter(Boolean)
    .join("\n\n")
    .trim();

  return sanitizeConversationBody(text, role);
}

function buildFallbackTimeline(session) {
  return (session.historyPreview || [])
    .map((text) => sanitizeConversationBody(text, "user"))
    .filter(Boolean)
    .map((body, index) => ({
      kind: "user",
      roleLabel: t("timeline.historyInput", { index: index + 1 }),
      timestamp: null,
      body,
    }));
}

function renderConversationItem(item) {
  return `
    <article id="${escapeHtml(item.anchorId)}" class="conversation-item ${escapeHtml(item.kind)}">
      <div class="conversation-meta">
        <span class="conversation-role">${escapeHtml(item.roleLabel)}</span>
        <span>${escapeHtml(formatDateTime(item.timestamp))}</span>
      </div>
      <div class="conversation-body markdown-body">${renderMarkdown(item.body)}</div>
    </article>
  `;
}

let markedConfigured = false;
function renderMarkdown(text) {
  const raw = String(text || "");

  if (!raw) {
    return "";
  }

  if (typeof window.marked === "undefined" || typeof window.DOMPurify === "undefined") {
    return escapeHtml(raw).replace(/\n/g, "<br />");
  }

  if (!markedConfigured) {
    window.marked.setOptions({ gfm: true, breaks: true });
    markedConfigured = true;
  }

  const html = window.marked.parse(raw);
  return window.DOMPurify.sanitize(html, {
    ADD_ATTR: ["target", "rel"],
    FORBID_TAGS: ["style", "iframe", "form", "input", "button", "object", "embed"],
    FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover", "onfocus", "style"],
  });
}

function renderQuestionOutline(timeline) {
  const questions = timeline.filter((item) => item.kind === "user");
  setBadgeText(elements.detailOutlineCount, String(questions.length));

  if (!questions.length) {
    elements.detailOutline.innerHTML = `<p class="empty-state">${escapeHtml(t("detail.noQuestions"))}</p>`;
    return;
  }

  elements.detailOutline.innerHTML = questions.map(renderQuestionOutlineItem).join("");
}

function renderQuestionOutlineItem(item) {
  return `
    <button class="outline-link" type="button" data-anchor-id="${escapeHtml(item.anchorId)}">
      <span class="outline-index">Q${escapeHtml(item.questionNumber)}</span>
      <span class="outline-copy">
        <strong class="outline-title">${escapeHtml(getOutlineTitle(item.body))}</strong>
        <span class="outline-meta">${escapeHtml(formatDateTime(item.timestamp))}</span>
      </span>
    </button>
  `;
}

function getVisibleTimelineItems(timeline) {
  return timeline.filter((item) => item.kind !== "commentary" || state.showCommentary);
}

function finalizeTimeline(items) {
  let questionNumber = 0;

  return items.map((item, index) => {
    const normalized = {
      ...item,
      anchorId: `timeline-item-${index + 1}`,
    };

    if (item.kind === "user") {
      questionNumber += 1;
      normalized.questionNumber = questionNumber;
    }

    return normalized;
  });
}

function getOutlineTitle(body) {
  const raw = String(body || "");

  let cleaned = stripInjectedPromptMetadata(raw);
  cleaned = cleaned.replace(/<([a-zA-Z][\w:-]*)\b[^>]*>[\s\S]*?<\/\1>/g, " ");
  cleaned = cleaned.replace(/<\/?[a-zA-Z][\w:-]*[^>]*>/g, " ");

  const lines = cleaned.split(/\n+/).map((line) => line.trim()).filter(Boolean);

  const skipPatterns = [
    /^Context from my IDE setup:?\s*$/i,
    /^My request for Codex:?\s*$/i,
    /^#{1,6}\s*My request for Codex:?\s*$/i,
    /^\[\/?reminder\]\s*$/i,
    /^---+\s*$/,
  ];

  const isSkippable = (line) => skipPatterns.some((re) => re.test(line));
  const firstReal = lines.find((line) => !isSkippable(line));
  return firstReal || lines[0] || raw;
}

function isRenderableTimelineItem(item) {
  return ["user", "assistant", "commentary"].includes(item.kind) && Boolean(item.body?.trim());
}

function sanitizeConversationBody(body, kind) {
  const normalized = String(body || "").replace(/\r\n/g, "\n").trim();

  if (!normalized) {
    return "";
  }

  if (kind !== "user") {
    return normalized;
  }

  const stripped = stripInjectedPromptMetadata(normalized);
  return stripped === normalized ? normalized : stripped;
}

function stripInjectedPromptMetadata(text) {
  const leadingBlockPatterns = [
    /^# AGENTS\.md instructions for[^\n]*\n*/i,
    /^<([a-zA-Z][\w:-]*)\b[^>]*>[\s\S]*?<\/\1>\s*/,
    /^Context from my IDE setup:[ \t]*\n*/i,
    /^#{1,6}\s*My request for Codex:[ \t]*\n*/i,
    /^My request for Codex:[ \t]*\n*/i,
    /^\[reminder\][ \t]*\n*/i,
    /^\[\/reminder\][ \t]*\n*/i,
  ];

  let cleaned = text.trim();
  let changed = true;

  while (changed && cleaned) {
    changed = false;

    for (const pattern of leadingBlockPatterns) {
      const next = cleaned.replace(pattern, "").trimStart();

      if (next !== cleaned) {
        cleaned = next;
        changed = true;
      }
    }
  }

  return cleaned.trim();
}

function updateStatus() {
  const supportsStale = Boolean(state.adapter?.supportsStaleCleanup);
  const staleCount = supportsStale ? state.sessions.filter((session) => session.stale).length : 0;
  const totalSize = state.sessions.reduce((sum, session) => sum + (session.size || 0), 0);
  const totalPages = getTotalPages();
  const deletableCount = state.sessions.filter(isSessionDeletable).length;
  const startIndex = state.filteredSessions.length ? (state.currentPage - 1) * state.pageSize + 1 : 0;
  const endIndex = Math.min(state.currentPage * state.pageSize, state.filteredSessions.length);

  setText(elements.metricTotal, state.sessions.length ? String(state.sessions.length) : "-");
  setText(elements.metricFiltered, state.sessions.length ? String(state.filteredSessions.length) : "-");
  setText(elements.metricSize, state.sessions.length ? formatBytes(totalSize) : "-");
  setText(elements.metricStale, supportsStale ? String(staleCount) : "-");
  setText(elements.metricSelected, String(state.selectedIds.size));
  elements.statusDirectory.textContent = state.rootHandle?.name || state.rememberedRootHandle?.name || "-";
  elements.statusScannedAt.textContent = state.lastScannedAt
    ? formatDateTime(state.lastScannedAt.toISOString())
    : "-";
  elements.statusBadge.textContent = state.rootHandle ? t("badge.connected") : t("badge.disconnected");
  setBadgeTone(elements.statusBadge, state.rootHandle ? "success" : state.isRestorePending ? "warning" : "neutral");
  elements.statusText.textContent = state.rootHandle
    ? t("statusText.connectedCount", { count: state.sessions.length })
    : state.isRestorePending && state.rememberedRootHandle?.name
      ? t("statusText.savedDirectoryNeedsPermission", { name: state.rememberedRootHandle.name })
      : t("statusText.unselectedDir");
  elements.pickDirectoryButton.textContent = state.isRestorePending
    ? t("buttons.requestPermission")
    : t("buttons.pickDirectory");
  elements.reloadButton.disabled = !state.rootHandle || !state.adapter;

  if (!state.filteredSessions.length) {
    elements.listCaption.textContent = state.rootHandle ? t("list.zeroResults") : t("list.unscanned");
  } else {
    elements.listCaption.textContent = t("list.showing", {
      start: startIndex,
      end: endIndex,
      total: state.filteredSessions.length,
    });
  }

  elements.pageIndicator.textContent = totalPages
    ? t("pagination.page", { current: state.currentPage, total: totalPages })
    : t("pagination.pageEmpty");
  elements.prevPageButton.disabled = state.currentPage <= 1;
  elements.nextPageButton.disabled = !totalPages || state.currentPage >= totalPages;
  elements.deleteSelectedButton.disabled = !state.selectedIds.size;
  elements.deleteSelectedButton.hidden = !state.selectedIds.size;
  elements.deleteAllButton.disabled = !deletableCount;
  elements.cleanupStaleButton.disabled = !supportsStale || !staleCount;
  elements.cleanupStaleButton.hidden = !supportsStale;
  if (!supportsStale && elements.staleOnlyCheckbox.checked) {
    elements.staleOnlyCheckbox.checked = false;
  }
  elements.staleOnlyCheckbox.disabled = !supportsStale;
  elements.staleOnlyCheckbox.closest("label")?.toggleAttribute("hidden", !supportsStale);
  elements.selectPageButton.disabled = !getPagedSelectableSessions().length;
  elements.selectPageButton.textContent = areAllPagedSessionsSelected()
    ? t("buttons.unselectPage")
    : t("buttons.selectPage");
}

function renderEmptyList(text) {
  elements.sessionList.innerHTML = `<p class="empty-state">${escapeHtml(text)}</p>`;
}

function setLoadingState(text) {
  elements.statusBadge.textContent = t("badge.loading");
  setBadgeTone(elements.statusBadge, "warning");
  elements.statusText.textContent = text;
  renderEmptyList(text);
  elements.pageIndicator.textContent = t("pagination.pageEmpty");
}

function toggleSelection(id, checked) {
  if (checked) {
    state.selectedIds.add(id);
  } else {
    state.selectedIds.delete(id);
  }

  renderList();
  updateStatus();
}

function handleSelectCurrentPage() {
  const currentPageSessions = getPagedSelectableSessions();

  if (!currentPageSessions.length) {
    return;
  }

  const shouldSelectAll = !areAllPagedSessionsSelected();

  currentPageSessions.forEach((session) => {
    if (shouldSelectAll) {
      state.selectedIds.add(session.id);
    } else {
      state.selectedIds.delete(session.id);
    }
  });

  renderList();
  updateStatus();
}

function openDirectoryHelpDialog() {
  state.modalKind = "directory-help";
  state.pendingActionMode = null;
  state.countdownRemaining = 0;
  elements.modal.hidden = false;
  refreshModalDialog();
  clearCountdown();
  elements.modalConfirmButton.disabled = false;
}

function openConfirmDialog(mode) {
  const targets = getActionTargets(mode);

  if (!targets.length) {
    return;
  }

  state.modalKind = "action";
  state.pendingActionMode = mode;
  elements.modal.hidden = false;
  refreshModalDialog();

  resetCountdown(5);
}

function refreshModalDialog() {
  if (state.modalKind === "directory-help") {
    refreshDirectoryHelpDialog();
    return;
  }

  refreshDeleteDialogText();
}

function refreshDeleteDialogText() {
  const targets = getActionTargets(state.pendingActionMode);
  elements.modal.dataset.variant = "danger";
  elements.modalIcon.innerHTML = getModalIconMarkup("action");
  elements.modalTitle.textContent = getDialogTitle(state.pendingActionMode);
  elements.modalSubtitle.textContent = t("modal.subtitle");
  elements.modalSummaryHead.textContent = t("modal.summaryHead");
  elements.modalDescription.textContent = getDialogDescription(state.pendingActionMode, targets);
  elements.modalWarning.textContent = getDialogWarning(state.pendingActionMode);
  elements.modalCancelButton.textContent = t("buttons.cancel");
  elements.modalConfirmButton.className = "danger-button small";
  elements.modalConfirmButton.textContent = getConfirmActionText(state.pendingActionMode);
}

function refreshDirectoryHelpDialog() {
  elements.modal.dataset.variant = "info";
  elements.modalIcon.innerHTML = getModalIconMarkup("directory-help");
  elements.modalTitle.textContent = t("modal.titleDirectoryHelp");
  elements.modalSubtitle.textContent = t("modal.subtitleDirectoryHelp");
  elements.modalSummaryHead.textContent = t("modal.summaryHeadDirectoryHelp");
  elements.modalDescription.textContent = t("modal.descDirectoryHelp");
  elements.modalWarning.innerHTML = getDirectoryHelpMarkup();
  elements.modalCancelButton.textContent = t("buttons.cancel");
  elements.modalConfirmButton.className = "primary-button";
  elements.modalConfirmButton.textContent = t("buttons.continuePickDirectory");
}

function closeModalDialog() {
  clearCountdown();
  state.countdownRemaining = 0;
  elements.modal.hidden = true;
  elements.modal.dataset.variant = "danger";
  elements.modalIcon.innerHTML = getModalIconMarkup("action");
  elements.modalDescription.textContent = "";
  elements.modalWarning.textContent = "";
  elements.modalCancelButton.textContent = t("buttons.cancel");
  elements.modalConfirmButton.className = "danger-button small";
  state.pendingActionMode = null;
  state.modalKind = null;
  elements.modalConfirmButton.disabled = true;
  elements.modalConfirmButton.textContent = t("buttons.confirmDelete");
}

function resetCountdown(seconds) {
  clearCountdown();
  state.countdownRemaining = seconds;
  refreshCountdownButton();

  if (!seconds) {
    elements.modalConfirmButton.disabled = false;
    return;
  }

  elements.modalConfirmButton.disabled = true;
  state.countdownTimer = window.setInterval(() => {
    state.countdownRemaining -= 1;
    refreshCountdownButton();

    if (state.countdownRemaining <= 0) {
      clearCountdown();
      elements.modalConfirmButton.disabled = false;
      elements.modalConfirmButton.textContent = getConfirmActionText(state.pendingActionMode);
    }
  }, 1000);
}

function refreshCountdownButton() {
  if (state.countdownRemaining > 0) {
    elements.modalConfirmButton.textContent = t("modal.confirmCountdown", { seconds: state.countdownRemaining });
    return;
  }

  elements.modalConfirmButton.textContent = getConfirmActionText(state.pendingActionMode);
}

function clearCountdown() {
  if (state.countdownTimer) {
    window.clearInterval(state.countdownTimer);
    state.countdownTimer = null;
  }
}

function handleModalDismiss() {
  closeModalDialog();
}

async function handleModalConfirm() {
  if (state.modalKind === "directory-help") {
    closeModalDialog();
    await pickDirectoryFromSystem();
    return;
  }

  await confirmPendingAction();
}

async function confirmPendingAction() {
  const targets = getActionTargets(state.pendingActionMode);

  if (!targets.length) {
    closeModalDialog();
    return;
  }

  if (state.pendingActionMode === "stale") {
    await cleanupStaleIndexes(targets);
    closeModalDialog();
    await scanSessions();
    return;
  }

  for (const session of targets) {
    await session.parentHandle.removeEntry(session.fileName);
    state.selectedIds.delete(session.id);
    state.timelineCache.delete(session.id);
  }

  closeModalDialog();
  await scanSessions();
}

function getActionTargets(mode) {
  if (mode === "stale") {
    return getStaleSessions();
  }

  if (mode === "single") {
    const active = getActiveSession();
    return active && isSessionDeletable(active) ? [active] : [];
  }

  if (mode === "all") {
    return state.sessions.filter(isSessionDeletable);
  }

  return state.sessions.filter((session) => state.selectedIds.has(session.id) && isSessionDeletable(session));
}

function getDialogTitle(mode) {
  if (mode === "stale") {
    return t("modal.titleCleanupStale");
  }

  if (mode === "all") {
    return t("modal.titleAll");
  }

  if (mode === "single") {
    return t("modal.titleSingle");
  }

  return t("modal.titleSelected");
}

function getDialogDescription(mode, targets) {
  if (mode === "stale") {
    return t("modal.descCleanupStale", { count: targets.length });
  }

  if (mode === "all") {
    return t("modal.descAll", { count: targets.length, size: formatBytes(sumSizes(targets)) });
  }

  if (mode === "single") {
    const active = getActiveSession();
    return t("modal.descSingle", {
      title: active?.title || "-",
      size: formatBytes(sumSizes(targets)),
    });
  }

  return t("modal.descSelected", { count: targets.length, size: formatBytes(sumSizes(targets)) });
}

function getDialogWarning(mode) {
  if (mode === "stale") {
    return t("modal.warningCleanupStale");
  }

  return mode === "all" ? t("modal.warningAll") : t("modal.warningDelete");
}

function getConfirmActionText(mode) {
  return mode === "stale" ? t("buttons.confirmCleanup") : t("buttons.confirmDelete");
}

function getModalIconMarkup(kind) {
  if (kind === "directory-help") {
    return `
      <svg viewBox="0 0 24 24">
        <path d="M9.6 9.3a2.4 2.4 0 1 1 4.15 1.65c-.73.72-1.75 1.28-1.75 2.55v.5"></path>
        <path d="M12 16.5v.01"></path>
        <circle cx="12" cy="12" r="9"></circle>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24">
      <path d="M12 8v5"></path>
      <path d="M12 16.5h.01"></path>
      <path d="M10.3 3.8 2.9 17a2 2 0 0 0 1.8 3h14.6a2 2 0 0 0 1.8-3L13.7 3.8a2 2 0 0 0-3.4 0Z"></path>
    </svg>
  `;
}

function getDirectoryHelpMarkup() {
  const items = [
    { label: t("modal.pathMacos"), value: t("modal.pathMacosValue") },
    { label: t("modal.pathWindows"), value: t("modal.pathWindowsValue") },
    { label: t("modal.pathLinux"), value: t("modal.pathLinuxValue") },
    { label: t("modal.pathClaudeMacos"), value: t("modal.pathClaudeMacosValue") },
    { label: t("modal.pathClaudeWindows"), value: t("modal.pathClaudeWindowsValue") },
    { label: t("modal.pathClaudeLinux"), value: t("modal.pathClaudeLinuxValue") },
  ];

  const cards = items
    .map(
      (item) => `
        <article class="modal-path-item">
          <div class="modal-path-title">${escapeHtml(item.label)}</div>
          <div class="modal-path-value">${escapeHtml(item.value)}</div>
        </article>
      `,
    )
    .join("");

  return `
    <div class="modal-path-grid">${cards}</div>
    <p class="modal-directory-footnote">${escapeHtml(t("modal.pathContains"))}</p>
  `;
}

function getStaleSessions() {
  return state.sessions.filter((session) => session.stale);
}

async function cleanupStaleIndexes(sessions) {
  const staleIds = new Set(sessions.map((session) => session.id));

  if (!staleIds.size) {
    return;
  }

  await filterJsonLinesFile("session_index.jsonl", (record) => !record?.id || !staleIds.has(record.id));
  await filterJsonLinesFile("history.jsonl", (record) => !record?.session_id || !staleIds.has(record.session_id));
}

async function filterJsonLinesFile(fileName, shouldKeepRecord) {
  ensureRootSelected();

  try {
    const fileHandle = await state.rootHandle.getFileHandle(fileName);
    const text = await (await fileHandle.getFile()).text();
    const lines = [];

    for (const rawLine of text.split(/\r?\n/)) {
      const trimmed = rawLine.trim();

      if (!trimmed) {
        continue;
      }

      const parsed = safeJsonParse(trimmed);

      if (!parsed || shouldKeepRecord(parsed)) {
        lines.push(rawLine);
      }
    }

    const writable = await fileHandle.createWritable();
    await writable.write(lines.length ? `${lines.join("\n")}\n` : "");
    await writable.close();
  } catch (error) {
    if (error?.name === "NotFoundError") {
      return;
    }

    throw error;
  }
}

function getActiveSession() {
  return state.filteredSessions.find((session) => session.id === state.activeSessionId) || null;
}

function getPagedSessions() {
  if (!state.filteredSessions.length) {
    return [];
  }

  const start = (state.currentPage - 1) * state.pageSize;
  return state.filteredSessions.slice(start, start + state.pageSize);
}

function getPagedSelectableSessions() {
  return getPagedSessions().filter(isSessionDeletable);
}

function areAllPagedSessionsSelected() {
  const currentPageSessions = getPagedSelectableSessions();
  return currentPageSessions.length > 0 && currentPageSessions.every((session) => state.selectedIds.has(session.id));
}

function getTotalPages() {
  return state.filteredSessions.length ? Math.ceil(state.filteredSessions.length / state.pageSize) : 0;
}

function pruneSelection() {
  const validIds = new Set(state.sessions.filter(isSessionDeletable).map((session) => session.id));

  state.selectedIds.forEach((id) => {
    if (!validIds.has(id)) {
      state.selectedIds.delete(id);
    }
  });
}

function applyLocale(locale) {
  state.locale = locale;
  document.documentElement.lang = locale;
  document.title = getAppTitle();
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);

  const isSupported = "showDirectoryPicker" in window;

  setText(document.querySelector("#hero-title"), getAppTitle());
  setText(document.querySelector("#hero-description"), getAppHeroDescription());
  setText(elements.supportHint, isSupported ? "" : t("support.unsupported"));
  setText(document.querySelector("#status-title"), t("section.status"));
  setText(document.querySelector("#status-directory-label"), t("labels.directory"));
  setText(document.querySelector("#status-scanned-label"), t("labels.scanned"));
  setText(document.querySelector("#filter-title"), t("section.filter"));
  setText(document.querySelector("#search-label"), t("labels.search"));
  elements.searchInput.placeholder = t("labels.searchPlaceholder");
  setText(document.querySelector("#age-filter-label"), t("labels.age"));
  setText(document.querySelector("#sort-label"), t("labels.sort"));
  setText(document.querySelector("#stale-only-label"), t("labels.staleOnly"));
  setText(document.querySelector("#age-option-all"), t("filter.all"));
  setText(document.querySelector("#age-option-7d"), t("filter.last7d"));
  setText(document.querySelector("#age-option-30d"), t("filter.last30d"));
  setText(document.querySelector("#age-option-older"), t("filter.older"));
  setText(document.querySelector("#sort-option-updated"), t("filter.updatedDesc"));
  setText(document.querySelector("#sort-option-size"), t("filter.sizeDesc"));
  setText(document.querySelector("#sort-option-title"), t("filter.titleAsc"));
  setText(document.querySelector("#metrics-title"), t("section.metrics"));
  setText(document.querySelector("#metric-total-label"), t("labels.totalSessions"));
  setText(document.querySelector("#metric-filtered-label"), t("labels.filteredResults"));
  setText(document.querySelector("#metric-size-label"), t("labels.totalSize"));
  setText(document.querySelector("#metric-stale-label"), t("labels.staleIndexes"));
  setText(document.querySelector("#metric-selected-label"), t("labels.selected"));
  setText(document.querySelector("#list-title"), t("section.list"));
  setText(document.querySelector("#page-size-label"), t("labels.pageSize"));
  setText(document.querySelector("#detail-section-title"), t("section.detail"));
  setText(document.querySelector("#detail-overview-default-label"), t("labels.sessionId"));
  setText(elements.detailOutlineTitle, t("section.questions"));
  setText(elements.commentaryToggleLabel, t("detail.showCommentary"));
  setText(elements.pickDirectoryButton, t("buttons.pickDirectory"));
  setText(elements.reloadButton, t("buttons.reload"));
  setText(elements.deleteSelectedButton, t("buttons.deleteSelected"));
  setText(elements.deleteAllButton, t("buttons.deleteAll"));
  setText(elements.cleanupStaleButton, t("buttons.cleanupStale"));
  setText(elements.prevPageButton, t("buttons.prevPage"));
  setText(elements.nextPageButton, t("buttons.nextPage"));
  setText(elements.downloadCurrentButton, t("buttons.download"));
  setText(elements.copyResumeButton, t("buttons.copyResume"));
  setText(elements.modalCancelButton, t("buttons.cancel"));
  elements.commentaryToggle.setAttribute("aria-label", t("detail.showCommentary"));
  elements.commentaryToggle.setAttribute("title", t("detail.showCommentary"));
  elements.repoLink.setAttribute("aria-label", t("buttons.repository"));
  elements.repoLink.setAttribute("title", t("buttons.repository"));
  updateStatus();

  elements.localeToggleButton.textContent = t("buttons.localeIndicator");
  elements.localeToggleButton.setAttribute("aria-label", t("locale.switchTo"));
  elements.localeToggleButton.setAttribute("title", t("locale.switchTo"));
  elements.themeToggleButton.setAttribute("aria-label", getThemeToggleLabel(state.themeMode));
  elements.themeToggleButton.setAttribute("title", getThemeToggleLabel(state.themeMode));
  refreshPanelCollapseToggleLabel();

  if (state.modalKind && !elements.modal.hidden) {
    refreshModalDialog();

    if (state.modalKind === "action" && state.countdownRemaining > 0) {
      refreshCountdownButton();
    }
  }
}

function cycleLocale() {
  const nextLocale = state.locale === "zh-CN" ? "en" : "zh-CN";
  state.timelineCache.clear();
  applyLocale(nextLocale);
  renderList();
  renderDetails(getActiveSession());
  updateStatus();
}

function getInitialLocale() {
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY);

  if (saved === "zh-CN" || saved === "en") {
    return saved;
  }

  return navigator.language?.toLowerCase().startsWith("zh") ? "zh-CN" : "en";
}

function applyTheme(mode) {
  state.themeMode = mode;
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem(THEME_STORAGE_KEY, mode);
  elements.themeToggleButton.classList.add("is-active");
  elements.themeToggleButton.innerHTML = `<span class="theme-icon" aria-hidden="true">${getThemeIcon()}</span>`;
  elements.themeToggleButton.setAttribute("aria-label", getThemeToggleLabel(mode));
  elements.themeToggleButton.setAttribute("title", getThemeToggleLabel(mode));
}

function cycleTheme() {
  const nextMode = state.themeMode === "dark" ? "light" : "dark";
  applyTheme(nextMode);
}

function getInitialThemeMode() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);

  if (saved === "light" || saved === "dark") {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getThemeToggleLabel(mode) {
  return mode === "dark" ? t("theme.switchToLight") : t("theme.switchToDark");
}

function getThemeIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2"></circle>
      <path d="M12 2.5v2.6"></path>
      <path d="M12 18.9v2.6"></path>
      <path d="M21.5 12h-2.6"></path>
      <path d="M5.1 12H2.5"></path>
      <path d="M18.7 5.3l-1.8 1.8"></path>
      <path d="M7.1 16.9l-1.8 1.8"></path>
      <path d="M18.7 18.7l-1.8-1.8"></path>
      <path d="M7.1 7.1L5.3 5.3"></path>
    </svg>
  `;
}

function queryAny(selectors) {
  for (const selector of selectors) {
    const node = document.querySelector(selector);

    if (node) {
      return node;
    }
  }

  return null;
}

function t(key, params = {}) {
  const localeTable = I18N[state.locale] || I18N["zh-CN"];
  const fallbackTable = I18N["zh-CN"];
  const template = resolveMessage(localeTable, key) ?? resolveMessage(fallbackTable, key) ?? key;

  return String(template).replace(/\{\{(\w+)\}\}/g, (_, token) => String(params[token] ?? ""));
}

function resolveMessage(table, key) {
  return key.split(".").reduce((current, segment) => current?.[segment], table);
}

function ensureRootSelected() {
  if (!state.rootHandle || !state.adapter) {
    throw new Error(t("errors.selectCodexRoot"));
  }
}

function extractSessionId(fileName) {
  const match = fileName.match(/([0-9a-f]{8,}-[0-9a-f-]{20,})\.jsonl$/i);
  return match?.[1] || null;
}

function splitJsonLines(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function safeJsonParse(line) {
  try {
    return JSON.parse(line);
  } catch {
    return null;
  }
}

function isSessionDeletable(session) {
  return !session.stale && Boolean(session.parentHandle && session.fileName);
}

function isSessionDownloadable(session) {
  return !session.stale && Boolean(session.fileHandle);
}

function getSessionTitle(rawTitle, fallbackId) {
  return rawTitle?.trim() || fallbackId;
}

function buildSessionSummary(session) {
  if (session.previewSummary) {
    return session.previewSummary;
  }

  if (session.stale) {
    return t("summary.staleMissing");
  }

  return session.relativePath || t("summary.none");
}

function abbreviateId(id) {
  return id.length > 18 ? `${id.slice(0, 8)}...${id.slice(-4)}` : id;
}

function compareTimeDesc(left, right) {
  return new Date(right || 0).getTime() - new Date(left || 0).getTime();
}

function sumSizes(items) {
  return items.reduce((sum, item) => sum + (item.size || 0), 0);
}

function formatBytes(bytes) {
  if (!bytes) {
    return "0 B";
  }

  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let index = 0;

  while (value >= 1024 && index < units.length - 1) {
    value /= 1024;
    index += 1;
  }

  return `${value.toFixed(value >= 10 || index === 0 ? 0 : 1)} ${units[index]}`;
}

function formatDateTime(value) {
  if (!value) {
    return "-";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return new Intl.DateTimeFormat(state.locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function makeOverviewItem(label, value) {
  return `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`;
}

function setText(node, value) {
  if (node) {
    node.textContent = value;
  }
}

function setBadgeText(node, value) {
  if (node) {
    node.textContent = value;
  }
}

function setBadgeTone(node, tone = "neutral") {
  if (node) {
    node.dataset.tone = tone;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function handleError(error) {
  console.error(error);
  closeModalDialog();
  state.previewRequestId += 1;
  clearActiveConversationTarget();
  const message = error?.message || t("errors.unknown");
  elements.statusBadge.textContent = t("badge.error");
  setBadgeTone(elements.statusBadge, "danger");
  elements.statusText.textContent = message;
  renderEmptyList(message);
  setBadgeText(elements.detailOutlineCount, "0");
  elements.detailOutline.innerHTML = `<p class="empty-state">${escapeHtml(message)}</p>`;
  elements.detailPreview.innerHTML = `<p class="empty-state">${escapeHtml(message)}</p>`;
}

// ===================================================================
// Adapters: codex / claude-code
// ===================================================================

const codexAdapter = {
  kind: "codex",
  supportsStaleCleanup: true,
  async detect(rootHandle) {
    try {
      await rootHandle.getDirectoryHandle("sessions");
      return true;
    } catch (error) {
      if (error?.name === "NotFoundError") return false;
      throw error;
    }
  },
  async scan(rootHandle) {
    const sessionsDirHandle = await rootHandle.getDirectoryHandle("sessions");
    const [sessionRecords, historyRecords, rawSessions] = await Promise.all([
      readSessionIndex(rootHandle),
      readHistoryIndex(rootHandle),
      readSessionFiles(sessionsDirHandle),
    ]);

    const sessions = rawSessions.map((session) => {
      const indexed = sessionRecords.get(session.id);
      const historyPreview = historyRecords.get(session.id) || [];

      return {
        ...session,
        title: getSessionTitle(indexed?.thread_name, session.id),
        updatedAt: indexed?.updated_at || session.updatedAt,
        historyPreview,
        previewSummary: historyPreview[0] || "",
        stale: false,
      };
    });

    const existingIds = new Set(sessions.map((session) => session.id));

    for (const [id, record] of sessionRecords.entries()) {
      if (existingIds.has(id)) continue;

      const historyPreview = historyRecords.get(id) || [];
      sessions.push({
        id,
        title: getSessionTitle(record.thread_name, id),
        updatedAt: record.updated_at,
        size: 0,
        relativePath: "sessions/<missing>",
        fileHandle: null,
        parentHandle: null,
        fileName: null,
        lastModified: null,
        stale: true,
        historyPreview,
        previewSummary: historyPreview[0] || "",
      });
    }

    return { sessions, sessionRecords, historyRecords };
  },
  async loadTimeline(session) {
    return loadCodexTimeline(session);
  },
  buildResume(session) {
    return `codex resume ${session.id}`;
  },
};

const CLAUDE_TOOL_OUTPUT_LIMIT = 4096;
const CLAUDE_TOOL_INPUT_LIMIT = 2048;

const claudeAdapter = {
  kind: "claude-code",
  supportsStaleCleanup: false,
  async detect(rootHandle) {
    try {
      await rootHandle.getDirectoryHandle("projects");
      return true;
    } catch (error) {
      if (error?.name === "NotFoundError") return false;
      throw error;
    }
  },
  async scan(rootHandle) {
    const projectsDir = await rootHandle.getDirectoryHandle("projects");
    const sessions = [];

    for await (const [projName, projHandle] of projectsDir.entries()) {
      if (projHandle.kind !== "directory") continue;

      for await (const [name, handle] of projHandle.entries()) {
        if (handle.kind !== "file") continue;
        if (!name.endsWith(".jsonl")) continue;

        const id = name.slice(0, -".jsonl".length);
        if (!/^[0-9a-f]{8}-[0-9a-f-]{20,}$/i.test(id)) continue;

        const file = await handle.getFile();
        const summary = await summarizeClaudeSessionFile(file);

        sessions.push({
          id,
          size: file.size,
          updatedAt: summary.updatedAt || (file.lastModified ? new Date(file.lastModified).toISOString() : null),
          relativePath: `projects/${projName}/${name}`,
          fileHandle: handle,
          parentHandle: projHandle,
          fileName: name,
          lastModified: file.lastModified,
          stale: false,
          historyPreview: summary.historyPreview,
          previewSummary: summary.previewSummary,
          title: summary.title || id,
          cwd: summary.cwd || decodeClaudeProjectName(projName),
          projName,
        });
      }
    }

    return { sessions, sessionRecords: new Map(), historyRecords: new Map() };
  },
  async loadTimeline(session) {
    const text = await (await session.fileHandle.getFile()).text();
    return finalizeTimeline(parseClaudeTimeline(text).filter(isRenderableTimelineItem));
  },
  buildResume(session) {
    return `claude --resume ${session.id}`;
  },
};

async function summarizeClaudeSessionFile(file) {
  const text = await file.text();
  let title = "";
  let cwd = "";
  let updatedAt = "";
  const historyPreview = [];

  for (const line of splitJsonLines(text)) {
    const parsed = safeJsonParse(line);
    if (!parsed) continue;

    if (parsed.type === "ai-title" && typeof parsed.aiTitle === "string" && parsed.aiTitle.trim()) {
      title = parsed.aiTitle.trim();
    }

    if (!cwd && typeof parsed.cwd === "string" && parsed.cwd) {
      cwd = parsed.cwd;
    }

    if (typeof parsed.timestamp === "string" && parsed.timestamp) {
      if (!updatedAt || parsed.timestamp > updatedAt) {
        updatedAt = parsed.timestamp;
      }
    }

    if (parsed.type === "user" && parsed.message && Array.isArray(parsed.message.content)) {
      for (const block of parsed.message.content) {
        if (block?.type !== "text" || typeof block.text !== "string") continue;
        const cleaned = sanitizeConversationBody(block.text, "user");
        if (cleaned && historyPreview.length < 3) {
          historyPreview.push(cleaned);
        }
      }
    }
  }

  if (!title) {
    const lastPromptLine = text.split(/\r?\n/).reverse().find((line) => line.includes('"type":"last-prompt"'));
    if (lastPromptLine) {
      const parsed = safeJsonParse(lastPromptLine.trim());
      if (parsed?.lastPrompt) {
        const cleaned = sanitizeConversationBody(parsed.lastPrompt, "user");
        title = cleaned ? truncateText(cleaned.split(/\r?\n/)[0], 80) : "";
      }
    }
  }

  if (!title && historyPreview.length) {
    title = truncateText(historyPreview[0].split(/\r?\n/)[0], 80);
  }

  return {
    title,
    cwd,
    updatedAt,
    historyPreview,
    previewSummary: historyPreview[0] || "",
  };
}

function decodeClaudeProjectName(name) {
  if (!name) return "";
  // Claude encodes "/" as "-" in the project directory name. There's no fully
  // reversible decoding (because real "-" in the path collides), but for display
  // purposes we replace leading "-" with "/" to give a sensible hint.
  return name.startsWith("-") ? `/${name.slice(1).replaceAll("-", "/")}` : name;
}

function parseClaudeTimeline(text) {
  const records = [];

  for (const line of splitJsonLines(text)) {
    const parsed = safeJsonParse(line);
    if (!parsed) continue;
    if (parsed.type !== "user" && parsed.type !== "assistant") continue;
    records.push(parsed);
  }

  records.sort((left, right) => {
    const lt = parseTimelineTimestamp(left.timestamp) ?? 0;
    const rt = parseTimelineTimestamp(right.timestamp) ?? 0;
    return lt - rt;
  });

  const items = [];

  for (const record of records) {
    const timestamp = record.timestamp || null;
    const message = record.message || {};
    const content = Array.isArray(message.content) ? message.content : [];

    if (record.type === "user") {
      for (const block of content) {
        if (!block || typeof block !== "object") continue;

        if (block.type === "text" && typeof block.text === "string") {
          const body = sanitizeConversationBody(block.text, "user");
          if (!body) continue;
          items.push({
            kind: "user",
            roleLabel: t("timeline.user"),
            timestamp,
            body,
          });
          continue;
        }

        if (block.type === "tool_result") {
          const body = formatClaudeToolResult(block);
          if (!body) continue;
          items.push({
            kind: "commentary",
            roleLabel: t("timeline.toolOutput"),
            timestamp,
            body,
          });
        }
      }
      continue;
    }

    // assistant
    for (const block of content) {
      if (!block || typeof block !== "object") continue;

      if (block.type === "text" && typeof block.text === "string") {
        const body = sanitizeConversationBody(block.text, "assistant");
        if (!body) continue;
        items.push({
          kind: "assistant",
          roleLabel: getTimelineRoleLabel("assistant"),
          timestamp,
          body,
        });
        continue;
      }

      if (block.type === "thinking" && typeof block.thinking === "string") {
        const body = block.thinking.trim();
        if (!body) continue;
        items.push({
          kind: "commentary",
          roleLabel: t("timeline.commentary"),
          timestamp,
          body,
        });
        continue;
      }

      if (block.type === "tool_use") {
        items.push({
          kind: "commentary",
          roleLabel: t("timeline.toolCall"),
          timestamp,
          body: formatClaudeToolUse(block),
        });
      }
    }
  }

  return items;
}

function formatClaudeToolUse(block) {
  const name = String(block.name || "tool");
  let inputJson = "";
  try {
    inputJson = JSON.stringify(block.input ?? {}, null, 2);
  } catch {
    inputJson = String(block.input ?? "");
  }
  if (inputJson.length > CLAUDE_TOOL_INPUT_LIMIT) {
    inputJson = `${inputJson.slice(0, CLAUDE_TOOL_INPUT_LIMIT)}\n... [truncated]`;
  }
  return `\`\`\`${name}\n${inputJson}\n\`\`\``;
}

function formatClaudeToolResult(block) {
  const raw = block.content;
  let text = "";

  if (typeof raw === "string") {
    text = raw;
  } else if (Array.isArray(raw)) {
    text = raw
      .map((part) => (typeof part === "string" ? part : part?.text || ""))
      .filter(Boolean)
      .join("\n");
  } else if (raw && typeof raw === "object" && typeof raw.text === "string") {
    text = raw.text;
  }

  text = String(text || "").trim();
  if (!text) return "";
  if (text.length > CLAUDE_TOOL_OUTPUT_LIMIT) {
    text = `${text.slice(0, CLAUDE_TOOL_OUTPUT_LIMIT)}\n... [truncated]`;
  }
  return text;
}

function truncateText(value, max) {
  const str = String(value || "");
  if (str.length <= max) return str;
  return `${str.slice(0, max - 1)}…`;
}

// ===================================================================
// Adapter-aware UI helpers
// ===================================================================

function getAppTitle() {
  if (state.adapter?.kind === "claude-code") return t("app.claude.title");
  if (state.adapter?.kind === "codex") return t("app.codex.title");
  return t("meta.title");
}

function getAppHeroDescription() {
  if (state.adapter?.kind === "claude-code") return t("app.claude.heroDescription");
  if (state.adapter?.kind === "codex") return t("app.codex.heroDescription");
  return t("meta.heroDescription");
}

function refreshAdapterDependentUi() {
  document.title = getAppTitle();
  setText(document.querySelector("#hero-title"), getAppTitle());
  setText(document.querySelector("#hero-description"), getAppHeroDescription());
  state.timelineCache.clear();
}

