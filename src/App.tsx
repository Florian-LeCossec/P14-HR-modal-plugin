import React, { useState } from 'react';
import { Modal } from './lib/Modal';
import './CustomModal.css';

export const App: React.FC = () => {
  const [modals, setModals] = useState({
    basic: false,
    withHeader: false,
    withFooter: false,
    persistent: false,
    blur: false,
    customColors: false,
    customWidth: false,
    noCloseButton: false,
    // Nouvelles modals avec styles personnalisés
    customStyled: false,
    darkTheme: false,
    colorful: false,
    glassEffect: false,
    rounded: false,
    animatedOverlay: false,
    patternOverlay: false,
  });

  const openModal = (modalName: keyof typeof modals) => {
    setModals((prev) => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName: keyof typeof modals) => {
    setModals((prev) => ({ ...prev, [modalName]: false }));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Test Modal Plugin</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Modal Basique</h3>
          <p>Une modal simple avec titre et contenu</p>
          <button
            onClick={() => openModal('basic')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Modal avec Header Personnalisé</h3>
          <p>Modal avec un header personnalisé au lieu d'un titre</p>
          <button
            onClick={() => openModal('withHeader')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Modal avec Footer</h3>
          <p>Modal avec un footer contenant des boutons d'action</p>
          <button
            onClick={() => openModal('withFooter')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ffc107',
              color: 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Modal Persistante</h3>
          <p>Modal qui ne se ferme pas en cliquant sur l'overlay ou en appuyant sur Escape</p>
          <button
            onClick={() => openModal('persistent')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Modal avec Blur</h3>
          <p>Modal avec effet de flou sur l'arrière-plan</p>
          <button
            onClick={() => openModal('blur')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6f42c1',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Modal avec Couleurs Personnalisées</h3>
          <p>Modal avec fond noir et texte blanc</p>
          <button
            onClick={() => openModal('customColors')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#343a40',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Modal Large</h3>
          <p>Modal avec une largeur personnalisée</p>
          <button
            onClick={() => openModal('customWidth')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Modal sans Bouton de Fermeture</h3>
          <p>Modal sans le bouton X de fermeture</p>
          <button
            onClick={() => openModal('noCloseButton')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#fd7e14',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        {/* Nouvelles modals avec styles personnalisés */}
        <div
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
          }}
        >
          <h3>Modal Style Moderne</h3>
          <p>Modal avec className et overlayClassName personnalisés</p>
          <button
            onClick={() => openModal('customStyled')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6f42c1',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
          }}
        >
          <h3>Modal Thème Sombre</h3>
          <p>Modal avec style sombre personnalisé</p>
          <button
            onClick={() => openModal('darkTheme')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#2c3e50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
          }}
        >
          <h3>Modal Colorée Animée</h3>
          <p>Modal avec gradient animé et overlay personnalisé</p>
          <button
            onClick={() => openModal('colorful')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
          }}
        >
          <h3>Modal Effet Verre</h3>
          <p>Modal avec effet de verre et overlay flou</p>
          <button
            onClick={() => openModal('glassEffect')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
          }}
        >
          <h3>Modal Arrondie</h3>
          <p>Modal avec bordures très arrondies</p>
          <button
            onClick={() => openModal('rounded')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
          }}
        >
          <h3>Modal Overlay Animé</h3>
          <p>Modal avec overlay animé et gradient</p>
          <button
            onClick={() => openModal('animatedOverlay')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
          }}
        >
          <h3>Modal Overlay Motif</h3>
          <p>Modal avec overlay à motif de points</p>
          <button
            onClick={() => openModal('patternOverlay')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#fd7e14',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ouvrir Modal
          </button>
        </div>
      </div>

      {/* Modal Basique */}
      <Modal
        open={modals.basic}
        onClose={() => closeModal('basic')}
        title="Modal Basique"
        body={
          <div>
            <p>Ceci est une modal basique avec un titre et du contenu.</p>
            <p>
              Vous pouvez la fermer en cliquant sur le bouton X, en cliquant sur l'overlay, ou en
              appuyant sur la touche Escape.
            </p>
          </div>
        }
      />

      {/* Modal avec Header Personnalisé */}
      <Modal
        open={modals.withHeader}
        onClose={() => closeModal('withHeader')}
        header={
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>🚀</span>
            <span>Header Personnalisé</span>
          </div>
        }
        body={
          <div>
            <p>Cette modal utilise un header personnalisé au lieu d'un simple titre.</p>
            <p>Vous pouvez y mettre n'importe quel contenu React.</p>
          </div>
        }
      />

      {/* Modal avec Footer */}
      <Modal
        open={modals.withFooter}
        onClose={() => closeModal('withFooter')}
        title="Modal avec Footer"
        body={
          <div>
            <p>Cette modal a un footer avec des boutons d'action.</p>
            <p>Le footer peut contenir n'importe quel contenu React.</p>
          </div>
        }
        footer={
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <button
              onClick={() => closeModal('withFooter')}
              style={{
                padding: '8px 16px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Annuler
            </button>
            <button
              onClick={() => {
                alert('Action confirmée !');
                closeModal('withFooter');
              }}
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Confirmer
            </button>
          </div>
        }
      />

      {/* Modal Persistante */}
      <Modal
        open={modals.persistent}
        onClose={() => closeModal('persistent')}
        persistent={true}
        title="Modal Persistante"
        body={
          <div>
            <p>Cette modal est persistante.</p>
            <p>Elle ne se ferme pas en cliquant sur l'overlay ou en appuyant sur Escape.</p>
            <p>Vous devez utiliser le bouton de fermeture ou un bouton dans le contenu.</p>
            <button
              onClick={() => closeModal('persistent')}
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              Fermer la Modal
            </button>
          </div>
        }
      />

      {/* Modal avec Blur */}
      <Modal
        open={modals.blur}
        onClose={() => closeModal('blur')}
        blur={true}
        title="Modal avec Blur"
        body={
          <div>
            <p>Cette modal a un effet de flou sur l'arrière-plan.</p>
            <p>Regardez derrière la modal pour voir l'effet.</p>
          </div>
        }
      />

      {/* Modal avec Couleurs Personnalisées */}
      <Modal
        open={modals.customColors}
        onClose={() => closeModal('customColors')}
        backgroundColor="#000"
        textColor="#fff"
        title="Modal Sombre"
        body={
          <div>
            <p>Cette modal a un fond noir et du texte blanc.</p>
            <p>Vous pouvez personnaliser les couleurs selon vos besoins.</p>
          </div>
        }
      />

      {/* Modal Large */}
      <Modal
        open={modals.customWidth}
        onClose={() => closeModal('customWidth')}
        width={800}
        title="Modal Large"
        body={
          <div>
            <p>Cette modal a une largeur personnalisée de 800px.</p>
            <p>Vous pouvez spécifier la largeur en pixels ou en pourcentage.</p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h4>Colonne 1</h4>
                <p>Contenu de la première colonne</p>
              </div>
              <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h4>Colonne 2</h4>
                <p>Contenu de la deuxième colonne</p>
              </div>
            </div>
          </div>
        }
      />

      {/* Modal sans Bouton de Fermeture */}
      <Modal
        open={modals.noCloseButton}
        onClose={() => closeModal('noCloseButton')}
        closeButton={false}
        title="Modal sans Bouton de Fermeture"
        body={
          <div>
            <p>Cette modal n'a pas de bouton X de fermeture.</p>
            <p>Vous pouvez la fermer en cliquant sur l'overlay ou en appuyant sur Escape.</p>
            <button
              onClick={() => closeModal('noCloseButton')}
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              Fermer
            </button>
          </div>
        }
      />

      {/* Nouvelles modals avec styles personnalisés */}

      {/* Modal Style Moderne */}
      <Modal
        open={modals.customStyled}
        onClose={() => closeModal('customStyled')}
        className="custom-modal-content"
        overlayClassName="custom-overlay"
        title="Modal Style Moderne"
        body={
          <div>
            <p>Cette modal utilise des classes CSS personnalisées :</p>
            <ul>
              <li>
                <code>className="custom-modal-content"</code> pour le contenu
              </li>
              <li>
                <code>overlayClassName="custom-overlay"</code> pour l'overlay
              </li>
            </ul>
            <p>L'overlay a un gradient animé et la modal a un design moderne avec ombre portée.</p>
          </div>
        }
      />

      {/* Modal Thème Sombre */}
      <Modal
        open={modals.darkTheme}
        onClose={() => closeModal('darkTheme')}
        className="dark-modal-content"
        title="Modal Thème Sombre"
        body={
          <div>
            <p>Cette modal utilise le thème sombre personnalisé.</p>
            <p>Elle a un fond dégradé sombre et du texte clair.</p>
            <div
              style={{
                padding: '15px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                marginTop: '15px',
              }}
            >
              <p>Zone de contenu avec fond semi-transparent</p>
            </div>
          </div>
        }
      />

      {/* Modal Colorée Animée */}
      <Modal
        open={modals.colorful}
        onClose={() => closeModal('colorful')}
        className="colorful-modal-content"
        overlayClassName="blur-overlay"
        title="Modal Colorée Animée"
        body={
          <div>
            <p>Cette modal a un gradient animé avec plusieurs couleurs !</p>
            <p>L'overlay utilise un effet de flou personnalisé.</p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <span style={{ fontSize: '48px' }}>🌈</span>
            </div>
          </div>
        }
      />

      {/* Modal Effet Verre */}
      <Modal
        open={modals.glassEffect}
        onClose={() => closeModal('glassEffect')}
        className="glass-modal-content"
        overlayClassName="blur-overlay"
        title="Modal Effet Verre"
        body={
          <div>
            <p>Cette modal utilise l'effet de verre (glassmorphism).</p>
            <p>Elle a un fond semi-transparent avec un effet de flou.</p>
            <div
              style={{
                padding: '15px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '8px',
                marginTop: '15px',
              }}
            >
              <p>Zone avec effet de verre supplémentaire</p>
            </div>
          </div>
        }
      />

      {/* Modal Arrondie */}
      <Modal
        open={modals.rounded}
        onClose={() => closeModal('rounded')}
        className="rounded-modal-content"
        title="Modal Très Arrondie"
        body={
          <div>
            <p>Cette modal a des bordures très arrondies (30px).</p>
            <p>Elle utilise une ombre portée personnalisée.</p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <span style={{ fontSize: '36px' }}>🔵</span>
            </div>
          </div>
        }
      />

      {/* Modal Overlay Animé */}
      <Modal
        open={modals.animatedOverlay}
        onClose={() => closeModal('animatedOverlay')}
        overlayClassName="custom-overlay"
        title="Modal avec Overlay Animé"
        body={
          <div>
            <p>Cette modal a un overlay avec un gradient animé qui pulse.</p>
            <p>L'animation change l'opacité du gradient rouge et bleu.</p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <span style={{ fontSize: '36px' }}>✨</span>
            </div>
          </div>
        }
      />

      {/* Modal Overlay Motif */}
      <Modal
        open={modals.patternOverlay}
        onClose={() => closeModal('patternOverlay')}
        overlayClassName="pattern-overlay"
        title="Modal avec Overlay à Motif"
        body={
          <div>
            <p>Cette modal a un overlay avec un motif de points.</p>
            <p>Le motif est créé avec des gradients radiaux.</p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <span style={{ fontSize: '36px' }}>🔘</span>
            </div>
          </div>
        }
      />
    </div>
  );
};
