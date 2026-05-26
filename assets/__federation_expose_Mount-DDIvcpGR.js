import { importShared } from './__federation_fn_import-BMMB1g9W.js';

const plusWhite = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M352%20128C352%20110.3%20337.7%2096%20320%2096C302.3%2096%20288%20110.3%20288%20128L288%20288L128%20288C110.3%20288%2096%20302.3%2096%20320C96%20337.7%20110.3%20352%20128%20352L288%20352L288%20512C288%20529.7%20302.3%20544%20320%20544C337.7%20544%20352%20529.7%20352%20512L352%20352L512%20352C529.7%20352%20544%20337.7%20544%20320C544%20302.3%20529.7%20288%20512%20288L352%20288L352%20128z'/%3e%3c/svg%3e";

const plusBlack = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20d='M352%20128C352%20110.3%20337.7%2096%20320%2096C302.3%2096%20288%20110.3%20288%20128L288%20288L128%20288C110.3%20288%2096%20302.3%2096%20320C96%20337.7%20110.3%20352%20128%20352L288%20352L288%20512C288%20529.7%20302.3%20544%20320%20544C337.7%20544%20352%20529.7%20352%20512L352%20352L512%20352C529.7%20352%20544%20337.7%20544%20320C544%20302.3%20529.7%20288%20512%20288L352%20288L352%20128z'/%3e%3c/svg%3e";

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$2 = {  };
const {createElementVNode:_createElementVNode$2,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3} = await importShared('vue');


const _hoisted_1$2 = { class: "starbar" };

function _sfc_render(_ctx, _cache) {
  return (_openBlock$3(), _createElementBlock$3("div", _hoisted_1$2, _cache[0] || (_cache[0] = [
    _createElementVNode$2("div", { class: "left-bar" }, null, -1),
    _createElementVNode$2("p", null, "⭐️", -1),
    _createElementVNode$2("div", { class: "right-bar" }, null, -1)
  ])))
}
const StarBar = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render],['__scopeId',"data-v-3600db60"]]);

const {defineStore} = await importShared('pinia');

const {ref: ref$1} = await importShared('vue');


const useTaskStore = defineStore('task', () => {
  

 
    // Retourne les données et les fonctions pour être utilisées dans les composants
    return {
      
    }       
});

const {createElementVNode:_createElementVNode$1,createVNode:_createVNode$2,unref:_unref,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,createCommentVNode:_createCommentVNode,resolveComponent:_resolveComponent$1,createBlock:_createBlock,renderList:_renderList,Fragment:_Fragment} = await importShared('vue');


const _hoisted_1$1 = { class: "task-sidebar" };
const _hoisted_2 = ["src"];
const {ref,computed,onMounted,onUnmounted} = await importShared('vue');

// -------------------------GESTION DU THÈME (SOMBRE/CLAIR)-------------------------

const _sfc_main$1 = {
  __name: 'Sidebar',
  setup(__props) {

const isDark = ref(false); // Variable réactive pour stocker le thème (false = clair, true = sombre)

onMounted(() => { // Exécuté quand le composant est monté

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)'); // Observe le thème système

  isDark.value = mediaQuery.matches; // Initialise isDark selon le thème actuel

  const handler = (e) => { // Fonction appelée quand le thème change
    isDark.value = e.matches; // Met à jour la valeur en fonction du nouveau thème

  };

  mediaQuery.addEventListener('change', handler); // Écoute les changements du thème système

  onUnmounted(() => { // Exécuté quand le composant est détruit
    mediaQuery.removeEventListener('change', handler); // Supprime l'écouteur pour éviter les fuites mémoire
  });

});

//--------------------------GESTION DE LA CRÉATION DE TASK-------------------------
const taskStore = useTaskStore(); // Utilisation du store pour accéder aux données et fonctions

ref(false); // Variable réactive pour contrôler l'affichage du formulaire 
taskStore.tasks; // Variable réactive pour stocker les titres des task existantes


return (_ctx, _cache) => {
  const _component_ChooseTaskTitle = _resolveComponent$1("ChooseTaskTitle");
  const _component_TaskTitle = _resolveComponent$1("TaskTitle");

  return (_openBlock$2(), _createElementBlock$2("nav", _hoisted_1$1, [
    _cache[2] || (_cache[2] = _createElementVNode$1("h2", null, " Mes Tâches ", -1)),
    _createVNode$2(StarBar),
    (_unref(taskStore).creatingTask === false)
      ? (_openBlock$2(), _createElementBlock$2("button", {
          key: 0,
          class: "add-task-button",
          onClick: _cache[0] || (_cache[0] = $event => (_unref(taskStore).creatingTask = true))
        }, [
          _createElementVNode$1("img", {
            class: "icon-plus",
            src: isDark.value ? _unref(plusWhite) : _unref(plusBlack),
            alt: "ajouter une task"
          }, null, 8, _hoisted_2),
          _cache[1] || (_cache[1] = _createElementVNode$1("p", { class: "button-text" }, "Nouvelle Task", -1))
        ]))
      : (_openBlock$2(), _createBlock(_component_ChooseTaskTitle, { key: 1 })),
    (_openBlock$2(true), _createElementBlock$2(_Fragment, null, _renderList(_unref(taskStore).tasks, (item, index) => {
      return (_openBlock$2(), _createBlock(_component_TaskTitle, {
        key: item._id,
        taskId: item._id,
        title: item.title,
        type: item.type,
        isComplete: item.isComplete,
        onClick: $event => (_unref(taskStore).selectTask(item._id))
      }, null, 8, ["taskId", "title", "type", "isComplete", "onClick"]))
    }), 128))
  ]))
}
}

};
const Sidebar = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-34470873"]]);

const {createVNode:_createVNode$1,resolveComponent:_resolveComponent,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');


const _hoisted_1 = { class: "task-view" };

const _sfc_main = {
  __name: 'TaskView',
  setup(__props) {


return (_ctx, _cache) => {
  const _component_TaskResults = _resolveComponent("TaskResults");

  return (_openBlock$1(), _createElementBlock$1("div", _hoisted_1, [
    _createVNode$1(Sidebar),
    _createVNode$1(_component_TaskResults)
  ]))
}
}

};
const TaskView = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-0cc4527b"]]);

const {createElementVNode:_createElementVNode,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {createApp} = await importShared('vue');

const {createPinia} = await importShared('pinia');
function createMyApp(Component, el) {
  const app = createApp(Component);
  const pinia = createPinia();
  app.use(pinia);
  app.mount(el);
}
function mount(el) {
  if (!el) {
    console.error("❌ container manquant");
    return;
  }
  el.innerHTML = "";
  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.minHeight = "0";
  container.style.flex = "1";
  el.appendChild(container);
  createMyApp(TaskView, container);
}
window.addEventListener("error", function(event) {
  console.error("Erreur JavaScript capturée :", event.message);
  console.log("Fichier :", event.filename);
  console.log("Ligne :", event.lineno);
  console.log("Colonne :", event.colno);
  console.log("Objet erreur complet :", event.error);
});

export { mount };
