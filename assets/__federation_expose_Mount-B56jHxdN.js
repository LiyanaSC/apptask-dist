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

const _sfc_main$8 = {  };
const {createElementVNode:_createElementVNode$9,openBlock:_openBlock$9,createElementBlock:_createElementBlock$9} = await importShared('vue');


const _hoisted_1$8 = { class: "starbar" };

function _sfc_render(_ctx, _cache) {
  return (_openBlock$9(), _createElementBlock$9("div", _hoisted_1$8, _cache[0] || (_cache[0] = [
    _createElementVNode$9("div", { class: "left-bar" }, null, -1),
    _createElementVNode$9("p", null, "⭐️", -1),
    _createElementVNode$9("div", { class: "right-bar" }, null, -1)
  ])))
}
const StarBar = /*#__PURE__*/_export_sfc(_sfc_main$8, [['render',_sfc_render],['__scopeId',"data-v-3600db60"]]);

// tableau de types de listes disponibles

const typeTask = [

  {
    type: 'daily',
    label: 'quotidiennes',
    icon: new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M320%2064C461.4%2064%20576%20178.6%20576%20320C576%20461.4%20461.4%20576%20320%20576C178.6%20576%2064%20461.4%2064%20320C64%20178.6%20178.6%2064%20320%2064zM296%20184L296%20320C296%20328%20300%20335.5%20306.7%20340L402.7%20404C413.7%20411.4%20428.6%20408.4%20436%20397.3C443.4%20386.2%20440.4%20371.4%20429.3%20364L344%20307.2L344%20184C344%20170.7%20333.3%20160%20320%20160C306.7%20160%20296%20170.7%20296%20184z'/%3e%3c/svg%3e", import.meta.url).href,
    image: new URL("/apptask-dist/assets/img-daily-C93AaCmf.png", import.meta.url).href,
    color: 'var(--light-blue)',
    description: 'Une liste pour garder un oeil sur les tâches du quotidien.'
  },
  {
    type: 'weekly',
    label: 'hebdo',
    icon: new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M224%2064C241.7%2064%20256%2078.3%20256%2096L256%20128L384%20128L384%2096C384%2078.3%20398.3%2064%20416%2064C433.7%2064%20448%2078.3%20448%2096L448%20128L480%20128C515.3%20128%20544%20156.7%20544%20192L544%20480C544%20515.3%20515.3%20544%20480%20544L160%20544C124.7%20544%2096%20515.3%2096%20480L96%20192C96%20156.7%20124.7%20128%20160%20128L192%20128L192%2096C192%2078.3%20206.3%2064%20224%2064zM160%20304L160%20336C160%20344.8%20167.2%20352%20176%20352L208%20352C216.8%20352%20224%20344.8%20224%20336L224%20304C224%20295.2%20216.8%20288%20208%20288L176%20288C167.2%20288%20160%20295.2%20160%20304zM288%20304L288%20336C288%20344.8%20295.2%20352%20304%20352L336%20352C344.8%20352%20352%20344.8%20352%20336L352%20304C352%20295.2%20344.8%20288%20336%20288L304%20288C295.2%20288%20288%20295.2%20288%20304zM432%20288C423.2%20288%20416%20295.2%20416%20304L416%20336C416%20344.8%20423.2%20352%20432%20352L464%20352C472.8%20352%20480%20344.8%20480%20336L480%20304C480%20295.2%20472.8%20288%20464%20288L432%20288zM160%20432L160%20464C160%20472.8%20167.2%20480%20176%20480L208%20480C216.8%20480%20224%20472.8%20224%20464L224%20432C224%20423.2%20216.8%20416%20208%20416L176%20416C167.2%20416%20160%20423.2%20160%20432zM304%20416C295.2%20416%20288%20423.2%20288%20432L288%20464C288%20472.8%20295.2%20480%20304%20480L336%20480C344.8%20480%20352%20472.8%20352%20464L352%20432C352%20423.2%20344.8%20416%20336%20416L304%20416zM416%20432L416%20464C416%20472.8%20423.2%20480%20432%20480L464%20480C472.8%20480%20480%20472.8%20480%20464L480%20432C480%20423.2%20472.8%20416%20464%20416L432%20416C423.2%20416%20416%20423.2%20416%20432z'/%3e%3c/svg%3e", import.meta.url).href,
    image: new URL("/apptask-dist/assets/img-weekly-C73XRmtS.png", import.meta.url).href,
    color: 'var(--light-beige)',
    description: 'Une liste pour organiser vos tâches de la semaine. Elle se réinitialise chaque lundi.'

  }

];

const whitecheck = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M530.8%20134.1C545.1%20144.5%20548.3%20164.5%20537.9%20178.8L281.9%20530.8C276.4%20538.4%20267.9%20543.1%20258.5%20543.9C249.1%20544.7%20240%20541.2%20233.4%20534.6L105.4%20406.6C92.9%20394.1%2092.9%20373.8%20105.4%20361.3C117.9%20348.8%20138.2%20348.8%20150.7%20361.3L252.2%20462.8L486.2%20141.1C496.6%20126.8%20516.6%20123.6%20530.9%20134z'/%3e%3c/svg%3e";

