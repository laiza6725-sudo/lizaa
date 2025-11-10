* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    -webkit-tap-highlight-color: transparent;
}

body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #1c1c1e;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    padding-top: 10px;
    min-height: 100vh;
}

.app-container {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.header {
    text-align: center;
    margin-bottom: 30px;
}

.card {
    background: white;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.input-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #48484a;
}

input, select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #c6c6c8;
    border-radius: 10px;
    font-size: 16px;
    -webkit-appearance: none;
    appearance: none;
    min-height: 44px;
    background-color: white;
}

textarea {
    min-height: 120px;
    resize: vertical;
}

button {
    background: #007aff;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 10px;
    font-size: 16px;
    width: 100%;
    cursor: pointer;
    min-height: 44px;
    transition: background-color 0.2s;
    font-weight: 600;
}

button:active {
    background-color: #0056cc;
    transform: scale(0.98);
}

.ingredient-row {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    align-items: center;
}

.ingredient-name {
    flex: 2;
}

.ingredient-amount {
    flex: 1;
}

.ingredient-unit {
    flex: 1;
    min-width: 100px;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007aff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 12px;
    padding-right: 35px;
}

.ingredient-price {
    flex: 1;
    min-width: 100px;
}

.stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
}

.stat-card {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 12px;
    text-align: center;
}

.stat-value {
    font-size: 24px;
    font-weight: bold;
    color: #007aff;
}

/* Стили для плиток рецептов */
.recipes-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-top: 15px;
}

.recipe-tile {
    border-radius: 16px;
    padding: 15px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;
    height: 160px;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: rgba(0,0,0,0.1);
}

.recipe-tile:active {
    transform: scale(0.98);
}

.recipe-tile-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
    z-index: 0;
}

.recipe-tile-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}

.recipe-tile-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #1c1c1e;
    line-height: 1.2;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.recipe-tile-category {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 10px;
    margin-bottom: 8px;
    background: rgba(255,255,255,0.7);
    color: #1c1c1e;
    align-self: flex-start;
}

.recipe-tile-info {
    font-size: 12px;
    color: #48484a;
    margin-top: auto;
}

.recipe-tile-cost {
    font-weight: bold;
    color: #34c759;
    margin-top: 5px;
}

.recipe-tile-rating {
    margin-top: 5px;
    font-size: 14px;
}

.stars {
    color: #ffcc00;
}

.delete-tile-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(255,255,255,0.8);
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
    font-size: 14px;
    color: #ff3b30;
}

.tab-container {
    display: flex;
    margin-bottom: 20px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    position: sticky;
    top: 10px;
    z-index: 100;
}

.tab {
    flex: 1;
    text-align: center;
    padding: 14px 8px;
    background: white;
    border: none;
    font-size: 14px;
    font-weight: 500;
    color: #8e8e93;
    transition: all 0.2s ease;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    min-height: 44px;
    -webkit-tap-highlight-color: rgba(0,0,0,0.1);
}

.tab.active {
    background: white;
    color: #007aff;
    border-bottom: 3px solid #007aff;
}

.tab:active {
    background: #f8f9fa;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.image-upload {
    text-align: center;
    border: 2px dashed #c6c6c8;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 15px;
    cursor: pointer;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0.1);
    transition: background-color 0.2s;
}

.image-upload:active {
    background-color: #f8f9fa;
}

.image-preview {
    max-width: 100%;
    max-height: 200px;
    border-radius: 12px;
    margin-top: 10px;
    display: none;
}

.photo-btn {
    background: #5856d6;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.photo-btn:active {
    background: #4745c4;
}

.camera-icon, .gallery-icon {
    font-size: 20px;
}

.photo-options {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.photo-options button {
    flex: 1;
}

.analysis-result {
    margin-top: 20px;
    padding: 15px;
    border-radius: 12px;
    background: #f8f9fa;
}

.rating {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
}

.rating.excellent {
    color: #34c759;
}

.rating.good {
    color: #ffcc00;
}

.rating.poor {
    color: #ff3b30;
}

.macro-bar {
    height: 8px;
    border-radius: 4px;
    margin: 5px 0;
    background: #e5e5ea;
    overflow: hidden;
}

.macro-fill {
    height: 100%;
    border-radius: 4px;
}

.protein-fill {
    background: #007aff;
}

.fat-fill {
    background: #ff9500;
}

.carbs-fill {
    background: #34c759;
}

.macro-labels {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 5px;
}

.recommendations {
    margin-top: 15px;
    padding: 10px;
    background: white;
    border-radius: 8px;
    border-left: 4px solid #007aff;
}

.recommendations h4 {
    margin-bottom: 5px;
    color: #48484a;
}

.health-score {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 15px 0;
}

.score-circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    color: white;
}

.score-excellent {
    background: #34c759;
}

.score-good {
    background: #ffcc00;
}

.score-poor {
    background: #ff3b30;
}

/* Модальное окно для просмотра рецепта */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 1000;
    overflow-y: auto;
}

.modal-content {
    background-color: white;
    margin: 20px auto;
    padding: 20px;
    border-radius: 16px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    position: relative;
}

.close-modal {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 24px;
    font-weight: bold;
    color: #8e8e93;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #f2f2f7;
    -webkit-tap-highlight-color: rgba(0,0,0,0.1);
}

.close-modal:active {
    background: #e5e5ea;
}

.modal-recipe-image {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 15px;
}

.modal-section {
    margin-bottom: 20px;
}

.modal-section h3 {
    margin-bottom: 10px;
    color: #1c1c1e;
    border-bottom: 1px solid #e5e5ea;
    padding-bottom: 5px;
}

.instructions-text {
    white-space: pre-line;
    line-height: 1.5;
}

.ingredients-list {
    list-style-type: none;
    padding-left: 0;
}

.ingredients-list li {
    padding: 8px 0;
    border-bottom: 1px solid #f2f2f7;
}

.ingredients-list li:last-child {
    border-bottom: none;
}

.nutrition-facts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 10px;
}

.nutrition-item {
    background: #f8f9fa;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
}

.nutrition-value {
    font-weight: bold;
    font-size: 18px;
    color: #007aff;
}

.nutrition-label {
    font-size: 12px;
    color: #8e8e93;
}

.empty-state {
    text-align: center;
    padding: 40px 20px;
    color: #8e8e93;
}

.empty-state p {
    margin-top: 10px;
}

.cost-summary {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 12px;
    margin-top: 15px;
}

.cost-summary h4 {
    margin-bottom: 10px;
    color: #48484a;
}

.cost-breakdown {
    margin-top: 10px;
}

.cost-item {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #e5e5ea;
}

.cost-item:last-child {
    border-bottom: none;
}

.total-cost {
    font-weight: bold;
    color: #34c759;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 2px solid #e5e5ea;
}

/* Специальные стили для мобильных устройств */
@media (max-width: 500px) {
    body {
        padding: 15px;
    }
    
    .app-container {
        padding: 15px;
    }
    
    .tab {
        padding: 16px 8px;
        font-size: 15px;
    }
    
    .recipe-tile {
        height: 170px;
    }
    
    .photo-options {
        flex-direction: column;
    }
    
    .ingredient-row {
        flex-direction: column;
        gap: 8px;
    }
    
    .ingredient-name, .ingredient-amount, .ingredient-unit, .ingredient-price {
        width: 100%;
    }
}

/* Улучшение для выпадающих списков на iOS */
select {
    cursor: pointer;
}

/* Анимация появления контента */
.tab-content {
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}