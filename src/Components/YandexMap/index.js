import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { YMaps, Map, RoutePanel, Button } from 'react-yandex-maps';

import { getDistance } from 'Actions/orders/actions';

const YandexMap = props => {
  const [inst, setInst] = useState(null);
  const [distance, setDistance] = useState(null);
  const dispatch = useDispatch('');

  const getDistanceFromPromise = promise => {
    return promise
      .then(function(multiRoute) {
        multiRoute.model.events.add('requestsuccess', function() {
          const activeRoute = multiRoute.getActiveRoute();
          if (activeRoute) {
            const responseStr = activeRoute.properties.get('distance').text.replace(/\s/g, '');
            setDistance(getDistance(parseInt(responseStr, 10)));
          }
        });
      })
      .catch(e => console.log('Ошибка получения расстояния', e));
  };

  useEffect(() => {
    if (inst) {
      inst.routePanel.options.set({
        types: { auto: true }
      });
      const multiRoutePromise = inst.routePanel.getRouteAsync();
      getDistanceFromPromise(multiRoutePromise);
    }
  }, [inst]);

  useEffect(() => {
    if (distance) dispatch(distance);
  }, [distance]);

  return (
    <YMaps
      query={{
        apikey: '66302fc7-75ba-4c4d-b62b-91812d024dd7'
      }}
    >
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 9, controls: [] }}
        width={550}
        height={300}
      >
        {distance && (
          <Button
            options={{ maxWidth: 128 }}
            data={{ content: 'Сохранить' }}
            defaultState={{ selected: true }}
            onClick={props.setDistance}
          />
        )}
        <RoutePanel
          options={{
            showHeader: true,
            title: 'Расчет расстояния',
            autofocus: false,
            maxWidth: '294px',
            types: { auto: true }
          }}
          instanceRef={e => setInst(e)}
        />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