const dailyTaskList = [
      {
      "category": "hygiene",
      "tasks": [
        { "name": "wake_up", "label": "programmer l'alarme", "source": new URL("/apptask-dist/assets/reveil-XG1-hd0k.png", import.meta.url) },
        { "name": "wash_hands_morning", "label": "Se laver les mains (matin)", "source": new URL("/apptask-dist/assets/mains-BjVJyqsU.png", import.meta.url) },
        { "name": "eat_breakfast", "label": "Prendre le petit-déjeuner", "source": new URL("/apptask-dist/assets/ptitdej-B1L8G4tJ.png", import.meta.url) },        
        { "name": "eat_breakfast_vegan", "label": "Prendre le petit-déjeuner végétarien", "source": new URL("/apptask-dist/assets/ptitdej-vegan-D-UDuogE.png", import.meta.url) },        
        { "name": "brush_teeth_morning", "label": "Se brosser les dents (matin)", "source": new URL("/apptask-dist/assets/dents-CAukcV5-.png", import.meta.url) },
        { "name": "water_plants", "label": "Arroser les plantes", "source": new URL("/apptask-dist/assets/arroser-BxG-ICNl.png", import.meta.url) },
        { "name": "shower", "label": "Prendre une douche", "source": new URL("/apptask-dist/assets/douche-B0vpeP-A.png", import.meta.url) },
        { "name": "apply_deodorant", "label": "Mettre du déodorant", "source": new URL("/apptask-dist/assets/deodorant-ybRkL-CR.png", import.meta.url) },
        { "name": "apply_skincare", "label": "Appliquer des soins de la peau", "source": new URL("/apptask-dist/assets/peau-ByXfp7vv.png", import.meta.url) },
        { "name": "apply_perfume", "label": "Mettre du parfum", "source": new URL("/apptask-dist/assets/parfum-CLyVV224.png", import.meta.url) },
        { "name": "dress", "label": "S'habiller", "source": new URL("/apptask-dist/assets/habiller-T2eFCklI.png", import.meta.url) },
        { "name": "eat_lunch", "label": "Prendre le déjeuner", "source": new URL("/apptask-dist/assets/dej-normal-BISSrb71.png", import.meta.url) },
        { "name": "eat_lunch_vegan", "label": "Prendre le déjeuner végétarien", "source": new URL("/apptask-dist/assets/dej-vegan-B7BtFhx3.png", import.meta.url) },
        { "name": "comb_hair", "label": "Se coiffer", "source": new URL("/apptask-dist/assets/cheveux-BMlVD4_5.png", import.meta.url) },
        { "name": "makeup", "label": "Se maquiller", "source": new URL("/apptask-dist/assets/maquillage-CTuXuMGP.png", import.meta.url) },
        { "name": "jewelry", "label": "Mettre des bijoux", "source": new URL("/apptask-dist/assets/bijoux-DJN9PpV3.png", import.meta.url) },
        { "name": "eat_snack", "label": "Prendre un encas sain", "source": new URL("/apptask-dist/assets/encas-DkbX4O5O.png", import.meta.url) },
        { "name": "remove_makeup", "label": "Se démaquiller", "source": new URL("/apptask-dist/assets/demaquiller-3BzPjC9z.png", import.meta.url) },
        { "name": "cut_nails_check", "label": "Vérifier / entretenir les ongles", "source": new URL("/apptask-dist/assets/ongles-CfdnLdCJ.png", import.meta.url) },
        { "name": "shave_or_groom", "label": "Se raser / entretenir pilosité", "source": new URL("/apptask-dist/assets/poils-Bo__OETL.png", import.meta.url) },
        { "name": "apply_sunscreen", "label": "Appliquer protection solaire", "source": new URL("/apptask-dist/assets/solaire-Bil7BMT3.png", import.meta.url) },
        { "name": "eat_dinner", "label": "Prendre le dîner", "source": new URL("/apptask-dist/assets/dej-vegan-B7BtFhx3.png", import.meta.url) },
        { "name": "drink_green_tea", "label": "Se faire un thé vert", "source": new URL("/apptask-dist/assets/the-B_3heGwV.png", import.meta.url) },        
        { "name": "night_routine", "label": "Routine du soir (hygiène + détente)", "source": new URL("/apptask-dist/assets/soir-BttMM92a.png", import.meta.url) },
        { "name": "sweep_floor", "label": "Passer le balai", "source": new URL("/apptask-dist/assets/balai-DZP9WQd1.png", import.meta.url) },
        { "name": "mop_floor", "label": "Passer la serpillère", "source": new URL("/apptask-dist/assets/serpillere-Cb3bfWA0.png", import.meta.url) },
        { "name": "dust", "label": "Passer le plumeau", "source": new URL("/apptask-dist/assets/plumeau-CZEuGZXf.png", import.meta.url) },
        { "name": "clean_surfaces", "label": "Nettoyer les surfaces", "source": new URL("../assets/produits-ménage.png", import.meta.url) },
        
      ]
    },
     {
      "category": "linge",
      "tasks": [
        { "name": "change_clothes", "label": "Préparer des vêtements", "source": new URL("/apptask-dist/assets/preparer-linge-1EMpwrT8.png", import.meta.url) },
        { "name": "put_clothes_in_laundry", "label": "Mettre les vêtements au sale", "source": new URL("/apptask-dist/assets/linge-sale-BtUDHw3R.png", import.meta.url) },
        { "name": "iron_clothes", "label": "Repasser le linge", "source": new URL("/apptask-dist/assets/repasser-Bd3yn3Hm.png", import.meta.url) },
      ]
    },
    {
      "category": "rangement",
      "tasks": [
        { "name": "make_bed", "label": "Faire le lit", "source": new URL("/apptask-dist/assets/lit-DcMy09jO.png", import.meta.url) },
        { "name": "air_rooms", "label": "Aérer les pièces", "source": new URL("/apptask-dist/assets/aerer-DrELvJye.png", import.meta.url) },
        { "name": "clear_surfaces", "label": "Débarrasser", "source": new URL("/apptask-dist/assets/debarrasser-Bo_J_NGj.png", import.meta.url) },
        { "name": "tidy_toys", "label": "Ranger les jouets", "source": new URL("/apptask-dist/assets/ranger-jouets-0HVfAIBu.png", import.meta.url) },
        { "name": "tidy_sofa", "label": "Ranger le canapé", "source": new URL("/apptask-dist/assets/ranger-canape-EAqaPUKm.png", import.meta.url) },
        { "name": "organize_entry", "label": "Ranger l’entrée (chaussures, sacs, clés)", "source": new URL("/apptask-dist/assets/ranger-entree-BPTFRhdt.png", import.meta.url) },
        { "name": "quick_floor_clean", "label": "Ramasser au sol (jouets, déchets)", "source": new URL("/apptask-dist/assets/ramasser-sol-MGx28CPz.png", import.meta.url) },
        { "name": "wipe_table", "label": "Passer l'éponge", "source": new URL("/apptask-dist/assets/eponge-Dzz7GKf6.png", import.meta.url) },
        { "name": "empty_small_bins", "label": "Vider petites poubelles (salle de bain, bureau)", "source": new URL("/apptask-dist/assets/vider-poubelles-BMRa3gI-.png", import.meta.url) },
        { "name": "organize_work_area", "label": "Ranger espace de travail", "source": new URL("/apptask-dist/assets/ranger-bureau-zhShPelY.png", import.meta.url) },
        { "name": "take_out_trash_kitchen", "label": "Sortir la poubelle", "source": new URL("/apptask-dist/assets/sortir-poubelle-DjRmhGrb.png", import.meta.url) },

      ]
    },
    {
      "category": "cuisine",
      "tasks": [
        { "name": "check_fridge", "label": "Vérifier le frigo / les stocks ", "source": new URL("../assets/frigo.png", import.meta.url) },
        { "name": "set_table", "label": "Dresser la table", "source": new URL("/apptask-dist/assets/dresser-table-CtaurPQv.png", import.meta.url) },
        { "name": "store_leftovers", "label": "Ranger les restes", "source": new URL("/apptask-dist/assets/ranger-restes-nZTXZqK_.png", import.meta.url) },
        { "name": "prepare_lunchbox", "label": "Préparer la lunchbox", "source": new URL("/apptask-dist/assets/lunchbox-w4SOvs9j.png", import.meta.url) },
        { "name": "clean_sink", "label": "Nettoyer l’évier", "source": new URL("/apptask-dist/assets/nettoyer-evier-CMBwjh23.png", import.meta.url) },
        { "name": "refill_water", "label": "Remplir gourdes / carafes", "source": new URL("/apptask-dist/assets/remplir-gourdes-Cx9VOHbQ.png", import.meta.url) },
        { "name": "prepare_snack", "label": "Préparer une collation", "source": new URL("/apptask-dist/assets/preparer-collation-6Er_TlWh.png", import.meta.url) },
        { "name": "prepare_breakfast", "label": "Préparer le petit-déjeuner", "source": new URL("/apptask-dist/assets/cuisiner-DpoZsFVZ.png", import.meta.url) },
        { "name": "prepare_lunch", "label": "Préparer le déjeuner", "source": new URL("/apptask-dist/assets/cuisiner-DpoZsFVZ.png", import.meta.url) },
        { "name": "prepare_dinner", "label": "Préparer le dîner", "source": new URL("/apptask-dist/assets/cuisiner-DpoZsFVZ.png", import.meta.url) },
        { "name": "do_dishes", "label": "Faire la vaisselle", "source": new URL("/apptask-dist/assets/faire-vaisselle-zdpqSiYc.png", import.meta.url) },
        { "name": "fill_dishwasher", "label": "Remplir le lave-vaisselle", "source": new URL("/apptask-dist/assets/remplir-lave-vaisselle-OXm4y6TQ.png", import.meta.url) },
        { "name": "put_away_dishes", "label": "Ranger la vaisselle", "source": new URL("/apptask-dist/assets/ranger-vaisselle-DWXuzfxu.png", import.meta.url) },
        { "name": "empty_dishwasher", "label": "Vider le lave-vaisselle", "source": new URL("/apptask-dist/assets/vider-lave-vaisselle-bKVGIpx2.png", import.meta.url) },
        { "name": "defrost_food", "label": "Décongeler aliments", "source": new URL("/apptask-dist/assets/decongeler-aliments-CPHKVKxZ.png", import.meta.url) },

      ]
    },
    {
      "category": "enfants/bébés",
      "tasks": [
        { "name": "wake_children", "label": "Réveiller les enfants" },
        { "name": "prepare_children", "label": "Rappeler les tâches aux enfants" },
        { "name": "school_dropoff", "label": "Amener les enfants à l'école" },
        { "name": "homework_help", "label": "Aider aux devoirs" },
        { "name": "do_homework", "label": "Faire les devoirs" },
        { "name": "bath_children", "label": "Donner le bain aux enfants" },
        { "name": "bedtime_children", "label": "Coucher les enfants" },
        { "name": "check_children_state", "label": "Observer l’état des enfants (fatigue, humeur, santé)" },
        { "name": "ask_children_favorites", "label": "Demander aux enfants ce qu'ils ont aimé aujourd'hui" },
        { "name": "ask_children_dislikes", "label": "Demander aux enfants ce qu'ils n'ont pas aimé aujourd'hui" },
        { "name": "dress_children", "label": "Habiller les enfants" },
        { "name": "prepare_school_bag", "label": "Préparer sac / affaires école" },
        { "name": "school_pickup", "label": "Récupérer les enfants" },
        { "name": "give_snack", "label": "Donner goûter / collation" },
        { "name": "educational_activity", "label": "Proposer une activité éducative" },
        { "name": "play_time", "label": "Temps de jeu / interaction" },
        { "name": "manage_conflicts", "label": "Gérer conflits / émotions" },
        { "name": "screen_time_management", "label": "Gérer le temps d’écran" },
        { "name": "bedtime_routine", "label": "Routine du coucher (histoire, câlin, apaisement)" },
        { "name": "night_check", "label": "Vérification nocturne" }
      ]
    },

    {
      "category": "gestion",
      "tasks": [
        { "name": "check_calendar", "label": "Vérifier le planning de la journée" },
        { "name": "check_messages", "label": "Consulter messages / mails importants" },
        { "name": "manage_budget", "label": "Vérifier dépenses du jour" },
        { "name": "prioritize_tasks", "label": "Prioriser les tâches essentielles" },
        { "name": "respond_messages", "label": "Répondre aux messages urgents" },
        { "name": "handle_urgent_admin", "label": "Gérer une tâche administrative urgente" },
        { "name": "track_expenses", "label": "Noter les dépenses du jour" },
        { "name": "check_bank_account", "label": "Vérifier le compte bancaire" },
        { "name": "plan_next_day", "label": "Préparer le lendemain" }
      ]
    },
    {
      "category": "sante",
      "tasks": [
        { "name": "take_medication", "label": "Prendre vitamines/compléments alimentaires" },
        { "name": "rest", "label": "Prendre un moment de repos" },
        { "name": "move_body", "label": "Faire une activité physique légère" },
        { "name": "go_for_walk", "label": "Faire une balade" },
        { "name": "get_fresh_air", "label": "S'exposer à la lumière du jour" },
        { "name": "sleep_preparation", "label": "Préparer le sommeil (routine calme)" },
        { "name": "read_book", "label": "Lire un livre" },
        { "name": "body_signal_check", "label": "Écouter son corps (douleurs, fatigue)" },
        { "name": "emotional_check", "label": "Identifier son état émotionnel" },
        { "name": "take_me_time", "label": "Prendre un moment pour soi" }


 /* CATERGORY SANTÉ SUPPRIMÉE POUR LE MOMENT, À RÉINTÉGRER DANS L'applications suivi

        { "id": "drink_water", "label": "Boire suffisamment d'eau" },
        { "id": "rest", "label": "Prendre un moment de repos" },
         { "id": "drink_water_check", "label": "Boire de l’eau régulièrement" },
    { "id": "eat_balanced_meal", "label": "Manger un repas équilibré" },
    { "id": "take_medication", "label": "Prendre traitement / vitamines" },
    { "id": "move_body", "label": "Bouger (marche, activité physique légère)" },
    { "id": "stretch_body", "label": "S’étirer / mobilité douce" },
    { "id": "get_fresh_air", "label": "Prendre l’air / exposition à la lumière du jour" },
    { "id": "rest_break", "label": "Prendre une pause (physique ou mentale)" },
    { "id": "breathing_exercise", "label": "Faire un exercice de respiration" },
    { "id": "limit_screens", "label": "Limiter les écrans (moment choisi)" },
    { "id": "sleep_check", "label": "Vérifier qualité / durée du sommeil" },
    { "id": "emotional_check", "label": "Identifier son état émotionnel" },
*/
      ]
    },
    {
      "category": "exterieur",
      "tasks": [
        { "name": "transport", "label": "Prévoir les déplacements (voiture, bus, etc.)" },
        { "name": "prepare_to_leave", "label": "Se regarder dans le miroir avant de partir" },
        { "name": "check_weather", "label": "Vérifier la météo" },
        { "name": "take_keys", "label": "Prendre les clés" },
        { "name": "take_phones", "label": "Prendre les téléphones" },
        { "name": "take_wallet", "label": "Prendre le portefeuille" },
        { "name": "take_bags", "label": "Prendre les sacs" },
        { "name": "secure_home", "label": "Sécuriser la maison (fermer portes, fenêtres)" },
        { "name": "deposit_mail", "label": "Déposer le courrier/colis" },
        { "name": "take_mail", "label": "Prendre le courrier/colis" },
        { "name": "wait_time_use", "label": "Utiliser temps d’attente (lire, écouter un podcast, se reposer)" },
      ]
    },
    {
        "category": "nettoyage",
        "tasks": [
        { "name": "brush_floor", "label": "Passer le balai" },
        { "name": "clean_floor", "label": "Passer la serpillère" },
        ]
    }
  
];

