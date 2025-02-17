"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import * as React from "react";

function Page(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="relative pt-[79px] flex flex-row pl-2 pr-2 space-between pt-[20px] pb-[5px]">
        <div className="mx-auto flex flex-row container">
          <div className="w-full p-6 bg-[#301F49] text-[#DFDFDF] border border-[#200F39] rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-[#DFDFDF] dark:text-white">
              ПОЛИТИКА ОТВЕТСТВЕННОЙ ИГРЫ
            </h5>
            <p className="mb-3 font-normal text-[#DFDFDF] dark:text-gray-400">
              Игра в онлайн-казино – это форма досуга, которая не должна
              восприниматься как способ заработка. Мы поддерживаем
              пользователей, которые осознают это и относятся к игре как к хобби
              и развлечению.
            </p>
            <p className="mb-3 font-normal text-[#DFDFDF] dark:text-gray-400">
              Во избежание негативных последствий, которые могут быть вызваны
              чрезмерным увлечением игрой, Компанией установлена Политика
              ответственной игры (далее – «Политика»). Мы информируем
              пользователей о потенциальных рисках, законодательных
              ограничениях, необходимости защиты несовершеннолетних и
              возможности самоисключения.
            </p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Информирование о потенциальных рисках
            </p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Публикуя информацию о Политике, мы уведомляем пользователей о
              возможных финансовых рисках и об опасности формирования игровой
              зависимости, а также предлагаем способы предупреждения негативных
              последствий.
            </p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Законодательные ограничения
            </p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              В некоторых странах азартные игры находятся под запретом. Не имея
              возможности контролировать и ограничивать действия пользователей,
              находящихся под юрисдикцией таких государств, мы призываем
              пользователей ответственно относиться к действующим на территории
              их пребывания и/или проживания местным, национальным,
              международным законам и правилам.
            </p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Пожалуйста, убедитесь, что, играя в онлайн-казино, Вы не нарушаете
              законы и правила, действующие в Вашей юрисдикции. Ни при каких
              обстоятельствах Компания не дает юридических консультаций, а также
              не несет ответственности или обязательств перед Вами за выполнение
              или невыполнение Вами требований, применимых для Вас нормативных
              актов.
            </p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Защита несовершеннолетних
            </p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              В соответствии с положениями Политики лица, не достигшие возраста
              совершеннолетия, не могут пользоваться услугами онлайн-казино. В
              любой момент Компания вправе запросить документальное
              подтверждение возраста зарегистрированного пользователя, а также
              приостановить действие его игрового аккаунта до предоставления им
              необходимых сведений. В случае выявления нарушения аккаунт
              пользователя подлежит блокировке с аннулированием всех выигрышей.
            </p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Для предотвращения вовлечения несовершеннолетних в азартные игры
              мы используем следующие методы:
            </p>
            <ul className="list-disc list-inside ml-2">
              <li>
                при регистрации пользователя мы уведомляем его о недопустимости
                посещения сайта несовершеннолетними лицами;
              </li>
              <li>
                при создании аккаунта мы просим пользователя подтвердить
                достижение им совершеннолетия (полной дееспособности) и указать
                дату рождения;
              </li>
              <li>
                все рекламные и маркетинговые промоакции в онлайн-казино
                действуют исключительно в отношении совершеннолетних
                пользователей. Любое вовлечение лиц младше 18 лет противоречит
                принципам Компании и положениям Политики.
              </li>
            </ul>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Общедоступность сайтов в сети Интернет не позволяет полностью
              исключить возможность посещения онлайн-казино несовершеннолетними
              лицами. Мы призываем всех пользователей ответственно относиться к
              вопросам безопасности лиц, не достигших совершеннолетия (полной
              дееспособности), и просим следовать обязательным для этого
              правилам:
            </p>
            <ul className="list-disc list-inside ml-2">
              <li>
                контролируйте доступ несовершеннолетних к устройствам, с которых
                Вы посещаете онлайн-казино;
              </li>
              <li>
                используйте программное обеспечение, позволяющее осуществлять
                функции родительского контроля и ограничивать доступ
                несовершеннолетних лиц к нежелательному контенту (CyberPatrol,
                Contentwatch, Net Nanny, GamBlock®, CYBERsitter и другие);
              </li>
              <li>
                сообщайте нам обо всех известных Вам фактах регистрации
                несовершеннолетних лиц на наших проектах.
              </li>
            </ul>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Самоисключение
            </p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Если Вы считаете, что игра в онлайн-казино перестала быть
              развлечением и негативно влияет на Вашу жизнь, обратитесь в службу
              поддержки для установки временных или постоянных ограничений на
              Ваш аккаунт.
            </p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Пожалуйста, обдумайте следующие вопросы:
            </p>
            <ul className="list-disc list-inside ml-2">
              <li>
                Случалось ли Вам тратить свое рабочее или учебное время на игры
                в казино (онлайн-казино)?
              </li>
              <li>Пренебрегали ли Вы благополучием своей семьи ради игр?</li>
              <li>
                Приходилось ли Вам продавать или закладывать имущество, а также
                занимать деньги, чтобы оплатить участие в игре?
              </li>
              <li>Случалось ли Вам проигрывать все свои деньги?</li>
              <li>Вы когда-нибудь задумывались о самоубийстве из-за игры?</li>
            </ul>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Если Вы ответили утвердительно хотя бы на один из представленных
              вопросов, мы настоятельно рекомендуем Вам обратиться в
              специализированные сообщества и организации: GamCare, Gambling
              Therapy, Gordon Moody Association, Gamblers Anonymous и др.
            </p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              С целью организации комфортной и безопасной игры мы рекомендуем
              придерживаться следующих правил:
            </p>
            <ul className="list-disc list-inside ml-2">
              <li>не пытаться сделать игру источником дохода;</li>
              <li>
                тратить на игру только ту сумму, которую можете позволить себе
                потерять;
              </li>
              <li>не пытаться отыграться в случае проигрыша;</li>
              <li>не пытаться возместить потери, повышая ставки;</li>
              <li>
                не играть в состоянии опьянения, депрессии или сильного стресса;
              </li>
              <li>
                чередовать игру в казино (онлайн-казино) с другими занятиями и
                развлечениями.
              </li>
            </ul>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Важно помнить и осознавать, что любые азартные игры связаны с
              риском и требуют ответственного подхода. Соблюдая изложенные выше
              правила, Вы сможете получить максимум удовольствия от игры без
              ущерба для Вас и Ваших близких.
            </p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Политика может быть пересмотрена Компанией. Пользователи будут
              уведомлены об этом на сайте онлайн-казино.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