const weeklyTaskList = [
        {
      "category": "linge",
      "tasks": [
        { "name": "laundry_check", "label": "Vérifier le linge sale", "source": new URL("/apptask-dist/assets/linge-sale-BtUDHw3R.png", import.meta.url) },
        { "name": "sort_laundry", "label": "Trier le linge (couleurs, matières)", "source": new URL("../assets/trier-linge.png", import.meta.url) },
        { "name": "check_pockets", "label": "Vérifier les poches", "source": new URL("../assets/verifier-poches.png", import.meta.url) },
        { "name": "change_towels", "label": "Changer les serviettes", "source": new URL("../assets/changer-serviettes.png", import.meta.url) },
        { "name": "start_laundry", "label": "Lancer une machine de vêtements", "source": new URL("../assets/lancer-machine.png", import.meta.url) },
        { "name": "start_white_laundry", "label": "Lancer une machine de vêtements blancs", "source": new URL("../assets/lancer-machine-blancs.png", import.meta.url) },
        { "name": "start_red_laundry", "label": "Lancer une machine de vêtements rouges", "source": new URL("../assets/lancer-machine-rouges.png", import.meta.url) },
        { "name": "start_baby_laundry", "label": "Lancer une machine de vêtements bébé", "source": new URL("../assets/lancer-machine-bebe.png", import.meta.url) },
        { "name": "start_home_laundry", "label": "Lancer une machine de linges de maison", "source": new URL("../assets/lancer-machine-linge-maison.png", import.meta.url) },
        { "name": "start_mop_laundry", "label": "Lancer une machine de serpillères et torchons", "source": new URL("../assets/lancer-machine-serpillere-torchons.png", import.meta.url) },
        { "name": "start_dark_laundry", "label": "Lancer une machine de vêtements foncés", "source": new URL("../assets/lancer-machine-fonces.png", import.meta.url) },
        { "name": "start_light_laundry", "label": "Lancer une machine de vêtements clairs", "source": new URL("../assets/lancer-machine-clairs.png", import.meta.url) },
        { "name": "change_bed_sheets", "label": "Changer les draps", "source": new URL("../assets/changer-draps.png", import.meta.url) },
        { "name": "hang_laundry", "label": "Étendre le linge", "source": new URL("../assets/etendre-linge.png", import.meta.url) },
        { "name": "fold_laundry", "label": "Plier le linge", "source": new URL("../assets/plier-linge.png", import.meta.url) },
        { "name": "store_laundry", "label": "Ranger le linge", "source": new URL("../assets/ranger-linge.png", import.meta.url) },
        { "name": "iron_clothes", "label": "Repasser le linge", "source": new URL("../assets/repasser-linge.png", import.meta.url) },
        { "name": "check_laundry_supplies", "label": "Vérifier lessive / produits", "source": new URL("../assets/verifier-produits.png", import.meta.url) }
      ]
    },
    {
      "category": "gestion",
      "tasks": [
        { "name": "check_calendar", "label": "Vérifier le planning de la semaine", "source": new URL("../assets/verifier-planning.png", import.meta.url) },
        { "name": "manage_budget", "label": "Vérifier dépenses de la semaine", "source": new URL("../assets/verifier-depenses.png", import.meta.url) },
        { "name": "check_bank_account", "label": "Vérifier le compte bancaire", "source": new URL("../assets/verifier-compte.png", import.meta.url) },
        { "name": "check_finances", "label": "Vérifier les finances", "source": new URL("../assets/verifier-finances.png", import.meta.url) },
        { "name": "pay_bills_if_needed", "label": "Payer factures", "source": new URL("../assets/payer-factures.png", import.meta.url) },
        { "name": "update_todo_task", "label": "Mettre à jour la task de tâches", "source": new URL("../assets/metre-a-jour-taches.png", import.meta.url) },
        { "name": "plan_weekend", "label": "Planifier le week-end", "source": new URL("../assets/planifier-weekend.png", import.meta.url) },
        { "name": "anticipate_pharmacy_purchases", "label": "Anticiper les achats en pharmacie", "source": new URL("../assets/anticiper-achats-pharmacie.png", import.meta.url) },
        { "name": "purchases", "label": "Faire les courses", "source": new URL("../assets/faire-courses.png", import.meta.url) },
        { "name": "store_purchases", "label": "Ranger les courses", "source": new URL("../assets/ranger-courses.png", import.meta.url) },
        { "name": "take_grocery_bags", "label": "Prendre les sacs de courses", "source": new URL("../assets/prendre-sacs-courses.png", import.meta.url) },
        { "name": "sort_papers", "label": "Trier papiers / courrier", "source": new URL("../assets/trier-papiers.png", import.meta.url) },
        { "name": "organize_activities", "label": "Organiser activités enfants", "source": new URL("../assets/organiser-activites-enfants.png", import.meta.url) },
        { "name": "clear_notifications", "label": "Nettoyer les messages/mails inutiles", "source": new URL("../assets/nettoyer-messages.png", import.meta.url) },
        { "name": "clear_photos", "label": "Nettoyer les photos inutiles", "source": new URL("../assets/nettoyer-photos.png", import.meta.url) },
        { "name": "organize_vacation", "label": "Organiser les prochaines vacances", "source": new URL("../assets/organiser-vacances.png", import.meta.url) },
        { "name": "organize_outings", "label": "Organiser les prochaines sorties", "source": new URL("../assets/organiser-sorties.png", import.meta.url) },
        { "name": "organize_family_meetings", "label": "Organiser les prochaines rencontres familiales", "source": new URL("../assets/organiser-rencontres-familiales.png", import.meta.url) },
      ]
    },
    {
    "category": "cuisine",
      "tasks": [
        { "name": "plan_meals", "label": "Planifier les repas de la semaine", "source": new URL("../assets/planifier-repas.png", import.meta.url) },
        { "name": "meal_prep", "label": "Préparer les repas à l'avance", "source": new URL("../assets/preparer-repas.png", import.meta.url) },
        { "name": "clean_fridge_quick", "label": "Nettoyage rapide du frigo", "source": new URL("../assets/nettoyer-frigo.png", import.meta.url) }
      ]
    },
    {
      "category": "nettoyage",
      "tasks": [
        { "name": "brush_floor", "label": "Passer le balai", "source": new URL("../assets/passer-balai.png", import.meta.url) },
        { "name": "clean_floor", "label": "Passer la serpillère", "source": new URL("../assets/passer-serpillere.png", import.meta.url) },
        { "name": "clean_kitchen", "label": "Nettoyer les équipements de la cuisine", "source": new URL("../assets/nettoyer-cuisine.png", import.meta.url) },
        { "name": "dust_furniture", "label": "Dépoussiérer", "source": new URL("../assets/depoussiere.png", import.meta.url) },
        { "name": "clean_windows", "label": "Nettoyer les fenêtres", "source": new URL("../assets/nettoyer-fenetres.png", import.meta.url) },
        { "name": "wipe_sink_bathroom", "label": "Nettoyer lavabo", "source": new URL("../assets/nettoyer-lavabo.png", import.meta.url) },
        { "name": "wipe_mirror", "label": "Nettoyer miroir", "source": new URL("../assets/nettoyer-miroir.png", import.meta.url) },
        { "name": "clean_shower", "label": "Nettoyer la douche", "source": new URL("../assets/nettoyer-douche.png", import.meta.url) },
        { "name": "clean_bathtub", "label": "Nettoyer la baignoire", "source": new URL("../assets/nettoyer-baignoire.png", import.meta.url) },
        { "name": "clean_sink_bathroom", "label": "Nettoyer lavabo", "source": new URL("../assets/nettoyer-lavabo.png", import.meta.url) },
        { "name": "clean_switches", "label": "Nettoyer les interrupteurs", "source": new URL("../assets/nettoyer-interrupteurs.png", import.meta.url) },
        { "name": "clean_doorknobs", "label": "Nettoyer les poignées de porte", "source": new URL("../assets/nettoyer-poignees.png", import.meta.url) },
        { "name": "clean_light_fixtures", "label": "Nettoyer les luminaires", "source": new URL("../assets/nettoyer-luminaires.png", import.meta.url) },
        { "name": "clean_exterior", "label": "Nettoyer les extérieurs", "source": new URL("../assets/nettoyer-exterieurs.png", import.meta.url) },
        { "name": "clean_toilets", "label": "Nettoyer les toilettes", "source": new URL("../assets/nettoyer-toilettes.png", import.meta.url) },
        { "name": "clean_walls", "label": "Nettoyer les murs", "source": new URL("../assets/nettoyer-murs.png", import.meta.url) },
        { "name": "clean_splashes", "label": "Nettoyer les éclaboussures", "source": new URL("../assets/nettoyer-eclaboussures.png", import.meta.url) },
        { "name": "clean_stove", "label": "Nettoyer la cuisinière", "source": new URL("../assets/nettoyer-cuisiniere.png", import.meta.url) },
        { "name": "clean_oven", "label": "Nettoyer le four", "source": new URL("../assets/nettoyer-four.png", import.meta.url) },
      ]
    },
    {
      "category": "sante_bien_etre",  
      "tasks": [
        { "name": "self_check_week", "label": "Faire un point sur son état (fatigue, stress)", "source": new URL("../assets/faire-point-etat.png", import.meta.url) },
        { "name": "plan_rest_time", "label": "Prévoir un moment de repos", "source": new URL("../assets/prevoir-repos.png", import.meta.url) },
      ]
    }
];

const {defineStore} = await importShared('pinia');

const {ref: ref$8,computed: computed$5} = await importShared('vue');
//import * as taskApi from '../api/task.api.js' // Importation de l'API pour les task (à implémenter)


const useTaskStore = defineStore('task', () => {
    const tasksLists = ref$8([]); // Stocke les task de l'utilisateur
    const selectedTasksList = ref$8(null); // Stocke la task actuellement sélectionnée pour affichage ou modification
    const creatingTasksList = ref$8(false); // Indique si l'utilisateur est en train de créer une nouvelle task
    const title = ref$8(''); // Stocke le titre de la task en cours de création ou de modification
    const type = ref$8('daily'); // Stocke le type de task (quotidienne, hebdo, etc.) en cours de création ou de modification 
    const showTasksListResults = ref$8(false); // Indique si les résultats de la task sélectionnée doivent être affichés (pour mobile)
    const showTasksListSelection = ref$8(false); // Indique si la sélection de la task doit être affichée (pour mobile)
    const tasksAdded = ref$8([]); // Stocke les tâches ajoutées à la taskList sélectionnée (pour affichage ou modification)
    const tasksAddedLength = computed$5(() => tasksAdded.value.length || 0); // Stocke le nombre de tâches ajoutées à la taskList sélectionnée (pour affichage ou modification)
    const showDeleteConfirmationTasksList = ref$8(false); // Indique si la confirmation de suppression d'une task doit être affichée
    const showDeleteConfirmationTask = ref$8(false); // Indique si la confirmation de suppression d'une tâche doit être affichée
    const toDeleteId = ref$8(null); // Stocke l'ID de la task à supprimer
    const toDeleteName = ref$8(''); // Stocke le nom de la task à supprimer
    const toDeleteImg = ref$8(''); // Stocke l'image de la task à supprimer

    const accordingToType = computed$5(() => {

    switch (selectedTasksList.value?.type) { // Computed pour déterminer la liste de tâches à afficher en fonction du type de task sélectionnée

        case 'daily':
        return dailyTaskList

        case 'weekly':
        return weeklyTaskList

        default:
        return []

    }

    });

//----------------------------- Les fonctions ---------------------------------------------------   
    
    //fonction pour intialiser les tasks
    const initializeTasksList = () => {
        try {
            const storedTasks = localStorage.getItem('tasksList'); // Récupère les tasks du localStorage
            if (storedTasks) {
                tasksLists.value = JSON.parse(storedTasks); // Parse les tasks et les stocke dans la variable reactive
            }
        } catch (error) {
            console.error('Erreur lors de l\'initialisation des tasks:', error);
        }
    };
 
    // Fonction pour créer une nouvelle task
    const createTasksList = () => {
        if (!title.value.trim()) return // Ne pas créer de task si le titre est vide
        try {
            const newTask = { 
                _id: Date.now(), // Utilise un timestamp comme ID unique pour la task
                title: title.value,
                type: type.value,
                items: []
                }; // Crée un objet task
            tasksLists.value.push(newTask); // Ajouter la nouvelle task à la liste des tasks
            title.value = ''; // Réinitialiser le champ de titre
            type.value = 'daily'; // Réinitialiser le type de task
            creatingTasksList.value = false; // Sortir du mode création
            //j'envois au localStorage
            localStorage.setItem('tasksList', JSON.stringify(tasksLists.value));
        } catch (error) {
            console.error('Erreur lors de la création de la task:', error);
        }
    };

    const selectTasksList = (taskId) => {
        selectedTasksList.value = tasksLists.value.find(t => t._id === taskId) || null; // Trouve la task par son ID et la stocke dans selectedTasksList
        showTasksListResults.value = true; // Affiche les résultats de la task sélectionnée (pour mobile)
    };   

    const editTasksListTitle = (event, taskId, newTitle) => {
        event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la task avant de la modifier
        const task = tasksLists.value.find(t => t._id === taskId); // Trouve la task à modifier par son ID
        if (task) {
            task.title = newTitle; // Met à jour le titre de la task
            localStorage.setItem('tasksList', JSON.stringify(tasksLists.value)); // Met à jour les tasks dans le localStorage
        }
    };  
    const deleteTasksList = ( TaskListId) => {
        tasksLists.value = tasksLists.value.filter(t => t._id !== TaskListId); // Supprime la task de la liste des tasks
        localStorage.setItem('tasksList', JSON.stringify(tasksLists.value)); // Met à jour les tasks dans le localStorage
        showDeleteConfirmationTasksList.value = false; // Ferme la confirmation de suppression
        toDeleteId.value = null;
        toDeleteName.value = '';
        toDeleteImg.value = '';
        if (selectedTasksList.value && selectedTasksList.value._id === TaskListId) {
            selectedTasksList.value = null; // Si la task supprimée était sélectionnée, réinitialise la sélection
            showTasksListResults.value = false; // Masque les résultats de la task sélectionnée (pour mobile)
        }

    }; 
// fonctions pour les tâches à l'intérieur d'une taskList

    //ajouter une tâche à la taskList sélectionnée
    const addTask = (newTask) => {
        if (selectedTasksList.value) {
            const taskToAdd = {
                _id: Date.now(), // Utilise un timestamp comme ID unique pour la tâche
                ...newTask,
                done: false,  // Ajoute une propriété pour indiquer si la tâche est complétée ou non
                selected: true, // Ajoute une propriété pour indiquer si la tâche est sélectionnée ou non
                order: tasksAdded.value.length // Ajoute une propriété pour indiquer l'ordre de la tâche
            };
            console.log('Nouvelle tâche à ajouter:', taskToAdd); // Affiche la nouvelle tâche dans la console pour vérification
            tasksAdded.value.push(taskToAdd); // Ajoute la tâche à la liste des tâches ajoutées
            selectedTasksList.value.items.push(taskToAdd); // Ajoute la tâche à la taskList sélectionnée
            localStorage.setItem('tasksList', JSON.stringify(tasksLists.value)); // Met à jour les tasks dans le localStorage
        }
    };
    //mettre à jour l'état des tâches
    const updateTaskStatus = (taskId, done) => {
        if (selectedTasksList.value) {
            const task = selectedTasksList.value.items.find(t => t._id === taskId); // Trouve la tâche à mettre à jour par son ID
            if (task) {
                task.done = done; // Met à jour l'état de la tâche
                localStorage.setItem('tasksList', JSON.stringify(tasksLists.value)); // Met à jour les tasks dans le localStorage
            }
        }
    };
    //supprimer une tâche de la taskList sélectionnée
    const deleteTask = (TaskId) => {
        if (selectedTasksList.value) {
            selectedTasksList.value.items = selectedTasksList.value.items.filter(t => t._id !== TaskId); // Supprime la tâche de la taskList sélectionnée
            tasksAdded.value = tasksAdded.value.filter(t => t._id !== TaskId); // Supprime la tâche de la liste des tâches ajoutées
            localStorage.setItem('tasksList', JSON.stringify(tasksLists.value)); // Met à jour les tasks dans le localStorage
            showDeleteConfirmationTask.value = false; // Ferme la confirmation de suppression
            toDeleteId.value = null;
            toDeleteName.value = '';
            toDeleteImg.value = '';
        }
    };
 
    // Retourne les données et les fonctions pour être utilisées dans les composants
    return {
        tasksLists,
        selectedTasksList,
        creatingTasksList,
        title,
        type,
        showTasksListResults,
        showTasksListSelection,
        toDeleteId,
        toDeleteName,
        toDeleteImg,
        showDeleteConfirmationTasksList,
        showDeleteConfirmationTask,
        tasksAdded,
        tasksAddedLength,
        accordingToType,
        initializeTasksList,
        createTasksList,
        selectTasksList,
        editTasksListTitle,
        deleteTasksList,
        addTask,
        updateTaskStatus,
        deleteTask
    }       
});

const {createElementVNode:_createElementVNode$8,unref:_unref$6,vModelText:_vModelText$1,withDirectives:_withDirectives$1,renderList:_renderList$3,Fragment:_Fragment$3,openBlock:_openBlock$8,createElementBlock:_createElementBlock$8,toDisplayString:_toDisplayString$6,normalizeClass:_normalizeClass$2,createCommentVNode:_createCommentVNode$7,withModifiers:_withModifiers$3} = await importShared('vue');


const _hoisted_1$7 = { class: "choose-task-title-form" };
const _hoisted_2$7 = { class: "input-group" };
const _hoisted_3$6 = {
  key: 0,
  class: "input-group"
};
const _hoisted_4$6 = { class: "type-select" };
const _hoisted_5$5 = ["onClick"];
const _hoisted_6$3 = { class: "type-name" };
const _hoisted_7$2 = { class: "selection-style" };
const _hoisted_8$2 = ["src"];
const _hoisted_9$2 = ["src"];
const _hoisted_10$1 = { class: "type-description" };
const _hoisted_11 = { class: "action-buttons" };

const {computed: computed$4,ref: ref$7} = await importShared('vue');


const _sfc_main$7 = {
  __name: 'chooseTaskTitle',
  setup(__props) {


const taskStore = useTaskStore(); // Utilisation du store pour les tasks avec Pinia
const selectedType = ref$7(typeTask[0].type); // Variable pour stocker le type de budget sélectionné, initialisée au premier type disponible
const selectColor = ref$7(typeTask[0].color); // Variable pour stocker la couleur du type de budget sélectionné

//Fermeture du formulaire de création de task
const closeForm = () => {
  taskStore.title = '';
  taskStore.type = 'quotidiennes';
  taskStore.creatingTasksList = false; // Ferme le formulaire de création de task
};


return (_ctx, _cache) => {
  return (_openBlock$8(), _createElementBlock$8("div", _hoisted_1$7, [
    _cache[6] || (_cache[6] = _createElementVNode$8("div", { class: "form-header" }, [
      _createElementVNode$8("h3", { class: "form-title" }, "Créer une nouvelle liste de tâches ✨")
    ], -1)),
    _cache[7] || (_cache[7] = _createElementVNode$8("p", { class: "form-subtitle" }, "Donnez un nom à votre liste de tâches pour mieux vous organiser ✨", -1)),
    _createElementVNode$8("form", {
      onSubmit: _cache[2] || (_cache[2] = _withModifiers$3($event => (_unref$6(taskStore).createTasksList()), ["prevent"]))
    }, [
      _createElementVNode$8("div", _hoisted_2$7, [
        _cache[3] || (_cache[3] = _createElementVNode$8("label", {
          class: "subtitle",
          for: "title"
        }, "Nom de la liste de tâches :", -1)),
        _withDirectives$1(_createElementVNode$8("input", {
          class: "title-input",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_unref$6(taskStore).title) = $event)),
          type: "text",
          placeholder: "Ma super liste de tâches"
        }, null, 512), [
          [_vModelText$1, _unref$6(taskStore).title]
        ])
      ]),
      (_unref$6(typeTask).length > 1)
        ? (_openBlock$8(), _createElementBlock$8("div", _hoisted_3$6, [
            _cache[4] || (_cache[4] = _createElementVNode$8("p", {
              class: "subtitle",
              for: "type"
            }, "Fréquence :", -1)),
            _createElementVNode$8("div", _hoisted_4$6, [
              (_openBlock$8(true), _createElementBlock$8(_Fragment$3, null, _renderList$3(_unref$6(typeTask), (item) => {
                return (_openBlock$8(), _createElementBlock$8("div", {
                  class: _normalizeClass$2(["type-option", { selected: selectedType.value === item.type }]),
                  key: item.type,
                  onClick: $event => (selectedType.value = item.type, selectColor.value = item.color, _unref$6(taskStore).type = item.type)
                }, [
                  _createElementVNode$8("p", _hoisted_6$3, _toDisplayString$6(item.label), 1),
                  _createElementVNode$8("div", _hoisted_7$2, [
                    _createElementVNode$8("img", {
                      class: _normalizeClass$2(item.type === selectedType.value ? 'checked-selection' : 'not-checked-selection'),
                      src: _unref$6(whitecheck),
                      alt: "icône de validation"
                    }, null, 10, _hoisted_8$2),
                    _createElementVNode$8("img", {
                      class: _normalizeClass$2(item.type === selectedType.value ? 'type-image-selected' : 'type-image'),
                      src: item.image,
                      alt: ""
                    }, null, 10, _hoisted_9$2)
                  ])
                ], 10, _hoisted_5$5))
              }), 128))
            ]),
            _createElementVNode$8("p", _hoisted_10$1, _toDisplayString$6(_unref$6(typeTask).find(item => item.type === selectedType.value)?.description), 1)
          ]))
        : _createCommentVNode$7("", true),
      _createElementVNode$8("div", _hoisted_11, [
        _createElementVNode$8("button", {
          class: "secondary-button",
          type: "button",
          onClick: _cache[1] || (_cache[1] = $event => (closeForm()))
        }, " Annuler "),
        _cache[5] || (_cache[5] = _createElementVNode$8("button", {
          class: "super-action-button submit-button",
          type: "submit"
        }, " Créer ", -1))
      ])
    ], 32)
  ]))
}
}

};

const {createElementVNode:_createElementVNode$7,toDisplayString:_toDisplayString$5,openBlock:_openBlock$7,createElementBlock:_createElementBlock$7,createCommentVNode:_createCommentVNode$6,vModelText:_vModelText,unref:_unref$5,withKeys:_withKeys,withDirectives:_withDirectives} = await importShared('vue');


const _hoisted_1$6 = { class: "task-title-button" };
const _hoisted_2$6 = { class: "task-title-content" };
const _hoisted_3$5 = ["src"];
const _hoisted_4$5 = {
  key: 0,
  class: "button-text"
};
const _hoisted_5$4 = {
  key: 0,
  class: "action-icons"
};
const _hoisted_6$2 = ["src"];
const _hoisted_7$1 = ["src"];
const _hoisted_8$1 = {
  key: 1,
  class: "action-icons"
};
const _hoisted_9$1 = ["src"];
const _hoisted_10 = ["src"];

const {computed: computed$3,ref: ref$6,onMounted: onMounted$4} = await importShared('vue');


const _sfc_main$6 = {
  __name: 'TaskTitle',
  props: {
  title: {
    type: String,
    required: true,
      },
  taskId: {
    type: [String, Number],
    required: true
      },
  type: {
    type: String, // 
    required: true,
    validator: (value) => {
      return typeTask.some(item => item.type === value) // Vérifie que le type est valide en comparant avec les types définis dans typeTask
    }
  }
},
  setup(__props) {

const taskStore = useTaskStore();

//--------------------------Base du template-------------------------
const pencil = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M100.4%20417.2C104.5%20402.6%20112.2%20389.3%20123%20378.5L304.2%20197.3L338.1%20163.4C354.7%20180%20389.4%20214.7%20442.1%20267.4L476%20301.3L442.1%20335.2L260.9%20516.4C250.2%20527.1%20236.8%20534.9%20222.2%20539L94.4%20574.6C86.1%20576.9%2077.1%20574.6%2071%20568.4C64.9%20562.2%2062.6%20553.3%2064.9%20545L100.4%20417.2zM156%20413.5C151.6%20418.2%20148.4%20423.9%20146.7%20430.1L122.6%20517L209.5%20492.9C215.9%20491.1%20221.7%20487.8%20226.5%20483.2L155.9%20413.5zM510%20267.4C493.4%20250.8%20458.7%20216.1%20406%20163.4L372%20129.5C398.5%20103%20413.4%2088.1%20416.9%2084.6C430.4%2071%20448.8%2063.4%20468%2063.4C487.2%2063.4%20505.6%2071%20519.1%2084.6L554.8%20120.3C568.4%20133.9%20576%20152.3%20576%20171.4C576%20190.5%20568.4%20209%20554.8%20222.5C551.3%20226%20536.4%20240.9%20509.9%20267.4z'/%3e%3c/svg%3e", import.meta.url).href;
const trash = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M232.7%2069.9L224%2096L128%2096C110.3%2096%2096%20110.3%2096%20128C96%20145.7%20110.3%20160%20128%20160L512%20160C529.7%20160%20544%20145.7%20544%20128C544%20110.3%20529.7%2096%20512%2096L416%2096L407.3%2069.9C402.9%2056.8%20390.7%2048%20376.9%2048L263.1%2048C249.3%2048%20237.1%2056.8%20232.7%2069.9zM512%20208L128%20208L149.1%20531.1C150.7%20556.4%20171.7%20576%20197%20576L443%20576C468.3%20576%20489.3%20556.4%20490.9%20531.1L512%20208z'/%3e%3c/svg%3e", import.meta.url).href;
const check = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='%234caf8d'%20d='M530.8%20134.1C545.1%20144.5%20548.3%20164.5%20537.9%20178.8L281.9%20530.8C276.4%20538.4%20267.9%20543.1%20258.5%20543.9C249.1%20544.7%20240%20541.2%20233.4%20534.6L105.4%20406.6C92.9%20394.1%2092.9%20373.8%20105.4%20361.3C117.9%20348.8%20138.2%20348.8%20150.7%20361.3L252.2%20462.8L486.2%20141.1C496.6%20126.8%20516.6%20123.6%20530.9%20134z'/%3e%3c/svg%3e", import.meta.url).href;
const cross = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23e35d6a'%20d='M183.1%20137.4C170.6%20124.9%20150.3%20124.9%20137.8%20137.4C125.3%20149.9%20125.3%20170.2%20137.8%20182.7L275.2%20320L137.9%20457.4C125.4%20469.9%20125.4%20490.2%20137.9%20502.7C150.4%20515.2%20170.7%20515.2%20183.2%20502.7L320.5%20365.3L457.9%20502.6C470.4%20515.1%20490.7%20515.1%20503.2%20502.6C515.7%20490.1%20515.7%20469.8%20503.2%20457.3L365.8%20320L503.1%20182.6C515.6%20170.1%20515.6%20149.8%20503.1%20137.3C490.6%20124.8%20470.3%20124.8%20457.8%20137.3L320.5%20274.7L183.1%20137.4z'/%3e%3c/svg%3e", import.meta.url).href;

const props = __props;

//---------------------------GESTION DE L'ÉDITION ET DE LA SUPPRESSION DE Liste de tache-------------------------

computed$3(() => props.title); // Computed pour le titre de la budget
const newTitle = ref$6(props.title); // Variable réactive pour stocker le nouveau titre lors de l'édition

const icon = computed$3(() => { // Computed pour déterminer la couleur de fond en fonction du type de budget
  const typeInfo = typeTask.find(item => item.type === props.type); // Trouve les informations du type de budget dans le tableau typeTask
  return typeInfo ? typeInfo.icon : null // Retourne la couleur correspondante ou rouge si le type n'est pas trouvé
});

onMounted$4(() => {
});
const isEditing = ref$6(false); // Variable réactive pour contrôler le mode édition
const stopPropagation = (event) => {
  event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la budget avant de la supprimer
};
// Emit pour les actions d'édition et de suppression

const updatemode = (event) => {
  event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la budget avant de la supprimer
  isEditing.value = true; // Bascule le mode édition
};

const endUpdatemode = (event) => {
  event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la budget avant de la supprimer
  isEditing.value = false; // Désactive le mode édition
  newTitle.value = props.title; // Réinitialise le titre à l'original en cas d'annulation
};
const closeEditMode = () => {
  isEditing.value = false; // Désactive le mode édition
};


return (_ctx, _cache) => {
  return (_openBlock$7(), _createElementBlock$7("button", _hoisted_1$6, [
    _createElementVNode$7("div", _hoisted_2$6, [
      _createElementVNode$7("img", {
        src: icon.value,
        alt: "taches journalières",
        class: "icon-type"
      }, null, 8, _hoisted_3$5),
      (!isEditing.value)
        ? (_openBlock$7(), _createElementBlock$7("p", _hoisted_4$5, _toDisplayString$5(newTitle.value), 1))
        : _withDirectives((_openBlock$7(), _createElementBlock$7("input", {
            key: 1,
            class: "input-edit",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((newTitle).value = $event)),
            onKeyup: _cache[1] || (_cache[1] = _withKeys($event => {_unref$5(taskStore).editTasksListTitle($event, __props.taskId, newTitle.value); closeEditMode();}, ["enter"])),
            onClick: _cache[2] || (_cache[2] = $event => (stopPropagation($event)))
          }, null, 544)), [
            [_vModelText, newTitle.value]
          ])
    ]),
    (!isEditing.value)
      ? (_openBlock$7(), _createElementBlock$7("div", _hoisted_5$4, [
          _createElementVNode$7("img", {
            class: "icon-edit",
            src: _unref$5(pencil),
            alt: "modifier",
            onClick: updatemode
          }, null, 8, _hoisted_6$2),
          _createElementVNode$7("img", {
            class: "icon-edit",
            src: _unref$5(trash),
            alt: "supprimer",
            onClick: _cache[3] || (_cache[3] = $event => {_unref$5(taskStore).showDeleteConfirmationTasksList = true; _unref$5(taskStore).toDeleteId = __props.taskId; _unref$5(taskStore).toDeleteName = newTitle.value;})
          }, null, 8, _hoisted_7$1)
        ]))
      : (_openBlock$7(), _createElementBlock$7("div", _hoisted_8$1, [
          _createElementVNode$7("img", {
            class: "icon-edit",
            src: _unref$5(check),
            alt: "valider",
            onClick: _cache[4] || (_cache[4] = $event => {closeEditMode(); _unref$5(taskStore).editTasksListTitle($event, __props.taskId, newTitle.value);})
          }, null, 8, _hoisted_9$1),
          _createElementVNode$7("img", {
            class: "icon-edit",
            src: _unref$5(cross),
            alt: "annuler",
            onClick: endUpdatemode
          }, null, 8, _hoisted_10)
        ]))
  ]))
}
}

};
const TaskTitle = /*#__PURE__*/_export_sfc(_sfc_main$6, [['__scopeId',"data-v-873cc00f"]]);

const {createElementVNode:_createElementVNode$6,createVNode:_createVNode$3,unref:_unref$4,openBlock:_openBlock$6,createElementBlock:_createElementBlock$6,createCommentVNode:_createCommentVNode$5,createBlock:_createBlock$2,renderList:_renderList$2,Fragment:_Fragment$2,withModifiers:_withModifiers$2} = await importShared('vue');


const _hoisted_1$5 = { class: "task-sidebar" };
const _hoisted_2$5 = ["src"];
const {ref: ref$5,computed: computed$2,onMounted: onMounted$3,onUnmounted: onUnmounted$1} = await importShared('vue');

const _sfc_main$5 = {
  __name: 'Sidebar',
  setup(__props) {

const taskStore = useTaskStore(); // Utilisation du store pour accéder aux données et fonctions

// -------------------------GESTION DU THÈME (SOMBRE/CLAIR)-------------------------
const isDark = ref$5(false); // Variable réactive pour stocker le thème (false = clair, true = sombre)

onMounted$3(() => { // Exécuté quand le composant est monté
    // Observe le thème système
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)'); 
    // Initialise isDark selon le thème actuel
    isDark.value = mediaQuery.matches; 
    // Fonction appelée quand le thème change
    const handler = (e) => { 
      isDark.value = e.matches; // Met à jour la valeur en fonction du nouveau thème
    };
    // Écoute les changements du thème système
    mediaQuery.addEventListener('change', handler); 

    taskStore.initializeTasksList();

  onUnmounted$1(() => { // Exécuté quand le composant est détruit
    mediaQuery.removeEventListener('change', handler); // Supprime l'écouteur pour éviter les fuites mémoire
  });

});

//--------------------------GESTION DE LA CRÉATION DE TASK-------------------------

ref$5(false); // Variable réactive pour contrôler l'affichage du formulaire 
taskStore.tasksLists; // Variable réactive pour stocker les titres des task existantes


return (_ctx, _cache) => {
  return (_openBlock$6(), _createElementBlock$6("nav", _hoisted_1$5, [
    _cache[2] || (_cache[2] = _createElementVNode$6("h2", null, " Mes Tâches ", -1)),
    _createVNode$3(StarBar),
    (_unref$4(taskStore).creatingTasksList === false)
      ? (_openBlock$6(), _createElementBlock$6("button", {
          key: 0,
          class: "add-task-button super-action-button",
          onClick: _cache[0] || (_cache[0] = $event => (_unref$4(taskStore).creatingTasksList = true))
        }, [
          _createElementVNode$6("img", {
            class: "icon-plus",
            src: isDark.value ? _unref$4(plusWhite) : _unref$4(plusBlack),
            alt: "ajouter une task"
          }, null, 8, _hoisted_2$5),
          _cache[1] || (_cache[1] = _createElementVNode$6("p", { class: "button-text" }, "Nouveau Suivi", -1))
        ]))
      : (_openBlock$6(), _createBlock$2(_sfc_main$7, { key: 1 })),
    (_openBlock$6(true), _createElementBlock$6(_Fragment$2, null, _renderList$2(_unref$4(taskStore).tasksLists, (item, index) => {
      return (_openBlock$6(), _createBlock$2(TaskTitle, {
        key: item._id,
        taskId: item._id,
        title: item.title,
        type: item.type,
        onClick: _withModifiers$2($event => (_unref$4(taskStore).selectTasksList(item._id)), ["self"])
      }, null, 8, ["taskId", "title", "type", "onClick"]))
    }), 128))
  ]))
}
}

};
const Sidebar = /*#__PURE__*/_export_sfc(_sfc_main$5, [['__scopeId',"data-v-b7007d43"]]);

const arrowLeft = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(137,%20108,%20221)'%20d='M73.4%20297.4C60.9%20309.9%2060.9%20330.2%2073.4%20342.7L233.4%20502.7C245.9%20515.2%20266.2%20515.2%20278.7%20502.7C291.2%20490.2%20291.2%20469.9%20278.7%20457.4L173.3%20352L544%20352C561.7%20352%20576%20337.7%20576%20320C576%20302.3%20561.7%20288%20544%20288L173.3%20288L278.7%20182.6C291.2%20170.1%20291.2%20149.8%20278.7%20137.3C266.2%20124.8%20245.9%20124.8%20233.4%20137.3L73.4%20297.3z'/%3e%3c/svg%3e";

const {openBlock:_openBlock$5,createElementBlock:_createElementBlock$5,createCommentVNode:_createCommentVNode$4,unref:_unref$3,toDisplayString:_toDisplayString$4,createElementVNode:_createElementVNode$5,withModifiers:_withModifiers$1} = await importShared('vue');


const _hoisted_1$4 = {
  key: 0,
  class: "selected-overlay",
  "\"": ""
};
const _hoisted_2$4 = { class: "task-name" };
const _hoisted_3$4 = ["src", "alt"];
const _hoisted_4$4 = ["src"];

const {ref: ref$4,onMounted: onMounted$2,computed: computed$1} = await importShared('vue');



const _sfc_main$4 = {
  __name: 'result',
  props: {
  item: {
    type: Object,
    required: true
  }
},
  setup(__props) {

const trash = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M232.7%2069.9L224%2096L128%2096C110.3%2096%2096%20110.3%2096%20128C96%20145.7%20110.3%20160%20128%20160L512%20160C529.7%20160%20544%20145.7%20544%20128C544%20110.3%20529.7%2096%20512%2096L416%2096L407.3%2069.9C402.9%2056.8%20390.7%2048%20376.9%2048L263.1%2048C249.3%2048%20237.1%2056.8%20232.7%2069.9zM512%20208L128%20208L149.1%20531.1C150.7%20556.4%20171.7%20576%20197%20576L443%20576C468.3%20576%20489.3%20556.4%20490.9%20531.1L512%20208z'/%3e%3c/svg%3e", import.meta.url).href;


const taskStore = useTaskStore();
const props = __props;
//je chercher dans chaque catégorie du tableau la tâche qui correspond au nom de la tâche sélectionnée pour afficher son label et son image
const task = taskStore.accordingToType.flatMap(category => category.tasks).find(task => task.name === props.item.name);
const selected = ref$4(props.item.done); // Variable réactive pour suivre l'état de sélection de la tâche
const updateTaskStatus = () => {
selected.value = !selected.value;
taskStore.updateTaskStatus(props.item._id, selected.value);
console.log(props.item);
};


return (_ctx, _cache) => {
  return (_openBlock$5(), _createElementBlock$5("div", {
    class: "choices-box",
    onClick: _cache[1] || (_cache[1] = $event => (updateTaskStatus()))
  }, [
    (selected.value)
      ? (_openBlock$5(), _createElementBlock$5("div", _hoisted_1$4))
      : _createCommentVNode$4("", true),
    _createElementVNode$5("p", _hoisted_2$4, _toDisplayString$4(_unref$3(task).label), 1),
    _createElementVNode$5("img", {
      src: _unref$3(task).source,
      loading: "lazy",
      alt: _unref$3(task).label,
      class: "task-image"
    }, null, 8, _hoisted_3$4),
    _createElementVNode$5("img", {
      src: _unref$3(trash),
      alt: "Supprimer",
      class: "trash-icon",
      onClick: _cache[0] || (_cache[0] = _withModifiers$1($event => {_unref$3(taskStore).showDeleteConfirmationTask = true; _unref$3(taskStore).toDeleteId = props.item._id; _unref$3(taskStore).toDeleteName = _unref$3(task).label; _unref$3(taskStore).toDeleteImg = _unref$3(task).source;}, ["stop"]))
    }, null, 8, _hoisted_4$4)
  ]))
}
}

};
const Result = /*#__PURE__*/_export_sfc(_sfc_main$4, [['__scopeId',"data-v-696a1740"]]);

const {openBlock:_openBlock$4,createElementBlock:_createElementBlock$4,createCommentVNode:_createCommentVNode$3,createElementVNode:_createElementVNode$4,toDisplayString:_toDisplayString$3} = await importShared('vue');


const _hoisted_1$3 = {
  key: 0,
  class: "selected-overlay"
};
const _hoisted_2$3 = { class: "task-name-box" };
const _hoisted_3$3 = ["checked"];
const _hoisted_4$3 = { class: "task-name" };
const _hoisted_5$3 = ["src", "alt"];
const _hoisted_6$1 = {
  key: 1,
  class: "increment-box"
};

const {ref: ref$3,onMounted: onMounted$1} = await importShared('vue');


const _sfc_main$3 = {
  __name: 'choices',
  props: {
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  source: {
    type: URL,
    required: true
  }
},
  setup(__props) {

onMounted$1(() => {
  //je compare les tâches de la taskList sélectionnée avec le nom de la tâche pour afficher le nombre de fois que la tâche a été ajoutée
  howMany.value = taskStore.selectedTasksList?.items.filter(item => item.name === props.name).length || 0;
  if (howMany.value > 0) {
    selected.value = !selected.value;
  }
});

const taskStore = useTaskStore();

const props = __props;

const selected = ref$3(false);
const howMany = ref$3(0);
const select = () => {
  howMany.value++;
  selected.value = true;
  taskStore.addTask({ name: props.name});
};



return (_ctx, _cache) => {
  return (_openBlock$4(), _createElementBlock$4("div", {
    class: "choices-box",
    onClick: _cache[0] || (_cache[0] = $event => (select()))
  }, [
    (selected.value)
      ? (_openBlock$4(), _createElementBlock$4("div", _hoisted_1$3))
      : _createCommentVNode$3("", true),
    _createElementVNode$4("div", _hoisted_2$3, [
      _createElementVNode$4("input", {
        type: "checkbox",
        checked: selected.value
      }, null, 8, _hoisted_3$3),
      _createElementVNode$4("p", _hoisted_4$3, _toDisplayString$3(props.label), 1)
    ]),
    _createElementVNode$4("img", {
      src: props.source,
      loading: "lazy",
      alt: props.label,
      class: "task-image"
    }, null, 8, _hoisted_5$3),
    (selected.value)
      ? (_openBlock$4(), _createElementBlock$4("div", _hoisted_6$1, [
          _createElementVNode$4("div", null, _toDisplayString$3(howMany.value), 1)
        ]))
      : _createCommentVNode$3("", true)
  ]))
}
}

};
const Choices = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-f9461131"]]);

// composables/useDevice.js
const {ref: ref$2,onMounted,onUnmounted} = await importShared('vue');


function useIsMobile() {
  const isMobile = ref$2(window.innerWidth <= 768);

  const update = () => {
    isMobile.value = window.innerWidth <= 768;
  };
  // Ajouter un écouteur d'événement pour mettre à jour la valeur de isMobile lors du redimensionnement de la fenêtre
  onMounted(() => {
    window.addEventListener('resize', update);
  });
  // Nettoyer l'écouteur d'événement lorsque le composant est démonté
  onUnmounted(() => {
      window.removeEventListener('resize', update);
    });

  return { isMobile }
}
/* importer dans le composant :
 import { useIsMobile } from '../composables/useIsMobile.js'
  const { isMobile } = useIsMobile()
  */

const AngleDown = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M297.4%20438.6C309.9%20451.1%20330.2%20451.1%20342.7%20438.6L502.7%20278.6C515.2%20266.1%20515.2%20245.8%20502.7%20233.3C490.2%20220.8%20469.9%20220.8%20457.4%20233.3L320%20370.7L182.6%20233.4C170.1%20220.9%20149.8%20220.9%20137.3%20233.4C124.8%20245.9%20124.8%20266.2%20137.3%20278.7L297.3%20438.7z'/%3e%3c/svg%3e";

const {unref:_unref$2,createElementVNode:_createElementVNode$3,toDisplayString:_toDisplayString$2,normalizeClass:_normalizeClass$1,renderList:_renderList$1,Fragment:_Fragment$1,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3,createBlock:_createBlock$1,createCommentVNode:_createCommentVNode$2} = await importShared('vue');


const _hoisted_1$2 = { class: "back-arrow-box" };
const _hoisted_2$2 = ["src"];
const _hoisted_3$2 = { class: "category-name" };
const _hoisted_4$2 = ["src"];
const _hoisted_5$2 = {
  key: 0,
  class: "choices-container"
};

const {ref: ref$1} = await importShared('vue');


const _sfc_main$2 = {
  __name: 'categoryTasks',
  props: {
  item: {
    type: Object,
    required: true
  }
},
  setup(__props) {

const taskStore = useTaskStore();
const isOpen = ref$1(false);

return (_ctx, _cache) => {
  return (_openBlock$3(), _createElementBlock$3("div", null, [
    _createElementVNode$3("div", _hoisted_1$2, [
      _createElementVNode$3("img", {
        src: _unref$2(arrowLeft),
        alt: "Retour",
        class: "back-arrow",
        onClick: _cache[0] || (_cache[0] = $event => (_unref$2(taskStore).showTasksListSelection = false))
      }, null, 8, _hoisted_2$2)
    ]),
    _createElementVNode$3("div", {
      class: "category-box",
      onClick: _cache[1] || (_cache[1] = $event => (isOpen.value = !isOpen.value))
    }, [
      _createElementVNode$3("p", _hoisted_3$2, _toDisplayString$2(__props.item.category), 1),
      _createElementVNode$3("img", {
        src: _unref$2(AngleDown),
        alt: "Voir plus",
        class: _normalizeClass$1(["angle-down", { rotated: isOpen.value }])
      }, null, 10, _hoisted_4$2)
    ]),
    (isOpen.value)
      ? (_openBlock$3(), _createElementBlock$3("div", _hoisted_5$2, [
          (_openBlock$3(true), _createElementBlock$3(_Fragment$1, null, _renderList$1(__props.item.tasks, (task) => {
            return (_openBlock$3(), _createBlock$1(Choices, {
              key: task.id,
              name: task.name,
              label: task.label,
              source: task.source
            }, null, 8, ["name", "label", "source"]))
          }), 128))
        ]))
      : _createCommentVNode$2("", true)
  ]))
}
}

};
const CategoryTasks = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-a72f7362"]]);

const {unref:_unref$1,createElementVNode:_createElementVNode$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,createCommentVNode:_createCommentVNode$1,toDisplayString:_toDisplayString$1,createVNode:_createVNode$2,createTextVNode:_createTextVNode$1,renderList:_renderList,Fragment:_Fragment,createBlock:_createBlock,normalizeClass:_normalizeClass} = await importShared('vue');


const _hoisted_1$1 = {
  key: 0,
  class: "back-arrow-box"
};
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = { class: "list-results-title" };
const _hoisted_4$1 = { class: "content-list" };
const _hoisted_5$1 = { key: 0 };
const _hoisted_6 = {
  key: 1,
  class: "list-items-container"
};
const _hoisted_7 = { class: "list-items" };
const _hoisted_8 = ["src"];
const _hoisted_9 = {
  key: 0,
  class: "select-item-form"
};

const {computed,ref} = await importShared('vue');


const _sfc_main$1 = {
  __name: 'TaskResults',
  setup(__props) {

const taskStore = useTaskStore(); // Utilisation du store pour accéder aux données et fonctions
const { isMobile } = useIsMobile(); 






return (_ctx, _cache) => {
  return (_unref$1(isMobile) ? _unref$1(taskStore).showTasksListResults  : _unref$1(isMobile) === false)
    ? (_openBlock$2(), _createElementBlock$2("div", {
        key: 0,
        class: _normalizeClass(_unref$1(isMobile) ? 'list-results-mobile' : 'list-results')
      }, [
        (_unref$1(isMobile))
          ? (_openBlock$2(), _createElementBlock$2("div", _hoisted_1$1, [
              _createElementVNode$2("img", {
                src: _unref$1(arrowLeft),
                alt: "Retour",
                class: "back-arrow",
                onClick: _cache[0] || (_cache[0] = $event => (_unref$1(taskStore).showTasksListResults = false))
              }, null, 8, _hoisted_2$1)
            ]))
          : _createCommentVNode$1("", true),
        _createElementVNode$2("h3", _hoisted_3$1, _toDisplayString$1(_unref$1(taskStore).selectedTasksList?.title || 'Aucune liste sélectionnée'), 1),
        _createVNode$2(StarBar, { class: "mobile-star-bar" }),
        _createElementVNode$2("div", _hoisted_4$1, [
          (!_unref$1(taskStore).selectedTasksList)
            ? (_openBlock$2(), _createElementBlock$2("p", _hoisted_5$1, _cache[2] || (_cache[2] = [
                _createTextVNode$1("Choississez une liste dans la barre latérale pour afficher ses résultats. "),
                _createElementVNode$2("br", null, null, -1),
                _createTextVNode$1("Ou créez une nouvelle liste pour commencer à ajouter des éléments. "),
                _createElementVNode$2("br", null, null, -1),
                _createElementVNode$2("span", { class: "yellow-heart" }, "💛", -1)
              ])))
            : (_openBlock$2(), _createElementBlock$2("div", _hoisted_6, [
                _createElementVNode$2("div", _hoisted_7, [
                  (_openBlock$2(true), _createElementBlock$2(_Fragment, null, _renderList(_unref$1(taskStore).selectedTasksList.items, (item, index) => {
                    return (_openBlock$2(), _createBlock(Result, {
                      key: index,
                      item: item
                    }, null, 8, ["item"]))
                  }), 128))
                ]),
                _createElementVNode$2("button", {
                  onClick: _cache[1] || (_cache[1] = $event => (_unref$1(taskStore).showTasksListSelection = true))
                }, [
                  _createElementVNode$2("img", {
                    src: _unref$1(plusWhite),
                    alt: "Ajouter une tâche",
                    class: "add-entry"
                  }, null, 8, _hoisted_8)
                ]),
                (_unref$1(taskStore).showTasksListSelection)
                  ? (_openBlock$2(), _createElementBlock$2("div", _hoisted_9, [
                      (_openBlock$2(true), _createElementBlock$2(_Fragment, null, _renderList(_unref$1(taskStore).accordingToType, (item, index) => {
                        return (_openBlock$2(), _createBlock(CategoryTasks, {
                          key: index,
                          item: item,
                          class: "select-item-box"
                        }, null, 8, ["item"]))
                      }), 128))
                    ]))
                  : _createCommentVNode$1("", true)
              ]))
        ])
      ], 2))
    : _createCommentVNode$1("", true)
}
}

};
const TaskResults = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-19b74df0"]]);

const {createVNode:_createVNode$1,unref:_unref,createElementVNode:_createElementVNode$1,toDisplayString:_toDisplayString,createTextVNode:_createTextVNode,withModifiers:_withModifiers,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1,createCommentVNode:_createCommentVNode} = await importShared('vue');


const _hoisted_1 = { class: "task-view" };
const _hoisted_2 = { class: "to-delete-name" };
const _hoisted_3 = { class: "buttons" };
const _hoisted_4 = { class: "to-delete-name" };
const _hoisted_5 = { class: "buttons" };

const _sfc_main = {
  __name: 'TaskView',
  setup(__props) {

const taskStore = useTaskStore();


return (_ctx, _cache) => {
  return (_openBlock$1(), _createElementBlock$1("div", _hoisted_1, [
    _createVNode$1(Sidebar),
    _createVNode$1(TaskResults),
    (_unref(taskStore).showDeleteConfirmationTasksList || _unref(taskStore).showDeleteConfirmationTask)
      ? (_openBlock$1(), _createElementBlock$1("div", {
          key: 0,
          class: "background-deletion",
          onClick: _cache[6] || (_cache[6] = $event => (_ctx.goback($event)))
        }, [
          (_unref(taskStore).showDeleteConfirmationTasksList)
            ? (_openBlock$1(), _createElementBlock$1("div", {
                key: 0,
                class: "pop-up-delete",
                onClick: _cache[2] || (_cache[2] = _withModifiers(() => {}, ["stop"]))
              }, [
                _createElementVNode$1("p", null, [
                  _cache[7] || (_cache[7] = _createTextVNode("Supprimer ")),
                  _cache[8] || (_cache[8] = _createElementVNode$1("br", null, null, -1)),
                  _cache[9] || (_cache[9] = _createTextVNode()),
                  _createElementVNode$1("span", _hoisted_2, _toDisplayString(_unref(taskStore).toDeleteName), 1),
                  _cache[10] || (_cache[10] = _createTextVNode(" ?"))
                ]),
                _createElementVNode$1("div", _hoisted_3, [
                  _createElementVNode$1("button", {
                    class: "danger-button",
                    onClick: _cache[0] || (_cache[0] = $event => ( _unref(taskStore).deleteTasksList(_unref(taskStore).toDeleteId)))
                  }, "Oui"),
                  _createElementVNode$1("button", {
                    class: "cancel",
                    onClick: _cache[1] || (_cache[1] = $event => (_unref(taskStore).showDeleteConfirmationTasksList = false))
                  }, "Non")
                ])
              ]))
            : _createCommentVNode("", true),
          (_unref(taskStore).showDeleteConfirmationTask)
            ? (_openBlock$1(), _createElementBlock$1("div", {
                key: 1,
                class: "pop-up-delete",
                onClick: _cache[5] || (_cache[5] = _withModifiers(() => {}, ["stop"]))
              }, [
                _createElementVNode$1("p", null, [
                  _cache[11] || (_cache[11] = _createTextVNode("Supprimer ")),
                  _cache[12] || (_cache[12] = _createElementVNode$1("br", null, null, -1)),
                  _cache[13] || (_cache[13] = _createTextVNode()),
                  _createElementVNode$1("span", _hoisted_4, _toDisplayString(_unref(taskStore).toDeleteName), 1),
                  _cache[14] || (_cache[14] = _createTextVNode(" ?"))
                ]),
                _createElementVNode$1("div", _hoisted_5, [
                  _createElementVNode$1("button", {
                    class: "danger-button",
                    onClick: _cache[3] || (_cache[3] = $event => ( _unref(taskStore).deleteTask(_unref(taskStore).toDeleteId)))
                  }, "Oui"),
                  _createElementVNode$1("button", {
                    class: "cancel",
                    onClick: _cache[4] || (_cache[4] = $event => (_unref(taskStore).showDeleteConfirmationTask = false))
                  }, "Non")
                ])
              ]))
            : _createCommentVNode("", true)
        ]))
      : _createCommentVNode("", true)
  ]))
}
}

};
const TaskView = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-9ebd36fa"]]);

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
